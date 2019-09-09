/**
 * Base class of attribute and element.
 * @author dahua<guzhaoer@gmail.com>
 */

/**
 * Options
 */
interface Options {
    [optionName: string]: any;
}

/**
 * Base interface and class for attribute.
 */
export interface AttrOptions extends Options {}
export interface AttributeConstrucor {
    new (attrOptions: AttrOptions): AttributeInterface;
}
export interface AttributeInterface {
    id: string,
}
export abstract class Attribute implements AttributeInterface{
    constructor(public id: string){}
}

/**
 * Base interface and class for element.
 */
export interface ObjectOptions extends Options{}
export interface ObjectInterface {}
export abstract class BaseObject implements ObjectInterface{}

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
        this.attrs.add(attr.id, attr);
    }
    private getAttr(attrId: string): AttributeInterface | void {
        return this.attrs.get(attrId);
    }
}
