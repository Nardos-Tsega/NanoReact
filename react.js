function createElement(type, props, ...children) {
  return {
    type: type,
    props: {
      ...props,
      children: children?.map(child =>
        typeof child === 'object' ? child : createTextElement(child),
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  //TODO creating dom nodes
}

const NanoReact = {
  createElement,
  render,
};

NanoReact.render(element, container);
