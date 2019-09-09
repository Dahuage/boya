
import * as mb from './meiBase'

/**
 * Factory for element & attribute
 */
interface Handler {
    (target: mb.ElementInterface, name: string): any;
}
let attrHadler: Handler;
attrHadler = function(target: mb.ElementInterface, name: string){
    if(target.attrs.has(name)){
        return Object.getPrototypeOf(name);
    }
    return null;
}


export function attribute(c: mb.AttributeConstrucor, o: mb.AttrOptions): mb.AttributeInterface{
    return new c(o);
}
export function element(c: mb.ElementConstructor, o: mb.ElementOptions): mb.ElementInterface{
    return new c(o);
}

/**
 * Abstract factory for mei
 */
export interface MeiAbstracFactory {
    createElement(c: mb.ElementConstructor, o: mb.ElementOptions): mb.ElementInterface;
    createAttr(c: mb.AttributeConstrucor, o: mb.AttrOptions): mb.AttributeInterface;
}
export class MeiAbstracFactory implements MeiAbstracFactory{
    createElement(c: mb.ElementConstructor, o: mb.ElementOptions): mb.ElementInterface{
        return element(c, o);
    }
    createAttr(c: mb.AttributeConstrucor, o: mb.AttrOptions): mb.AttributeInterface{
        return attribute(c, o);
    }
}

/**
 * MEI builder
 */
