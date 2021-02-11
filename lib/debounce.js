export default function debounce(fn, duration) {
  let timeout;

  return (...args) => {
    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), duration);
  };
}
