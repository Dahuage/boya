import { makeParser } from './parser';
import { meiLoader } from './netIo';
import { MeiDoc } from './types';
import { IView, View } from './view';
import { IEvent } from './event';
import { parse } from './libs/uuid';

type handler = (e: IEvent)=>void

export class Mei {
    private view: IView
    private doc: MeiDoc
    private eventHandlers: IMapLike<handler>
    private listenedEvents: ArrayLike<IEvent>

    constructor(){
        let meiText = meiLoader()
        let parser = makeParser(meiText, {})
        let ast = parser.parse()
        this.doc = new MeiDoc(ast)
        this.view = new View()
        this.view.setDoc(this.doc)
    }

    public render(){}
    private render2SVG(){}
    public on(e: IEvent, cb: handler){}
    public listenEvent(){}
    public registerEvent(e: IEvent, handler: handler){}
    private trigger(){}

    public zoom(){}
    public reDraw(){}
    public export(){}
    public play(){}
    public genMidi(){}
    private distribute(){}
}
