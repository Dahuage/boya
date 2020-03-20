export interface IScanner {}

class Scanner implements IScanner {
    private posi: number | undefined;
    constructor(options: Object){
        this.posi = 0;
    };
}

export function makeScanner(options: Object): IScanner {
    let scanner = new Scanner(options);
    return scanner;
}