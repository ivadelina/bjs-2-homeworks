function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item)=> item.hash === hash ); 
       if (idx !== -1 ) { 
          console.log("Из кэша: " + cache[idx].value); 
          return "Из кэша: " + cache[idx].value;
      } else {
          let result = func(...args); 
          cache.push({hash: hash, value: result}) ; 
          if (cache.length > 5) { 
            cache.shift();
          };
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result;  
      };
  };
  return wrapper;
  };

function debounceDecoratorNew(func,ms) {
  func();
  let timeout;
  let flag = true;
  function wrapper(...args) {
    if (flag) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
        flag = false;
      }, ms);
      flag = true;
    }; 
  };
  return wrapper;
};

function debounceDecorator2(func,ms) {
  func();
  let timeout;
  let flag = true;
  wrapper.history = [];
  wrapper.count = wrapper.history.length
  function wrapper(...args) {
    if(!args) {
      wrapper.history.push([])
    }
    wrapper.history.push(args)
    if (flag) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
        flag = false;
      }, ms);
      flag = true;
    }; 
    return func.call(this, ...args)
  };
  
    return wrapper;
}
