/**
 * 
 */

 export interface MeiDocInterface {
     buildDoc(file: string): void,

 }

 class MeiDoc implements MeiDocInterface{
    public static INSTANCE = new MeiDoc()
    private constructor(){}
    public buildDoc(fileUri: string): void{};
 }

 export function getDoc(){return MeiDoc.INSTANCE}
 export function buildDoc(){}