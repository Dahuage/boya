/**
 * 
 */

import { MeiToken } from "./types"

 export interface IMeiDoc {
     root: MeiToken;
     traverse(tCallback: (t:MeiToken)=>void):void;
 }

 export class MeiDoc implements IMeiDoc{
    root: MeiToken;
    private constructor(){}
    public traverse(tCallback: (t:MeiToken)=>void):void{}
 }