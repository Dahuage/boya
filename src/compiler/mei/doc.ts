/**
 * 
 */

 export interface IMeiDoc {
     buildDoc(file: string): void;
 }

 class MeiDoc implements IMeiDoc{
    public static INSTANCE = new MeiDoc()
    public readonly meiVersion = '4.0.0'
    private constructor(){}
    public buildDoc(fileUri: string): void{};
 }

 export function getDoc(){return MeiDoc.INSTANCE}