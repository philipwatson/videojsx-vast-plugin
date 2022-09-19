/**
 *
 * @param {function} fn
 * @param {object|null} context
 * @return {function(): *}
 */
export function once(fn, context = null) {
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}

export function linearFn(creative) {
  return creative.type === 'linear' && creative.mediaFiles.length;
}

export function companionFn(creative) {
  return creative.type === 'companion';
}
