const Mitt = function () {};

export const useMitt = () => {
  const mitt = new Mitt();
  mitt.__proto__.events = new Map();
  // 订阅事件
  mitt.__proto__.on = function (event, callback) {
    const weakSet = this.events.get(event);
    if (!weakSet) {
      const effectSet = new Set();
      effectSet.add(callback);
      this.events.set(event, effectSet);
    } else {
      weakSet.add(callback);
      this.events.set(event, weakSet);
    }
  };
  // 只订阅一次
  mitt.__proto__.once = function (event, callback) {
    const fn = (...args) => {
      callback(...args);
      this.off(event, fn);
    };
    this.on(event, fn);
  };
  // 发布事件
  mitt.__proto__.emit = function (event, ...args) {
    const weakSet = this.events.get(event);
    if (!weakSet) return;
    weakSet.forEach((event) => event(...args));
  };
  // 取消订阅
  mitt.__proto__.off = function (event, callback) {
    const weakSet = this.events.get(event);
    if (!weakSet) return;
    if (callback) {
      weakSet.delete(callback);
    } else {
      weakSet.clear();
    }
  };
  return mitt;
};
