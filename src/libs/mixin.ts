export function constructorMixin(sup: Function, base:Function): any {
    var descriptor = Object.getOwnPropertyDescriptor(base.prototype, "constructor");
    base.prototype = Object.create(sup.prototype);

    var handler = {
        construct: function(target: Object, args: any) {
            var obj = Object.create(base.prototype);
            this.apply(target, obj, args);
            return obj;
        }, 

        apply: function(target: Object, that: Object, args:any) {
            sup.apply(that, args);
            base.apply(that, args);
        }
    };
    var proxy = new Proxy(base, handler);

    descriptor.value = proxy;
    Object.defineProperty(base.prototype, "constructor", descriptor);
    return proxy;
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}
