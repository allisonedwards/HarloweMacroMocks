
class ITypeSignature {
    constructor(
        public pattern?: string,
        public value: any = null, 
        public min: number = null,
        public max: number = null,
        public integer: boolean = null,
        public range: any = null,
        public innerType: any = null
    ) {}
}
    
export default class Macros {      
    static add(name: string, fn: any, typeSig: any ) {
        console.log(`creating macro ${name}`);
    }
    static TypeSignature = {
        Any: new ITypeSignature("any"),
        zeroOrMore: function(...args) { return new ITypeSignature("0orMore",...args); }
    }
}