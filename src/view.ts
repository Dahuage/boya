import { IMeiDoc } from './types';

export interface IView {
    setDoc(doc: IMeiDoc): void;
}

export class View implements IView {
    public setDoc(doc: IMeiDoc){}
}