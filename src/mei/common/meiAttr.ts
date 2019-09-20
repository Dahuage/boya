
/**
 * Base class of attribute and element.
 * @author dahua<guzhaoer@gmail.com>
 */
import {Options} from './common'

/**
 * Base interface and class for attribute.
 */
export interface AttrOptions extends Options {}
export interface AttributeConstrucor<T> {
    new (attrOptions: AttrOptions): AttributeInterface<T>;
}
export interface AttributeInterface<U extends Data<U>> {
    readonly id: string,
    readonly name: string,
    readonly mutable: boolean,
    value: U,
}
export abstract class Attribute implements AttributeInterface{
    constructor(public id: string){}
}