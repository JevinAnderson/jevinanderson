const links = {};

export const addStyleSheet = (href, options = {}) => {
  if (links[href]) {
    return links[href];
  }

  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';

  Object.keys(options).forEach(key => {
    link[key] = options[key];
  });

  links[href] = new Promise((resolve, reject) => {
    link.onload = resolve;
    link.onerror = reject;
  });

  document.head.appendChild(link);

  return links[href];
};

const scripts = {};

export const addScript = (src, options = {}) => {
  if (scripts[src]) {
    return scripts[src];
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;

  Object.keys(options).forEach(key => {
    script[key] = options[key];
  });

  scripts[src] = new Promise((resolve, reject) => {
    script.onload = resolve;
    script.onerror = reject;
  });

  document.head.appendChild(script);

  return scripts[src];
};
