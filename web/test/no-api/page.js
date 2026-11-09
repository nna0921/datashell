// run with: npx budo web/test/no-api/page.js:bundle.js --port 9977 -- -i STATE --full-paths
// then open http://localhost:9977/#dev=http://localhost:9977/lib/node_modules/ and look at the page
// a module without `api:` (no defaults for its copies) should still be able to make a copy
const STATE = require('STATE')
const statedb = STATE(__filename)
statedb.admin()
const { sdb } = statedb(fallback_module)
const child = require('child')

let failed = 0
main().then(done)

async function main () {
  const subs = await sdb.watch(() => {})
  check('the page gets a sub for its child', !!subs[0], subs.map(sub => sub.type).join(' '))
  const copy = child(subs[0])
  const error = await fails(copy)
  check('a module without api: can still make a copy', !error, error && error.message)
  const child_sdb = error ? null : await copy
  check('the copy gets an empty drive', typeof child_sdb?.drive?.list === 'function')
}

function fallback_module () {
  return {
    _: { child: { $: '', 0: '' } }, // one copy of `child`
    drive: {}
  }
}

// results go onto the page: the shim turns off console.log for page code (shim.js, glob.console)
function check (name, ok, note = '') {
  log(`${ok ? 'ok' : 'not ok'} ${name}${note ? `  (${note})` : ''}`)
  if (!ok) failed++
}

function done () {
  log(failed ? `${failed} failed` : 'all good')
  if (failed) throw new Error('no-api tests failed')
}

function log (line) { document.body.append(Object.assign(document.createElement('pre'), { textContent: line })) }

// gives back the error if the promise fails, or false
function fails (promise) { return promise.then(() => false, error => error) }
