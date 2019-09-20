
import * as mb from './common/bases';

/**
 * Factory for element & attribute
 */
const ProxyHandler = {
    get: function(target: any, name: string): any{
        let eleAttr = Reflect.get(target, name)
        if (eleAttr !== undefined){
            return eleAttr;
        }
        let attr = target['attrs'][name];
        return  Reflect.get(attr, name);
    }
}

export function attribute<T>(c: mb.AttributeConstrucor<T>, o: mb.AttrOptions): mb.AttributeInterface<T>{
    return new c(o);
}
export function element(c: mb.ElementConstructor, o: mb.ElementOptions): mb.ElementInterface{
    return new Proxy(new c(o), ProxyHandler);
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
