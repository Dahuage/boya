import { makeScanner, Scanner } from './scanner';
import { MeiToken } from './types';
import { IMeiDoc } from './doc';

export interface IParser {}


class Parser implements IParser{
    private scanner: Scanner;
    private currentToken: MeiToken;
    private stackDep: number = 0;
    private stack: MeiToken[];

    public meiDoc: IMeiDoc;
    constructor(){
        this.initScanner();
    }
    private initScanner(): void{
        this.scanner = makeScanner({});
    }
    private reloadScanner(): void{
        this.scanner = makeScanner({});
    }
    nextToken(): MeiToken{
        let token = this.scanner.scan()
        return token;
    }
}