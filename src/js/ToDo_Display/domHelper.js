export function createElement(type, classes = [], id = false) {
  const newElement = document.createElement(type);
  if (classes) {
    let classArray = classes;
    if (!Array.isArray(classes)) {
      classArray = [classes];
    }
    classArray.forEach((className) => {
      newElement.classList.add(className);
    });
  }
  if (id) {
    newElement.setAttribute("id", id);
  }
  return newElement;
}

export function appendChildren(target, ...children) {
  children.forEach((child) => {
    target.appendChild(child);
  });
}
