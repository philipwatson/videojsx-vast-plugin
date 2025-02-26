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

export function cloneJson(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function convertOffsetToSeconds (offsetCode, duration = null) {
  let result = null;
  if (typeof offsetCode === 'string') {
    if (offsetCode.includes('%')) {
      if (duration != null) {
        const percent = offsetCode.replace('%', '');
        result = percent / 100 * duration;
      }
    } else if (offsetCode.includes(':')) {
      const [hours, minutes, seconds] = offsetCode.split(':').slice(-3);
      result = parseInt(hours || 0, 10) * 3600 + parseInt(minutes || 0, 10) * 60 + parseInt(seconds || 0, 10);
    } else {
      result = parseInt(offsetCode)
    }
  }

  if (result == null) {
    result = Number(offsetCode);
  }

  return isNaN(result) ? null : result;
}

export function isString(str) {
  return typeof str === 'string';
}

export function isNullishOrBlankString(str) {
  return str == null || (isString(str) && str.trim().length === 0);
}
