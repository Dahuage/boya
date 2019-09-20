/**
 * Base class of attribute and element.
 * @author dahua<guzhaoer@gmail.com>
 */

import {Options} from './common'

/**
 * Base interface and class for element.
 */
enum ClassId {BOUNDING_BOX = 0};
enum Accessor { SELF = 0, CONTENT};

interface Dot{
    readonly x:number;
    readonly y:number;
};
interface Doc{};
interface FloatingCurvePositioner{};
interface SMuFLGlyphAnchor{};
interface Glyph{};
export interface BoundingBox{}
export abstract class BoundingBox implements BoundingBox{

    /**
     * The cached version of the drawingX and drawingY values.
     * These are reset by ResetCachedDrawingX/Y methods when
     * necessary.Mutable because to be updated in GetDrawingX/Y
     * const.
     */
    protected m_cachedDrawingX: number; //mutable
    protected m_cachedDrawingY: number; //mutable

    private m_contentBB_x1: number; 
    private m_contentBB_y1: number; 
    private m_contentBB_x2: number; 
    private m_contentBB_y2: number;

    private m_selfBB_x1: number;
    private m_selfBB_y1: number;
    private m_selfBB_x2: number;
    private m_selfBB_y2: number;
    /**
     * The SMuFL glyph when anchor bounding box calculation is
     * desired.Currently only one glyph is supported. Eventually,
     * we could have start / end glyph
     */
    private  m_smuflGlyph: string;
    /**
     * The font size for the smufl glyph used for calculating the
     * bounding box rectangles.
     */
    private m_smuflGlyphFontSize: number;

    constructor(){};
    public getClassId(): ClassId {return ClassId.BOUNDING_BOX};
    public is(classId: ClassId): boolean { return this.getClassId() == classId };
    // public is(classIds: Array<ClassId>): boolean {return this.getClassId() in classIds};


    /**
     * @name Get the X and Y drawing position.
     * Pure virtual methods
     */
    abstract GetDrawingX(): number;
    abstract GetDrawingY(): number;

    /**
     * @name Reset the cached values of the drawingX and Y values.
     * Pure virtual methods.
     */
    abstract ResetCachedDrawingX(): void;
    abstract ResetCachedDrawingY(): void;

    /**
     * @name Methods for updating the bounding boxes and for providing
     * information about their status.
     */
    private caculateXY(a:number, b:number, isX:boolean): Array<number>{
        let min: number = Math.min(a, b);
        let max: number = Math.max(a, b);
        let drawing: number = isX ? this.GetDrawingX() : this.GetDrawingY();
        return [min-=drawing, max-=drawing];
    }

    public UpdateContentBBoxX(x1:number, x2:number): void {
        let minX: number = Math.min(x1, x2);
        let maxX: number = Math.max(x1, x2);
    
        let drawingX: number = this.GetDrawingX();
    
        minX -= drawingX;
        maxX -= drawingX;

        if (this.m_contentBB_x1 > minX) this.m_contentBB_x1 = minX;
        if (this.m_contentBB_x2 < maxX) this.m_contentBB_x2 = maxX;    
    };

    public UpdateContentBBoxY(y1:number, y2:number): void {
        let min_y: number = Math.min(y1, y2);
        let max_y: number = Math.max(y1, y2);

        let drawingY = this.GetDrawingY();

        min_y -= drawingY;
        max_y -= drawingY;

        if (this.m_contentBB_y1 > min_y) this.m_contentBB_y1 = min_y;
        if (this.m_contentBB_y2 < max_y) this.m_contentBB_y2 = max_y;
    };

    private minMax(x1:number, x2:number):number[] {
        let r = x1 > x2 ? [x2, x1] : [x1, x2];
        return r;
    }
    public UpdateSelfBBoxX(x1:number, x2:number): void {
        // let min_x: number = Math.min(x1, x2);
        // let max_x: number = Math.max(x1, x2);
        let [min_x, max_x] = this.minMax(x1, x2)
        let drawingX = this.GetDrawingX();
        min_x -= drawingX;
        max_x -= drawingX;

        if (this.m_selfBB_x1 > min_x) this.m_selfBB_x1 = min_x;
        if (this.m_selfBB_x2 < max_x) this.m_selfBB_x2 = max_x;
    };

    public UpdateSelfBBoxY(y1:number, y2:number): void {
        let min_y: number = Math.min(y1, y2);
        let max_y: number = Math.max(y1, y2);

        let drawingY = this.GetDrawingY();

        min_y -= drawingY;
        max_y -= drawingY;

        if (this.m_selfBB_y1 > min_y) this.m_selfBB_y1 = min_y;
        if (this.m_selfBB_y2 < max_y) this.m_selfBB_y2 = max_y;
    };

    public SetEmptyBB(): void {};
    //
    public HasSelfBB(): boolean{
        return this.HasSelfHorizontalBB() && this.HasSelfVerticalBB();
    };
    public HasSelfHorizontalBB(): boolean{
        return (this.m_selfBB_x1 != -Number.MAX_SAFE_INTEGER)
                && (this.m_selfBB_x2 != Number.MAX_SAFE_INTEGER);
    };
    public HasSelfVerticalBB(): boolean{
        return (this.m_selfBB_y1 != -Number.MAX_SAFE_INTEGER)
                && (this.m_selfBB_y2 != Number.MAX_SAFE_INTEGER);
    };
    public HasContentBB(): boolean{
        return this.HasContentHorizontalBB() && this.HasContentVerticalBB();
    };
    public HasContentHorizontalBB(): boolean{
        return (this.m_contentBB_x1 != -Number.MAX_SAFE_INTEGER)
                && (this.m_contentBB_x2 != Number.MAX_SAFE_INTEGER)
    };
    public HasContentVerticalBB(): boolean{
        return (this.m_contentBB_y1 != -Number.MAX_SAFE_INTEGER)
                && (this.m_contentBB_y2 != Number.MAX_SAFE_INTEGER)
    };
    public HasEmptyBB(): boolean{
        return [this.m_contentBB_x1, this.m_contentBB_x2,
                this.m_contentBB_y1, this.m_contentBB_y2].every((v)=>{v!==0})
    };

    /**
     * Set and get the smuflGlyph / fontsize for a bounding box
     * that is the one of a single SMuFL glyph.
     */
    public SetBoundingBoxGlyph(smuflGlyph: string, fontSize:number): void{};
    public GetBoundingBoxGlyph():string { return this.m_smuflGlyph};
    public GetBoundingBoxGlyphFontSize(): number { return this.m_smuflGlyphFontSize};

    /**
     * Reset the bounding box values
     */
    public ResetBoundingBox(): void{};

    /**
     * @name Get positions for self and content
     */
    get GetSelfBottom():number { return this.GetDrawingY() + this.m_selfBB_y1; }
    get GetSelfTop():number { return this.GetDrawingY() + this.m_selfBB_y2; }
    get GetSelfLeft():number { return this.GetDrawingX() + this.m_selfBB_x1; }
    get GetSelfRight():number { return this.GetDrawingX() + this.m_selfBB_x2; }
    get GetContentBottom():number { return this.GetDrawingY() + this.m_contentBB_y1; }
    get GetContentTop():number { return this.GetDrawingY() + this.m_contentBB_y2; }
    get GetContentRight():number { return this.GetDrawingX() + this.m_contentBB_x2; }
    get GetContentLeft():number { return this.GetDrawingX() + this.m_contentBB_x1; }
    get GetSelfX1():number { return this.m_selfBB_x1; }
    get GetSelfX2():number { return this.m_selfBB_x2; }
    get GetSelfY1():number { return this.m_selfBB_y1; }
    get GetSelfY2():number { return this.m_selfBB_y2; }
    get GetContentX1():number { return this.m_contentBB_x1; }
    get GetContentX2():number { return this.m_contentBB_x2; }
    get GetContentY1():number { return this.m_contentBB_y1; }
    get GetContentY2():number { return this.m_contentBB_y2; }

    /**
     * @name Get wrappers
     */
    public GetBottomBy(_type: Accessor):number {
        return _type == Accessor.SELF ? this.GetSelfBottom :this.GetContentBottom
    }
    public GetTopBy(_type: Accessor):number {
        return _type == Accessor.SELF ? this.GetSelfTop : this.GetContentTop
    }
    public GetLeftBy(_type: Accessor):number {
        return _type == Accessor.SELF ? this.GetSelfLeft : this.GetContentLeft
    }
    public GetRightBy(_type: Accessor):number {
        return _type == Accessor.SELF ? this.GetSelfRight : this.GetContentRight
    }
    public GetY2By(_type: Accessor):number {return _type == Accessor.SELF ? this.GetSelfY2 : this.GetContentY2}
    public GetX1By(_type: Accessor):number {return _type == Accessor.SELF ? this.GetSelfX1 : this.GetContentX1}
    public GetX2By(_type: Accessor):number {return _type == Accessor.SELF ? this.GetSelfX2 : this.GetContentX2}
    public GetY1By(_type: Accessor):number {return _type == Accessor.SELF ? this.GetSelfY1 : this.GetContentY1}

    /**
     * @name Return true if the bounding box has a horizontal / vertical overlap with the other one.
     * Makes an overal bounding box overlap calculation without looking at anchor points
     */
    public HorizontalContentOverlap(other: BoundingBox, margin:number){};
    public VerticalContentOverlap(other: BoundingBox, margin:number){};
    public HorizontalSelfOverlap(other: BoundingBox, margin:number){};
    public VerticalSelfOverlap(other: BoundingBox, margin:number){};

    /**
     * @name Return the overlap on the left / right / top / bottom looking at bounding box anchor points
     */
    public HorizontalLeftOverlap(other:BoundingBox, doc:Doc, margin:number, vMargin:number):number{return 0}
    public HorizontalRightOverlap(other:BoundingBox, doc:Doc, margin:number, vMaring:number):number{return 0}
    public VerticalTopOverlap(other:BoundingBox, doc:Doc, margin:number, hMargin:number):number{return 0}
    public VerticalBottomOverlap(other:BoundingBox, doc:Doc, margin:number, hMargin:number):number{return 0}
    

    /**
     * Return true if the bounding box encloses the point.
     */
    public Encloses(point:Dot):boolean{return};

    /**
     * Return true if the bounding box intersects with the curve represented by the FloatingPositioner.
     * The Object pointed by the FloatingPositioner is expected to be a SLUR or a TIE
     */
    public Intersects(curve:FloatingCurvePositioner, type:Accessor, margin:number):number{return};

    /**
     * Swap values.
     * This is useful for example when switching to the device context world.
     */
    static Swap(v1: number, v2: number):void{};

    /**
     * Swap the points passed as reference.
     * This is useful for example when calculating bezier positions.
     */
    static SwapPoints(p1:Dot, p2:Dot):void{};

    /**
     * Calculate the position of a point after a rotation of alpha (in radian) around the center
     */
    static CalcPositionAfterRotation(point:Dot, alpha:number, center:Dot):Dot{
        let a: Dot = {x:0, y:0};
        return a;
    };

    /**
     * Calculate the y position of a bezier at position x
     */
    static CalcBezierAtPosition(bezier:Array<Dot>, x:number):number{return 0};

    /**
     * Calculate the point bezier point position for a t between 0.0 and 1.0
     */
    static CalcDeCasteljau(bezier:Array<Dot>, x:number):Dot{let a:Dot={};return a};

    /**
     * Calculate the position of the bezier above and below for a thick bezier
     */
    static CalcThickBezier(bezier:ReadonlyArray<Dot>, thickness:number, angle:number,
        topBezier:Dot, bottomBezier:Dot):void{

    };

    /**
     * Approximate the bounding box of a bezier taking into accound the height and the width.
     */
    static ApproximateBezierBoundingBox(bezier:ReadonlyArray<Dot>, pos:Dot, width:number,
        height:number, minYPos:number, maxYPos:number):void{

    };

    /**
     * Calculate the left / right / top / bottom overlap of two rectangle taking into account the margin / v-h-Margins
     * const Point rect1[2]
     */
    static RectLeftOverlap(rect1:ReadonlyArray<Dot>, rect2:ReadonlyArray<Dot>, margin:number, hMargin:number):number{return 0};
    static RectRightOverlap(rect1:ReadonlyArray<Dot>, rect2:ReadonlyArray<Dot>, margin:number, hMargin:number):number{return 0};
    static RectTopOverlap(rect1:ReadonlyArray<Dot>, rect2:ReadonlyArray<Dot>, margin:number, hMargin:number):number{return 0};
    static RectBottomOverlap(rect1:ReadonlyArray<Dot>, rect2:ReadonlyArray<Dot>, margin:number, hMargin:number):number{return 0};

    /**
     * Get the rectangles covering the inside of a bounding box given two anchors (e.g., NW and NE, or NE and SE)
     * Looks at the anchors for the smufl glpyh (if any) and return the number of rectangles needed to represent the
     * bounding box.
     * Return 1 with no smufl glyph or no anchor, 2 with on anchor point, and 3 with 2 anchor points.
     */
    public GetRectangles(anchor1:SMuFLGlyphAnchor,  anchor2:SMuFLGlyphAnchor, rect:Array<Array<Dot>>, doc:Doc):number{return} ;

    /**
     * Calculate the rectangles with 2 anchor points.
     * Return false (and one single rectangle) when anchor points are out of the boundaries.
     */
    public GetGlyph2PointRectangles(anchor1:SMuFLGlyphAnchor,  anchor2:SMuFLGlyphAnchor, glyph1:Glyph,
        rect:Array<Array<Dot>>, doc:Doc):boolean{return};

    /**
     * Calculate the rectangles with 1 anchor point.
     * Return false (and one single rectangle) when anchor points are out of the boundaries.
     */
    public GetGlyph1PointRectangles(anchor:SMuFLGlyphAnchor, glyph:Glyph, rect:Array<Array<Dot>>, doc:Doc):boolean{return};
}


export interface ObjectOptions extends Options{}
export interface IObject {}
export abstract class BaseObject extends BoundingBox implements IObject{}
