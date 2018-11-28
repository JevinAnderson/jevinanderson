import { addStyleSheet } from './resource-loaders';

export function addFontAwesome(returnPromise) {
  const options = {
    integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
    crossOrigin: 'anonymous'
  };

  if (returnPromise) {
    return addStyleSheet('https://use.fontawesome.com/releases/v5.5.0/css/all.css', options);
  }

  addStyleSheet('https://use.fontawesome.com/releases/v5.5.0/css/all.css', options)
    .then(() => {
      console.log('%cFont-Awesome loaded!!!', 'color:pink');
    })
    .catch(() => {
      console.log('%cFont-Awesome failed to load', 'color:red');
    });
}
