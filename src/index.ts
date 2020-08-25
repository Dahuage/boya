import { makeParser } from './parser';
import { meiLoader } from './netIo';
import { MeiDoc } from './types';
import { IView, View } from './view';
import { IEvent } from './event';

type ehandler = (e: IEvent)=>void


export class Mei {

    private view: IView
    private doc: MeiDoc
    private eventHandlers: IMapLike<ehandler>
    private listenedEvents: ArrayLike<IEvent>

    constructor(){
        let meiText = meiLoader()
        let parser = makeParser(meiText, {})
        let ast = parser.parse()
        this.doc = new MeiDoc(ast)
        this.view = new View()
        this.view.setDoc(this.doc)
    }

    //Options.
    public setOptions(){}
    public getOptions(): any{}
    set scale(v: number){this.scale = v}
    get scale(): number{return this.scale}

    //Source mei.
    public loadMeiText(){}
    public reloadMeiText(){}

    // Render staffs.
    public render(){}
    private render2SVG(){}
    public exportSVG(){}
    public zoom(){}
    public reDraw(){}
    public play(){}
    public render2MIDI(){}

    // Event staffs.
    public on(e: IEvent, cb: ehandler){}
    public listenEvent(){}
    public registerEvent(e: IEvent, cb: ehandler){}
    private trigger(){}
    private distribute(){}
}
