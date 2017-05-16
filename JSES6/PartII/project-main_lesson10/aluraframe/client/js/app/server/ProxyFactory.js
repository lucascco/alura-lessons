class ProxyFactory {
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if (ProxyFactory.includes(props, prop) && ProxyFactory.isFunction(target, prop)) {
                    return function() {
                        let ret = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return ret;
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                let ret = Reflect.set(target, prop, value, receiver);
                if (ProxyFactory.includes(props, prop)) acao(target);
                return ret;
            }
        });
    }

    static includes(props, prop) {
        return props.indexOf(prop) !== -1;
    }

    static isFunction(target, prop) {
        return typeof(target[prop]) == typeof(Function);
    }
}