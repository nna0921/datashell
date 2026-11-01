
Run with budo on my local STATE.js (dev mode), each with a clean `localStorage`.
Code checked at [`7976541`](https://github.com/playproject-io/datashell/tree/7976541ff36f2b7b1c237873aae4104d8f079d1e).

## Example 1
All modules load, then it stops before drawing anything.
`head` gets nothing instead of its sub, so it fails with `reading 'sid'` ([head.js:15](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/head.js#L15)).
It's called from [app.js:37](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/app.js#L37), with the subs that [`sdb.watch()`](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/app.js#L31) gave back.

## Example 2
It gets to the buttons, then stops with "Access denied! Wrong SID `btn$small`" ([STATE.js:256-257](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L256-L257)).
One file makes two buttons ([btn.js:9](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example2/node_modules/btn.js#L9)), used as `btn` and `btn$small` ([menu.js:88](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example2/node_modules/menu.js#L88)). STATE.js doesn't allow that yet.
Serapath's bookmark marks this exact spot: [`LESEZEICHEN: 'continue here' // fix demo2/example2`](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L254).

## Example 3
All modules load, then it stops with `statedata.api is not a function` ([STATE.js:166](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L166)).
`app.js` gives only module defaults, with no `api:` for its copies ([app.js:49](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example3/node_modules/app.js#L49)). STATE.js calls it without checking.

## All examples
- Nothing gets drawn.
- They share one `localStorage` (same address), so old data from one example breaks the next one (e.g. `reading 'orphan'`, [STATE.js:152](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L152)). Clear it before each run.

## Next
One test per problem above. Fixes come only after a test shows the problem.