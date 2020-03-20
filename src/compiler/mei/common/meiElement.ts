/**
 * Base class of attribute and element.
 * @author dahua<guzhaoer@gmail.com>
 */

import {Options} from './common'

export interface ElementOptions extends Options{}
export interface ElementConstructor {
    new (elementOptions: ElementOptions): ElementInterface;
}
export interface ElementInterface {
    attrs: Map<string, AttributeInterface>
}
export abstract class Element extends BaseObject implements ElementInterface {
    attrs: Map<string, AttributeInterface> = new Map();
    constructor(){
        super();
    }
    private registerAttr(attr: AttributeInterface): void {
        this.attrs.set(attr.id, attr);
    }
    private getAttr(attrId: string): AttributeInterface | void {
        return this.attrs.get(attrId);
    }
}
