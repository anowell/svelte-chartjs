const eventTypes = Object.keys(globalThis)
  .filter(key => key.startsWith('on'))
  .map(event => event.slice(2));

export function useForwardEvents(getRef: () => HTMLElement) {
  const destructors: Array<() => void> = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function addEventListeners(props: Record<string, any>) {
    // Clean up old listeners
    destructors.forEach(cleanup => cleanup());
    destructors.length = 0;

    // Set up new listeners
    const node = getRef();
    if (node) {
      eventTypes.forEach(eventType => {
        const propName = 'on' + eventType;
        const handler = props[propName];
        if (typeof handler === 'function') {
          console.log(`Adding ${eventType} event listeners to:`, node);
          node.addEventListener(eventType, handler);
          destructors.push(() => node.removeEventListener(eventType, handler));
        }
      });
    }
  }

  function removeEventListeners() {
    destructors.forEach(cleanup => cleanup());
  }

  return { addEventListeners, removeEventListeners };
}
