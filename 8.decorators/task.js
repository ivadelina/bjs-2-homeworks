function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item)=> item.hash === hash ); 
      if (idx !== -1 ) { 
        console.log("Из кэша: " + cache[idx].value); 
        return "Из кэша: " + cache[idx].value;
      };
    let result = func(...args); 
    cache.push({hash: hash, value: result}) ; 
    if (cache.length > 5) { 
      cache.shift();
    };
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  };
  return wrapper;
};

function debounceDecoratorNew(func,ms) {
  let timeout;
  let flag = false;
  function wrapper(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), ms);
    if (!flag) {
      func(...args);
      flag = true;
    };    
  };
  return wrapper;
};

function debounceDecorator2(func,ms) {
  let timeout;
  let flag = false;
  wrapper.count = 0;
  function wrapper(...args) {
      wrapper.count ++;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.call(this, ...args), ms);
      if (!flag) {
        func.call(this, ...args);
        flag = true;
      };  
    };
    return wrapper;
  };
