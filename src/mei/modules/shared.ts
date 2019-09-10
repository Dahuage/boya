/**
 *  MEI shared module implementary.
 */

import * as base from '../meiBase'

export interface AccidInterface extends base.ElementInterface{};
export class Accid extends base.Element implements AccidInterface {
    constructor(){
        super();
    }
};
export interface ActorInterface {};
export class Actor extends base.Element implements AccidInterface {};

export interface AddrLineInterface {};
export class AddrLine extends Element implements AddrLineInterface{};