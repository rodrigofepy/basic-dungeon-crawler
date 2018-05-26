// from https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d
// great article, useful examples, clean code

const executeIfFunction = f => (typeof f === 'function' ? f() : f)

export const switchcase = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase

export const switchcaseF = cases => defaultCase => key =>
  executeIfFunction(switchcase(cases)(defaultCase)(key))
