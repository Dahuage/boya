
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

export function attribute<T>(c: mb.IAttributeConstrucor, o: mb.IAttrOptions): mb.IAttributeInterface{
    return new c(o);
}

export function element(c: mb.IElementConstructor, o: mb.IElementOptions): mb.IElementInterface{
    return new Proxy(new c(o), ProxyHandler);
}


/**
 * Abstract factory for mei
 */
export interface MeiAbstracFactory {
    createElement(c: mb.IElementConstructor, o: mb.IElementOptions): mb.IElementInterface;
    createAttr(c: mb.IAttributeConstrucor, o: mb.IAttrOptions): mb.IAttributeInterface;
}

export class MeiAbstracFactory implements MeiAbstracFactory{
    createElement(c: mb.IElementConstructor, o: mb.IElementOptions): mb.IElementInterface{
        return element(c, o);
    }
    createAttr(c: mb.IAttributeConstrucor, o: mb.IAttrOptions): mb.IAttributeInterface{
        return attribute(c, o);
    }
}

/**
 * MEI builder
 */
