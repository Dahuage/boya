import {MeiToken, INode, CharacterCodes} from "./types"


export interface IContainer {[name: string]:any};

export interface IScanner extends IPosition {}

export interface IPosition {
    line: number;
    column: number;
    offset: number;
}

export interface TextRange {
    start: number;
    end: number;
    posi: Position;
}

export class Scanner implements IScanner {
    public static INSTANCE: Scanner;

    private readonly text: string | null | undefined | '';
    private tempText: string | '';
    private currentText: string;
    private end: number = this.text.length;
    private skipTrivia: boolean = true;

    private anchor: number = 0;
    private cursor: number = 0;
    public column: number = 1;
    public line: number = 1;
    public offset: number = 0;
    private cachedStatus:IContainer = {};

    private startPos: number;
    private tokenPos: number;
    private token: MeiToken;
    private tokenValue: string;

    private stackDep: number = 0;
    private stack: MeiToken[];

    constructor(options: Object){
        // this.skipTrivia = options.skipTrivia;
    };

    public tell(): IPosition{
        let p: IPosition;
        p.column = this.column;
        p.line = this.line;
        p.offset = this.offset;
        return p;
    };
    public seek(p: number){
        this.cursor = p;
    }
    public static codePointAt: (s: string, i: number) => number = (String.prototype as any).codePointAt ? (s, i) => (s as any).codePointAt(i) : function codePointAt(str, i): number {
        // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
        const size = str.length;
        // Account for out-of-bounds indices:
        if (i < 0 || i >= size) {
            return undefined!; // String.codePointAt returns `undefined` for OOB indexes
        }
        // Get the first code unit
        const first = str.charCodeAt(i);
        // check if it’s the start of a surrogate pair
        if (first >= 0xD800 && first <= 0xDBFF && size > i + 1) { // high surrogate and there is a next code unit
            const second = str.charCodeAt(i + 1);
            if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
            }
        }
        return first;
    }
    public static isLowerCaseLetter(ch: number):boolean{
        return ch >= CharacterCodes.a && ch <= CharacterCodes.z;
    }    
    public scan(): MeiToken{
        while (true) {
            let posi = this.cursor;
            const ch: number = this.codePointAt(this.text, posi);
            switch (ch) {
                case CharacterCodes.lessThan:
                    this.anchor = posi;
                    let next_ch = this.codePointAt(this.text, posi)
                    if (next_ch === CharacterCodes.exclamation) {
                        // this.parseComment(<!);
                    } else if (Scanner.isLowerCaseLetter(next_ch)){
                        // this.parseElement(<abcdd>);
                    } else if (next_ch === CharacterCodes.slash) {
                        // this.parseEndTag(</>);
                    } else if (next_ch === CharacterCodes.question) {
                        // this.parse(<? >)
                    } else {
                        // error
                    }
                case CharacterCodes.space:
                case CharacterCodes.emSpace:
                case CharacterCodes.enSpace:
                default:
            }
        }
    }
    protected parseTag(text:string){}
    private relative2anchor(s: string): number{
        let index = this.text.indexOf(s, this.cursor);
        return index !== -1 ? index - this.anchor : -1;
    }
    private advanceBy(n: number): void{
        //TODO reset cursor
        this.advancePositionWithMutation(n);
        this.offset += n;
    }
    private advancePositionWithMutation(numberOfCharacters: number = this.currentText.length): void {
        let linesCount = 0;
        let lastNewLinePos = -1;
        for (let i = 0; i < numberOfCharacters; i++) {
            if (this.currentText.charCodeAt(i) === 10 /* newline char code */) {
                linesCount++;
                lastNewLinePos = i;
            }
        }
        this.offset += numberOfCharacters;
        this.line += linesCount;
        this.column = lastNewLinePos === -1 ? this.column + numberOfCharacters
                                            : numberOfCharacters - lastNewLinePos;
    }
    private saveStatus(){
        this.cachedStatus.savePos = this.cursor;
        this.cachedStatus.saveStartPos = this.startPos;
        this.cachedStatus.saveTokenPos = this.tokenPos;
        this.cachedStatus.saveToken = this.token;
        this.cachedStatus.saveTokenValue = this.tokenValue;
    }
    private resoreStatus(){
        this.cursor = this.cachedStatus.savePos;
        this.startPos = this.cachedStatus.saveStartPos;
        this.tokenPos = this.cachedStatus.saveTokenPos;
        this.token = this.cachedStatus.saveToken;
        this.tokenValue = this.cachedStatus.saveTokenValue;
    }
    private speculationHelper<T>(callback: () => T, isLookahead: boolean): T {
        this.saveStatus();
        const result = callback();
        // If our callback returned something 'falsy' or we're just looking ahead,
        // then unconditionally restore us to where we were.
        if (!result || isLookahead) {
            this.resoreStatus();
        }
        return result;
    }
    private scanRange<T>(start: number, length: number, callback: () => T): T {
        this.saveStatus();
        this.setTempText(this.text, start, length);
        const result = callback();
        this.resoreStatus();
        return result;
    }
    private setTempText(newText: string | undefined, start: number | undefined, length: number | undefined) {
        this.tempText = newText || "";
        this.end = length === undefined ? this.text.length : start! + length;
        this.setTextPos(start || 0);
    }
    private setTextPos(textPos: number) {
        // Debug.assert(textPos >= 0);
        this.cursor = textPos;
        this.anchor = textPos;
        this.startPos = textPos;
        this.tokenPos = textPos;
        this.token = MeiToken.UNKNOWN;
        this.tokenValue = undefined!;
    }
}

export function makeScanner(options: Object): Scanner {
    let scanner = new Scanner(options);
    return scanner;
}