# Ali's worklogs 267–273 → notes

Plan by Serapath: watch Ali's worklogs 267–283 + their threads, note every task, bug and agreement, mark what's outdated and what's still open.

✅ done in today's code · 🗑️ outdated · ⏳ still open

## Overview

| # | Date | Topic | Still open | Affects my work? |
|---|---|---|---|---|
| 267 | 18/5/2025 | `net` addresses with modulepaths, `$ref` in overrides, first `net` proposal | `$ref` across many override levels (STATE.js @TODO), lint (standardx), a doc for the `net:` prop | yes: a `$ref` override test, lint in package.json |
| 268 | 19/5/2025 | `net` proposal built with a real example, `io.md` / `net.md`, linting | saving connections so they come back after a reload, lint in datashell, `drive.list('/')` throws, `list` matches the wrong dataset, `get_input` treats `0` / empty as "not saved" | yes: lint, 2 drive tests, a reload test for connections later |
| 269 | 22/5/2025 | files from a fixed commit (version control), first `sdb.drive({ type })` api, docs review asked | STATE.js still loads from `main`, not a commit; docs don't explain `watch(onbatch, on)`; cheat sheet not in datashell docs | yes: docs for CONTRIBUTING / api.md |
| 270 | 23/5/2025 | the path drive api (`get` / `put` / `list` / `has`) + its docs; keep the core minimal | Ahmad's "sometimes object, sometimes JSON" from `drive.get` (never checked); `drive.get` returns `null` vs throws; two drive docs (api.md, temp.md) | yes: a drive test for json files, the minimal-core rule for my proposals |
| thread | 24–26/5/2025 | **args for instances:** how a parent passes data down (`menu` → `btn`) without overrides for every level | docs don't explain `api(args)` or `0: { data }` entries; `structuredClone` only on one path; a list of STATE simplifications was never made | yes: the `(args, tools, [prev])` form (example 3), an args test, docs |
| 271 | 26/5/2025 | `args` implemented; serapath's feedback: the `(args, [fallbacks], tools)` form, data entries instead of override functions, update every example | the examples still mix old `([x])` and new style (example1/foo.js); the simplifications list | yes: example 3's override, example 1 cleanup, docs |
| 272 | 31/5/2025 | feedback from 271 implemented; io: `at()` must not return a port, connections restored after a reload; "Revamp STATE", keep it sync | io.at still returns a port and nothing is restored after a reload; STATE.js still has 7 async functions; the `onbatch` issue (Discord link); io/net concept not in docs | yes: the reload test, the sync rule for my fixes, `watch2` leftover |
| 273 | 6/6/2025 | `onbatch` gets paths, not file contents; `{ type, data }` convention; first test-case list; rewrite STATE.js from scratch | batch is still `{ type: dataset, paths }` (whole dataset on every change, no `put` / `del` types); `on[type]` mixes datasets and messages; lint; the STATE rewrite | yes: a `watch` test (only the changed path), my net.js message shape |

---

## 267: `net` addresses + `$ref` in overrides (18/5/2025)

links: [video](https://youtu.be/wI7gYsydUn8) · [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2888961192) · [GitHub: IO proposal (#33)](https://github.com/playproject-io/playproject-io.github.io/issues/33#issuecomment-2888957495) · Discord thread 18–19/5/2025

**What he did:**
- STATE v0.0.16 → [v0.0.17](https://github.com/alyhxn/playproject/commit/fcc7a6a40d6c48fd20797f442bba6295220b5342): use modulepaths as addresses inside `net`, modulepaths in overrides, a module `SID` error, a file address error, docs.
- IO v0.0.1 → [v0.0.2](https://github.com/alyhxn/playproject/commit/a31832ad3cb24fe15ab36bdc73a929f43179d7b8): tried out a `net` prop (3h), plus 7h of discussion.

**Agreements with serapath:**
1. **`$ref` in overrides:** a module may only give a sub files from **its own** repo. If its override doesn't change a `$ref`, the sub keeps using the file from the **sub's** repo. Example: `function override ([foo]) { return foo() }` changes nothing, so every `$ref` stays the sub's.
2. **Everything in a fallback / override must be serializable** (it's saved in the db). No functions like `inject`, `fill`, `onclick` in `net`. Handlers live outside, like `onbatch`.
3. **Code style:** add `standardx` as a dev dependency (camelCase rule off), plus `npm run lint` (`standardx --fix`). For AI-written code, use a prompt template that asks for standard style + snake_case.
4. **A proposal is for proposed tasks.** A spec (like how `net` is defined) goes into a markdown file as a task output, and then gets discussed.
5. **Write an `io.md` or `net.md`** that explains the `net` prop the way the video does, for new developers.

**Serapath's questions / feedback:**
- What does "handle file addresses" mean? → Ali: the `$ref` ids defined by sub overrides / fallbacks.
- Why is `on` passed to `sub.watch(…)`?
- `data` in an event definition: at most a `transform(data)` function? `service` = which api the receiver offers?
- How does a developer find the address names and service names of a sub, from the module where they write the override (not by logging inside `menu.js`)?

**Status today (checked in datashell):**
- ✅ **`$ref` rule (1):** `compare()` gives a `$ref` the overriding module's `filepath` only if the override **changed** it. Otherwise it keeps the sub's ([STATE.js:626-639](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L626-L639)). The file is then fetched from that module's folder ([STATE.js:860](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L860)).
- ⏳ **…but only for one level:** `//@TODO: What if before is from an override not fallback` ([STATE.js:631](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L631)). If a module overrides an **override**, it isn't handled yet.
- ✅ **Serializable `net` (2):** `net` now only holds names (strings), e.g. `net: { api: ['inject', 'fill'], event: { click: [] } }` ([example1/btn.js:151-156](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L151-L156)). Ali also said on 19/5 that they were only names.
- ⏳ **Lint (3):** no `standardx` and no `lint` script in datashell's `package.json`.
- ⏳ / 🗑️ **`net.md` (5):** [doc/net.md](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/net.md) exists, but it explains today's **net.js** (`invite` / `accept`), not the `net:` prop in fallbacks. Is the `net:` prop still used now that net.js exists?
- ✅ **`watch(listener, on)`:** still there. `on` is saved as the module's service names (`status.services[node_id] = Object.keys(on)`, [STATE.js:946-947](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L946-L947)). That's the answer to "why pass `on` to watch".

**Questions for serapath:**
- Is the `net:` prop in fallbacks (api / event name lists) still needed now that net.js exists, or is it outdated?
- Is `standardx` + `npm run lint` still wanted for datashell?

**Affects my work:**
- **A test for the `$ref` rule:** an override that keeps a sub's `$ref` loads the sub's file, and one that changes it loads its own. Then the same with an override of an override (the @TODO).
- **Lint:** fits into `package.json#scripts` + CONTRIBUTING.md (rows 16–17).

**From the video (11 min):**
- **0:20 `listify(tree)`:** `tree` is the component tree STATE builds. `listify` turns it into a flat list of every modulepath a module can reach below it. That's how you find the address to use in an override. Still there today (`tools.listify`, [STATE.js:60](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L60)).
- **1:40 Localizing modulepaths:** the paths in the tree aren't relative (e.g. `page>` should be dropped when `app` looks at them). Ali thinks fixing it is extra work for no gain, so he left it.
- **3:30 Wrong sid error:** in Ahmad's repo, passing a **module's** sid where an **instance's** was expected went unnoticed. Now STATE throws a clear error with a link to the docs. That's today's "Access denied! Wrong SID" ([STATE.js:256-257](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L256-L257)), the same error example 2 hits.
- **4:50 File address error:** on GitHub Pages the project name is stripped from the URL, so files weren't found. Fixed; still in `get_input` ([STATE.js:850-858](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L850-L858)).
- **5:55 His `net` idea:** a module lists its own **APIs** (services, e.g. a button's `inject` for CSS and `fill` for text) and its **event names** (`onclick`, `onhover`). What happens on an event is usually set by an override, e.g. "on click, send these two messages to this address" (open / close a lightbox). He sees it as a base to automate the io module.

---

## 268: the `net` proposal, built (19/5/2025)

links: [video](https://youtu.be/JrVHHuZ6ut4) · [GitHub: IO (#33)](https://github.com/playproject-io/playproject-io.github.io/issues/33#issuecomment-2889756197) · [GitHub: playproject (#19)](https://github.com/playproject-io/playproject-io.github.io/issues/19#issuecomment-2889760119) · [serapath's feedback (#33)](https://github.com/playproject-io/playproject-io.github.io/issues/33#issuecomment-2892264954) · Discord thread 19–25/5/2025

**What he did:**
- IO → [v0.0.2](https://github.com/alyhxn/playproject/commit/a31832ad3cb24fe15ab36bdc73a929f43179d7b8): built the proposed `net` prop with a real example (a button sends `rainbow_theme` to the page on click), added `io.md` and `net.md`.
- playproject v0.0.14: added linting (`standardx` + `eslint-config-standardx`).
- Proposal: find a way to remove `msg_cache` from modules.

**Serapath's feedback:**
1. **`net` should only say who connects to whom**, not which events get sent. A button doesn't know `rainbow_theme`. A fallback runs only once, so how would it send `dark_theme` later? Cycling through messages on every click (`msg_cache`) and opening a new `io.at` connection on every click are both wrong.
2. **Idea:** a port sends a first message saying what it wants (subscribe to an api / event). **Subscribe / connect events are saved in the db**, so all connections come back after a reload.
3. **Example:** X (theme picker) uses button Y1 and listens to its clicks. The app (Z / W) registers as a theme listener. An override should make X also (or instead) listen to button Y2.
4. **A developer should only need the "api surface" of other modules**, never their code. There should be a way to **ask a module for its API and log it** (logs are okay).
5. **Style:** reformatting should be its own commit. A line that starts with `(`, `{` or `[` needs a `;` in front (standardjs). `eslint-config-standardx` is fine if it's needed.
6. **Before anything else: one list of all "construction sites"**, each as a task with a worklog, in an agreed order (quick fixes first, then by importance). Every fix, even a 5-minute one, gets a task and a worklog.

**Other tasks named in the thread:**
- a small fix to allow [commit-based version control](https://discord.com/channels/859134561018839060/1373920018147971113/1374096514514944041)
- the [`sdb.drive` fixes](https://discord.com/channels/859134561018839060/1373920018147971113/1374096514514944041) (same message as above), drive docs, **drive api updates** (found, see below)
- **the `0` bug** ([serapath, 21/5](https://discord.com/channels/859134561018839060/1359931884502782112/1374703896433266752)): Ahmad's default value `0` didn't work with `drive.get`. It only worked if `drive.put` ran first. So maybe the fallback isn't handled, or the value `0` (falsy) causes it. Serapath's idea: store every value as `{ value }`, so `{ value: undefined }` and `undefined` are different, and a default is stored as `{ value: 0 }`.
- move the `net` "proposal" section into a markdown file as a task output
- STATE returning `$ref` ids for sub overrides (from 267)

**Status today (checked in datashell):**
- 🗑️ **The `net` prop proposal (1):** replaced by **net.js** (`invite` / `accept`, [net.js](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/net.js)). The parent connects to the child at runtime and names a protocol, so the fallback doesn't define events anymore. That's what serapath asked for.
- ✅ **`msg_cache` and `io.at` on every click:** gone. Only commented-out leftovers in [example1/btn.js:56-69](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L56-L69), plus an old `net: { api, event }` prop ([btn.js:151-156](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L151-L156)). → leftovers to clean up.
- ⏳ **Saving connections in the db (2):** net.js keeps them only in memory (`hub`, `sub`). After a reload nothing is restored.
- ⏳ **Ask a module for its API (4):** that's DOCS.js today (`get_actions`). Fits the devkit task.
- ⏳ **Lint (5):** added in playproject, but datashell's `package.json` has no lint.
- 🗑️ **`io.md`:** io.js is outdated. `doc/net.md` covers net.js.
- ✅ **Commit-based version control:** done in [269](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2901433878).
- 🟠 **The `0` bug:** the `{ value }` idea isn't used, but the drive works with files now: `drive.get` gives `{ id, name, type, raw }`, and a missing file throws. So `0` and "not there" can't be mixed up anymore at that level.
  - ⏳ **possible bug, same kind:** `get_input` checks `if (!result)` ([STATE.js:844](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L844)). A saved file that is `0`, `''` or `false` (e.g. an empty css file) counts as "not saved", so it is loaded again from the fallback. That can undo a `drive.put`. Needs a test: `put` an empty / `0` file, then `get` it.
- ✅ **Drive fixes / docs:** Ali put them in his 269 proposals and did them in 270 (path drive api + docs).
- **Drive api update** (serapath's message): no more `sdb.drive({ type: '...' })` first. Instead `const { drive } = sdb`, then `drive.get('icons/cross.svg')`, `drive.list('icons/')` for file names, `drive.list()` for dataset names, and `drive.list('/')` = `drive.list()`. Today ([STATE.js:986-1100](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L986-L1100)):
  - ✅ `drive.get(path)`, `drive.list('icons/')`, `drive.list()` work like that. Also `drive.put` and `drive.has`.
  - 🟠 `drive.get` gives back `{ id, name, type, raw }`, not just the data. Fine, but different from his example.
  - ⏳ **possible bug:** `drive.list('/')` should be the same as `drive.list()`, but it throws "dataset not found". `'/'` matches no dataset name ([STATE.js:1062-1073](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1062-L1073)).
  - ⏳ **possible bug:** `list` finds the dataset with `path.includes(name)`, so `list('myicons/')` can match `icons/` if that comes first ([STATE.js:1066](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1066)).
  - `get` / `put` / `has` only use the first two parts of a path (`path.split('/')`), so there are no folders inside a dataset. That fits "the drive is minimal on purpose".

**Questions for serapath:**
- Should net.js save connections in the db so they come back after a reload (feedback 2)? Is that still the plan?
- Should STATE still store values as `{ value }` (the `0` bug), or are files with `raw` enough now?

**Affects my work:**
- **Cleanup:** remove the old `net` prop and the commented `io.at` code from example 1 (separate commit).
- **A test later:** connections come back after a reload (once that's decided).
- **Lint:** same as 267, `package.json#scripts`.
- **Drive tests:** `drive.list('/')` = `drive.list()`, and `list('myicons/')` doesn't return `icons/`. Test first, fix only if red.
- **Drive test (the `0` bug):** `put` a file that is `0` or empty, reload, `get` it. It should still be `0` / empty.

**From the video (6 min):**
- **0:20 `net`:** `api` = names of the services the module offers. `event` is now an **object** (names + definitions) instead of an array. A module's own fallback leaves `event` empty; only overrides fill it (the page tells the button what to send on click).
- **2:10 Ali's own concern:** io has no way to send data on a click, so he needs `msg_cache` and manual code that "could become complex as the module scales". That's where "remove msg_cache" comes from.
- **3:10 Demo:** one click registers a theme, the next switches it. Works.
- **3:50 Lint:** helpful but "too strict" (no extra blank lines). Serapath later said it's a real standardjs rule.
- **4:40 Dev tools:** Ali says devs will always need console logs, e.g. to find a module's id. Serapath's reply (20/5): a dev should only need another module's **API**, and get it in code. Logs are fine.

---

## 269: version control for fetched files + first drive api (22/5/2025)

links: [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2901433878) · Discord thread 22/5/2025

**What he did:** STATE v0.0.17 → [v0.0.18](https://github.com/alyhxn/playproject/commit/895579bb57e5c57fc66e031377cba6c73a313703)
- **Commit-based version control (20min):** `boot.js` / `init.js` load STATE.js, io.js and localdb.js from a **fixed commit** (`…/playproject/a31832a…/`) instead of `refs/heads/main`. So a page keeps working with the version it was made for, even when `main` changes. (This is the "commit-based version control" fix serapath asked for in 268.)
- **First `sdb.drive` api (1h):** `sdb.drive({ type: 'theme' })` gives back `{ get, put, list }` for one dataset.
- **Proposals (next tasks):** the `sdb.drive` fixes, drive docs, a review of all docs, overridden nodes use the override's files (`$ref` id, see 267), and serapath's feedback on #33 (see 268).

**Serapath's feedback:**
1. The worklog had two "worklog" sections (one should be "proposal"), and the "feedback" link pointed to a plain issue, so it was unclear which feedback he meant. Otherwise: the proposal looks good, go ahead.
2. **Review all docs:** remove what's outdated and add what's missing. Example: `sdb.watch(onbatch, on)` changed, and even he doesn't know what the second argument `on` does.
3. While fixing the drive docs, check **all** docs, and maybe include [ui-components' cheat_sheet.md](https://github.com/playproject-io/ui-components/blob/a9eb3407fdc26555d9c8c820ed9f4b53e0ac2212/guide/cheat_sheet.md).
4. The comment linked worklog-267 instead of 269 (Ali fixed it; he was sick).

**Status today (checked in datashell):**
- 🟠 **Fixed version:** the shim now picks files through a version list in [drive.json](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/drive.json) (`"1": { "STATE": "refs/heads/main/lib/node_modules/STATE.js", … }`, used at [shim.js:208](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/shim.js#L208) and [shim.js:582-584](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/shim.js#L582-L584)). So pinning works by design, but the only version (`1`) points to **`main`**, not a commit. Every page gets whatever is on `main` right now.
- 🗑️ **`sdb.drive({ type })`:** replaced by the path api from 268 (`drive.get('icons/x.svg')`, `drive.list()`).
- ⏳ **Docs review (2):** [doc/api.md:47](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L47) still shows only `sdb.watch(onbatch)`. The second argument `on` isn't documented anywhere. (It saves the module's service names, `status.services`, see 267.)
- ⏳ **Cheat sheet (3):** not in datashell's `doc/`.
- ⏳ **`$ref` for overridden nodes:** same as 267 (works for one level, @TODO for an override of an override).

**Questions for serapath:**
- Should `drive.json` point version `1` (or a new `2`) to a **commit** instead of `main`, so a page doesn't break when `main` changes? This matters once my PR is merged ("live").
- Is `on` in `watch(onbatch, on)` still needed now that net.js exists, or can it go?

**Affects my work:**
- **Merging my PR:** today a merge goes live for every page right away (version `1` = `main`). That's why serapath wants all apps tested first. A pinned version would make merges safer.
- **Docs:** add `watch(onbatch, on)` to `doc/api.md`, and link the docs from CONTRIBUTING.md.

---

## 270: the path drive api + docs (23/5/2025)

links: [video](https://youtu.be/zvKvdIsMpKA) · [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2904561541) · [serapath's feedback (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2905465677) · Discord thread 23–25/5/2025

**What he did:** STATE v0.0.18 → [v0.0.19](https://github.com/alyhxn/playproject/commit/5052beac1d8395d0a62c664c50af74ff1bd9c75e)
- **The drive api serapath asked for in 268:** `drive.list()` (dataset names), `drive.list('lang/')` (file names), `drive.get('lang/en-uk.json')` → `{ id, name, type, raw }` or `null`, `drive.put(path, buffer)`, `drive.has(path)`. Every method throws if the dataset doesn't exist.
- **Docs for it** in `doc/state/temp.md`.
- **Proposals (next):** docs review, `$ref` for overridden nodes (267), passing arguments without an override (through fallbacks), the IO feedback (268).

**Agreements with serapath:**
1. **Keep the core minimal.** STATE / IO only get something added if it can't be done otherwise. "Reduce API surface wherever possible." So: no `get` / `put` for whole datasets (folders). A helper on top of the existing methods is fine.
2. **`list` stays**, separate from `get`: later files live in a real file system and can be gigabytes. `list` gives names only, `get` loads the content.
3. Every "implement feedback" task must link the **exact feedback comment** (Discord → copy it to hackmd / pastebin and link that).

**Serapath's question (never answered in the thread):**
- Ahmad saw a maybe-bug: `drive.get` sometimes gives an **object** and sometimes a **JSON string**. Is that a drive bug?

**Status today (checked in datashell):**
- ✅ **The path api (1):** same shape today, [STATE.js:986-1100](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L986-L1100). `list` stays separate from `get` (2).
- 🟠 **`drive.get` on a missing file:** Ali's version returned `null`, today it **throws** `FAIL.nofile` ([STATE.js:1018](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1018)). The docs ([api.md:101-121](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L101-L121)) should say which one is right.
- ⏳ **Ahmad's object-vs-JSON:** still possible by reading the code. `get_input` ([STATE.js:846-868](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L846-L868)) returns `response.json()` (an object) for a `$ref` json file, but a `raw:` given inline in a fallback is returned **as written**, and `put(path, buffer)` stores the buffer as-is. So a `.json` file is an object if fetched, and a string if someone wrote `raw: '{"a":1}'` or `put('x.json', '…')`. Needs a test.
- ⏳ **Two drive docs:** [doc/api.md:82](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L82) and [doc/state/temp.md:209](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/state/temp.md#L209) both describe the drive. One should go (docs review, 269).
- ⏳ **Passing arguments without an override:** not seen in today's code yet, check in later worklogs.

**Questions for serapath:**
- `drive.get` on a missing file: throw (today) or `null` (Ali's docs)?
- Was Ahmad's object-vs-JSON bug ever fixed, or is it still open? (my reading: still possible)

**Affects my work:**
- **Drive test:** `drive.get('x.json')` gives an object for a fetched `$ref` file, an inline `raw:` object, an inline `raw:` string and a `put` string. All four should give the same type.
- **Rule for my proposals:** everything in PROPOSAL.md / the API refactoring must pass "can this be done without new API?". Helpers go into modules, not into STATE.js.
- **Docs:** one drive doc, and say whether `get` throws or returns `null`.

**From the video (1 min):**
- Ali suggests dropping `list`: `get('dataset/')` (no file name) could list the files, and `put` / `has` could work on whole datasets too. Serapath said no: `list` stays so you can see names without loading big files, and the core stays small.

---

## Thread: args for instances (24–26/5/2025, between 270 and 271)

links: Discord thread 24–26/5/2025 · built in 271

**The problem (serapath):** A → B → C → D. In vanilla JS, `menu({ names })` passes `[name]` to each `btn(...)`. Data given to a component **shapes** the data its subs get (`{ a: x + 1 }`). With overrides only, B would have to override C **and** C's subs **and** their subs, and know how each level derives its data. "THIS IS MADNESS."

**The solution (agreed 26/5):**
- A sub-module's instance entries hold **data, not functions**: `_: { menu: { 0: opts0, 1: opts1, $: … } }`.
- That data arrives as `args` in the sub's **`api`** (= `fallback_instance`): `function api (args, [defaults]) { … }`. The sub's api decides what its own subs get, e.g. `dependency: { 0: { a: args.x * 100 } }`.
- Overrides of sub-sub-… levels stay possible, but only as the **exception** for badly written components that don't pass `opts` on.
- **`structuredClone` the args** internally: no shared objects or callbacks between instances (no "side channels"), only pure data.
- Ali's tasks: process the new args in `_` (instances, maybe modules), update the validation rules, try it in the examples, update docs.
- Serapath: STATE is "relatively complete" now. Next: a list of **possible simplifications**, do the easy ones, keep the rest in a backlog.

**Status today (checked in datashell):**
- ✅ **Data entries → args:** a non-function entry is stored with `structuredClone` ([STATE.js:742](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L742)) and passed to the fallback as its first argument ([STATE.js:62](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L62), [STATE.js:373](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L373)).
- ✅ **`api(args, tools, [prev])`:** that's today's form ([STATE.js:167](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L167)). My "empty api" fix (PR#1) sits in exactly this code. Example 3's `override_app ([app])` is the **old** form from before this thread, so it's an **outdated example**, not a bug (confirms my 4️⃣ task).
- 🟠 **`structuredClone`:** only for data entries. An override function's result is copied with `JSON.parse(JSON.stringify(…))` ([STATE.js:725](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L725)), which silently drops functions instead of failing. Probably fine, but worth a test: an entry with a function inside should not reach the instance.
- ⏳ **Docs:** [api.md:203-224](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L203-L224) still says instance entries are "override functions", and `fallback_instance()` ([api.md:260](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L260)) has no `args`. No doc says how `0: { data }` reaches `api(args)`.
- ⏳ **The simplifications list:** check later worklogs for it.

**Questions for serapath:**
- Is the `0: { data }` → `api(args)` way still the intended way to pass data down, now that net.js exists? (If yes, it should be in the docs and in a test.)

**Affects my work:**
- **Test:** `page` has `_: { child: { 0: { x: 1 } } }`, child's `api(args)` returns a drive built from `args`, and the instance gets it. Plus: changing the args object after the fact doesn't change the instance (the clone).
- **Example 3:** update its override to `(args, tools, [app])` (already in 3️⃣ of #39). This thread is the @input for why.
- **Docs:** `api(args, tools, [prev])` and data entries in `api.md` (goes with the docs review from 269).

**From the video:** see 271, which implemented this.

---

## 271: `args` implemented (26/5/2025)

links: [video](https://youtu.be/YUwOV0b_J5A) · [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2909179273) · [serapath's feedback (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2909586142) · Discord thread 26/5–1/6/2025

**What he did:** STATE v0.0.19 → [v0.0.20](https://github.com/alyhxn/playproject/commit/77fdc5738078ae4e37fb278793e5865674671d9d): the args idea from the thread above. A data entry under `_` (`app: { $: { x: 0, y: 1 } }`) is stored in `status.args` and given to the fallback as `{ listfy, tree, args }`. The instance api got `{ old_fallback, ...args }`. `msg_cache` removed from btn.js.

**Serapath's feedback (from reading the code; the video added nothing):**
1. **One form for every fallback / override:** `(args, [fallbacks], tools)`. `args` is needed most, fallbacks to reuse what subs defined, tools (`listify`, `tree`) least (mostly for exploring during development). Not `{ old_fallback, ...args }`.
2. **Instance entries are data, not functions:** `menu: { 0: opts_menu, 1: opts_menu }`, `btn: { 0: 'Register', 1: 'Switch' }`. One small `override (args, [menu])` instead of one function per instance. "A lot more readable AND shorter." **Update that everywhere**, even if Ahmad's code breaks: the error message links to the docs, we're not in the "stable API" phase.
3. **The instance should get the args, not the module fallback** (app.js:53 put them in the module fallback).
4. page.js rewritten as an example: `app: { $: app$, 0: { x: 0, y: 1 } }`, `app$` overrides the module fallback and sets `data.api`, which overrides the instance fallback and passes data on to `head`, `menu`, `btn` as data entries.
5. (Thread) Ali got stuck in "deep timing issues" for a week after this. Next worklog on 1/6.

**Status today (checked in datashell):**
- ✅ **One form (1):** today it's `fallback(args, tools)` ([STATE.js:62](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L62)) and `api(args, tools, [prev])` ([STATE.js:167](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L167)). Note the order: **tools second, fallbacks third**, the other way round from serapath's comment. Example 1 uses it: `app0 (args, tools, [app])` ([example1/page.js:138](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/page.js#L138)).
- ✅ **Data entries (2):** `btn: { 0: '', 1: '' }` in [example1/menu.js:195](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/menu.js#L195). Non-function entries are cloned into `status.args` (thread above).
- 🟠 **"Update everywhere" (2):** not finished. Old style left: [example1/foo.js:26](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/foo.js#L26) `override_nav ([nav])`, and example 3's `override_app ([app])`. (The `fill([data])` functions are onbatch handlers, not overrides, so they're fine.)
- ❓ **Instance gets the args (3):** today **both** get them: the module fallback at [STATE.js:62](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L62) and the instance fallback at [STATE.js:373](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L373). Is that intended?

**Questions for serapath:**
- The form is `(args, tools, [fallbacks])` today, your comment said `(args, [fallbacks], tools)`. Which one is final? (The docs should show it.)
- Both the module fallback and the instance fallback get `args` today. Intended, or only the instance (your point 3)?

**Affects my work:**
- **Example 3's override** (3️⃣ in #39): this feedback is the @input for the new form. Also [example1/foo.js:26](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/foo.js#L26) needs the same update. One commit per example.
- **Test for args** (from the thread above) should also check: an override of an instance gets `(args, tools, [prev])` and can read `args`.
- **Docs:** the form and the data entries, once serapath confirms the order.

**From the video (3 min):**
- **0:24 Demo:** `page.js` gives `app` the values `{ x: 0, y: 1 }`. `app` passes `{ x: x + 1, y: y + 2 }` down to `head`, and `head` logs `1` and `3`. Correct.
- **1:30 How it works:** when STATE walks the fallbacks, an entry that's an **object** (not a function) is saved with `structuredClone` and later given to that instance's fallback. Ali had no good name for it. Today that's `status.args` ([STATE.js:742](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L742)).

---

## 272: feedback implemented, io api for reloads, "Revamp STATE" (31/5/2025)

links: [video](https://youtu.be/XFRBh-1fasc) · [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2926620822) · [GitHub: IO (#33)](https://github.com/playproject-io/playproject-io.github.io/issues/33#issuecomment-2926725270) · [feedback io (#33)](https://github.com/playproject-io/playproject-io.github.io/issues/33#issuecomment-2926898779) · [feedback state (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2927072351) · Discord thread 1–5/6/2025

**What he did:** STATE v0.0.20 → [v0.0.21](https://github.com/alyhxn/playproject/commit/d74c9516d8ee4228532cef1c93754fe0be0573c5) (3h + 2h debugging): the 271 feedback (the `(args, tools, [fallbacks])` form, data entries) and an updated `net` prop (IO v0.0.4).
- **Proposals:** 1. Revamp STATE, 2. docs review, 3. `$ref` for overridden nodes, 4. an `onbatch` issue from Ahmad ([Discord](https://discord.com/channels/859134561018839060/1376646981501452509/1376669856799391805)): serapath's request that `onbatch` gets file paths, see 273.

**Serapath's feedback on io (the design of io, still valid for net.js):**
1. **`at(address)` must not return a port.** A port kept in a variable can't be restored after a reload. Instead `at(address)` adds the address to a **persistable Set** of wanted connections (calling it again removes it = "stop connecting"). The system connects, **reconnects if a connection breaks**, and every (re)connection triggers `io.on(port => {})`. Like `watch(onbatch)` for files, `io.on` is for all connections. A component that wants a `connections` object fills it inside `io.on`.
2. **`net` with `address` + `type`:** ok for now. Message types are like "input types", and later each type should be a "type named" dataset with its own state. The verbose `button.onclick` (checks, parse / stringify) is fine for now: **make io feature-complete and stable first, simplify later.** Put this concept into the io / net docs.

**Serapath's feedback on STATE:**
3. Good worklog, good choices, incl. the **order of args** for fallbacks / overrides (answers my 271 question: `(args, tools, [fallbacks])` is accepted).
4. Order of proposals: quick-fix (4) the `onbatch` issue + docs, so Ahmad can continue; then (3) `$ref`; **then "Revamp STATE"** with thorough time. STATE.js became very long.
5. **The `example/` folders are meant to grow into test cases that cover all STATE features.** (Same as what he told me.)
6. **Rule for the revamp: avoid `async`, keep everything `sync`** wherever possible. Discuss if something seems impossible. "It's often surprising with how much sync you can get away."

**Status today (checked in datashell):**
- ⏳ **io (1):** [io.js:12-42](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/io.js#L12-L42): `at(id)` still **returns the port**, there's no Set of wanted addresses, no reconnect, and nothing is restored after a reload. net.js ([net.js](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/net.js)) replaced the `net` prop with `invite` / `accept`, but keeps connections in memory too (see 268). So the reload design was never built.
- ✅ **Args order (3):** `(args, tools, [prev])` is the accepted form ([STATE.js:167](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L167)). Closes the 271 question.
- ⏳ **Sync rule (6):** STATE.js still has 7 `async` functions: `make_input_map`, `get_input` (fetch), `recurse` (admin), `watch`, `drive.get`, `drive.put` ([STATE.js:828-1022](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L828-L1022)). A commented-out `watch2` ("make watch a synchronous function") sits at [STATE.js:955-970](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L955-L970): a leftover of this rule.
- ⏳ **io / net concept in the docs (2):** `doc/net.md` doesn't mention reloads, reconnecting, or the Set of addresses.
- ✅ **The `onbatch` issue (4):** done in 273 (paths instead of contents), but not the way serapath asked, see 273.
- ⏳ **Revamp STATE:** check the next worklogs for what was done.

**Questions for serapath:**
- Is the reload / reconnect design for io (a Set of wanted addresses, `io.on` for every (re)connection) still the plan for net.js? Nothing of it exists today.
- The sync rule: is `watch` meant to become sync (the `watch2` leftover)? `drive.get` needs `fetch` for `$ref` files, so where is async allowed?

**Affects my work:**
- **Rule for my fixes:** no new `async` in STATE.js.
- **Test later:** after a reload, a parent–child connection comes back (once net.js saves it). Same as 268.
- **Leftover:** the `watch2` block is either the start of the sync `watch` or dead code (goes with "remove the debug leftovers" in #39).
- **Docs:** the io / net reload concept, when net.js gets it.

**From the video (9 min):**
- **0:24 io:** `connect` now returns the port, so a component can keep it. Serapath's reply: no, a kept port can't come back after a reload, `io.on` must handle every connection.
- **1:10 Data on a click:** the switch button sends an array and flips between `rainbow` and `default`. Ali asks: should the **sender** carry that data, or should the receiver (page) decide? Left for discussion.
- **3:12 nav.js updated** to serapath's style: module overrides set `api`, and menu / btn read their text from `args`. `page.js` is **not** updated: that needs more STATE changes and didn't work yet.
- **4:54 Higher module wins:** page's old overrides beat nav's new ones, so he had to comment them out to see nav's result.
- **6:00 Timing bug:** menu got its data **before** the override that sets its new `api` had run, so it used the default. "Many other timing issues inside STATE."
- **7:26 Why `(args, tools, [fallbacks])`:** fallbacks go **last** because not every function gets them, so the order stays the same everywhere. Serapath agreed. That's today's order ([STATE.js:167](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L167)).
- **8:30** Things were "added far apart without good planning", so this part of STATE needs a review.

---

## 273: `onbatch` with paths (6/6/2025)

links: [video](https://youtu.be/lilKjTt6lc0) · [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2949095070) · [serapath's feedback (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2950742531) · Discord: the onbatch request + thread 6–10/6/2025

**The request (serapath, from Ahmad's BUG worklog):** `watch` gave `{ type: 'dataset', data: [...file contents] }`. Nobody can tell which content belongs to which file, or which file changed. Instead, like the drive api: a batch array of `{ type: 'put|del|…', data: 'dataset/path/to/file.ext' }`. No contents (a file may be a gigabyte); the handler calls `drive.get(path)` if it needs it. Which dataset it belongs to: `data.startsWith(dataset)` or `data.split('/')`, up to the component developer.

**What he did:** STATE v0.0.21 → [v0.0.22](https://github.com/alyhxn/playproject/commit/ae069370071395ab77af7ea3b333ffffbbc8dc19): `onbatch` now gets `{ type: <dataset>, paths: [...] }`, page.js uses `args`, docs updated.
- **Proposals:** 1. Revamp STATE, 2. docs review, 3. `$ref`, 4. **non-STATE sub-modules shouldn't have to be in the fallback**, 5. **make a list of test cases**.

**Serapath's feedback:**
1. **Convention: always `{ type, data }`** for every "message" object, so `data` instead of `paths`.
2. `on[type]` is confusing: in page.js `on = { theme, …sdb.admin }` serves `port.onmessage`, but batch types are file operations like `put`. "Something seems not okay here."
3. **Split the batch by file:** later a single path can change, so don't send all paths of a dataset again. Then the handler can decide whether to fetch at all (a file explorer shows a new entry without loading it): `const on = { put: onput }`, `for (const { type, data } of batch) on[type](data)`.
4. Order: (3) `$ref` → (2) docs → (1) revamp. Tell Ahmad when it's in, for his "unreliable icons" issue.
5. (Thread) Not everything is standardjs; use `standardx` with camelCase off (third time, see 267/268).
6. (Thread) **Rewrite STATE.js from scratch** if cleaning up is needed: old file open, new file, copy functions over bit by bit. `boot.js` can point to a different STATE.js to try it (that's what `#dev=` does today). "Take that time. We need it."
7. (Thread, 10/6) Ali finished the **quick editor** in the example and moved it into Ahmad's repo. Serapath: pull first, then the revamp is urgent. Also check Ahmad's issues: maybe a bug, maybe wrong use; docs or error messages should prevent it.

**Status today (checked in datashell):**
- 🟠 **Batch shape:** still `{ type: dataset.xtype, paths: [...] }` ([STATE.js:828-842](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L828-L842)). So (1) `data` and (3) per-file `put` / `del` items were **never done**. Every `put` sends **all** paths of **all** datasets again ([STATE.js:1051-1052](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1051-L1052)), and the handler can't tell which file changed.
- 🟠 **`on[type]` (2):** `type` is still the dataset name, so components do `on = { theme: inject, lang: fill }` ([example1/btn.js:16](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L16)). It works, but it's the mix serapath flagged. The docs ([api.md:47-71](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L47-L71), [guide/README.md:226](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/guide/README.md#L226), [state/temp.md:195](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/state/temp.md#L195)) all teach `{ type, paths }`.
- ⏳ **Lint (5):** still not in datashell (267/268).
- ⏳ **Non-STATE sub-modules in the fallback (4):** that's the `verify_imports` rule I hit with `check.js` (test helpers). Serapath's answer to me: copy helpers for now, built-in later. So: known, parked.
- ⏳ **A list of test cases (5):** never seen one. That list is what I'm building now (#39).
- ⏳ **The revamp / rewrite (6):** check the next worklogs. Today's STATE.js is ~1400 lines with `LESEZEICHEN` and `debugger` leftovers, so it likely never finished.

**Questions for serapath:**
- Should the batch become `[{ type: 'put' | 'del', data: 'dataset/file' }]`, one item per changed file, as you asked on 6/6/2025? Today it's still `{ type: dataset, paths: [all] }`. This changes every component's `onbatch` (examples, news app, ui-components), so it needs its own task.

**Affects my work:**
- **Test for `watch`:** after `drive.put('lang/x.json', …)`, what does the listener get? Today: all paths of all datasets. Expected (serapath): one item for `lang/x.json`. Record today's behaviour first.
- **My postMessage test results** (dev setup): use `{ type, data }` too, as agreed.
- **My news app** uses `{ type, paths }` in its `onbatch`, so a batch change touches it. Note it in "Map my frontend".
- **Docs:** three places teach `{ type, paths }`; one doc should win (docs review).

**From the video (3 min):**
- **0:01 `onbatch` gets paths now.** One handler per **file** (what serapath asked) isn't possible yet: a fallback can only set one handler per **dataset** (e.g. all `theme` files → `inject` all CSS at once). The fallback format has to change first.
- **1:25 `page.js` isn't like the proposal**, again because of timing. He added `async` functions to get around it, which made it slower. Some `args` aren't ready yet when a module runs, so the proposal "should work but currently doesn't".
- **2:28 His own summary:** "it's been many months since we optimized STATE … we've been throwing in code without a good planning", so small changes break many things. "There's a desperate need of optimizing STATE." This is where the rewrite (serapath's "rewrite the entire file") comes from.
