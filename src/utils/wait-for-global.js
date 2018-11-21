const globals = {};

export function waitForGlobal(key) {
  if (typeof window === 'undefined') return Promise.reject('This tool is meant to be used only on client side logic');

  if (globals[key]) return globals[key];

  const start = Date.now();

  const promise = new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const global = window[key];
      if (global) {
        clearInterval(interval);
        resolve(global);
      } else if (Date.now() - start > 2000) {
        clearInterval(interval);
        reject(`Couldn't find global variable: ${key}`);
      }
    }, 250);
  });

  return (globals[key] = promise);
}

export default waitForGlobal;
