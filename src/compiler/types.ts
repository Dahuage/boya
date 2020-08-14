/**
 * MEI types
 * @author dahua<guzhaoer@gmail.com>
 */

export interface IMeiDoc {
    root: MeiToken;
    traverse(tCallback: (t:MeiToken)=>void):void;
}

export class MeiDoc implements IMeiDoc{
   root: MeiToken;
   public constructor(root: MeiToken){
       this.root = root
   }
   public traverse(tCallback: (t:MeiToken)=>void):void{}
   public addChild(token){}
}

export interface TextRange {
    posi: number;
    end: number;
    len: (start: number, end: number) => number;
}

export const enum CharacterCodes {
    nullCharacter = 0,
    maxAsciiCharacter = 0x7F,

    lineFeed = 0x0A,              // \n
    carriageReturn = 0x0D,        // \r
    lineSeparator = 0x2028,
    paragraphSeparator = 0x2029,
    nextLine = 0x0085,

    // Unicode 3.0 space characters
    space = 0x0020,   // " "
    nonBreakingSpace = 0x00A0,   //
    enQuad = 0x2000,
    emQuad = 0x2001,
    enSpace = 0x2002,
    emSpace = 0x2003,
    threePerEmSpace = 0x2004,
    fourPerEmSpace = 0x2005,
    sixPerEmSpace = 0x2006,
    figureSpace = 0x2007,
    punctuationSpace = 0x2008,
    thinSpace = 0x2009,
    hairSpace = 0x200A,
    zeroWidthSpace = 0x200B,
    narrowNoBreakSpace = 0x202F,
    ideographicSpace = 0x3000,
    mathematicalSpace = 0x205F,
    ogham = 0x1680,

    _ = 0x5F,
    $ = 0x24,

    _0 = 0x30,
    _1 = 0x31,
    _2 = 0x32,
    _3 = 0x33,
    _4 = 0x34,
    _5 = 0x35,
    _6 = 0x36,
    _7 = 0x37,
    _8 = 0x38,
    _9 = 0x39,

    a = 0x61,
    b = 0x62,
    c = 0x63,
    d = 0x64,
    e = 0x65,
    f = 0x66,
    g = 0x67,
    h = 0x68,
    i = 0x69,
    j = 0x6A,
    k = 0x6B,
    l = 0x6C,
    m = 0x6D,
    n = 0x6E,
    o = 0x6F,
    p = 0x70,
    q = 0x71,
    r = 0x72,
    s = 0x73,
    t = 0x74,
    u = 0x75,
    v = 0x76,
    w = 0x77,
    x = 0x78,
    y = 0x79,
    z = 0x7A,

    A = 0x41,
    B = 0x42,
    C = 0x43,
    D = 0x44,
    E = 0x45,
    F = 0x46,
    G = 0x47,
    H = 0x48,
    I = 0x49,
    J = 0x4A,
    K = 0x4B,
    L = 0x4C,
    M = 0x4D,
    N = 0x4E,
    O = 0x4F,
    P = 0x50,
    Q = 0x51,
    R = 0x52,
    S = 0x53,
    T = 0x54,
    U = 0x55,
    V = 0x56,
    W = 0x57,
    X = 0x58,
    Y = 0x59,
    Z = 0x5a,

    ampersand = 0x26,             // &
    asterisk = 0x2A,              // *
    at = 0x40,                    // @
    backslash = 0x5C,             // \
    backtick = 0x60,              // `
    bar = 0x7C,                   // |
    caret = 0x5E,                 // ^
    closeBrace = 0x7D,            // }
    closeBracket = 0x5D,          // ]
    closeParen = 0x29,            // )
    colon = 0x3A,                 // :
    comma = 0x2C,                 // ,
    dot = 0x2E,                   // .
    doubleQuote = 0x22,           // "
    equals = 0x3D,                // =
    exclamation = 0x21,           // !
    greaterThan = 0x3E,           // >
    hash = 0x23,                  // #
    lessThan = 0x3C,              // <
    minus = 0x2D,                 // -
    openBrace = 0x7B,             // {
    openBracket = 0x5B,           // [
    openParen = 0x28,             // (
    percent = 0x25,               // %
    plus = 0x2B,                  // +
    question = 0x3F,              // ?
    semicolon = 0x3B,             // ;
    singleQuote = 0x27,           // '
    slash = 0x2F,                 // /
    tilde = 0x7E,                 // ~

    backspace = 0x08,             // \b
    formFeed = 0x0C,              // \f
    byteOrderMark = 0xFEFF,
    tab = 0x09,                   // \t
    verticalTab = 0x0B,           // \v
}

export const enum LayoutCtlCls{
    BOUNDING_BOX = 0,
    OBJECT,
    DEVICE_CONTEXT,
    FLOATING_OBJECT,
    FLOATING_POSITIONER,
    FLOATING_CURVE_POSITIONER,
    BBOX_DEVICE_CONTEXT,
    SVG_DEVICE_CONTEXT,
    CUSTOM_DEVICE_CONTEXT,
}

/*
 * Group tokens
 */
export type MeiControlElement = 
   | MeiToken.ACCID
   | MeiToken.ADD;

export type MeiEditorialElement = 
    | MeiToken.ANNOT
    | MeiToken.ARPEG;

export type MeiLayerElement = 
    | MeiToken.ANCHORED_TEXT
    | MeiToken.BARLINE;

export type MeiRunningElemet = 
    | MeiToken.ANCHORED_TEXT
    | MeiToken.BARLINE;

export type MeiScoreDefElement = 
    | MeiToken.SCOREDEF
    | MeiToken.SCOREDEF_ELEMENT;

export type MeiSystemElement = 
    | MeiToken.SYSTEM
    | MeiToken.SYSTEM_ALIGNER;

export type SystemLike =
    | MeiToken.SYSTEM
    | MeiToken.SYSTEM_ALIGNER;


/**
 * All mei attrs class.
 */

 

export const enum MeiToken{
    UNKNOWN,
    // Ids for ungrouped objects
    ALIGNMENT,
    ALIGNMENT_REFERENCE,
    CLEF_ATTR,
    MEI,
    FACSIMILE,
    FB,
    GRACE_ALIGNER,
    INSTRDEF,
    KEYSIG_ATTR,
    LABEL,
    LABELABBR,
    LAYER,
    MDIV,
    MEASURE,
    MEASURE_ALIGNER,
    MENSUR_ATTR,
    METERSIG_ATTR,
    PAGE,
    PAGES,
    SCORE,
    STAFF,
    STAFF_ALIGNMENT,
    STAFFGRP,
    SURFACE,
    SVG,
    SYSTEM,
    SYSTEM_ALIGNER,
    SYSTEM_ALIGNMENT,
    TIMESTAMP_ALIGNER,
    ZONE,
    // Ids for EditorialElement child classes
    EDITORIAL_ELEMENT,
    ABBR,
    ADD,
    ANNOT,
    APP,
    CHOICE,
    CORR,
    DAMAGE,
    DEL,
    EXPAN,
    LEM,
    ORIG,
    RDG,
    REF,
    REG,
    RESTORE,
    SIC,
    SUBST,
    SUPPLIED,
    UNCLEAR,
    EDITORIAL_ELEMENT_max,
    // Ids for RunningElement child classes
    RUNNING_ELEMENT,
    PGFOOT,
    PGFOOT2,
    PGHEAD,
    PGHEAD2,
    RUNNING_ELEMENT_max,
    // Ids for SystemElement child classes
    SYSTEM_ELEMENT,
    BOUNDARY_END,
    ENDING,
    EXPANSION,
    PB,
    SB,
    SECTION,
    SYSTEM_ELEMENT_max,
    // Ids for ControlElement child classes
    CONTROL_ELEMENT,
    ANCHORED_TEXT,
    ARPEG,
    BRACKETSPAN,
    BREATH,
    DIR,
    DYNAM,
    FERMATA,
    HAIRPIN,
    HARM,
    MORDENT,
    MNUM,
    OCTAVE,
    PEDAL,
    SLUR,
    TEMPO,
    TIE,
    TRILL,
    TURN,
    CONTROL_ELEMENT_max,
    // Ids for LayerElement child classes
    LAYER_ELEMENT,
    ACCID,
    ARTIC,
    ARTIC_PART,
    BARLINE,
    BARLINE_ATTR_LEFT,
    BARLINE_ATTR_RIGHT,
    BEAM,
    BEATRPT,
    BTREM,
    CHORD,
    CLEF,
    CUSTOS,
    DOT,
    DOTS,
    FLAG,
    FTREM,
    HALFMRPT,
    KEYSIG,
    LIGATURE,
    MENSUR,
    METERSIG,
    MREST,
    MRPT,
    MRPT2,
    MULTIREST,
    MULTIRPT,
    NC,
    NOTE,
    NEUME,
    PROPORT,
    REST,
    SPACE,
    STEM,
    SYL,
    SYLLABLE,
    TIMESTAMP_ATTR,
    TUPLET,
    TUPLET_BRACKET,
    TUPLET_NUM,
    VERSE,
    LAYER_ELEMENT_max,
    // Ids for ScoreDefElement child classes
    SCOREDEF_ELEMENT,
    SCOREDEF,
    STAFFDEF,
    SCOREDEF_ELEMENT_max,
    // Ids for TextElement child classes
    TEXT_ELEMENT,
    FIG,
    FIGURE,
    LB,
    NUM,
    REND,
    TEXT,
    TEXT_ELEMENT_max,

    // attrs
    UNSPECIFIED,
    ATT_CLASS_UNKNOWN,
    ATT_NOTATIONTYPE,
    ATT_HARMANL,
    ATT_HARMONICFUNCTION,
    ATT_INTERVALHARMONIC,
    ATT_INTERVALMELODIC,
    ATT_KEYSIGANL,
    ATT_KEYSIGDEFAULTANL,
    ATT_MELODICFUNCTION,
    ATT_PITCHCLASS,
    ATT_SOLFA,
    ATT_ARPEGLOG,
    ATT_BTREMLOG,
    ATT_BEAMPRESENT,
    ATT_BEAMREND,
    ATT_BEAMSECONDARY,
    ATT_BEAMEDWITH,
    ATT_BEAMINGLOG,
    ATT_BEATRPTLOG,
    ATT_BRACKETSPANLOG,
    ATT_CUTOUT,
    ATT_EXPANDABLE,
    ATT_FTREMLOG,
    ATT_GLISSPRESENT,
    ATT_GRACEGRPLOG,
    ATT_GRACED,
    ATT_HAIRPINLOG,
    ATT_HARPPEDALLOG,
    ATT_LVPRESENT,
    ATT_MEASURELOG,
    ATT_METERSIGGRPLOG,
    ATT_NUMBERPLACEMENT,
    ATT_NUMBERED,
    ATT_OCTAVELOG,
    ATT_PEDALLOG,
    ATT_PIANOPEDALS,
    ATT_REHEARSAL,
    ATT_SCOREDEFVISCMN,
    ATT_SLURREND,
    ATT_STEMSCMN,
    ATT_TIEREND,
    ATT_TREMMEASURED,
    ATT_MORDENTLOG,
    ATT_ORNAMPRESENT,
    ATT_ORNAMENTACCID,
    ATT_TURNLOG,
    ATT_CRIT,
    ATT_AGENTIDENT,
    ATT_REASONIDENT,
    ATT_EXTSYM,
    ATT_FACSIMILE,
    ATT_TABULAR,
    ATT_FINGGRPLOG,
    ATT_ACCIDENTALGESTURAL,
    ATT_ARTICULATIONGESTURAL,
    ATT_BENDGES,
    ATT_DURATIONGESTURAL,
    ATT_NCGES,
    ATT_NOTEGES,
    ATT_SCOREDEFGES,
    ATT_SECTIONGES,
    ATT_SOUNDLOCATION,
    ATT_TIMESTAMPGESTURAL,
    ATT_TIMESTAMP2GESTURAL,
    ATT_HARMLOG,
    ATT_BIFOLIUMSURFACES,
    ATT_FOLIUMSURFACES,
    ATT_RECORDTYPE,
    ATT_REGULARMETHOD,
    ATT_LIGATURELOG,
    ATT_MENSURALLOG,
    ATT_MENSURALSHARED,
    ATT_NOTEANLMENSURAL,
    ATT_RESTVISMENSURAL,
    ATT_CHANNELIZED,
    ATT_INSTRUMENTIDENT,
    ATT_MIDIINSTRUMENT,
    ATT_MIDINUMBER,
    ATT_MIDITEMPO,
    ATT_MIDIVALUE,
    ATT_MIDIVALUE2,
    ATT_MIDIVELOCITY,
    ATT_TIMEBASE,
    ATT_NCLOG,
    ATT_NCFORM,
    ATT_SURFACE,
    ATT_ALIGNMENT,
    ATT_ACCIDLOG,
    ATT_ACCIDENTAL,
    ATT_ARTICULATION,
    ATT_ATTACCALOG,
    ATT_AUDIENCE,
    ATT_AUGMENTDOTS,
    ATT_AUTHORIZED,
    ATT_BARLINELOG,
    ATT_BARRING,
    ATT_BASIC,
    ATT_BIBL,
    ATT_CALENDARED,
    ATT_CANONICAL,
    ATT_CLASSED,
    ATT_CLEFLOG,
    ATT_CLEFSHAPE,
    ATT_CLEFFINGLOG,
    ATT_COLOR,
    ATT_COLORATION,
    ATT_COORDINATED,
    ATT_CUE,
    ATT_CURVATURE,
    ATT_CURVEREND,
    ATT_CUSTOSLOG,
    ATT_DATAPOINTING,
    ATT_DATABLE,
    ATT_DISTANCES,
    ATT_DOTLOG,
    ATT_DURATIONADDITIVE,
    ATT_DURATIONDEFAULT,
    ATT_DURATIONLOGICAL,
    ATT_DURATIONRATIO,
    ATT_ENCLOSINGCHARS,
    ATT_ENDINGS,
    ATT_EVIDENCE,
    ATT_EXTENDER,
    ATT_EXTENT,
    ATT_FERMATAPRESENT,
    ATT_FILING,
    ATT_GRPSYMLOG,
    ATT_HANDIDENT,
    ATT_HEIGHT,
    ATT_HORIZONTALALIGN,
    ATT_INTERNETMEDIA,
    ATT_JOINED,
    ATT_KEYSIGLOG,
    ATT_KEYSIGDEFAULTLOG,
    ATT_LABELLED,
    ATT_LANG,
    ATT_LAYERLOG,
    ATT_LAYERIDENT,
    ATT_LINELOC,
    ATT_LINEREND,
    ATT_LINERENDBASE,
    ATT_LINKING,
    ATT_LYRICSTYLE,
    ATT_MEASURENUMBERS,
    ATT_MEASUREMENT,
    ATT_MEDIABOUNDS,
    ATT_MEDIUM,
    ATT_MEIVERSION,
    ATT_MENSURLOG,
    ATT_METADATAPOINTING,
    ATT_METERCONFORMANCE,
    ATT_METERCONFORMANCEBAR,
    ATT_METERSIGLOG,
    ATT_METERSIGDEFAULTLOG,
    ATT_MMTEMPO,
    ATT_MULTINUMMEASURES,
    ATT_NINTEGER,
    ATT_NNUMBERLIKE,
    ATT_NAME,
    ATT_NOTATIONSTYLE,
    ATT_NOTEHEADS,
    ATT_OCTAVE,
    ATT_OCTAVEDEFAULT,
    ATT_OCTAVEDISPLACEMENT,
    ATT_ONELINESTAFF,
    ATT_OPTIMIZATION,
    ATT_ORIGINLAYERIDENT,
    ATT_ORIGINSTAFFIDENT,
    ATT_ORIGINSTARTENDID,
    ATT_ORIGINTIMESTAMPLOGICAL,
    ATT_PAGES,
    ATT_PARTIDENT,
    ATT_PITCH,
    ATT_PLACEMENT,
    ATT_PLIST,
    ATT_POINTING,
    ATT_QUANTITY,
    ATT_RANGING,
    ATT_RESPONSIBILITY,
    ATT_SCALABLE,
    ATT_SEQUENCE,
    ATT_SLASHCOUNT,
    ATT_SLURPRESENT,
    ATT_SOURCE,
    ATT_SPACING,
    ATT_STAFFLOG,
    ATT_STAFFDEFLOG,
    ATT_STAFFGROUPINGSYM,
    ATT_STAFFIDENT,
    ATT_STAFFITEMS,
    ATT_STAFFLOC,
    ATT_STAFFLOCPITCHED,
    ATT_STARTENDID,
    ATT_STARTID,
    ATT_STEMS,
    ATT_SYLLOG,
    ATT_SYLTEXT,
    ATT_SYSTEMS,
    ATT_TARGETEVAL,
    ATT_TEMPOLOG,
    ATT_TEXTRENDITION,
    ATT_TEXTSTYLE,
    ATT_TIEPRESENT,
    ATT_TIMESTAMPLOGICAL,
    ATT_TIMESTAMP2LOGICAL,
    ATT_TRANSPOSITION,
    ATT_TUPLETPRESENT,
    ATT_TYPED,
    ATT_TYPOGRAPHY,
    ATT_VERTICALALIGN,
    ATT_VERTICALGROUP,
    ATT_VISIBILITY,
    ATT_VISUALOFFSETHO,
    ATT_VISUALOFFSETTO,
    ATT_VISUALOFFSETVO,
    ATT_VISUALOFFSET2HO,
    ATT_VISUALOFFSET2TO,
    ATT_VISUALOFFSET2VO,
    ATT_VOLTAGROUPINGSYM,
    ATT_WHITESPACE,
    ATT_WIDTH,
    ATT_XY,
    ATT_XY2,
    ATT_ALTSYM,
    ATT_ANCHOREDTEXTLOG,
    ATT_CURVELOG,
    ATT_LINELOG,
    ATT_ANNOTVIS,
    ATT_ARPEGVIS,
    ATT_BARLINEVIS,
    ATT_BEAMINGVIS,
    ATT_BEATRPTVIS,
    ATT_CHORDVIS,
    ATT_CLEFFINGVIS,
    ATT_EPISEMAVIS,
    ATT_FTREMVIS,
    ATT_FERMATAVIS,
    ATT_FINGGRPVIS,
    ATT_HAIRPINVIS,
    ATT_HARMVIS,
    ATT_HISPANTICKVIS,
    ATT_KEYSIGVIS,
    ATT_KEYSIGDEFAULTVIS,
    ATT_LINEVIS,
    ATT_LIQUESCENTVIS,
    ATT_MENSURVIS,
    ATT_MENSURALVIS,
    ATT_METERSIGVIS,
    ATT_METERSIGDEFAULTVIS,
    ATT_MULTIRESTVIS,
    ATT_PBVIS,
    ATT_PEDALVIS,
    ATT_QUILISMAVIS,
    ATT_SBVIS,
    ATT_SCOREDEFVIS,
    ATT_SECTIONVIS,
    ATT_SIGNIFLETVIS,
    ATT_SPACEVIS,
    ATT_STAFFDEFVIS,
    ATT_STAFFGRPVIS,
    ATT_TUPLETVIS,
    ATT_CLASS_max
};

export const TextToObj: IMapLike<MeiToken> = {
    "ALIGNMENT": MeiToken.ALIGNMENT,
};

export interface INode extends TextRange {
    kind: MeiToken;
    parent: INode;

    text: string;
    id?: string;
    start: number;
    end: number;
    child: NodeArray<INode>;
    attribute: Array<MeiAttrToken>;
}

interface IMapLike<T> {[idx:string]: T};
export interface NodeArray<T extends INode> extends ReadonlyArray<T>, TextRange {}

export interface Token<TKind extends MeiToken> extends INode {kind: TKind;}

export interface IMeiNode extends INode{};
export interface IScoreNode extends INode {};
export interface IScoeDefNode extends INode {};
export interface IStaffGrpNode extends INode {};
export interface IStaffDefNode extends INode {};
export interface ILabelNode extends INode {};
export interface ISectionNode  extends INode {};
export interface IMeasureNode extends INode {};
export interface IStaffNode extends INode {};
export interface ILayerNode extends INode {};
export interface IRestNode extends INode {};
export interface IBeamNode extends INode {};
export interface INoteNode extends INode {};