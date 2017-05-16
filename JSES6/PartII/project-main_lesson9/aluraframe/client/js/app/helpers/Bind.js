class Bind {
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(model, props, target => view.update(target));
        view.update(model);
        console.log(proxy, model);
        return proxy;
    }
}