export type CreateElementOptions = {
  type: keyof HTMLElementTagNameMap;
  className?: string;
};

export function createBasicElement(argv: CreateElementOptions): HTMLElement {
  const { type, className } = argv;

  const element = document.createElement(type);

  if (className) {
    element.className = className;
  }

  return element;
}
