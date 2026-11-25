# Ali's worklogs 267–283 → notes

Plan by Serapath: watch Ali's worklogs 267–283 + their threads, note every task, bug and agreement, mark what's outdated and what's still open.

What it's for: Ali didn't always track what was done, so the "status today" parts show what really works. The ⏳ items become the task backlog for the STATE.js refactor and the p2p integration.

✅ done in today's code · 🗑️ outdated · ⏳ still open

## Overview

| # | Date | Topic | Still open | Affects my work? |
|---|---|---|---|---|
| 267 | 18/5/2025 | `net` addresses with modulepaths, `$ref` in overrides, first `net` proposal | `$ref` across many override levels (STATE.js @TODO), lint (standardx), the `net:` prop (stays, not finalized), `on` in `watch` (should go) | yes: a `$ref` override test, lint in package.json, remove `on` |
| 268 | 19/5/2025 | `net` proposal built with a real example, `io.md` / `net.md`, linting | saving connections so they come back after a reload, lint in datashell, `drive.list('/')` throws, `list` matches the wrong dataset, `get_input` treats `0` / empty as "not saved" | yes: lint, 2 drive tests, a reload test for connections later |
| 269 | 22/5/2025 | files from a fixed commit (version control), first `sdb.drive({ type })` api, docs review asked | STATE.js still loads from `main`, not a commit; docs review; cheat sheet not in datashell docs | yes: docs for CONTRIBUTING / api.md |
| 270 | 23/5/2025 | the path drive api (`get` / `put` / `list` / `has`) + its docs; keep the core minimal | Ahmad's "sometimes object, sometimes JSON" from `drive.get` (never checked); `drive.get` returns `null` vs throws; two drive docs (api.md, temp.md) | yes: a drive test for json files, the minimal-core rule for my proposals |
| thread | 24–26/5/2025 | **args for instances:** how a parent passes data down (`menu` → `btn`) without overrides for every level | docs don't explain `api(args)` or `0: { data }` entries; `structuredClone` only on one path; a list of STATE simplifications was never made | yes: the `(args, tools, [prev])` form (example 3), an args test, docs |
| 271 | 26/5/2025 | `args` implemented; serapath's feedback: the `(args, [fallbacks], tools)` form, data entries instead of override functions, update every example | the examples still mix old `([x])` and new style (example1/foo.js); the simplifications list | yes: example 3's override, example 1 cleanup, docs |
| 272 | 31/5/2025 | feedback from 271 implemented; io: `at()` must not return a port, connections restored after a reload; "Revamp STATE", keep it sync | io.at still returns a port and nothing is restored after a reload; STATE.js init code is still async (4 functions; the drive api may stay async); io/net reload concept not in docs | yes: the reload test, the sync rule for my fixes, `watch2` leftover |
| 273 | 6/6/2025 | `onbatch` gets paths, not file contents; `{ type, data }` convention; first test-case list; rewrite STATE.js from scratch | batch is still `{ type: dataset, paths }` (whole dataset on every change, no `put` / `del` types); `on[type]` mixes datasets and messages; lint; the STATE rewrite | yes: a `watch` test (only the changed path), my net.js message shape |
| 274 | 12/6/2025 | first `quick_editor` (CSS editor, built into each component); serapath: wrong approach, use a container component + `sdb.admin` instead | the container component, its io protocol with the root, saving edits to the `style` dataset | yes: `sdb.admin` is what the devkit (sys_ui) task in #39 builds on |
| 275 | 18/6/2025 | quick editor v0.0.2: dataset tabs, file buttons; serapath's feature requests: async storage + `admin.on(callback)`, stable vs dev versions (`drive.json`), safe drive access for editors | async storage, the version update prompt, safe access (invite codes / mount points), docs for every feature | yes: `drive.put` → `onbatch` test, `admin.on` events, docs |
| 276 | 23/6/2025 | quick editor v0.0.3 (apply, saved to localStorage); `drive.put` now triggers `onbatch`; STATE moves to datashell | `{ type, data }` check in io, peer ids as `Symbol`, the `resource()` helper, strict input validation, `future` version in `drive.json`, editor for sub-components + export / import | yes: `put` → `onbatch` test, io message check, error messages |
| thread | 23/6–27/7/2025 | **STATE bugs and features:** devs post STATE bugs for Ali (Hassan's repo, flamingo-wallet) | wrong-use bugs (endless loop, paths as keys, `require('../src/index')`), `$ref` in instance data, an easier way to theme a sub | yes: wrong-input tests, a list-of-subs test, flamingo-wallet |
| 277 | 30/6/2025 | quick editor v0.0.4 (sub-components); bug fixes from the bugs thread; STATE moves to datashell with the new `boot.js` + `shim.js`; serapath's full STATE task list | drive path keys (`'data/x.json'`), `$ref` in instance args, admin storage & hooks, strict validation, test list, docs for `admin` / `get_sub` / techniques, the revamp | yes: most of #39 4️⃣ comes from this list |
| thread | 3/7–18/9/2025 | **STATE bugs & features, part 2:** sub `type`s, re-loading an instance by `sid`, Ahmad's `drive.put` bug, passing data to many subs, files from external repos | relative sub types with instance ids, reuse a `sid` after discard, the `put` bug, external file resolvers (package.json, iframe) | yes: sub `type` test, `sid` reuse test, `put` test, flamingo-wallet |
| 278 | 16/7/2025 | quick editor v0.0.6: export / import of the whole localStorage; why no register / switch of datasets (subs can't make their own dataset, because of `mapping`); serapath: version-tag exports, document the admin api, a task list until the revamp, update PR #4 | version tag on export, admin api docs, root-only import / export in a global menu, PR #4 (closed, not merged) | yes: export / import tests, admin api docs, the devkit's global menu |
| 279 | 24/7/2025 | STATE v0.0.25: pluggable storage + `admin.on` hooks, overrides use their own files (`$ref` + `address`), path keys (`'theme/style.css'`), helper subs as `0`; serapath: hooks are root / admin only, no `address`, document every feature, list every task in the top comment; PRs #7 and #10 merged | `admin.on` events for every load / io / drive change, a `del` in the drive, docs for all of it, the leftover `drive.put` test in nav.js, `#dev=` broken on main | yes: `admin.on` test, path-key test, docs, CONTRIBUTING (`#dev=`) |
| 280 | 19/8/2025 | STATE v0.0.26: ~70 lines cleaned up, `address` removed, `sdb.get(sid)` for read-only sub drives, examples 2 / 3 on the new boot, datashell PR #10; serapath: `statedb` throws before `statedb.admin`, trace which fallbacks / overrides ran, a membrane (Proxy) later, document all URL flags, an iframe + `cache.html` fix for CORS | the override trace, the `$ref` @TODO, docs for URL flags (`#dev`), the iframe fetch for `#dev` | yes: an admin-first test, a read-only sub drive test, URL flag docs |
| thread | 20–25/8/2025 | **A release process for PR #10:** every merged STATE change should also update `drive.json` (a new version + its commit, and move `latest`) | today every version points to `main`, nothing is pinned to a commit; no written release steps | yes: release steps in CONTRIBUTING, a `drive.json` check |
| 281 | 25/8/2025 | STATE v0.0.27: `statedb.admin` + `on` callbacks, big docs written with AI, override tracking (JSON compare, a Proxy proposal), "strict dataset group names"; serapath: docs must be correct, complete and short (outline first, `<details>`), only track which module's override was used, `drive.json` versions point to a commit, `onbatch` on the next tick | docs: too long, hallucinations, `#dev` missing; no `<details>`; `drive.json` still on `main`; `onbatch` runs right away; Ibrar's shim bug | yes: docs outline + `<details>`, the `onbatch` timing (#39 3️⃣), an override-source test |
| 282 | 3/9/2025 | STATE v0.0.28: every dataset defined once in the root (strict mapping), `$ref` changes save the override's address; quick editor v0.0.7: global datasets, named datasets per type (`default`, `rainbow`); serapath: no STATE.js copy in playproject (use `#dev` + localhost), move `doc/state` to datashell, standardx, `.vscode` out, the real mapping rule, everything explicit for now; thread: names (dataset type, named custom dataset, named root dataset, idpath), what the quick editor should do, docs "horrible", `net` docs urgent | `y` only in the root or at every level?, the `$ref` address, standardx, `#dev=` broken on main; the named root dataset, idpaths, editing drive content, errors for missing named data; #30 tasks missing in datashell #6, a docs migration task, `net` / `io` docs | yes: mapping tests, CONTRIBUTING dev setup, lint, the devkit's dataset switcher, docs migration |
| thread | 15/9/2025 | **Update `io` and `net`:** a new planning round, docs first; a 5-file example (page → header → menubutton, page → footer → statusbar, each by another dev): a click in menubutton updates statusbar **without bubbling**, by mapping message types like datasets | `net` does nothing in STATE.js yet, `io.md` / `net.md` are Ali's old files, no example; Ahmad's separate `net.js` (3/2026) is still parent ↔ child | yes: io / net docs first, the 5-file example as a test |
| 283 | 16/9/2025 | quick editor v0.0.8: root datasets (the db prefix `state` = the default root dataset), 6 tab levels, import / export of root datasets (apply missing); strict rule kept local; serapath: use Ahmad's graph explorer, 5 levels not 6, actions in a task bar, quick editor + theme widget = "devtools", Ahmad's lint config, docs in phases; Ali goes quiet after 22/9 | apply / switch a root dataset, lint config, components from their own repos, docs migration | yes: the devkit (5 levels, actions, graph explorer), lint config, root dataset tests |
| thread | 21/9–5/12/2025 | **Datashell api for quick editor + theme widget:** use Ahmad's graph explorer in the quick editor (3 repos), expose `statedb.admin` via messages, read access for the graph explorer (Ahmad's graphdb); all apps reach p2p through datashell; Ali "not available" (25/10) | no graph / message admin api in datashell, quick editor in ui-components not checked, no owner | yes: the devkit's data source, p2p-news-app through datashell, 2️⃣ owners |

---

## 267: `net` addresses + `$ref` in overrides (18/5/2025)

links: [video](https://youtu.be/wI7gYsydUn8) · [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2888961192) · [GitHub: IO proposal (#33)](https://github.com/playproject-io/playproject-io.github.io/issues/33#issuecomment-2888957495) · Discord thread 18–19/5/2025

**What he did:**
- STATE v0.0.16 → [v0.0.17](https://github.com/alyhxn/playproject/commit/fcc7a6a40d6c48fd20797f442bba6295220b5342): use modulepaths as addresses inside `net`, modulepaths in overrides, a module `SID` error, a file address error, docs.
- IO v0.0.1 → [v0.0.2](https://github.com/alyhxn/playproject/commit/a31832ad3cb24fe15ab36bdc73a929f43179d7b8): tried out a `net` prop (3h), plus 7h of discussion.

**Agreements with serapath:**
1. **`$ref` in overrides:** a module may only give a sub files from **its own** repo. If its override doesn't change a `$ref`, the sub keeps using the file from the **sub's** repo. Example: `function override ([foo]) { return foo() }` changes nothing, so every `$ref` stays the sub's.
2. **Everything in a fallback / override must be serializable** (it's saved in the db). No functions like `inject`, `fill`, `onclick` in `net`. Handlers live outside, like `onbatch`.
3. **Code style:** add `standardx` as a dev dependency (snake_case, not camelCase), plus `npm run lint` (`standardx --fix`). For AI-written code, use a prompt template that asks for standard style + snake_case.
4. **A proposal is for proposed tasks.** A spec (like how `net` is defined) goes into a markdown file as a task output, and then gets discussed.
5. **Write an `io.md` or `net.md`** that explains the `net` prop the way the video does, for new developers.

**Serapath's questions / feedback:**
- What does "handle file addresses" mean? → Ali: the `$ref` ids defined by sub overrides / fallbacks.
- Why is `on` passed to `sub.watch(…)`? → **Answered (19/11/2026):** it shouldn't be. `watch` only gets `onbatch`.
- `data` in an event definition: at most a `transform(data)` function? `service` = which api the receiver offers? → Parked: part of the `net:` prop, which isn't finalized yet.
- How does a developer find the address names and service names of a sub, from the module where they write the override (not by logging inside `menu.js`)? → **Open (19/11/2026):** every module / instance has a unique id (its modulepath), and the devkit will show all of them live. `tools.listify(tree)` is another way to get all addresses below a module (see the video notes). The best developer experience is still to be decided.

**Status today (checked in datashell):**
- ✅ **`$ref` rule (1):** `compare()` gives a `$ref` the overriding module's `filepath` only if the override **changed** it. Otherwise it keeps the sub's ([STATE.js:626-639](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L626-L639)). The file is then fetched from that module's folder ([STATE.js:860](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L860)).
- ⏳ **…but only for one level:** `//@TODO: What if before is from an override not fallback` ([STATE.js:631](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L631)). If a module overrides an **override**, it isn't handled yet. Serapath (19/11/2026): needs fixing.
- ✅ **Serializable `net` (2):** `net` now only holds names (strings), e.g. `net: { api: ['inject', 'fill'], event: { click: [] } }` ([example1/btn.js:151-156](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L151-L156)). Ali also said on 19/5 that they were only names.
- ⏳ **Lint (3):** still wanted (serapath, 19/11/2026): `standardx` with snake_case instead of camelCase. Today datashell's `package.json` has no `standardx` and no `lint` script.
- ⏳ **`net:` prop + `net.md` (5):** the `net:` prop stays, but isn't implemented or finalized yet (serapath, 19/11/2026). `{ api: [...], event: { click: [] } }` is very likely not the final spec. **What it's for:** net.js is the api to connect. The `net:` prop holds **who connects to whom**: saved when an app is suspended, so it can resume; and set as a default in fallbacks / overrides, so an app connects on its very first start. [doc/net.md](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/net.md) only explains **net.js** (`invite` / `accept`). A doc for the `net:` prop comes once it's final.
- ⏳ **`watch(listener, on)`:** `on` is still there, saved as service names (`status.services[node_id] = Object.keys(on)`, [STATE.js:946-947](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L946-L947)). Serapath (19/11/2026): `watch` only gets `onbatch`. Checked: nothing reads `status.services` (only `sdb.admin.status` exposes it). Only [example1/page.js:45](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/page.js#L45) passes `on`, and [example2/page.js:54](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example2/page.js#L54) has a `@TODO` for it. → safe to remove. The examples keep their own `on` object for their messages.

**Questions for serapath:**
- ~~Is the `net:` prop in fallbacks (api / event name lists) still needed now that net.js exists, or is it outdated?~~ Answered (19/11/2026): it stays, not finalized yet.
- ~~Is `standardx` + `npm run lint` still wanted for datashell?~~ Answered (19/11/2026): yes, `standardx` with snake_case.

**Affects my work:**
- **A test for the `$ref` rule:** an override that keeps a sub's `$ref` loads the sub's file, and one that changes it loads its own. Then the same with an override of an override (the @TODO).
- **Lint:** fits into `package.json#scripts` + CONTRIBUTING.md (rows 16–17).
- **Relative modulepaths:** a module only sees paths below itself (no `page>` for `app`). Needs a test first, then the change.

**From the video (11 min):**
- **0:20 `listify(tree)`:** `tree` is the component tree STATE builds. `listify` turns it into a flat list of every modulepath a module can reach below it. That's how you find the address to use in an override. Still there today (`tools.listify`, [STATE.js:60](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L60)).
  - Serapath (19/11/2026): yes, one way to find all module addresses. But which `tools` stay in the final datashell.js is unclear: ideally none, only what's needed to use STATE.
- **1:40 Localizing modulepaths:** the paths in the tree aren't relative (e.g. `page>` should be dropped when `app` looks at them). Ali thinks fixing it is extra work for no gain, so he left it.
  - ⏳ Serapath (19/11/2026) agrees they should be relative: when `app` looks at the tree, no path should include `page>` (its parent).
  - Open idea: give modules unique **Symbols** instead of string paths, with the strings only in `sdb.admin`. But relative paths may be just as safe, so not decided. For now string paths stay, because they make debugging easier.
- **3:30 Wrong sid error:** in Ahmad's repo, passing a **module's** sid where an **instance's** was expected went unnoticed. Now STATE throws a clear error with a link to the docs. That's today's "Access denied! Wrong SID" ([STATE.js:256-257](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L256-L257)), the same error example 2 hits.
- **4:50 File address error:** on GitHub Pages the project name is stripped from the URL, so files weren't found. Fixed; still in `get_input` ([STATE.js:850-858](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L850-L858)).
- **5:55 His `net` idea:** a module lists its own **APIs** (services, e.g. a button's `inject` for CSS and `fill` for text) and its **event names** (`onclick`, `onhover`). What happens on an event is usually set by an override, e.g. "on click, send these two messages to this address" (open / close a lightbox). He sees it as a base to automate the io module.
  - Serapath (19/11/2026): this idea is related to **DOCS.js** (work-in-progress name, Ahmad's work), which will later be merged into datashell together with STATE.js and net.js.

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
- ⏳ **The `net` prop proposal (1):** connections now go through **net.js** (`invite` / `accept`, [net.js](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/net.js)). The `net:` prop itself stays, not finalized yet (serapath, 19/11/2026, see 267).
- ✅ **`msg_cache` and `io.at` on every click:** gone. Only commented-out `io.at` code is left in [example1/btn.js:56-69](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L56-L69). **Both stay** (serapath, 19/11/2026): `io.at` is an api we keep, and it matters more once hyperswarm is integrated. The `net: { api, event }` prop there ([btn.js:151-156](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L151-L156)) is how connections get saved to the db, so they resume on restart.
- ⏳ **Saving connections in the db (2):** still the plan (serapath, 19/11/2026): who connects to whom is saved, so a suspended app resumes, and a first start connects by default (from overrides, see 267). Today net.js keeps connections only in memory (`hub`, `sub`), so nothing is restored after a reload.
- ⏳ **Ask a module for its API (4):** that's DOCS.js today (`get_actions`). Fits the devkit task. Serapath (19/11/2026): DOCS.js is what makes this really work.
- ⏳ **Lint (5):** added in playproject, but datashell's `package.json` has no lint.
- (Serapath, 19/11/2026: these ⏳ are right, started but not finished.)
- ⏳ **`io.md` / net modes:** io.js is outdated and net.js is the way now. But `doc/net.md` (and net.js so far) only covers **how peers connect**. Once connected, single messages are only one mode. Serapath (19/11/2026): net.js should later support all of these:
  - shared memory
  - `MessageChannel`
  - streams (like piping data in a terminal)
  - hypercore / hyperswarm p2p
  - Not now: STATE.js comes first.
- ✅ **Commit-based version control:** done in [269](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2901433878).
- 🟠 **The `0` bug:** the `{ value }` idea isn't used, but the drive works with files now: `drive.get` gives `{ id, name, type, raw }`, and a missing file throws. So `0` and "not there" can't be mixed up anymore at that level.
  - ⏳ **possible bug, same kind:** `get_input` checks `if (!result)` ([STATE.js:844](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L844)). A saved file that is `0`, `''` or `false` (e.g. an empty css file) counts as "not saved", so it is loaded again from the fallback. That can undo a `drive.put`. Needs a test: `put` an empty / `0` file, then `get` it.
- ✅ **Drive fixes / docs:** Ali put them in his 269 proposals and did them in 270 (path drive api + docs).
- **Drive api update** (serapath's message): no more `sdb.drive({ type: '...' })` first. Instead `const { drive } = sdb`, then `drive.get('icons/cross.svg')`, `drive.list('icons/')` for file names, `drive.list()` for dataset names, and `drive.list('/')` = `drive.list()`. Today ([STATE.js:986-1100](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L986-L1100)):
  - ✅ `drive.get(path)`, `drive.list('icons/')`, `drive.list()` work like that. Also `drive.put` and `drive.has`.
  - 🟠 `drive.get` gives back `{ id, name, type, raw }`, not just the data. Fine, but different from his example. Serapath (19/11/2026): the exact return values of the disk (still called "drive") get decided later, with the p2p hyperdrives. Nothing to change for now.
  - ⏳ **possible bug:** `drive.list('/')` should be the same as `drive.list()`, but it throws "dataset not found". `'/'` matches no dataset name ([STATE.js:1062-1073](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1062-L1073)).
  - ⏳ **possible bug:** `list` finds the dataset with `path.includes(name)`, so `list('myicons/')` can match `icons/` if that comes first ([STATE.js:1066](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1066)).
  - Serapath (19/11/2026): both are probably bugs, from building it fast instead of properly. Fix the bugs, but the drive api details aren't a priority. The real drive api gets decided once datashell works (STATE, net, DOCS, …) and the p2p vault with hyperdrives gets integrated.
  - `get` / `put` / `has` only use the first two parts of a path (`path.split('/')`), so there are no folders inside a dataset. That fits "the drive is minimal on purpose".

**Questions for serapath:**
- ~~Should net.js save connections in the db so they come back after a reload (feedback 2)? Is that still the plan?~~ Answered (19/11/2026): yes, see the `net:` prop in 267.
- ~~Should STATE still store values as `{ value }` (the `0` bug), or are files with `raw` enough now?~~ Answered (19/11/2026): depends on whether the bug still exists. → the `0` / empty file test decides.

**Affects my work:**
- ~~**Cleanup:** remove the commented `io.at` code from example 1.~~ Not needed (serapath, 19/11/2026): `io.at` and the `net` prop both stay.
- **A test later:** connections come back after a reload, and a first start connects as the overrides say.
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
  - Serapath (19/11/2026): that's fine for now. We're not even "pre alpha", so pinning a commit is too early. Later: a better version process, plus **data migration**, so STATE saved by an older version works with a new one. For now, a new STATE version means resetting all browser storage and starting over.
- 🗑️ **`sdb.drive({ type })`:** replaced by the path api from 268 (`drive.get('icons/x.svg')`, `drive.list()`).
- ⏳ **Docs review (2):** [doc/api.md:47](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L47) shows only `sdb.watch(onbatch)`, which is right: `on` should go (serapath, 19/11/2026, see 267). The rest of the docs still need the review.
- ⏳ **Cheat sheet (3):** not in datashell's `doc/`.
- ⏳ **`$ref` for overridden nodes:** same as 267 (works for one level, @TODO for an override of an override). Serapath (19/11/2026): yes, needs fixing.

**Questions for serapath:**
- ~~Should `drive.json` point version `1` (or a new `2`) to a **commit** instead of `main`, so a page doesn't break when `main` changes?~~ Answered (19/11/2026): not yet, too early. Stays on `main`.
- ~~Is `on` in `watch(onbatch, on)` still needed now that net.js exists, or can it go?~~ Answered (19/11/2026): it goes, `watch` only gets `onbatch`.

**Affects my work:**
- **Merging my PR:** today a merge goes live for every page right away (version `1` = `main`). That's why serapath wants all apps tested first. No pinned version for now, so testing all apps before a merge is the safety net. After a merge, old saved STATE may need a browser storage reset. Serapath (19/11/2026): that's why we don't merge yet. The merge gets coordinated with everyone, and later there should be a proper process with "state migration".
- **Docs:** link the docs from CONTRIBUTING.md.
- **Remove `on` from `watch`:** check who reads `status.services` first (separate commit, with a test).

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
- 🟠 **`drive.get` on a missing file:** Ali's version returned `null`, today it **throws** `FAIL.nofile` ([STATE.js:1018](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1018)). The docs ([api.md:101-121](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L101-L121)) should say which one is right. Serapath (19/11/2026): do what hyperdrives do, but later.
- ⏳ **Ahmad's object-vs-JSON:** still possible by reading the code. `get_input` ([STATE.js:846-868](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L846-L868)) returns `response.json()` (an object) for a `$ref` json file, but a `raw:` given inline in a fallback is returned **as written**, and `put(path, buffer)` stores the buffer as-is. So a `.json` file is an object if fetched, and a string if someone wrote `raw: '{"a":1}'` or `put('x.json', '…')`.
  - Serapath (19/11/2026): still open, but not a priority. All four cases should give the **same type**. Fix it when the p2p hyperdrives get integrated, since the drive gets reworked then anyway. In the long run, drives only give **buffers**: to read an object, buffer → JSON string → `JSON.parse`. To save one, `JSON.stringify` → buffer.
- ⏳ **Two drive docs:** [doc/api.md:82](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L82) and [doc/state/temp.md:209](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/state/temp.md#L209) both describe the drive. One should go (docs review, 269). Serapath (19/11/2026): merging, cleaning up and fixing outdated docs is always good.
- ✅ **Passing arguments without an override:** done in today's STATE: `args` (see the args thread and 271).

**Questions for serapath:**
- ~~`drive.get` on a missing file: throw (today) or `null` (Ali's docs)?~~ Answered (19/11/2026): same as hyperdrives, later.
- ~~Was Ahmad's object-vs-JSON bug ever fixed, or is it still open?~~ Answered (19/11/2026): still open, fix it with the p2p hyperdrives.

**Affects my work:**
- **Drive test (later, with the p2p hyperdrives):** `drive.get('x.json')` gives the same type for a fetched `$ref` file, an inline `raw:` object, an inline `raw:` string and a `put` string. Serapath (19/11/2026): yes, all should give the same type.
- **Rule for my proposals:** everything in PROPOSAL.md / the API refactoring must pass "can this be done without new API?". Helpers go into modules, not into STATE.js. Serapath (19/11/2026): absolutely. In his words: *"A concept is tolerated inside datashell only if moving it outside the kernel, i.e., permitting competing implementations, would prevent the implementation of the system's required functionality."*
- **Docs:** one drive doc. `get` on a missing file: like hyperdrives, decided later.

**From the video (1 min):**
- Ali suggests dropping `list`: `get('dataset/')` (no file name) could list the files, and `put` / `has` could work on whole datasets too. Serapath said no: `list` stays so you can see names without loading big files, and the core stays small.
  - Serapath (19/11/2026): maybe worth considering, but only later. The drive api isn't a priority now.

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
- ~~Is the `0: { data }` → `api(args)` way still the intended way to pass data down, now that net.js exists?~~ **Answered (19/11/2026): yes.** These args are only for **initializing** each module / instance: its `sdb.drive` first, and also other props like `net`, `_` or even `api`. → docs + test.

**Affects my work:**
- **Test:** `page` has `_: { child: { 0: { x: 1 } } }`, child's `api(args)` returns a drive built from `args`, and the instance gets it. Plus: changing the args object after the fact doesn't change the instance (the clone). Plus: args can also set other props (`net`, `_`, `api`).
- **Example 3:** update its override to `(args, tools, [app])` (already in 4️⃣ of #39). This thread is the @input for why.
- **Docs:** `api(args, tools, [prev])` and data entries in `api.md`: args are for initializing (drive, `net`, `_`, `api`) (goes with the docs review from 269).

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
   - Serapath (19/11/2026): still to fix. **All APIs should be sync.** An API for statedb / fallback / override initialization may be async only if there's no other way, and we can explain exactly why. Why: an app with huge numbers of fallbacks, overrides, modules and instances must start as fast as possible. Lots of async adds up, and it invites devs to put async code inside fallbacks too.

**Status today (checked in datashell):**
- ✅ **One form (1):** today it's `fallback(args, tools)` ([STATE.js:62](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L62)) and `api(args, tools, [prev])` ([STATE.js:167](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L167)). Note the order: **tools second, fallbacks third**, the other way round from serapath's comment. Example 1 uses it: `app0 (args, tools, [app])` ([example1/page.js:138](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/page.js#L138)).
- ✅ **Data entries (2):** `btn: { 0: '', 1: '' }` in [example1/menu.js:195](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/menu.js#L195). Non-function entries are cloned into `status.args` (thread above).
- 🟠 **"Update everywhere" (2):** not finished. Old style left: [example1/foo.js:26](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/foo.js#L26) `override_nav ([nav])`, and example 3's `override_app ([app])`. (The `fill([data])` functions are onbatch handlers, not overrides, so they're fine.) Serapath (19/11/2026): yes, update them everywhere, so the new api works everywhere: `(args, tools, fallbacks)` for every fallback / override.
- ✅ **Instance gets the args (3):** today **both** get them: the module fallback at [STATE.js:62](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L62) and the instance fallback at [STATE.js:373](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L373). Serapath (19/11/2026): absolutely intended. Example: the parent passes args to the **button module** (via `require('button')`) to customize its default css, one css class shared by all buttons. Each **button instance** gets its own args, e.g. its label.

**Questions for serapath:**
- ~~The form is `(args, tools, [fallbacks])` today, your comment said `(args, [fallbacks], tools)`. Which one is final?~~ Answered in 272: `(args, tools, [fallbacks])`. Serapath (19/11/2026): yes, `(args, tools, fallbacks)` is final.
- ~~Both the module fallback and the instance fallback get `args` today. Intended, or only the instance (your point 3)?~~ Answered (19/11/2026): both, intended (module args = shared, e.g. css; instance args = per copy, e.g. label).

**Affects my work:**
- **Example 3's override** (4️⃣ in #39): this feedback is the @input for the new form. Also [example1/foo.js:26](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/foo.js#L26) needs the same update. One commit per example.
- **Test for args** (from the thread above) should also check: an override of an instance gets `(args, tools, [prev])` and can read `args`.
- **Docs:** the form `(args, tools, [prev])` (confirmed in 272) and the data entries.

**From the video (3 min):**
- **0:24 Demo:** `page.js` gives `app` the values `{ x: 0, y: 1 }`. `app` passes `{ x: x + 1, y: y + 2 }` down to `head`, and `head` logs `1` and `3`. Correct.
- **1:30 How it works:** when STATE walks the fallbacks, an entry that's an **object** (not a function) is saved with `structuredClone` and later given to that instance's fallback. Ali had no good name for it. Today that's `status.args` ([STATE.js:742](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L742)).
  - Serapath (19/11/2026): feel free to improve naming and comments in STATE.js's internal code. The clearer and more self-explaining, the better.

---

## 272: feedback implemented, io api for reloads, "Revamp STATE" (31/5/2025)

links: [video](https://youtu.be/XFRBh-1fasc) · [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2926620822) · [GitHub: IO (#33)](https://github.com/playproject-io/playproject-io.github.io/issues/33#issuecomment-2926725270) · [feedback io (#33)](https://github.com/playproject-io/playproject-io.github.io/issues/33#issuecomment-2926898779) · [feedback state (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2927072351) · Discord thread 1–5/6/2025

**What he did:** STATE v0.0.20 → [v0.0.21](https://github.com/alyhxn/playproject/commit/d74c9516d8ee4228532cef1c93754fe0be0573c5) (3h + 2h debugging): the 271 feedback (the `(args, tools, [fallbacks])` form, data entries) and an updated `net` prop (IO v0.0.4).
- **Proposals:** 1. Revamp STATE, 2. docs review, 3. `$ref` for overridden nodes, 4. an `onbatch` issue from Ahmad ([Discord](https://discord.com/channels/859134561018839060/1376646981501452509/1376669856799391805)): serapath's request that `onbatch` gets file paths, see 273.

**Serapath's feedback on io (the design of io, still valid for net.js):**
1. **`at(address)` must not return a port.** A port kept in a variable can't be restored after a reload. Instead `at(address)` adds the address to a **persistable Set** of wanted connections (calling it again removes it = "stop connecting"). The system connects, **reconnects if a connection breaks**, and every (re)connection triggers `io.on(port => {})`. Like `watch(onbatch)` for files, `io.on` is for all connections. A component that wants a `connections` object fills it inside `io.on`.
2. **`net` with `address` + `type`:** ok for now. Message types are like "input types", and later each type should be a "type named" dataset with its own state. The verbose `button.onclick` (checks, parse / stringify) is fine for now: **make io feature-complete and stable first, simplify later.** Put this concept into the io / net docs.
   - Serapath (19/11/2026): point 1 is **correct** (`at` adds to a persisted Set, reconnects, `io.on` for every connection). For point 2: DOCS.js (Ahmad) is related. io, net.js, DOCS.js and the p2p networking part of the p2p vault (Lupay) all shape the **final connections api**. Getting there takes some back and forth.

**Serapath's feedback on STATE:**
3. Good worklog, good choices, incl. the **order of args** for fallbacks / overrides (answers my 271 question: `(args, tools, [fallbacks])` is accepted).
4. Order of proposals: quick-fix (4) the `onbatch` issue + docs, so Ahmad can continue; then (3) `$ref`; **then "Revamp STATE"** with thorough time. STATE.js became very long.
5. **The `example/` folders are meant to grow into test cases that cover all STATE features.** (Same as what he told me.)
6. **Rule for the revamp: avoid `async`, keep everything `sync`** wherever possible. Discuss if something seems impossible. "It's often surprising with how much sync you can get away."

**Status today (checked in datashell):**
- ⏳ **io (1):** [io.js:12-42](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/io.js#L12-L42): `at(id)` still **returns the port**, there's no Set of wanted addresses, no reconnect, and nothing is restored after a reload. net.js ([net.js](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/net.js)) replaced the `net` prop with `invite` / `accept`, but keeps connections in memory too (see 268). So the reload design was never built. Serapath (19/11/2026): an important open issue, to fix when we get to the net.js / io / DOCS.js part.
- ✅ **Args order (3):** `(args, tools, [prev])` is the accepted form ([STATE.js:167](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L167)). Closes the 271 question.
- ⏳ **Sync rule (6):** STATE.js still has 6 `async` functions (plus a commented-out `notify`): `make_input_map`, `get_input` (fetch), `recurse` (admin), `watch`, `drive.get`, `drive.put` ([STATE.js:822-1016](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L822-L1016)). A commented-out `watch2` ("make watch a synchronous function") sits at [STATE.js:955-970](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L955-L970): a leftover of this rule.
  - Serapath (19/11/2026): make everything sync where possible, and discuss blockers. **The sync rule is about initializing** (statedb, fallbacks, overrides, the first setup of drives). Once drives are ready, the **drive api may be async** (`drive.get`, `drive.put` are fine).
- ⏳ **io / net concept in the docs (2):** `doc/net.md` doesn't mention reloads, reconnecting, or the Set of addresses. Serapath (19/11/2026): it should mention reloads.
- ✅ **The `onbatch` issue (4):** done in 273 (paths instead of contents), but not the way serapath asked, see 273.
- ⏳ **Revamp STATE:** check the next worklogs for what was done.

**Questions for serapath:**
- Is the reload / reconnect design for io (a Set of wanted addresses, `io.on` for every (re)connection) still the plan for net.js? Nothing of it exists today. → **Answered (19/11/2026): yes, that design is correct.** The final api gets settled together with net.js, DOCS.js and the vault's p2p networking.
- The sync rule: is `watch` meant to become sync (the `watch2` leftover)? `drive.get` needs `fetch` for `$ref` files, so where is async allowed? → **Answered (19/11/2026, see 271):** everything sync. Async only where it's impossible otherwise, with an exact reason. → for each of the async functions: make it sync, or write down why it can't be. On `watch`: a sync `sdb.watch` would be great, but it may be the first place in the init chain where async is really needed. To be seen.

**Affects my work:**
- **Rule for my fixes:** no new `async` in STATE.js.
- **Test later:** after a reload, a parent–child connection comes back (once net.js saves it). Same as 268.
- **Leftover:** the `watch2` block is either the start of the sync `watch` or dead code (goes with "remove the debug leftovers" in #39).
- **Docs:** the io / net reload concept, when net.js gets it.

**From the video (9 min):**
- **0:24 io:** `connect` now returns the port, so a component can keep it. Serapath's reply: no, a kept port can't come back after a reload, `io.on` must handle every connection.
- **1:10 Data on a click:** the switch button sends an array and flips between `rainbow` and `default`. Ali asks: should the **sender** carry that data, or should the receiver (page) decide? Left for discussion.
  - Serapath (19/11/2026): no answer yet, needs more context. Decide it in a worklog for a real scenario: follow the whole flow, from the user's click (e.g. choosing a theme) to the theme updating.
- **3:12 nav.js updated** to serapath's style: module overrides set `api`, and menu / btn read their text from `args`. `page.js` is **not** updated: that needs more STATE changes and didn't work yet.
- **4:54 Higher module wins:** page's old overrides beat nav's new ones, so he had to comment them out to see nav's result.
- **6:00 Timing bug:** menu got its data **before** the override that sets its new `api` had run, so it used the default. "Many other timing issues inside STATE."
  - ⏳ **Serapath (19/11/2026): TIMING BUGS are a top priority.** Fix all timing issues first, so the fallback / override / module / instance state initialization works smoothly, before other things.
- **7:26 Why `(args, tools, [fallbacks])`:** fallbacks go **last** because not every function gets them, so the order stays the same everywhere. Serapath agreed. That's today's order ([STATE.js:167](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L167)).
- **8:30** Things were "added far apart without good planning", so this part of STATE needs a review. Serapath (19/11/2026): a review is always good.

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
   - ⏳ Serapath (19/11/2026): the "unreliable icons" issue: the wrong content was loaded for a filepath, so icons didn't show, or loaded in a different order after a restart. Probably still an issue. → task: check it, then fix it. Priority, as part of fixing STATE.js initialization.
5. (Thread) Not everything is standardjs; use **`standardx` with snake_case** (not camelCase) (third time, see 267/268).
6. (Thread) **Rewrite STATE.js from scratch** if cleaning up is needed: old file open, new file, copy functions over bit by bit. `boot.js` can point to a different STATE.js to try it (that's what `#dev=` does today). "Take that time. We need it."
   - Serapath (19/11/2026): still an option. **The goal: one single STATE.js file**, cleanly structured, well named, with short but good comments. It's not there yet, "not even remotely". But a lot already works, and it took a long time, because it's very complex and dynamic.
7. (Thread, 10/6) Ali finished the **quick editor** in the example and moved it into Ahmad's repo. Serapath: pull first, then the revamp is urgent. Also check Ahmad's issues: maybe a bug, maybe wrong use; docs or error messages should prevent it.
   - Serapath (19/11/2026): **why the quick editor (now devkit) exists:** to see the state of STATE.js live, in real time, so it's easy to check whether it works. Ahmad is now finishing what Ali started, so I can use it for quick feedback on how far STATE.js has come.

**Status today (checked in datashell):**
- 🟠 **Batch shape:** still `{ type: dataset.xtype, paths: [...] }` ([STATE.js:828-842](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L828-L842)). So (1) `data` and (3) per-file `put` / `del` items were **never done**. Every `put` sends **all** paths of **all** datasets again ([STATE.js:1051-1052](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1051-L1052)), and the handler can't tell which file changed.
- 🟠 **`on[type]` (2):** `type` is still the dataset name, so components do `on = { theme: inject, lang: fill }` ([example1/btn.js:16](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L16)). It works, but it's the mix serapath flagged. The docs ([api.md:47-71](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/api.md#L47-L71), [guide/README.md:226](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/guide/README.md#L226), [state/temp.md:195](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/state/temp.md#L195)) all teach `{ type, paths }`.
- ⏳ **Lint (5):** still not in datashell (267/268).
- ⏳ **Non-STATE sub-modules in the fallback (4):** that's the `verify_imports` rule I hit with `check.js` (test helpers). Serapath's answer to me: copy helpers for now, built-in later. So: known, parked.
- ⏳ **A list of test cases (5):** never seen one. That list is what I'm building now (#39).
- ⏳ **The revamp / rewrite (6):** check the next worklogs. Today's STATE.js is ~1400 lines with `LESEZEICHEN` and `debugger` leftovers, so it likely never finished.
  - Serapath (19/11/2026), how STATE.js should look:
    - small, well-named, composable functions, very modular
    - short comments that explain to the point
    - `standardx` with snake_case
    - **as few lines as possible**: ~1400 is way too much
    - the drive part (`sdb.drive`) as its own sub-module, or a clearly separated section at the end of STATE.js that could be copied into its own module and `require`d as is

**Questions for serapath:**
- Should the batch become `[{ type: 'put' | 'del', data: 'dataset/file' }]`, one item per changed file, as you asked on 6/6/2025? Today it's still `{ type: dataset, paths: [all] }`. This changes every component's `onbatch` (examples, news app, ui-components), so it needs its own task. → **Answered (19/11/2026): ABSOLUTELY yes.** Not in today's version, so it has to be made. **High priority, in my next worklog** (#39 task 3️⃣).

**Affects my work:**
- **Test for `watch`:** after `drive.put('lang/x.json', …)`, what does the listener get? Today: all paths of all datasets. Expected (serapath): one item for `lang/x.json`. Record today's behaviour first.
- **My postMessage test results** (dev setup): use `{ type, data }` too, as agreed.
- **My news app** uses `{ type, paths }` in its `onbatch`, so a batch change touches it. Note it in "Map my frontend".
- **Docs:** three places teach `{ type, paths }`; one doc should win (docs review).

**From the video (3 min):**
- **0:01 `onbatch` gets paths now.** One handler per **file** (what serapath asked) isn't possible yet: a fallback can only set one handler per **dataset** (e.g. all `theme` files → `inject` all CSS at once). The fallback format has to change first.
  - **Important, serapath (19/11/2026): when `onbatch` runs.** Each `drive.put` gets awaited, but several can be started without waiting. Later there could be a `drive.batch` that collects many changes and flushes them at once. **That flush is when `sdb.watch(onbatch)` gets called.**
- **1:25 `page.js` isn't like the proposal**, again because of timing. He added `async` functions to get around it, which made it slower. Some `args` aren't ready yet when a module runs, so the proposal "should work but currently doesn't".
  - ⏳ Serapath (19/11/2026): agreed, this should be fixed. Making `page.js` work like his proposal (or as close as possible), cleaned up, "would be major". Part of the timing bugs.
- **2:28 His own summary:** "it's been many months since we optimized STATE … we've been throwing in code without a good planning", so small changes break many things. "There's a desperate need of optimizing STATE." This is where the rewrite (serapath's "rewrite the entire file") comes from.

---

## 274: first quick editor (12/6/2025)

links: [video](https://youtu.be/JUNCN6aeVUc) · [GitHub: quick_editor (#41)](https://github.com/playproject-io/playproject-io.github.io/issues/41#issuecomment-2966350480) · [serapath's feedback (#41)](https://github.com/playproject-io/playproject-io.github.io/issues/41#issuecomment-2967982857) · [Discord thread 12–14/6/2025](https://discord.com/channels/859134561018839060/1219764849349755053/1382694240940724294) · [Ahmad's worklog-30 thread (13/6/2025)](https://discord.com/channels/859134561018839060/1382791737000333483/1382800983544823919)

**What he did:** [quick_editor_v0.0.1](https://github.com/alyhxn/playproject/commit/dd5a8a33c1ca1228ed3f4284b3067f36a0d2873e) (9h): a small CSS editor, the CSS injection, integrated into `app` and `nav` (example4), plus debugging. Most of the time went into trying to build it with **overrides**, which never worked.
- **Proposal:** save the changes.

**Serapath's feedback:**
1. **Wrong approach.** We can't ask every developer to add a `quick_editor` to their component. It must work for **any** component, without changing the component and without touching STATE (unless it's really impossible).
2. **His idea: a "container component"** (a component previewer):
   - It's resizable and shows one component instance inside, like the box around each component on the ui-components preview page.
   - It has a button to open / close an editor (even a plain textarea is enough).
   - The editor is its **own component**, a dependency of the container. It has no direct access to the previewed component's drive, on purpose.
3. **How the editor gets the data:** through the **root**, which has **`sdb.admin`** (only the root has it). The container asks the root over `io`, and only gets access to the previewed instance and its sub-modules, and only the **`style`** dataset.
   - The root (`page.js`) finds the previewed component through `const component_content = await factory(subs[index])`.
   - An io message protocol between editor ↔ container ↔ root to: read the `style` files of the instance and all its sub-modules, send them to the editor, and on save, update the right drives. Each update says **which sub-module** changed, so its `onbatch` applies it.
4. **Steps:** (1) make the container (resize + editor toggle), (2) use it on the ui-components page for every component, (3) then the read / update communication.
5. **Why it's tricky:** components can't be **required dynamically** yet. That only changes once budo / browserify is replaced by our own runtime ("soon, but not too soon").
6. **A global show / hide toggle:** a button that uses io to tell all container instances to show or hide.
7. Same mechanism as the **theme widget** (for normal apps), but with access to only a part. Both use `statedb.admin`, and so will Ahmad's "graph explorer".
8. First check that it's possible with today's STATE. If something is missing, discuss and add it, then **fully focus on the STATE revamp**. A good text editor isn't needed now; STATE being stable and bug-free is urgent.

**Ahmad's worklog-30 thread (13/6/2025, the "unknown thread"):** Ahmad's [worklog 30](https://github.com/playproject-io/ui-components/issues/5#issuecomment-2967824601) put Ali's quick edits on the ui-components page. Hovering **any** component, even a button, opened its own editor. Serapath: "absolutely MENTAL", not how it was meant. What he wants instead:
- **One editor per container box**, no matter how many nested instances the previewed component has.
- The editor can change the allowed **named datasets** (for now only `style`) of the component and all its dependencies. A **dropdown** picks the dataset, and a `style` dataset can hold **several css files**.
- **Export / download** the changes as a file, and **import / upload** a file to apply a theme to all components. Then Cypher can theme the components and hand in the exported file in a worklog.
- **Not the theme widget:** the theme widget is one for the whole app, like full devtools for the runtime. The container has one editor each, with limited scope, and asks the root for access.
- Ali's idea (in edit mode, show a border + name around each component to select it): not needed, a css `border` already shows it. **"Everything that can be done in user land should not be supported by the internals."**
- **The ui-components page:** a list of container components. Each shows one component preview + an expand / collapse editor for the `style` dataset of that component and its dependencies.

**Status today (checked in datashell):**
- 🟠 **The quick editor / container:** not in datashell (no editor or container in `web/`). Ali moved the quick editor into Ahmad's repo (see 273). The idea grew into the **devkit**: it's the sys_ui that reads and changes a site's state through `sdb.admin`, and Ahmad is building it now (see the worklog-106 thread).
- ✅ **`sdb.admin` exists:** `statedb.admin()` at [STATE.js:774](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L774), and only the root gets `api.admin` ([STATE.js:794](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L794)). It has `xget(id)`, `get_all()`, `status`, `drive`, `load`, `swtch` ([STATE.js:867-880](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L867-L880)).
- ⏳ **The io protocol** (container ↔ root, read / update `style` for one instance + its subs): not built.
- ⏳ **Dynamic require:** still not possible with budo / browserify. Fits the "no bundle" task.
- 🟠 **Export / import:** per the devkit thread, the quick editor can export / import all data as a file today. Not checked yet: one editor per container, the dataset dropdown, several css files.
- ⏳ **Saving edits (proposal 1):** `drive.put` exists. Ali's open question: save into a new theme, so the original CSS isn't lost. Not decided.

**Questions for serapath:**
- Is the container component (component previewer with a quick editor) still a separate task, or is it fully part of Ahmad's devkit now?

**Affects my work:**
- **`sdb.admin` is the key api** for the devkit, the theme widget and the container. My #39 task "the 3 admin methods: real bug or dead code?" should check them against these uses.
- **Updating another instance's drive through `sdb.admin`** must trigger that instance's `onbatch`. That's a test for the new batch shape (#39 3️⃣).
- **No bundle** (#39 Later): it's what makes dynamic require possible.
- **Rule, same as the kernel rule (270):** what can be done in user land (a regular component) stays out of STATE.js.

**From the video (3 min):**
- **0:22 Why a helper module:** overrides can't inject scripts, so building the editor with overrides wasn't possible. He used an "unusual" helper module that keeps its values when other modules require it.
- **1:03 Demo:** a button in the root turns editing on. The editor is in `app` and `nav`, and shows `nav`'s CSS. Changes apply live. A title (which module you're editing) is still missing.
- **2:02 Not saved yet:** saving needs the drive, and maybe changes to it, e.g. a new theme for the edits so the original theme's CSS isn't lost. "Needs more planning."

---

## 275: quick editor v0.0.2 + feature requests for STATE (18/6/2025)

links: [video](https://youtu.be/_3DYmwV37mA) · [GitHub: quick_editor (#41)](https://github.com/playproject-io/playproject-io.github.io/issues/41#issuecomment-2985879557) · [serapath's feedback (#41)](https://github.com/playproject-io/playproject-io.github.io/issues/41#issuecomment-2988175453) · [Discord thread 19–29/6/2025](https://discord.com/channels/859134561018839060/1219764849349755053/1385025685000818729)

**What he did:** [quick_editor_v0.0.2](https://github.com/alyhxn/ui-components/commit/cd4cde39122c903fc4f76ddf3ef2b2acbce0d0ab) (9h, in his ui-components fork): worked on the 274 feedback, added **dataset tabs** and **file buttons**, and fetches the datasets of the previewed component.
- **Proposals:** add more features to the quick editor, make it a standard component.

**Serapath's feedback on the editor (GitHub):**
1. Tabs, file buttons and an "apply" button look great.
2. The editor should get a **dataset name** (maybe an array) and show only that. On the ui-components page: only `["style"]`.
3. **The video should also explain the code:** how the right content gets into the editor. The STATE apis behind it matter more than the editor itself.
4. Proposals should be concrete tasks, e.g. "add file" / "delete file" buttons, and in the page's top menu: **export** everything as a file and **import** a file as a theme.

**Serapath's feature requests for STATE (Discord, needed for the revamp):**
1. **Async storage:** the root module (the first one that requires STATE) can pass in a **storage object with async methods** (localStorage or any other api).
2. **`statedb.admin.on(callback)`:** the root registers a callback right away. It gets `{ type, data }` every time an `sdb` or `io` object is created or used, with the modulepath in `data` and the kind of use in `type`.

**Serapath's other points (Discord):**
- **Stable vs dev versions:** why does the commit hold a full copy of STATE, io, localdb and init? (Ali: to fix STATE bugs on the go while working in ui-components.) Plan:
  - one **stable** version for all apps
  - a url param to load another version (another folder, or localhost) for development
  - publish the **latest version hash in the docs**
  - a **`drive.json`** with `latest` + `versions` (the links / commit hashes of each file), so `boot.js` only fetches that file
  - remember the used version in localStorage; if a newer one exists, ask `confirm('update to latest version?')`. On cancel, put `#version=2` in the url, and only ask again once that's removed
  - an even simpler `boot.js`: fetch `init.js` and run it with the version
- **Security:** `page.js` gives the editor the **admin drive** and the previewed component's id. Ids are guessable, so a malicious editor could open any drive. His idea:
  - the root (`page.js`) creates **invite codes** through its admin api, each mapped to a modulepath, **readonly** or **writable**, and to certain datasets. The root can **revoke** them.
  - the editor's override sets a dataset to `{ $ref: 'drive://<invitecode>' }`, so that dataset becomes a **mount point** for data from another drive
  - Ali: first try what already exists. Two ways: send the component's id through overrides / io, or let the root find each editor and give it access. Serapath: how would the second one make sure the access is ready when the editor starts?
- **Docs for every feature:** whenever a STATE feature is discussed, add notes / examples to the STATE docs, in the same worklog. Same for stable vs dev versions.
- What does `subs['../src/node_modules/quick_editor'] = 0` in the fallback mean? (not answered)
- [Coordinate with Ahmad](https://discord.com/channels/859134561018839060/1385025685000818729/1385337232281309204) on `page.js`, to avoid merge conflicts.
- **[Bug (22/6)](https://discord.com/channels/859134561018839060/1385025685000818729/1386384466142036138):** in Ahmad's repo, `drive.put` doesn't seem to trigger `watch(onbatch)`.
- ([23/6](https://discord.com/channels/859134561018839060/1385025685000818729/1386708836966072360)) Before his review: go through this thread and all linked ones, check what's done and what's open, and add it to the 276 proposals.

**Status today (checked in datashell):**
- ✅ **`admin.on(callback)`:** `statedb.admin()` returns `{ on }`, and `on` saves the callback ([STATE.js:774-786](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L774-L786)). It's called with `{ type: 'create sdb', data: modulepath }` ([STATE.js:106](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L106), [STATE.js:220](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L220)), `{ type: 'put', data: id }` ([STATE.js:1047](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1047)) and `{ type: 'import', … }` ([STATE.js:1164](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1164)).
  - 🟠 but io calls it as `callback('Connect', alias)` ([io.js:13](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/io.js#L13)), not `{ type, data }`. And "used" (not only created) isn't reported.
- ⏳ **Async storage:** `admin(imported_db = localdb)` takes a db, but localdb is sync (localStorage). No async storage yet. (Note: serapath's 2026 rule says init should be sync, see 271. So this needs a check.)
- 🟠 **`drive.json` versions:** exists ([drive.json](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/drive.json)) with `stable`, `latest` and version `1`, and the shim uses it. The update prompt is still a `@TODO` ([shim.js:432-433](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/shim.js#L432-L433)). Version `1` points to `main`, which serapath is fine with for now (see 269).
- ✅ **A dev version via url:** `#dev=` loads a local STATE.js, and now survives reloads (my 2 shim commits).
- ⏳ **Latest version hash in the docs:** not there.
- ⏳ **Safe drive access (invite codes, mount points, readonly / writable, revoke):** not in STATE.js (no `drive://`).
- ✅ / ❓ **`drive.put` → `onbatch`:** today `put` calls the node's listeners ([STATE.js:1045-1046](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1045-L1046)). Ahmad's bug may be fixed, but only a test can tell.
- ⏳ **Docs for every feature:** part of the docs review (269).
- ❓ **The editor features** (dataset name, add / delete file, export / import): in ui-components, not in datashell.

**Questions for serapath:**
- **Async storage:** is passing in an **async** storage object still wanted, given the 2026 rule that init should be sync?
- **Safe drive access:** is the invite code / mount point idea still the plan, or does the devkit (sys_ui) through `sdb.admin` replace it?

**Affects my work:**
- **Test:** `drive.put` triggers `onbatch` (Ahmad's bug). Goes with the batch shape tests (#39 3️⃣).
- **Test:** `admin.on(callback)` gets `{ type, data }` for every created `sdb`. Also make io use `{ type, data }` (fits "all messages use `{ type, data }`", 273).
- **Docs:** every feature I add or fix gets notes / examples in the docs, in the same worklog.
- **Video:** explain the code, not only the result.

**From the video (2 min):**
- **0:20 Demo:** the editor shows the datasets and their files. For now you can only view them, no apply / save yet.
- **1:21 His approach:** start a new component without shadow dom, using fallbacks and overrides. Everything it needs comes in as **args**, e.g. the `id` of the node the editor is for. That can come through overrides, or through io / the root's dataset api. He keeps it so it can become a standard module.

---

## 276: quick editor works, `put` triggers `onbatch` (23/6/2025)

links: [video](https://youtu.be/SrpXgndm87s) · [GitHub: quick_editor (#41)](https://github.com/playproject-io/playproject-io.github.io/issues/41#issuecomment-2996492442) · [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2996925777) · [feedback quick_editor (#41)](https://github.com/playproject-io/playproject-io.github.io/issues/41#issuecomment-2997838592) · [feedback STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-2997963507) · [Discord thread 23–30/6/2025](https://discord.com/channels/859134561018839060/1219764849349755053/1386698805528760380)

**What he did:**
- [quick_editor_v0.0.3](https://github.com/alyhxn/ui-components/commit/879fcfacb3b2593b9a0e357d4b426224304231fe) (5h): made the editor a standard component, added **apply**. Changes trigger `onbatch` and are saved in localStorage.
- STATE v0.0.22 → [v0.0.23](https://github.com/alyhxn/playproject/commit/10131dfdb02a3896b2da1b89b9a0def6dced7dae) (5h debugging, 5h discussion): **`drive.put` now triggers `onbatch`** (the bug from 275).
- **Proposals:** 1. add a `drive.json` file, 2. overridden nodes use the override's files (`$ref`), 3. revamp STATE, 4. docs review, 5. non-STATE sub-modules shouldn't have to be in the fallback, 6. a list of test cases.

**Serapath's feedback on the quick editor:**
1. The editor must also show the **sub-components**, not only the top component. For each dataset: a dropdown or list of modulepaths, and for each, the files in its drive. (Ali: it will become 3 levels of tabs.)
2. **Export / download** all drives of all component instances as **one file**, and **import / upload** such a file. Then Cypher can improve the theme, download it and send it. Later: upload it as a theme to the ui-components repo, and let everyone pick from a list of themes.
3. Put all notes about it into a hackmd / pastebin and link it as the @input of that task.
4. Ali's fork still showed several editors per container, but Ahmad's merged version has one: good.

**Serapath's feedback on STATE:**
1. Good proposals list. **Revamp STATE any time now:** first, or at the end, whatever Ali thinks is easier.
2. How the editor gets its subs: the page's fallback defines all editor subs, the page reads their ids with `sdb.get_sub` and creates an instance for each component entry. (Ali confirmed. Serapath: "a cool idea", keep it that way, no `{ $ref: drivelink }` for now.)
3. **Peer ids:** call `net.page.id` a `pid` and make it a **`Symbol(id)`**. A Symbol can't be guessed or recreated.
4. **`io.at` must not return a port**, but a helper works around it: **`resource()`** keeps ports by `pid`. `io.on` saves each port (`item.set(port.to, port)`), and `await item.get(pid)` waits until that port exists. It's a helper, **not part of STATE**: require it in each file that needs it.
5. **Keep the STATE api minimal.** Use helper modules to make it friendlier. Only change the core if a use case can't be solved, or would be much too slow, without it. Once STATE is stable, look at all ui-components for patterns to simplify.
6. **Messages are always `{ type, data }`.** Maybe **io should enforce it** and throw otherwise. One standard makes io dev tooling possible later.

**Serapath's other points (Discord):**
- **Remove the copy of STATE.js** in Ali's ui-components fork. Every module and project loads STATE through `boot.js` from **one master copy**. Through `drive.json` + url params, someone can still pick another version.
- Add a **`future`** field to `drive.json` (next to `latest`), for the version under development, so devs aren't asked to update.
- **[(24/6) STATE moves to datashell](https://discord.com/channels/859134561018839060/1386698805528760380/1386807115313840138):** serapath copied the latest STATE.js, io.js and localdb.js into datashell. Ali should fork it, continue there, and make PRs. All projects should use a minimal `boot.js` with the datashell fork's STATE.js. (Ali: `init.js` is missing there.)
- **example4** used the quick editor only to have an editor. Ali removed it, since the quick editor now lives in ui-components. Serapath: add **preview links** of example pages as outputs.
- **New bugs from people using STATE "wrong"** (in the "STATE bugs and features" thread, see the next section). Ali: their files don't follow the structure at all; does STATE need an error for all of that? Serapath: yes. STATE must be [**"crazy robust"**](https://discord.com/channels/859134561018839060/1386698805528760380/1387542948324839545):
  - **strict input validation**
  - never an internal error like "cannot read undefined"
  - every error **links to the docs**
  - "when people make mistakes, it should never look like a bug in STATE"

**Status today (checked in datashell):**
- ✅ **`drive.put` → `onbatch`:** `put` calls the node's listeners ([STATE.js:1045-1046](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1045-L1046)). Still needs a test (#39).
- ✅ **STATE in datashell:** STATE.js, io.js, localdb.js live in `datashell/lib/node_modules`, and pages load them through `shim.js` + `drive.json`. No `init.js` needed anymore.
- 🟠 **`drive.json`:** has `stable` and `latest`, but no `future` ([drive.json](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/drive.json)).
- 🟠 **Peer ids:** sub ids are already Symbols (`s2i`, [STATE.js:689](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L689)), but io addresses are random number strings from `encode()` ([STATE.js:695-701](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L695-L701), made with `Math.random`), not Symbols.
- ⏳ **`{ type, data }` check in io:** io.js doesn't check messages ([io.js](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/io.js)). Also `at()` still returns a port (see 272).
- ⏳ **`resource()` helper:** not in datashell. It belongs in a helper module, not STATE.
- 🟠 **Errors with doc links:** STATE has ~26 `FAIL.*` messages with a doc link ([STATE.js:1248](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1248)). But not everything is validated, and some errors are still internal (e.g. the `subi,d` typo throws `ReferenceError`).
- ❓ **Editor for sub-components + export / import:** in ui-components / the devkit, not in datashell (see 274).

**Questions for serapath:**
- **io:** should io (or net.js) throw on messages that aren't `{ type, data }`? It fits the 273 convention.
- **Peer ids:** should io / net.js addresses become `Symbol`s?

**Affects my work:**
- **Test:** `drive.put` triggers `onbatch` (already in #39 3️⃣).
- **Robust errors:** each fix in #39 4️⃣ should end with a clear error that links to the docs, never an internal one. The `subi,d` typo is exactly that kind of bug.
- **Tests with "wrong" input:** add some cases where a module uses STATE the wrong way (missing fields, wrong structure) and check that a clear error comes, not a crash or an endless loop.
- **Messages:** my postMessage test results already use `{ type, data }` (273).

**From the video (4 min):**
- **0:21 Demo:** edit, apply → `onbatch` runs and the change is saved in localStorage.
- **0:41 How it works:** next to each component, the page adds an editor, collects all datasets of that component and sends them to its editor. The page also sends its own id, so the editor can talk back.
- **1:41 New `net` shape:** `net` holds component ids, and under each one the events (e.g. `click` → send some data). The connection starts only once.
- **2:46 The id** is a random code made on each load, so it can't be guessed. He thinks that's secure. (Serapath later: make it a `Symbol`.)
- **3:21 `io.at` returning a port** "is not allowed", but he didn't know a workaround (serapath's answer: `resource()`).
- **4:03** "That was a lot of work, partly because STATE isn't clean. We desperately need that sanitization."

---

## Thread: STATE bugs and features (23/6–27/7/2025, between 276 and 277)

links: [Discord thread](https://discord.com/channels/859134561018839060/1386708539526877215)

**What it is:** serapath opened it for Ahmad, Azim and Ibrar: everyone building components with STATE posts bugs, problems and feature ideas there, for Ali. One message per person, edited when something new comes up. First step: update to the latest STATE and report what's still broken.

**The posts:**
1. **[Bug 0 (serapath, 23/6)](https://discord.com/channels/859134561018839060/1386708539526877215/1386737591461875712), endless recursion:** on first load, a page built a name like `undefined>undefined>undefined>…` forever ([Hassan's repo @db3df50](https://github.com/HassanRaja533/input-integer-state-version/tree/db3df50240508d9a280dc132af07def755184891)). Should be caught with a clear error. Azim (24/6): fixed by Ali.
2. **[Bug 1 (serapath, 25/6)](https://discord.com/channels/859134561018839060/1386708539526877215/1387178216808255609), endless loop that froze his machine:** [Hassan's page.js fallback](https://github.com/HassanRaja533/input-integer-state-version/blob/ae249c155a5ec59ec1b503c78536d6f14f59753a/web/page.js). The `_` entry for the sub uses names (`age`, `birthyear`) instead of `$` / `0`, `1`, puts a `drive` in each, and uses `value:` instead of `raw:`. "The way it is being used is mental, BUT there should be a meaningful error message."
3. **[Bug 2 (serapath, 26/6)](https://discord.com/channels/859134561018839060/1386708539526877215/1387539447834476625), paths as keys:** [page.js:57-72](https://github.com/HassanRaja533/input-integer-state-version/blob/d651b9e391743cb0514067501cec07b0391f7613/web/page.js#L57-L72). The drive uses `'data/age.opts.json'` as one key, instead of one name per level (`'data/': { 'age.opts.json': … }`), and again `value:` instead of `raw:`. → **Decided in 277:** path keys should be **allowed** (last one wins, with a warning).
   - The right shape, for comparison: `drive: { 'lang/': { 'en-us.json': { raw: … } } }` and `_: { icon: { $: '' } }` ([example1/btn.js:137-149](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L137-L149)).
4. **[Misuse or feature? (serapath, 28/6)](https://discord.com/channels/859134561018839060/1386708539526877215/1388515404250484898):** instance data that points to a file in the **parent's** drive: `_: { '../src/index': { 0: { $ref: 'data/age.opts.json' } } }`. Serapath finds it interesting: a parent could give many sub instances the **same** file (e.g. a theme) as a link instead of a copy. Asked Ali for his thoughts.
5. **[Bug 3 (serapath, 29/6)](https://discord.com/channels/859134561018839060/1386708539526877215/1388915114224123925):** [requiring the sub with `require('../src/index')` fails](https://github.com/HassanRaja533/input-integer-state-version/commit/cf810b7d265942158ef10aae0c9e6157c914d825). With `require('..')` it [loads, but fails with another error](https://github.com/HassanRaja533/input-integer-state-version/commit/bcdcc825dd6c769760cba0afdeccfb8db2fec7db). Serapath: page.js and src/index.js look right, this should work.
6. **(29/6)** Serapath asks how much time Ali has, and whether a **second dev should learn STATE** too.
7. **[How to give a sub instance a custom theme (serapath, 1/7)](https://discord.com/channels/859134561018839060/1386708539526877215/1389385018387988562):** today the only way (Ali) is an override that wraps the sub's `api` and adds `drive['style/']` to the instance:
   ```js
   _: { '..': { $: override, 0: { value: { min: 0, max: 10 } }, mapping: { style: 'style', data: 'data' } } }
   function override (opts, _, [f]) {
     const state = f(); const api = state.api
     state.api = (...args) => { const instance = api(...args); instance.drive['style/'] = { /* theme */ }; return instance }
     return state
   }
   ```
   Serapath: keep it until STATE is finished, stable and documented. Then a separate round of thinking about making it smoother.
8. **[No `drive` in a fallback (serapath, 2/7)](https://discord.com/channels/859134561018839060/1386708539526877215/1389704224778227903):** should be fine, STATE should just add an empty `drive: {}`. Ali added it to his proposals.
9. **Ibrar's flamingo-wallet (25–27/7):** `contacts_list` creates many `contact_row`s from a list it gets from `page.js`, and he didn't know how to pass each contact to its row with STATE. [Serapath's review](https://discord.com/channels/859134561018839060/1386708539526877215/1398611532706746399):
   - `page.js` is fine
   - [contacts_list.js:58-60](https://github.com/ibrarli/flamingo-wallet/blob/main/src/node_modules/contacts_list/contacts_list.js#L58-L60) doesn't use the `sid`
   - its fallback lists **itself** as a sub instead of `contact_row` ([L82-92](https://github.com/ibrarli/flamingo-wallet/blob/main/src/node_modules/contacts_list/contacts_list.js#L82-L92))
   - `contact_row` doesn't load its state through the `sid` ([contact_row.js:8](https://github.com/ibrarli/flamingo-wallet/blob/main/src/node_modules/contact_row/contact_row.js#L8))
   - Ibrar had skipped the `sid` because it gave an error. Ali fixed it.

**Status today (checked in datashell):**
- ✅ **Bug 0:** the name loop now stops with `FAIL.state_init` when no parent is found ([STATE.js:128-135](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L128-L135)).
- ❓ **Bugs 1, 2, 3:** not known if fixed. Only a test with Hassan's exact fallbacks can tell. The validation rules list `raw` / `$ref` as required for files ([STATE.js:1356-1357](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1356-L1357)), so `value:` might give an error now.
- ⏳ **`$ref` in instance data (4):** not supported. Instance entries are plain data (args), so a `$ref` there is just passed on, not resolved.
- 🟠 **Theming a sub (7):** still only through the override that wraps `api`. Not in the docs.
- ✅ **No `drive` (8):** a fallback without `drive` gets an empty one (`entry.drive = []`, [STATE.js:532](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L532)). Same idea as my PR#1 fix for a missing `api:`.
- ❓ **flamingo-wallet:** fixed by Ali back then. It's in my #39 1️⃣ "run every app".

**Questions for serapath:**
- **`$ref` in instance data (4):** is a parent giving its subs a **link** to one of its own files (e.g. a shared theme) still wanted as a feature?

**Affects my work:**
- **Wrong-input tests (#39 4️⃣):** use the real cases from this thread: bug 1 (names instead of `$` / `0`, `value:`), bug 2 (paths as keys), bug 3 (`require('../src/index')` vs `require('..')`). Each should give a clear error with a doc link, never a freeze.
- **Test:** a list component that makes **many** sub instances, each with its own data through the `sid` (like flamingo-wallet's `contacts_list` → `contact_row`). It's a common case, and it went wrong before.
- **Docs:** how to theme a sub instance (the `api` wrapper), until there's an easier way.
- **"A second dev should learn STATE":** that's me now.

---

## 277: sub-components in the quick editor, STATE moves to datashell (30/6/2025)

links: [video](https://www.youtube.com/watch?v=YI-fZzkj1DM) · [GitHub: quick_editor (#41)](https://github.com/playproject-io/playproject-io.github.io/issues/41#issuecomment-3018290400) · [GitHub: STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-3018352033) · [feedback quick_editor (#41)](https://github.com/playproject-io/playproject-io.github.io/issues/41#issuecomment-3023532895) · [feedback STATE (#30)](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-3023578399) · [Discord thread 30/6–29/7/2025](https://discord.com/channels/859134561018839060/1219764849349755053/1389163448444911626)

**What he did:**
- [quick_editor_v0.0.4](https://github.com/alyhxn/ui-components/commit/beb0b4a8c8950396e5520139753d570ba0803f41) (4h): the editor now shows the **sub-components** too (a third level of tabs). The page reads their ids from the db and sends them to the editor.
- STATE v0.0.23 → [v0.0.24](https://github.com/alyhxn/playproject/commit/775b2c1921b865fa2ce333953e40d703a9af0f34) (4h): fixed the bugs from the STATE bugs and features thread, except bug 2 (paths as drive keys).
- **Proposals:** drive.json, `$ref` for overridden nodes, revamp, docs review, non-STATE subs not in the fallback, a list of test cases, the last feedback, a drive with or without `drive` in the fallback.

**Serapath's feedback on the quick editor** (a task list of what's still open from earlier feedback):
1. **Datasets first, subs later:** pick a dataset (e.g. `style`) and see every module / instance that has drive data for it, using **mapping**. Then a designer can click `style` and go through all components only for styles.
   - Maybe a toggle to show modules / instances that **don't** have that dataset (e.g. a component that doesn't support theming).
2. **Export / download and import / upload** buttons.
3. Components can also change **their own** drive data, and the editor must learn about it (today the editor only updates on click).
4. **io messages:**
   - no more `const port = await io.at(editor_id)`
   - only `{ type, data }`
   - require the `resource()` helper where needed (see 276)
5. Remove the old quick editor dependency from the file.

**Serapath's feedback on STATE** (his list of all open STATE tasks, made from Ali's proposals + earlier feedback):
- **Admin pluggable storage & hooks** (from 275).
- **Admin-revokable drive links** (`{ $ref: 'drive://invitecode' }` or `{ $ref: drivelink }`), for certain datasets, writable or readonly (from 275).
- **Improve fallbacks / overrides:**
  - overridden nodes use the override's files (`$ref` id, from 267)
  - **drive references in instance args**, e.g. `{ $ref: path }` (the "misuse or feature?" post in the bugs thread). This means a component gets **extra** writable / readonly drives next to its own, not that all its data comes through the drive.
  - **allow path keys** like `'data/style.json': …` next to `{ 'data/': { 'style.json': … } }`. On a conflict, the **last one wins**, with a **console warning**. So bug 2 from the bugs thread becomes a **feature**, not an error.
- ✅ **Versioning** (serapath did it himself):
  - example `index.html`, `boot.js`, `shim.js` and a version file (he calls it `shim.json`, in datashell it's `drive.json`)
  - still open: move all examples and projects to the new shim
- **Non-STATE sub-modules** shouldn't have to be in the fallback (from 273).
- **Verify all fallback / override data** (strict validation, from 276).
- **A growing list of test cases**, against regressions.
- **Docs:**
  - a growing list of **use cases / techniques** and how to solve them with STATE, e.g. `sdb.get_sub` in page.js to pair components with editors
  - short error messages, with longer explanations and code examples in the docs. Better errors should make the docs less needed.
  - document **`statedb.admin`** and every field: `admin.status.dataset.drive`, `admin.status.dataset.drive.list('', node)`, `admin.status.db`
  - document **`sdb.get_sub`**, and anything else missing in `sdb`
- **Revamp / refactor STATE:** cleaner, easier to read and maintain, faster where possible.

**Serapath's other points (Discord):**
- **Before each new worklog, make a thorough list** of what's done and what's open from earlier feedback. Some things "went missing".
- **STATE moves to datashell for good** ([PR #3](https://github.com/playproject-io/datashell/pull/3), merged 2/7/2025). It doesn't belong in the playproject website or ui-components. Then: update all examples, and help Ahmad, Azim and others move their projects.
- **The new way to start a page** (serapath, 1/7 → 27/7):
  - `index.html` loads `boot.js` with a plain `<script>`
  - `boot.js` adds a script tag for `https://playproject.io/datashell/shim.js?version=latest#<args>`
  - pick a version with `?version=0`, `stable`, `2`, …
  - ESM `import` didn't work because of **CORS**, so it's a plain script tag now (fixed 23/7)
- **Docs:** add a `docs/` folder to datashell. Don't repeat what the README already explains.
- **A new issue "refine datashell"** for all unfinished tasks. Worklogs for datashell continue there.
- **Ali's setup problems (16–28/7):**
  - syntax errors in the shim
  - `bundle.js` saved as **UTF-16** instead of UTF-8
  - `bundle.js` ending with `;` broke the shim's `wrap`. Serapath's fix: strip a trailing `;`.
  - Ali found `npx browserify -i STATE your-app.js -o bundle.js` fixes the encoding. He will move all projects to datashell and guide the others.

**Status today (checked in datashell):**
- ✅ **STATE in datashell:** `lib/node_modules/` has STATE.js, io.js, localdb.js.
- ✅ **New boot way:** the [README](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/README.md) shows exactly the `index.html` + `boot.js` + `npx browserify -i STATE …` setup.
- 🟠 **The version file** is `drive.json`, not `shim.json` ([drive.json](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/drive.json)).
- ⏳ **Trailing `;` fix in `wrap`:** not in `shim.js` ([shim.js:440-451](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/shim.js#L440-L451) has no `endsWith(';')` check). Maybe the `-i STATE` command makes it unneeded. Needs a check.
- ✅ **Path keys in the drive (`'data/x.json'`):** allowed, Ali added them in 279. (I first wrote "gives an error" here; that was wrong, see 279.)
- ⏳ **`$ref` in instance args, admin storage & hooks, revokable drive links, non-STATE subs:** not built (see 267, 273, 275 and the bugs thread).
- 🟠 **`sdb.get_sub`:** exists ([STATE.js:931-934](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L931-L934)) with a `// @TODO: maybe remove?`, and it's **not in `doc/api.md`**.
- ⏳ **Docs for `statedb.admin`** and its fields: not in `doc/api.md`.
- ❓ **Examples on the new shim, export / import, editor learns about drive changes:** to check (examples in #39 1️⃣; the editor is in ui-components / the devkit).

**Questions for serapath:**
- **Path keys:** moved to 279 (they work today, but the folder style always wins, not the last one).
- **`sdb.get_sub`** has `@TODO: maybe remove?`. Keep and document it, or remove it?

**Affects my work:**
- **#39 4️⃣ comes mostly from this list:** test cases, strict validation, the `$ref` @TODO, docs, revamp. I'm continuing what this list started.
- **Bug 2 test changes:** path keys **work** today, so the test checks that they work, not that they throw (see 279 for which one wins).
- **Docs to write:** `statedb.admin` fields, `sdb.get_sub`, and a "techniques" page (e.g. theming a sub, pairing with `get_sub`).
- **His rule for me too:** before each worklog, list what's done and open from the last feedback.
- **Moving projects to the new shim:** fits #39 1️⃣ (run every app).

**From the video (3 min):**
- **0:10 Sub-components in the editor:** the page gets the sub ids straight from the database and sends them to the editor as a message. A third level of tabs shows them.
- **1:33** All bugs from the thread are fixed except one (bug 2, paths as keys). He wasn't sure whether to **allow** that way of defining files or to throw an error; today it throws. (Serapath's answer: allow it.)
- **2:23 Next:** version control, plus the bugs and features.

---

## Thread: STATE bugs & features, part 2 (3/7–18/9/2025, between 277 and 278)

links: [Discord thread](https://discord.com/channels/859134561018839060/1390400336123924560)

**What it is:** the second thread for STATE bugs and feature ideas (part 1 is above). On 18/9 serapath reminds all contributors: STATE problems go here.

**The posts:**
1. **Sub `type`s make no sense (serapath, 4–5/7):** `sdb.watch` returned subs like `{ sid, type: 'page>..' }` and `{ sid, type: '..' }`, and once even `type: 'page>..>drive'`.
   - The type includes the **parent's** names, and doesn't say **which instance** it is.
   - Serapath wants it **relative to the current module**, with the instance id, e.g. `..:0` for the module and `..:0 > 0` for its first instance. Then you know which module to `require` to create an instance for that `sid`.
   - Ali: the type is the module address, so you know which instances belong together. The instance number is missing; he'll think about it.
2. **Re-create an instance with the same `sid` (serapath, 6/7):**
   - an instance is created, used, then thrown away. Later the parent creates it again with the **same `sid`**, and it gets **the same drive state** back, like after a page reload.
   - **protection:** two instances can't use the same `sid` at the same time.
3. **Ahmad's `drive.put` bug (18/7):** in [graph-explorer](https://github.com/ddroid/graph-explorer) ([page](https://ddroid.github.io/graph-explorer/)), a function that updates runtime state gets stuck on its **first** `put`. It says `target_file` is undefined for `vertical_scroll_value.json`, though the dataset has all 4 files. `drive.get` works fine. Serapath: "strongly seems like a bug in STATE".
4. **Passing data to many subs (serapath, 25/7):** the alternative is sub overrides inside `contacts_list`. But if `contact_row` has subs, and those have subs, the developer using `contacts_list` must write overrides for the **whole tree**. "A very bad developer experience compared to not using STATE at all." Better: each component does this work for its own subs, so the work is split.
   - **The linked messages** (in Hassan's worklog-4 thread, about his contact list). Serapath posted them on 25/7, 3:25 pm as "[feature request](https://discord.com/channels/859134561018839060/1397139757808615492/1398248681097920543)" and "[possible issue](https://discord.com/channels/859134561018839060/1397139757808615492/1398249508571316315)":
     - [Serapath's answer (25/7)](https://discord.com/channels/859134561018839060/1397139757808615492/1398248354923937903): create one `contact_row` sub instance per entry with `contact_row(await sdb.add(opts))`. **`sdb.add(opts)`** returns a new `sid` and runs `contact_row`'s instance fallback with `opts` as its args.
     - [Serapath (25/7)](https://discord.com/channels/859134561018839060/1397139757808615492/1398248681097920543): Ali should link the docs for this, or add them if missing. Ali is now responsible for helping everyone update their code to new STATE features and breaking changes.
     - [**The reload problem** (serapath, 25/7)](https://discord.com/channels/859134561018839060/1397139757808615492/1398249508571316315): after a reload, `sdb.watch(onbatch)` gives the `sid`s of the 4 rows from last time, **and** `onbatch` fires again with the 4 contacts, which creates 4 **more** rows. Every reload would add the same contacts again. "Let's brainstorm options first."
     - [The mainstream case (serapath, 30/7)](https://discord.com/channels/859134561018839060/1397139757808615492/1399855074917744733): the fallback gives `contact_list` an array → its `api` stores it in its drive → `onbatch` → one `contact_row` per entry. Contact lists, file systems, image galleries, chat histories all work like this. "Do you call this static or dynamic?"
5. **flamingo-wallet `transaction_history` (serapath, 30/7):**
   - the page sets an array of entries ([page.js:127-215](https://github.com/ibrarli/flamingo-wallet/blob/main/web/page.js#L127-L215))
   - `transaction_history`'s fallback makes a `transaction_row` sub for each ([transaction_history.js:92-94](https://github.com/ibrarli/flamingo-wallet/blob/main/src/node_modules/transaction_history/transaction_history.js#L92-L94))
   - each row's api puts its data in its drive ([transaction_row.js:119](https://github.com/ibrarli/flamingo-wallet/blob/main/src/node_modules/transaction_row/transaction_row.js#L119))
   - It seems to work (rows show up, no error), and a breakpoint in the row shows the right data. But serapath **can't set a breakpoint** in `transaction_history.js:92-94`, so he can't follow how the data gets there. (He linked the same messages as in 4.)
6. **Files from external repos (serapath, 19/8):**
   - **The problem:** ui-components depends on graph-explorer. Its code is bundled in, but its fallback's `$ref` to `entries.json` looks in ui-components' page, where the file isn't.
   - **The plan:** STATE reads the current project's **`package.json`**. If `graph-explorer` is a dependency (`"github:ddroid/graph-explorer"`), STATE knows it's **external** and builds the GitHub url to load the file. An external module's own `package.json` tells about its own external deps.
   - **Several resolvers:** (1) local module, (2) GitHub repo. Later maybe npm, p2p hyperdrives, and an **iframe** resolver against CORS: load the component's GitHub page in an iframe and get the file through `postMessage`. Serapath has the iframe code and will add it after Ali's next PR.
   - Ali's idea (`$ref: 'entries.json*'` to mark an external file): not needed, `package.json#dependencies` already makes it explicit.
   - Serapath: **add this kind of reasoning as comments in STATE.js**.
7. **Ali (21/8):** many mentions to answer, going one by one. Serapath: make tasks (or use existing ones) and link the Discord messages as @input.

**Status today (checked in datashell):**
- ⏳ **Sub types (1):** `entry.type` is still set to a modulepath / local id / name ([STATE.js:435-461](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L435-L461)), and `watch` returns `{ sid, type }` ([STATE.js:690](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L690)). So no relative path, no instance id. That's what my "two children" test sees too (`page>child` and `child`).
- 🟠 **One `sid` at a time (2):** STATE throws `FAIL.sid_used` "Access denied! SID … is already used" ([STATE.js:261](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L261), [STATE.js:1268](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1268)). But there's no "discard", so re-creating a thrown-away instance with the same `sid` probably hits that error too. ⏳ Needs a test.
- ❓ **Ahmad's `put` bug (3):** `put` finds the dataset by the first part of the path and then the file by name ([STATE.js:1016-1040](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1016-L1040)). Not known if fixed. Needs a test with several files in one dataset and repeated `put`s.
- ⏳ **Data to many subs (4, 5):** **`sdb.add` doesn't exist.** Today `sdb` is only `{ id, watch, drive, get, get_sub }` ([STATE.js:931](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L931)). `sdb.get(sid)` gives a sub's drive, it doesn't create anything ([STATE.js:967-974](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L967-L974)). So subs can only come from the fallback (`0: { data }` → `api(args)`), not be created at runtime from data. Whether flamingo-wallet's lists work today needs a run (#39 1️⃣).
- ❓ **The reload problem:** not checked. With no `sdb.add`, it depends on how a list makes its rows today. Needs a test: reload a list page and count the rows.
- ⏳ **External file resolvers (6):** nothing in STATE.js reads `package.json` or uses an iframe resolver. (shim.js has iframe code, but that's for running the page, not for fetching files.)

**Questions for serapath:**
- **Subs from data (`sdb.add`):** a list making one sub per entry is "the mainstream use case", but there's no `sdb.add` today. Is it still planned, and how should a reload avoid duplicate rows?
- **Sub types:** is `..:0` / `..:0 > 0` (relative, with the instance id) still the target? It's close to "relative modulepaths" from 267.
- **External files:** did your iframe resolver code get added after Ali's PR, or is it still open?

**Affects my work:**
- **Test (#39 4️⃣):** what `watch` returns as sub `type`s for a module with two instances of the same sub. Today vs serapath's target. Goes with "two children" and "relative modulepaths".
- **Test:** create an instance, throw it away, create it again with the same `sid` → same drive state back. And two at once → a clear error.
- **Test:** several `drive.put`s in a row on a dataset with several files (Ahmad's bug).
- **Subs from data:** a list with N entries makes N rows, and a reload still shows N (not 2N). Today there's no `sdb.add`, so first ask serapath.
- **flamingo-wallet** (#39 1️⃣): check `contacts_list` and `transaction_history` with many sub instances.
- **Comments in STATE.js:** explain the why, not only the what (serapath).

---

## 278: quick editor export / import (16/7/2025)

links: [video](https://youtu.be/37jvwwgZzAk) · [GitHub: quick_editor (datashell #5)](https://github.com/playproject-io/datashell/issues/5#issuecomment-3080896948) · [Discord: worklog post](https://discord.com/channels/859134561018839060/1219764849349755053/1395164350582624316) · [Discord thread 17/7–19/8/2025](https://discord.com/channels/859134561018839060/1395164350582624316)

**What he did:**
- [quick_editor_v0.0.6](https://github.com/alyhxn/ui-components/commit/fc6b6af41488ee6f4e1d65e880effd4e1b2cbead) (3h40): **export** (download) and **import** (upload) buttons. For now they save and load **the whole localStorage**, not one dataset.
- He didn't build it with datasets because of two limits:
  - [there is no **register**](https://discord.com/channels/859134561018839060/1395164350582624316/1398852328408223805) (add a new dataset) and **switch** (turn off the active dataset, turn on another one) in the editor yet. The editor only shows the **active** datasets. Showing the others needs another row of tabs.
  - **a sub can't make its own new dataset.** Because of `mapping`, every dataset of a sub belongs to a **group** that the root made, and a switch changes the whole group across the site. With only the root's `default` group, a sub's new dataset would replace `default` and lose its data.
- **No compatibility:** a file exported before a project change can't be imported after it.

**Serapath's feedback (Discord, 23–27/7):**
- **Update [PR #4](https://github.com/playproject-io/datashell/pull/4)** so he can merge: [pull the changes and fix the conflicts](https://discord.com/channels/859134561018839060/1395164350582624316/1397532511667486750), ideally with [**`git rebase`**](https://discord.com/channels/859134561018839060/1395164350582624316/1397676334607634586). He has more datashell changes waiting for it.
- [He didn't understand](https://discord.com/channels/859134561018839060/1395164350582624316/1397704909054546056) "register and switch", "another level of tabs", "datasets must be defined in the root first". After Ali explained: ["oh I see… like theme switching"](https://discord.com/channels/859134561018839060/1395164350582624316/1398954949232295987). Idea: a **dropdown** next to the datasets to switch, plus buttons to **add** and **delete** one.
- Import / export can be **root-only** in the api. The quick editor then just sends messages asking the root to do it.
- **Export / import buttons** maybe belong once, in the **global menu** on top, not in every quick editor.
- **At least: tag every export with a version**, so an import can tell if it fits the project, and doesn't break an updated project.
- Make **another worklog about the code**: how the quick editor uses the admin api / `sdb` for each feature (not STATE internals).
- **Document every admin api feature** well, old and new.
- **An overview of what's left until the STATE revamp**, with a link to an up-to-date task list. "Very exact and strict" task management matters, since he reviews 8 people with gaps in between.
- Ali: pause the quick editor, it works for now; the most important feature is compatibility. Serapath: **"nah its important - we want a complete solution"**.
- Ali (27/7): "making the list". Serapath asked again on 30/7 and 19/8; Ali: still working on it.

**Status today (checked in datashell):**
- ✅ **Export / import in STATE:** the admin api has `export_db` / `import_db` (one dataset), `export_root` / `import_root`, and `load(snapshot)` that replaces the whole db and reloads ([STATE.js:867-880](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L867-L880), [STATE.js:1159-1242](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1159-L1242)). So not only "whole localStorage" anymore.
- ✅ **Register / switch in STATE:** `register` and `unregister` ([STATE.js:1106-1157](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1106-L1157)) and `swtch` (switch, spelled without the `i`, [STATE.js:892-924](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L892-L924)) exist in the admin api.
- ⏳ **Version tag on export:** missing. `export_db` saves only `name`, `type` and the files ([STATE.js:1179-1193](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1179-L1193)). `VERSION = 13` ([STATE.js:6](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L6)) is only used to wipe the local db when STATE changes ([STATE.js:780-783](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L780-L783)). Importing an old file is not checked.
- 🟠 **Datasets "root first":** still true. A sub's dataset needs a `mapping` to a dataset of its hub, otherwise `FAIL.nomapping` ([STATE.js:578-592](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L578-L592)).
- ⏳ **Admin api docs:** `register`, `unregister`, `swtch`, `load`, import / export, `get_dataset` are not in `doc/api.md`. [doc/state/usage.md](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/state/usage.md) still describes an older admin (`xget`, `add_admins`, `req_access`).
- ⏳ **PR #4:** closed, **not merged**. Not checked if its changes reached datashell another way.
- ❓ **Global menu, dataset dropdown, "the code" worklog:** in ui-components / the devkit, not datashell. To check in 279+.

**Questions for serapath:**
- **Version tag:** which version goes in an export: STATE's `VERSION`, the `drive.json` version, or the project's own version?
- **Subs making their own datasets:** keep "root first" (via `mapping`), or should a sub be able to add one?
- **PR #4** was closed without a merge. Did its changes get into datashell another way?

**Affects my work:**
- **Tests (#39 4️⃣):** export → import gives back the same state. Importing a file from another version → a clear error, no broken data.
- **Docs (#39 4️⃣, "docs for admin"):** add `register`, `unregister`, `swtch`, `load`, import / export, `get_dataset`, and fix the old `doc/state/usage.md`.
- **Devkit (#39 5️⃣, with Ahmad):** export / import and the dataset dropdown fit the global menu of the sys_ui.
- **PRs to datashell:** fix conflicts with `git rebase`, as serapath asks.

**From the video (4 min):**
- **0:10** Export and import work, but they download / upload the whole localStorage.
- **0:31** Why: no register and switch for datasets yet, and you can't even pick the dataset in use. That needs another row of tabs.
- **0:49 The bigger problem:** a sub's datasets must be defined in the root first, so a sub can't create a new one. So he used localStorage directly.
- **1:52** Limit: no backward compatibility. An exported file can't be used after the project changes.
- **2:19 Demo:** change the background color, apply, export, clear, reload, import. The changes come back at once, for the whole site (CSS and content). Since it's global, it fits the theme editor better than each component.

---

## 279: STATE v0.0.25, storage + hooks, override files, path keys (24/7/2025)

links: [video](https://youtu.be/SajE0YRPw_s) · [GitHub: STATE (datashell #6)](https://github.com/playproject-io/datashell/issues/6#issuecomment-3112392174) · [feedback (datashell #6)](https://github.com/playproject-io/datashell/issues/6#issuecomment-3117170249) · [Discord: worklog post](https://discord.com/channels/859134561018839060/1219764849349755053/1397883267038052403) · [Discord thread 24/7–21/8/2025](https://discord.com/channels/859134561018839060/1397883267038052403) · [Ali's task list (#6 top comment)](https://github.com/playproject-io/datashell/issues/6#issue-3258857766)

**What he did** ([STATE_v0.0.24](https://github.com/alyhxn/playproject/commit/775b2c1921b865fa2ce333953e40d703a9af0f34) → [v0.0.25](https://github.com/alyhxn/playproject/commit/464666f6f1fcc49536fbc080ad63496edb2ace86), ~14h), the tasks from serapath's 277 list:
- **Pluggable storage + hooks (1h):** the root can pass its own storage module (it must have the same methods as localdb). Without one, STATE uses localStorage.
- **Overrides use their own files (5h):** `nav` overrides `btn` with `{ $ref: 'btn.css' }`, a file in **nav's** folder. To make it work he also passed an **`address`** (from the fallback's args) next to the `$ref`.
- **Path keys (4h):** `'theme/style.css': { raw }` works next to `'theme/': { 'style.css': { raw } }`. If both are there, the folder style is used, with a console warning.
- **Helper subs (30min):** a sub that isn't a STATE module (a helper) is given `0` in the fallback, so STATE doesn't throw for it. STATE can't know every helper by itself.
- Debugging (3h) for the errors reported on Discord.

**Serapath's feedback (GitHub, 25/7):**
- the `drive.put` / `drive.get` `console.log` lines in nav.js look like a test and don't belong there.
- **`address`** next to `$ref` is confusing.
- **`statedb(fallback, localdb)` is wrong:** it lets every module pass its own db. The idea was: only **`statedb.admin`** (the root, a devtools feature) sets storage and hooks, and they apply to all `sdb`s.
- **`admin.on(callback)`** gets `{ type, data }` every time:
  - an `sdb` is made (`statedb(...)` for a module, `get(sid)` for an instance), e.g. `type: 'load'`, `data: <modulepath>`
  - `io` connects
  - `sdb.drive` changes files or folders (put / del)
  - **Why:** the graph explorer can then show the real theme widget data, and every change, wherever it happens.

**Serapath's feedback (Discord, 25–29/7):**
- [**List every bug and feature explicitly**](https://discord.com/channels/859134561018839060/1397883267038052403/1398241544603041863) in the top-level comment, with Discord links as @inputs. "Remove bugs / add new features" says nothing. Every task in a worklog comment must also be in the top comment.
- **No feature is done without its docs**, e.g. storage and hooks, override files, path keys and which one wins.
- **Path keys:** document the rule. It wasn't clear if the folder style always wins, or whatever is defined last. The warning is great.
- [**An old `{ sid: '' }`**](https://discord.com/channels/859134561018839060/1397883267038052403/1398252393900015679) showed up (in a screenshot); remove it.
- **localdb's api** may still change a lot once the p2p stack comes in.
- [**Override files, two use cases:**](https://discord.com/channels/859134561018839060/1397883267038052403/1398255069589143642)
  1. nav overrides btn's drive with its own `nav/btn.css`. Nothing special needed: STATE knows it's running nav's override, so `{ $ref: 'btn.css' }` **must** come from nav's folder.
  2. nav replaces btn's `theme/` folder, but keeps btn's own `style.css`: save the file's ref id (a `Symbol`) first, then put it back.
     ```js
     const ref_id = data.drive['theme/']['style.css']
     data.drive['theme/'] = custom
     data.drive['theme/']['style.css'] = ref_id
     ```
  - Passing an `address` is awkward. Writing an override with a `$ref` already gives permission to fill the sub's drive with that file.
  - Ali: both cases work already; he'll remove `address`. It was there because STATE didn't save **who** made an override. [Serapath: **save that**](https://discord.com/channels/859134561018839060/1397883267038052403/1398955630336938004), so you can debug where data came from when a fallback or override seems ignored. He also asks again about [the reload problem](https://discord.com/channels/859134561018839060/1397139757808615492/1398249508571316315) (rows added again on every reload, see part 2, post 4): Ali answered around it but skipped it. Ali put it in his task list as "Increase of instances on reload".
- **Don't miss feedback:** go through the threads and the Discord **inbox** (mentions), collect everything, then solve it, mark it solved, or put it in the backlog.
- **PRs:** PR #4 couldn't be rebased, so Ali made [PR #7](https://github.com/playproject-io/datashell/pull/7) (merged 27/7). Update datashell PRs **often** (even just `drive.json`), and put the PR in the worklog.
- `init.js` isn't used anymore (now in shim.js): delete it. Update the "temp" repo too.
- **Task format (28/7):** Ali found listing every task twice redundant and suggested a "table of contents" with version links in the top comment. Serapath: keep it as it is. **`from` / `next` links are the core**, they connect all tasks into one graph. Every task needs at least one output. A task messenger will automate it later.
- **6/8:** a week with no news. STATE is critical; more time, or someone else takes it.
- **19/8:** Ali is back:
  - cleanup removed ~70 lines (repetition), not logged as a task
  - `#dev=node_modules/` lets him use his local STATE. [Serapath: put it in a **contribute** section](https://discord.com/channels/859134561018839060/1397883267038052403/1407371512175919187) of the docs, for people who clone the repo to make PRs.
  - [PR #10](https://github.com/playproject-io/datashell/pull/10) (merged 25/8). Serapath: "everything should always be in a worklog". Also check **Ahmad's STATE docs**. Ali: datashell has no docs folder, so he updates the docs in playproject for now.

**Status today (checked in datashell):**
- ✅ **Storage only through `admin`:** `statedb.admin(imported_db = localdb)` sets the db once ([STATE.js:774-786](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L774-L786)), as serapath asked. Example 1 passes `localdb` ([example1/page.js:4](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/page.js#L4)).
- 🟠 **`admin.on` events:** `'create sdb'` for modules and instances ([STATE.js:106](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L106), [STATE.js:220](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L220)), `'put'` ([STATE.js:1047](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1047)), `'import'`. But:
  - io sends `callback('Connect', alias)`, not `{ type, data }` ([io.js:13](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/io.js#L13))
  - there is no `del` in the drive, so no `del` event
  - the type is `'create sdb'`, not `'load'`
- ✅ **`address` is gone:** nav's override is just `{ $ref: 'btn.css' }` ([nav.js:136-140](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/nav/nav.js#L136-L140)). ❓ Not checked if STATE now saves **who** made an override.
- ✅ **Path keys work:** validation lets them through, and example 1 uses both styles ([example1/page.js:132-133](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/page.js#L132-L133)).
  - 🟠 **Which wins:** the folder style, **always**, whatever the order. The path keys of that dataset are skipped, with the warning ([STATE.js:513-528](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L513-L528)). Serapath's 277 rule was "the last one wins". Needs a test and docs.
- ✅ **Helper subs as `0`:** the fallback check allows `object | number` for subs ([STATE.js:1351](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1351)).
- ⏳ **The test lines** are still in nav.js ([nav.js:40-41](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/nav/nav.js#L40-L41)).
- ✅ **`{ sid: '' }`:** not found in datashell today.
- ✅ **`init.js`:** gone.
- ⏳ **`#dev=`:** on main it **crashes**. `dev` is never defined, both lines are commented out ([shim.js:575-581](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/shim.js#L575-L581)). My `dev-setup` branch fixes it (from 275). It's not in the docs yet; only in [doc/state/temp.md:308](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/state/temp.md#L308).
- ⏳ **Docs** for storage, hooks, override files, path keys: not in `doc/api.md`.
- ✅ **docs folder:** datashell has `doc/` now.

**Questions for serapath:**
- **Path keys:** the folder style always wins today. Keep that, or switch to "last one wins" (your 277 rule)?
- **`admin.on` types:** `'create sdb'` → `'load'`? And should io's `'Connect'` become `{ type: 'connect', data }`?
- **Who made an override:** is it still needed, now that `address` is gone?

**Affects my work:**
- **Tests (#39 4️⃣):**
  - path keys: both styles work; with both, check which wins and that the warning shows
  - `admin.on`: one event per `sdb`, per io connect, per put (and del, once it exists), all `{ type, data }`
  - override files: nav's `$ref` loads from nav's folder; case 2 (save the ref id, put it back)
- **Fixes:** remove the nav.js test lines; io's callback to `{ type, data }`.
- **`#dev=` (#39 2️⃣):** my `dev-setup` fix + a **contribute** section in the docs (fits my CONTRIBUTING task).
- **Docs (#39 4️⃣):** storage, hooks, override files, path keys rule.
- **My own worklogs:** every task in the top comment, every task has an output, `from` / `next` links, the PR in the worklog.

**From the video (7 min):**
- **0:12 Storage:** the root passes a storage module with the same methods as localdb. "Easy, AI can do it in seconds." Without it, localStorage.
- **0:58 Override files:** nav gives btn its `btn.css` from nav's folder. The catch: you also pass an `address`, taken from the fallback's args. Without it, "the workaround is really expensive". Demo: a normal btn, then the btn with nav's CSS.
- **2:42 Path keys:** `theme/style.css` defined both ways. One alone works (`system-ui` font). With both, the object definition is used (`serif`), and a warning shows: "Both JSON and path definitions used for dataset theme in the drive of page".
- **4:46 Helper subs:** STATE already skips its own helpers (io, localdb, STATE), but it can't know the others. So you give a helper `0` in the fallback.
- **6:00** Plus debugging for the errors from Discord.

---

## 280: STATE v0.0.26, read-only sub drives, examples on the new boot (19/8/2025)

links: [video](https://youtu.be/ldrdpECQR7M) · [GitHub: STATE (datashell #6)](https://github.com/playproject-io/datashell/issues/6#issuecomment-3204026133) · [feedback (datashell #6)](https://github.com/playproject-io/datashell/issues/6#issuecomment-3206665215) · [Discord: worklog post](https://discord.com/channels/859134561018839060/1219764849349755053/1407578703495696448) · [Discord thread 20–22/8/2025](https://discord.com/channels/859134561018839060/1407578703495696448) · [datashell PR #10](https://github.com/playproject-io/datashell/pull/10)

**What he did** (~10h, outputs: [STATE_v0.0.26](https://github.com/alyhxn/playproject/commits/main/), [datashell_v0.0.1 = PR #10](https://github.com/playproject-io/datashell/pull/10)):
- **Revamp (3h):** small cleanups. The biggest one is a single `gen_id` that makes a unique id for a new db entry from a seed.
- **`address` removed (1h):** nav gives btn its `btn.css` with just `{ $ref: 'btn.css' }`. STATE now saves the override's address itself. But it's not efficient: STATE doesn't know **which** file an override changed or added, so it has to try every super's address.
- **`sdb.get(sid)` (1h30):** gives the **drive of a sub**, read-only: `get`, `list`, `has`, plus `on(listener)` to hear its changes. Demo: nav reads menu's drive and reacts when menu's title changes.
- **Examples 2 and 3 on the new boot (4h):** went through every file to bring in months of changes, but kept what each example is meant to show.

**His proposals:**
- Is the whole `const { sdb, io } = statedb(fallback_module, localdb)` line optional?
- Set the db with `statedb.admin`, not `statedb`.
- `statedb.admin.on` callbacks for all major actions in STATE.
- A smart way to know which file an override changed or added.

**Serapath's feedback (Discord, 20–22/8):**
- **Link the PR as an output** in the worklog.
- [**Storage + hooks only once, at the root.**](https://discord.com/channels/859134561018839060/1407578703495696448/1407726191032533002) No module or instance can do it. Maybe `const admin_api = statedb.admin(localdb)`, with `localdb` optional, and `admin_api.on` for all major actions.
  - Ali: then `statedb` must wait for the admin, but for how long, and what if the admin never sets a db?
  - Serapath: the root **can only call `statedb(...)` after `statedb.admin(...)`**, otherwise `statedb` throws.
- [**Which file did an override change?**](https://discord.com/channels/859134561018839060/1407578703495696448/1407728680045646026)
  - Ali: comparing files is expensive (large, any type of data). Saving the address works, but if btn is overridden by many supers, STATE doesn't know which one changed what.
  - Serapath: without that, it's [**a security nightmare**](https://discord.com/channels/859134561018839060/1407578703495696448/1407865224891076688). Any module in a long dependency chain could override your data, and you'd have to read every fallback in the chain to find out. "If things go wrong, you want to explore where stuff came from."
  - Ideas: (1) a **membrane** (recursive `Proxy`) that traps every assignment, as a standalone helper module like localdb. (2) fallbacks fill a db object instead of returning JSON (every component would change).
  - **Fallbacks always run** (for validation), even when an override replaces them. Overrides can be skipped by a super's override.
  - [**The plan:**](https://discord.com/channels/859134561018839060/1407578703495696448/1407868505000509621) split the validation run from the real run. In the real run, **record which fallbacks and overrides run** and which sub ones they call. Then you know **where to look**, maybe good enough. Keep the membrane in the **backlog** for sandboxing, after STATE is done.
- **Sub drives:** "hope it's read only though".
- **Example 1 in Ali's repo had its own STATE.js** copy. Ali: it's his dev version, datashell's is often behind. Serapath: use `playproject-io/datashell` for the latest and `alyhxn/datashell` for dev, or `#dev=`.
- [**Document all URL flags**](https://discord.com/channels/859134561018839060/1407578703495696448/1407792598990717059) (`#dev`, `version=`, …) and discuss whether we need more.
- **`#dev=` from another repo fails on GitHub Pages: a CORS error.** [Serapath's fix](https://discord.com/channels/859134561018839060/1407578703495696448/1408214329169543168):
  - every STATE.js gets a `cache.html` next to it, with `<script>onmessage = e => eval(e.data)</script>`
  - shim.js loads it in an **iframe** (from the `#dev` url), sends code that fetches the files from the iframe's own origin, and gets them back via `postMessage`
  - no server headers needed. Serapath already has the code and adds it after Ali's next PR (a note in PR #10). Ali: don't build it.

**Status today (checked in datashell):**
- ✅ **Admin first:** `statedb.admin` is only set on the first (root) `STATE` call ([STATE.js:53](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L53)), and `statedb(...)` throws "Admin access required! Call statedb.admin() first." if it wasn't called ([STATE.js:59](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L59), [STATE.js:1253](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1253)). `localdb` is optional (`admin(imported_db = localdb)`, see 279).
- ✅ **Sub drives read-only:** `sdb.get(sid)` returns the drive with `put: undefined`, plus `on` ([STATE.js:967-974](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L967-L974)).
- ✅ **`gen_id`:** in localdb ([localdb.js:107-115](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/localdb.js#L107-L115)).
- ✅ **Examples 1–3** use `statedb.admin()`, and none has its own STATE.js copy.
- 🟠 **Which override changed a file:** `compare(before, after, filepath)` gives a `$ref` the override's `filepath` if the override changed it ([STATE.js:624-637](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L624-L637)). Still the `@TODO` for an override of an override (see 267). ⏳ No trace of which fallbacks / overrides ran, and no split between the validation run and the real run.
- ⏳ **URL flags docs:** the README explains `version` only. `#dev` isn't documented (and crashes on main, see 279).
- 🟠 **iframe + postMessage:** shim.js already uses it to load `drive.json` (it runs itself as `onmessage = e => eval(e.data)` inside the iframe, [shim.js:119-125](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/shim.js#L119-L125), [shim.js:228-253](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/shim.js#L228-L253)). ⏳ For `#dev` it's still a `@TODO` ([shim.js:582](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/shim.js#L582)). STATE.js still comes from `playproject-io/datashell` only.

**Questions for serapath:**
- **The override trace:** is "record which fallbacks / overrides run in the real run" still the plan? Today only `compare()` exists.
- **The `#dev` iframe fetch:** did your `cache.html` code get pushed? I only see the `drive.json` part and a `@TODO`.

**Affects my work:**
- **Tests (#39 4️⃣):**
  - `statedb(...)` before `statedb.admin()` → the clear error
  - `sdb.get(sid)`: `get` / `list` / `has` work, `put` doesn't, `on` fires when the sub changes
  - override files: the `$ref` comes from the overriding module's folder (with 279's two cases)
- **Docs (#39 2️⃣ / 4️⃣):** all URL flags (`version`, `#dev`) in the contribute section, next to my `#dev=` fix.
- **Later:** the override trace, the membrane helper (backlog, sandboxing).

**From the video (6 min):**
- **0:01 Revamp:** small tweaks. The `gen_id` function removed the most lines.
- **0:44 `address` removed:** nav gives btn access to `btn.css` without an address. STATE stores it now, but "not very efficient", because it doesn't know which file the override changed. Hence his proposal.
- **2:16 `sdb.get`:** nav gets menu's drive by its sid, with `list`, `get`, `has` and a listener. Demo: click menu's title, nav's listener runs. It uses the normal drive functions, just with the sub's id.
- **4:32 Examples:** example 1 was up to date. Examples 2 and 3 needed many passes to bring in the changes, while keeping what each one shows.
- **5:17** The feedback that needs discussion moved to the proposals.

---

## Thread: a release process for PR #10 (20–25/8/2025, between 280 and 281)

links: [Discord: serapath's post](https://discord.com/channels/859134561018839060/1219764849349755053/1407773576161132576) · [Discord thread](https://discord.com/channels/859134561018839060/1407773576161132576) · [datashell PR #10](https://github.com/playproject-io/datashell/pull/10)

**What it is:** serapath could merge PR #10, but wants a **release process** first.
- Each PR that changes STATE should also update **`drive.json`**: a new version with its commit, so others can start using it.
- The **`latest`** label probably needs to move too.
- So he waits with the merge until `drive.json` is updated, if more updates come anyway.
- [**(22/8)** A note to himself](https://discord.com/channels/859134561018839060/1407773576161132576/1408215183280701641): the CORS fix for `#dev=` (the `cache.html` from 280) goes into [shim.js:484-486](https://github.com/playproject-io/datashell/blob/main/shim.js#L484-L486).
- **(25/8)** He asks for a worklog that explains the latest PR and the other work (→ 281).

**What happened next (from the datashell history):**
- Ali added "support for external STATE" in the shim (21/8, `90f62d0`) and fixed a bug (26/8, `0790909`). After that, `drive.json` had versions `0`–`3`: `0` and `1` **pinned to a commit** (`c9c8c1a`), `2` and `3` on `main`, with `stable: 1`, `latest: 3`.
- PR #10 was merged on 25/8.
- In **12/2025** serapath reset it: "reset datashell versions to 1" (`8f8b24a`).

**Status today (checked in datashell):**
- ⏳ **No release process:** [drive.json](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/drive.json) has only version `1`, with `stable` and `latest` both `1`, and it points to `refs/heads/main`, not a commit. So every page gets whatever is on `main` right now. No pinned versions.
- ⏳ **No written release steps:** nothing in the README, `doc/README.md` or `doc/conventions.md`.
- ⏳ **The `#dev` CORS fix:** still a `@TODO` (see 280).

**Questions for serapath:**
- **Release steps:** for each merge that changes STATE, is it: add a version pinned to that commit → move `latest` → move `stable` once tested? Who does it, the PR author or you?
- **Since the reset to `1`:** should versions start being pinned to commits again?

**Affects my work:**
- **My datashell PRs (#39):** each one that changes STATE also updates `drive.json`, once the steps are clear.
- **CONTRIBUTING (#39 2️⃣):** write down the release steps, next to `#dev=` and the URL flags.
- **A test (#39 4️⃣):** every `drive.json` version points to files that exist (commit or branch), and `stable` / `latest` point to real versions.

---

## 281: STATE v0.0.27, `statedb.admin`, docs written with AI (25/8/2025)

links: [video](https://youtu.be/VTWzylZlGvk) · [GitHub: STATE (datashell #6)](https://github.com/playproject-io/datashell/issues/6#issuecomment-3221469015) · [feedback (datashell #6)](https://github.com/playproject-io/datashell/issues/6#issuecomment-3222058756) · [Discord: worklog post](https://discord.com/channels/859134561018839060/1219764849349755053/1409639699001376958) · [Discord thread 26/8–2/9/2025](https://discord.com/channels/859134561018839060/1409639699001376958)

**What he did** (~8h, outputs: [STATE_v0.0.27](https://github.com/alyhxn/playproject/commit/0ce67e6edaefefc6406ae196f8b864c14ab4b820), [datashell PR](https://github.com/playproject-io/datashell/compare/main...alyhxn:datashell:main?expand=1), merged 26/8):
- **`statedb.admin` (1h):** the root calls it first, then `statedb`. Callbacks run on every big change: `create sdb`, `put`, an io connect, a delete. It's only attached while the root id is not set yet.
- **Docs (4h):** he couldn't decide how to write them, so he used AI (Claude 4, many models and prompts, all his info). He says he reviewed it: accurate, with new examples and ideas, but the "concepts" part has many hallucinations.
- **Debugging (3h).**

**His proposals:**
- **Override tracking needs a `Proxy`:** his wrapper compares the data before and after an override (JSON). Edge case: if btn's fallback and the override set the **same** `btn.css`, the compare sees no change, so the override's address isn't saved. A Proxy catches that, but is slower.
- **"Strict dataset group names"** for the quick editor: new dataset names must be defined in the root first, so subs can't add names "with no real purpose". All page content goes in `lang/` (he wrote that in the docs as a recommendation).

**Serapath's feedback (GitHub + Discord, 26/8–1/9):**
- [**Dataset names, the real rule:**](https://discord.com/channels/859134561018839060/1409639699001376958/1409655272841936946) every component may name its datasets as it likes. But for each dependency, it maps that dependency's names to its own. So the root only maps its direct subs, and everything below is mapped through them. Example:
  - D has `language/`, E has `translation/`
  - B has `text/` and maps D `language → text`, E `translation → text`
  - C has `words/`
  - A (root) has `lang/` and maps B `text → lang`, C `words → lang`
  - So what A puts in `lang/` reaches E as `translation/`.
  - Ali: yes, same idea. graph_explorer's `entries/` should be mapped to `lang/` but isn't.
- [**`drive.json`: no version should ever point to "latest" (`main`)**](https://discord.com/channels/859134561018839060/1409639699001376958/1409675949708148898), always to a commit hash. Then you can keep pushing without breaking anyone's app. A new version = a new entry in `drive.json`. Later: a prompt when a new version exists, and **data migration** between versions, since real users can't just wipe their localStorage.
- [**Docs:**](https://discord.com/channels/859134561018839060/1409639699001376958/1409680508123615333) many files have almost 1000 lines. They need to be:
  - **100% correct, 100% of the API, and as short as possible** ("only AI doesn't care how much you write, humans do")
  - made from an **outline first**, then AI helps **section by section** (small parts are easy to review and fix)
  - written from the real STATE.js, the examples, the techniques, his own old docs and **Ahmad's docs**
  - using **`<details><summary>…</summary>…</details>`**: the key points visible, the extra info folded away
  - kept **up to date from now on** ("mandatory")
- [**Later (26/8):** "so many hallucinations"](https://discord.com/channels/859134561018839060/1409639699001376958/1409832144314044427). The `net` part explains protocol callbacks, but not how to use `net`. `#dev` isn't documented. And Ali's shim.js change already causes **a bug for Ibrar**.
- **Override tracking:** only track **which module's override was used** in the running app, and which other fallbacks / overrides it called. Not which override set which value. A full membrane is slow and comes later, with sandboxing. If an override sets the **same** value, ignore it: it can't cause a bug that isn't there anyway. If Ali still builds the Proxy, make it a standalone internal module.
- **(28/8, [1/9](https://discord.com/channels/859134561018839060/1409639699001376958/1411867565982224387))** Look at Ahmad's updated docs, and a comment in [Ahmad's worklog 53](https://discord.com/channels/859134561018839060/1325904311221489796/1411787669117079764) ([GitHub](https://github.com/playproject-ui/ui-components/issues/8#issuecomment-3240322503), graph explorer) about STATE **performance**: maybe **caching**, and run **`onbatch` on the next tick**, so all `put`s finish first (the microtask queue).
- **(1/9)** Six days with no news. STATE is core, so it needs regular progress, or other work for Ali.

**Status today (checked in datashell):**
- ✅ **`statedb.admin` + callbacks:** see 279 / 280 (admin first, `create sdb`, `put`, io `Connect`, `import`; no `del` yet).
- ✅ **Which module made an override:** every override is saved with `by: [root_id]` next to its function ([STATE.js:730-734](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L730-L734)). That's what serapath asked for.
- ✅ **Ali's JSON compare wrapper is in use:** `mutate` compares the data before and after each override, also for its `api` ([STATE.js:717-729](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L717-L729)). No Proxy.
- ✅ **Dataset names via mapping:** a sub's mapping must point to a root dataset or an already mapped one, otherwise `FAIL.nodataset` ([STATE.js:598-613](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L598-L613)). That's serapath's rule. graph_explorer's `entries/` not checked.
- ⏳ **Docs:** still long: `doc/api.md` 982 lines, `doc/guide/README.md` 1121. **No `<details>`** anywhere in `doc/`. `#dev` not documented (see 279, 280).
- ⏳ **`drive.json` on commit hashes:** no, everything is on `main` (see the release thread).
- ⏳ **`onbatch` on the next tick:** no. `put` calls the listeners right away ([STATE.js:1045-1046](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1045-L1046)), and the old `Promise.resolve().then(notify)` is commented out ([STATE.js:955](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L955)).
- ❓ **Ibrar's shim bug, Ahmad's docs and performance comment:** not checked.

**Questions for serapath:**
- **Override tracking:** the `by` list + the JSON compare are there. Is that "good enough", or is the call trace (which fallbacks / overrides ran) still missing?
- **Docs:** should I start from an outline of the current `doc/` files and cut them down, or start fresh?

**Affects my work:**
- **#39 3️⃣ (`onbatch`):** run it on the next tick / at the flush, after all `put`s. Same as "onbatch runs when the writes get flushed".
- **Docs (#39 4️⃣):** outline first, section by section, short, `<details>` for extras, checked against STATE.js. Include Ahmad's docs.
- **Release steps (#39 2️⃣):** `drive.json` versions point to commit hashes (with the release thread).
- **A test:** `by` names the right module for an override; an override that sets the same value counts as "not touched".
- **How I use AI:** small, concrete parts that are easy to review, and I check every line against the code. That's how these notes are made too.

**From the video (8 min):**
- **0:02** Not many updates; the rest needs discussion. This worklog is for the PR.
- **0:21 `statedb.admin`:** define the admin in the root first, then call `statedb`. Callbacks run on create sdb, put, io connect, delete. `admin` is only attached when the root id isn't set yet.
- **1:22 Docs:** he thought about them all day but couldn't decide, so he used AI (Claude 4), tried many models and prompts, and reviewed the result. "Not just accurate", new examples and ideas, but the concepts part has many hallucinations. "Worth a review".
- **4:01 Override tracking:** a wrapper around the api compares the data before and after (JSON). The edge case: same file in the fallback and the override → no change seen → no address saved. A Proxy would catch it, but is slower. "Let me know which approach."
- **6:36 Dataset group names:** "missed or misimplemented". Names must be defined in the root first, subs can't add new ones, to avoid "garbage". He needs it for switching and registering datasets in the quick editor.
- **7:53** The PR is ready, "but have a look at the docs before merging".

---

## 282: STATE v0.0.28, strict root datasets, quick editor global datasets (3/9/2025)

links: [video](https://youtu.be/xz8NEPAPnXM) · [GitHub: STATE (datashell #6)](https://github.com/playproject-io/datashell/issues/6#issuecomment-3249523557) · [GitHub: quick editor (datashell #5)](https://github.com/playproject-io/datashell/issues/5#issuecomment-3249538035) · [feedback (datashell #6)](https://github.com/playproject-io/datashell/issues/6#issuecomment-3251311513) ("all feedback on discord") · [Discord: worklog post](https://discord.com/channels/859134561018839060/1219764849349755053/1412815182589067407) · [Discord thread 4–16/9/2025](https://discord.com/channels/859134561018839060/1412815182589067407)

**What he did** (~12.5h over 3 days, outputs: [STATE_v0.0.28](https://github.com/alyhxn/playproject/commit/2d3327f71ed1803b03b6f6e1ca5fe3df0e44dff8), [quick_editor_v0.0.7](https://github.com/alyhxn/ui-components/commit/582bc75d9fdaf889644774706e749a5f14cb7592)):
- **Strict dataset creation (4h):** subs could add a dataset name in their `mapping` that wasn't in their drive (the "leak"). So there were many extra datasets, and nobody used `lang/` for page text.
  - First fix: a dataset must be in the drive before it's in the mapping. Too much overhead: every module between the root and a deep sub has to define it too.
  - Final rule: every dataset used in the project is defined **once in the root**. A sub's mapping must point to a root dataset, otherwise: "can't be mapped to any root datasets".
- **`$ref` tracking (3h):** when an override changes a `$ref`, the overriding module's address is saved next to it (an `address` key), so STATE knows where to fetch the file from.
- **Quick editor (~5.5h):**
  - import / export updated
  - **global datasets (4h):** shows the root datasets. ui-components has many extra datasets (for Ahmad to reuse) that could all be in `lang/`. Datasets should be grouped by the events they change on.
  - **named datasets per type:** `default`, add another (e.g. `rainbow`) and switch to it, for one or more components. A component without one uses `default`.
  - importing an export gives new ids (the old ones are taken)
  - merged Ahmad's changes by hand, so Ahmad can merge to main
- The STATE commit edits `doc/state/example/node_modules/STATE.js` in playproject, adds `.vscode/settings.json` and deletes `.eslintrc.json`.

**Serapath's feedback (Discord, 4/9):**
- [**`.vscode`:**](https://discord.com/channels/859134561018839060/1412815182589067407/1412902882629390470) add it to `.gitignore` and delete it from the repo. Ali: he added it many times, it "keeps vanishing".
- [**No STATE.js copy in playproject:**](https://discord.com/channels/859134561018839060/1412815182589067407/1412902882629390470) the official STATE is in datashell. Develop in your fork (`alyhxn/datashell`). `drive.json` can get a new version without moving `latest`, and the URL param picks it (for dev it may point to latest, not a commit).
  - Ali: pushing every small change is slow, that's why there is `#dev`. He wants to add the copy to `.gitignore`.
  - [Serapath: no, that "pollutes" `.gitignore`.](https://discord.com/channels/859134561018839060/1412815182589067407/1412922393785139213) Clone datashell and playproject, run both on different ports, load STATE.js from localhost with `#dev`.
  - Ali: localhost has CORS issues. Serapath: he'll fix that in his next commit; until then budo has a `--cors` flag.
- [**Move the docs:**](https://discord.com/channels/859134561018839060/1412815182589067407/1412923469154222082) `doc/state` (and `doc/README.md`) in playproject describe datashell's `lib/node_modules`. Move them to datashell in a PR and update them. Keep what isn't datashell (e.g. graph explorer terms) in playproject.
- **standardx:** `async function quick_editor(opts)` lost its space before `(`, so an auto formatter ran. Add standardx as a dev dependency with camelCase off (snake_case). Ali: the dependency showed endless syntax errors, he'll reinstall it.
- [**The real mapping rule**](https://discord.com/channels/859134561018839060/1412815182589067407/1412913638691573821) (about Ali's "this can never happen"):
  - leaf modules (no dependencies) have their own datasets
  - every module using one **must** map its datasets to its own. A name can be only in the mapping, not in the drive (a later version may add it).
  - so the root only maps its direct subs, everything deeper is already mapped
  - [example A → B → E → G → H:](https://discord.com/channels/859134561018839060/1412815182589067407/1412917785893277736) H's `x` is A's `a` (`a > m > a > p > x`)
  - `y` exists only in H, so it "bubbles up" to the root (`y: 'y'` at every level). Rare and fine, document it in the root's README.
- **Everything explicit for now:** Ali lets devs skip the mapping when their drive has a dataset with the same name? Too early for convenience. Stay "as verbose and explicit as possible" until STATE is done (later: compare shallow vs deep override examples).
- **Ali's to-dos from this:** remove STATE.js from playproject's example (and from `src`? teammates still use it), add standardx, move the useful docs (mostly done), delete the old ones. Should the examples stay in playproject or move?
- [**Ali's question:**](https://discord.com/channels/859134561018839060/1412815182589067407/1412927882526982175) `y` is mapped by every component but only H uses it. He made carrying it down **optional**, so only the root maps it once. Required or optional?

**The thread, quick editor and naming (4/9):**
- [**Serapath's list (3:56), what the quick editor shows us:**](https://discord.com/channels/859134561018839060/1412815182589067407/1412934360570662946)
  1. an app has a long list of addresses for all its modules / instances ☑️
  2. an app has a list of dataset names at the root, from all the mappings ☑️
  3. for each dataset name you can pick a custom dataset, e.g. a "rainbow" theme for `style/` ☑️
  4. the combination of all dataset names, each with its chosen custom dataset, has **no name yet** ❓ → this became the "named root dataset"
  - Ali: (3.) looks implemented. Serapath: then why does the editor show instance paths, not the dataset content?
- **Naming:** Ali's structure is `root_dataset > dataset_name > module_dataset > files`. Serapath: "no idea what you just tried to explain". [His words:](https://discord.com/channels/859134561018839060/1412815182589067407/1412937196012310549)
  - **dataset type:** `style/`, `lang/`, …
  - **named custom dataset:** e.g. `rainbow.json` for `style/`, `spanish.json` for `lang/`. It maps each modulepath to its files.
  - **named root dataset** (a "dataset collection"): maps every dataset type of the app to one named custom dataset (e.g. `my_dataset.json`: `style → rainbow`, `lang → spanish`). You load "myapp" with "my_dataset".
  - Ali: yes, that's it. He'd like shorter names, with these long ones as the definitions.
- **A missing file in a named dataset:** Ali: fall back to `default`, to avoid errors. [Serapath: **no, it should be empty and throw errors.**](https://discord.com/channels/859134561018839060/1412815182589067407/1412939614418763876)
- [**What the quick editor should do:**](https://discord.com/channels/859134561018839060/1412815182589067407/1412943393935327384)
  - left: all dataset types; top: the named custom datasets of the selected type; right: all **idpaths** (modules and instances), click one to see its drive for that type + dataset
  - show the active named dataset next to each type (`style/: rainbow`, `lang/: spanish`)
  - save an edited named dataset under a new name; export / import it as a file into the selected type
  - see, edit, save, export and import the **named root dataset**; its export has all types with their active named datasets
  - a status bar with the full path when it's too long (Ali: hover shows it)
- [**What it does today (serapath, with a screenshot):**](https://discord.com/channels/859134561018839060/1412815182589067407/1412944103716556892) only import / export / apply of named datasets. [No named root dataset](https://discord.com/channels/859134561018839060/1412815182589067407/1412968154912522431), no edit + save (only export → rename → import), and the editor shows file ids (`["page.css:1"]`), not the drive content. Ali: the ids were "random", it can show the content.
- [**idpaths:**](https://discord.com/channels/859134561018839060/1412815182589067407/1412948737541541999) "modulepath" should be renamed to **"idpath"** (or "addresspath"), since it can be a module or an instance. An app with a menubar and 3 buttons has 5 instances + 3 modules = **8 idpaths, each with its own drive**. Ali: showing every idpath "does not make sense", each is "a folder of files" and is already shown. Not settled.

**Later in the thread (10–16/9):**
- **10/9:** serapath: "any news?"
- [**13/9:**](https://discord.com/channels/859134561018839060/1412815182589067407/1416416152674111559) Ahmad merged Ali's changes into ui-components. It works on localhost, but online (bundled) graph_explorer can't fetch its remote files. Serapath knows the fix, "just need to get to it".
- **15/9:** serapath can't find the proposal tasks from [his #30 task list](https://github.com/playproject-io/playproject-io.github.io/issues/30#issuecomment-3023578399) in [datashell #6](https://github.com/playproject-io/datashell/issues/6). "Forgotten?" `net` matters more and more.
  - [The docs on datashell](https://discord.com/channels/859134561018839060/1412815182589067407/1417155189315604580) are "horrible and verbose and even wrong in many places". Don't move all of `doc/state` at once: a **"docs migration task" with many sub-tasks**, one at a time.
  - Ahmad uses STATE a lot, maybe he takes it over and asks Ali when things are unclear.
  - Ali's [`doc/state/net.md`](https://github.com/alyhxn/playproject/blob/main/doc/state/net.md) "seems just plain wrong". The last worklog was 12 days ago.
- [**16/9:**](https://discord.com/channels/859134561018839060/1412815182589067407/1417291950347915425) docs for `net` and the updated `io` / `net` are "quite urgent", even before everything is implemented. Serapath is fitting io / net to the p2p stack for the task messenger and isn't happy with io / net yet.
  - Ali: the next worklog lands "by the time you wake up". First he has to finish **external modules** (modules in their own GitHub repo, not `src/node_modules`). Serapath: related to the CORS issue, an important fix.

**Status today (checked in datashell):**
- ✅ **Root datasets rule:** a mapping value must be a root dataset or an already mapped one, else `FAIL.nodataset` ([STATE.js:598-613](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L598-L613), [L1277-1279](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1277-L1279)). Root datasets are collected in [STATE.js:577](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L577).
- ✅ **Explicit mapping:** a sub's dataset with no mapping throws `FAIL.nomapping` ([STATE.js:581-583](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L581-L583)). No "same name" shortcut.
- ❓ **`y` optional:** a sub's mapping may point straight to a root dataset ([STATE.js:603](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L603)), so the modules in between don't need `y: 'y'`. That's Ali's "optional". Serapath's answer: not in this thread.
- ⏳ **`$ref` address:** not in main. There is no `address` next to `$ref`, only the JSON `compare()` ([STATE.js:624](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L624)) and `by` ([STATE.js:730-734](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L730-L734)). See 280 (`address` removed) and 281.
- ✅ **`.vscode`:** in datashell's `.gitignore`.
- ⏳ **standardx:** not in datashell's `package.json` (see 267 / 268).
- ✅ **Local dev with CORS:** `npm start` (port 9966) and `npm run shim` (port 9999) use `http-server --cors` (`package.json` L9-10). But `#dev=` still crashes on main (see 279).
- ⏳ **Docs moved:** datashell has `doc/state/` (8 files) and `doc/README.md`, but they're long and partly old (see 281). Not checked if playproject still has its copy.
- ❓ **Quick editor global / named datasets:** in ui-components, not checked.
- ⏳ **Missing data in a named dataset:** `swap` keeps the old dataset when a node has no dataset with that name, no error ([STATE.js:892-924](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L892-L924)). Serapath wanted "empty and throw errors".
- ⏳ **Named root dataset:** not in STATE.js. `swap` switches one type at a time.
- ⏳ **#30 tasks in datashell #6:** the top comment still misses some: "admin pluggable storage & hooks" (done in 279), "overridden nodes use the files of the override", path keys + the conflict warning (done in 279), "non-state subs not required in the fallback", "drive.json named `shim.json`". There are no `io` / `net` tasks at all.
- ⏳ **`net.md`:** datashell's [`doc/state/net.md`](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/state/net.md) is the same 17 lines as Ali's "plain wrong" one. `doc/net.md` (184 lines) is a different file, not checked.
- ⏳ **Docs migration task:** none in datashell #6.

**Questions for serapath:**
- **`y`:** should it be mapped at every level (`y: 'y'`), or is "only the root" fine? Main does "only the root".
- **`$ref` address:** is it still wanted, now that `address` was removed (280)?
- **Names:** do we use "dataset type", "named custom dataset", "named root dataset" and "idpath" in STATE.js and the docs too?
- **idpaths:** should the editor list every instance, or only modules?

**Affects my work:**
- **Tests (#39):** a mapping to a non-root dataset throws `nodataset`; a missing mapping throws `nomapping`; a deep sub mapped straight to a root dataset (`y`) works.
- **CONTRIBUTING (#39 2️⃣):** the dev setup: datashell + the app on two ports, `--cors`, STATE.js loaded with `#dev`; no STATE.js copies in other repos.
- **Lint:** standardx with camelCase off (already a task).
- **Devkit (#39):** its dataset switcher = serapath's editor layout: dataset types, named datasets, idpaths, the drive content (not file ids), save as new name, the named root dataset.
- **Tests:** a switch to a named dataset that a node doesn't have throws (serapath's rule; today it doesn't).
- **Docs (#39 4️⃣):** a docs migration task with sub-tasks, `net` / `io` first; replace the wrong `doc/state/net.md`.

**From the video (10 min):**
- **0:07 Strict datasets:** many extra datasets, nobody used `lang/` for text. One `lang/` means one event when the language changes.
- **0:53 The leak:** a dataset not in the drive could still be added in the mapping.
- **2:03 First fix, overhead:** every module between the root and a deep sub would have to define it.
- **2:53 Final rule:** every dataset in the project is defined once in the root. `lang/` and `io/` aren't mapped down, but deep subs still have them.
- **3:54** Removing `lang/` and `io/` from the root gives the error: "can't be mapped to any root datasets".
- **4:48 `$ref` tracking:** when a `$ref` changes, the override's module address is put beside the `$ref` key, so you know "where to look for this file".
- **5:57 Quick editor:** import / export updated.
- **6:13 Global datasets:** all root datasets. ui-components' extra datasets could all be in `lang/`, with local listeners for each part. Group datasets by the events they change on, not "random groups". For now they're all root datasets "to avoid getting the error".
- **7:44 Named datasets:** `default`, add others and switch to them.
- **8:17** A new `rainbow` theme for one or more components; a component without it uses `default`.
- **8:42** Export after changing `style/`, import it: it's a copy of `default` with new ids, because the old ids are taken.
- **9:45** He merged Ahmad's changes by hand, so Ahmad can merge to the main repo.

---

## Thread: update `io` and `net` (15/9/2025, between 282 and 283)

links: [Discord: serapath's post](https://discord.com/channels/859134561018839060/1219764849349755053/1417164013397217421) · [Discord thread](https://discord.com/channels/859134561018839060/1417164013397217421) · [Ali's io.md](https://github.com/alyhxn/playproject/blob/main/doc/state/io.md) · [Ali's net.md](https://github.com/alyhxn/playproject/blob/main/doc/state/net.md) · [serapath's io feedback from 19/5 (#33)](https://github.com/playproject-io/playproject-io.github.io/issues/33#issuecomment-2892264954)

**What it is:** a new planning round for `io` and the `net` fallback property. Datashell has no `io` / `net` docs, the `net` docs are lacking, and there are no examples.
- [**Order:**](https://discord.com/channels/859134561018839060/1417164013397217421/1417166125677940967) docs first, then examples that show the features, then implement.
- [Serapath starts from his feedback of 19/5 (#33):](https://discord.com/channels/859134561018839060/1417164013397217421/1417166125677940967)
  - `net` should only say **who connects to whom**, not which events are sent (in Ali's proposal, page told the button to send `register` with `rainbow_theme`).
  - a button doesn't know about themes; the fallback runs only once, so it can't change what's sent at runtime; no new `io.at` connection on every click
  - maybe a port first says which api calls / events it wants, and **subscribe / connect events are saved in the db**, so connections come back after a reload
- [Ali:](https://discord.com/channels/859134561018839060/1417164013397217421/1417164581523951850) he'll start after the quick editor and the external module fetching, "hopefully this week".

[**The example (5 files):**](https://discord.com/channels/859134561018839060/1417164013397217421/1417168189007331430) `page.js` (dev0) uses `header` (dev1) and `footer` (dev3). `header` uses `menubutton` (dev2), `footer` uses `statusbar` (dev4). Each one is by a different developer:
- dev2 and dev4 don't know who will use their component.
- dev0 wants to know as little as possible about the insides of `header` and `footer`.
- `menubutton` has `drive: { 'state/': { raw: { 'name.json': 'clickme' } } }`, `statusbar` has `'counter.json': 0`. Every file has an empty `net: { }`.

[**The goal:**](https://discord.com/channels/859134561018839060/1417164013397217421/1417168189007331430) a click on `menubutton` raises the number in `statusbar`, **without bubbling** the click up through `header` to `page` and back down through `footer`.
- **The method:** define upfront that a message type sent by `header` (or `menubutton`) is received by `statusbar` as a message type `statusbar` supports.
- Like **`mapping` for datasets**: components built separately don't have matching message types, so somebody has to map them.
- Serapath grows the snippets into **the** io / net example. Ali can make proposals too, then they refine it together and update the docs.

**Status today (checked in datashell):**
- ⏳ **`net` in STATE.js:** STATE only gives each `net` entry an id and passes `net` through ([STATE.js:217-224](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L217-L224)). Validation just checks it's an object ([STATE.js:1362](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1362)). No wiring of connections, no message type mapping.
- ⏳ **Docs:** [`doc/state/io.md`](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/state/io.md) (107 lines) and [`doc/state/net.md`](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/state/net.md) (17 lines) are the same files as Ali's. `net.md` is the one serapath called "plain wrong" (see 282).
- ⏳ **Example:** none of the 5-file example in `web/`. Example 1's `btn.js` still has the old `net.event.click` code, commented out ([btn.js:57-61](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/web/example1/node_modules/btn.js#L57-L61)).
- ❓ **A separate `net` module (3/2026):** Ahmad added [`lib/node_modules/net.js`](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/net.js) + [`doc/net.md`](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/net.md) (184 lines): a parent `io.invite`s a child, the child `io.accept`s, then messages go by channel name. That's still parent ↔ child, so it doesn't reach the "no bubbling" goal by itself. Not checked if it's meant to be the answer to this thread.

**Questions for serapath:**
- **Ahmad's `net.js`:** is it the new `net`, or is the `net` fallback property (with message type mapping) still planned?
- **The 5-file example:** is there a finished version of it, or is it still open?

**Affects my work:**
- **Docs (#39 4️⃣):** `io` / `net` first in the docs migration (with 282), and replace the wrong `doc/state/net.md`.
- **Tests (#39):** the 5-file example as a test: a click in `menubutton` updates `statusbar` with no bubbling, and the connection comes back after a reload.
- **My net.js message shape (see 273):** keep it close to whatever message type mapping is decided here.

---

## 283: quick editor v0.0.8, root datasets (16/9/2025)

links: [video](https://youtu.be/DUQXmA3FPD8) · [GitHub: quick editor (datashell #5)](https://github.com/playproject-io/datashell/issues/5#issuecomment-3297997738) · [feedback (datashell #5)](https://github.com/playproject-io/datashell/issues/5#issuecomment-3315292204) ("all on discord") · [Discord thread 16/9–11/10/2025](https://discord.com/channels/859134561018839060/1417482562921562152)

**What he did** (~9h, output: [quick_editor_v0.0.8](https://github.com/alyhxn/ui-components/commit/c9c446a2b48749b41ae754cdbb07fb72f43ad46a)):
- **Root datasets (2h):** the named root dataset from 282. In STATE, the db prefix `state` (used for every read / write) becomes the default root dataset. Another root dataset = another prefix.
- **Nested tabs (4h):** the editor now has 6 levels: **roots → types → names → nodes → files → entries**. Roots and names have radio buttons (one active at a time). One recursive function builds all tab levels, instead of one loop per level.
- **Import / export for root datasets (3h):** export a root dataset (one file with everything in it), rename the file, import it → a copy under a new name. Ali could add a "copy" button.
- **Open (his next task):** **apply** a root dataset. It doesn't work yet, because the `state` prefix is a constant in STATE; it has to become a variable for the active root dataset. He wants to discuss that first.
- **The strict mapping rule (282)** is only in his local STATE copy, not uploaded: it would break many projects. He asks when to upload it.
- **Lint:** standardx turned off, it made the whole file red with rules they don't follow.
- playproject now loads STATE from datashell (local), not its own copy (as serapath asked in 282).

**Serapath's feedback (Discord, 17/9–11/10):**
- [**(17/9)**](https://discord.com/channels/859134561018839060/1417482562921562152/1417933139325620345) Ali: a **file explorer** would be better UX than all the tabs. Serapath: yes, use **Ahmad's graph explorer** (file explorer only mode). The theme widget will use it to show the `statedb.admin()` api too, and the task explorer for rooms later. Merge Ali's extra features into it.
- [**(21/9) Next steps:**](https://discord.com/channels/859134561018839060/1417482562921562152/1419061891850047568) is the quick editor ready for its own repository, so is datashell ready to load components from their own GitHub repos? Then move to the graph explorer. A good chance to fine-tune the **admin api**.
- [**(21/9) The 6 levels are confusing**](https://discord.com/channels/859134561018839060/1417482562921562152/1419072199419101195), the UI has to change. What he expected:
  1. root dataset names
  2. types (all types at the root, after all mappings)
  3. the named custom datasets of each type, the active one marked
  4. all node paths (modules / instances) in the component being edited, the selected one marked
  5. the files / folders of the selected node for the selected type
  - "what are the **entries**?" (`raw`, `id`, `name`, `type`, `hubs`)
  - Ali (22/9): entries are info about the file, only `raw` is useful.
- **(21/9) Ali's editor for a sub-component** has no roots and types levels, no way to pick a named dataset for nodes / files, and no entries.
  - Ali: the page's quick editor has extra control, that's why the root is missing in the others.
  - Serapath: entries (`hubs` / `subs`) could be shown as parent / child links in Ahmad's graph explorer.
- [**(21/9) Devtools:**](https://discord.com/channels/859134561018839060/1417482562921562152/1419082266323452106) apply / import / export / copy become **actions** in the task bar from the theme widget. The quick editor may merge with the theme widget into **"devtools"**. The difference: the theme widget is for the whole page, a quick editor can be for only some components.
- **(21/9) Cypher:** this worklog matters for Cypher's ui-components gallery (Behance style), with demo-maker. The quick editor is "amazing in terms of features", but its UI / UX is "crap", lots of work to do.
- **(21/9) The strict rule:** merge it once the **CORS issue** is solved, so people can share live examples of their errors when they migrate.
- **(21/9) Lint:** Ahmad's config in `package.json`: `eslintConfig` with `env: { browser: true, es2025: true }`, `camelcase: 0`, `indent: 2`, `ignorePatterns` (`lib/STATE.js`, `bundle.js`, `node_modules/`). Ali (22/9): added.
- **(21/9) Docs:** what's next, and when can the docs migration happen? Phases, task by task, worklog by worklog. Ali (22/9): docs updated, in the next worklog.
- **(22/9)** Serapath: did it fix the lint issues? And please answer the questions in his feedback.
- **(29/9, 11/10)** "any news?", then "3 weeks since your last sign of life". No reply in the thread.

**Status today (checked in datashell):**
- ✅ **The strict mapping rule** (282) is in datashell now. It came with serapath's "upgrade STATE" (`8f8667e`, 23/11/2025), not from Ali. Ali's last datashell commit is 26/8/2025.
- ⏳ **Root datasets in STATE:** there is a `root_datasets` list with `state` as the default ([STATE.js:176](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L176)), and the admin can `import_root` / `export_root` ([STATE.js:1167-1170](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1167-L1170), [L1195](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L1195)). But every read still uses the fixed `'state'` prefix (e.g. [STATE.js:230](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L230)), so **apply / switch a root dataset doesn't exist**.
- ⏳ **Lint config:** no `eslintConfig` and no standardx in datashell's `package.json`.
- ⏳ **Components from their own GitHub repos:** nothing in STATE.js reads `package.json` (see the part 2 thread, item 6).
- ⏳ **Docs migration:** no task, docs not updated (see 282).
- ❓ **Quick editor in its own repo / graph explorer / devtools:** in ui-components and other repos, not checked.

**Questions for serapath:**
- **Root datasets:** should "apply" switch the db prefix (Ali's idea), or is there another plan since the 23/11 upgrade?
- **Ali's quick editor:** who continues it, or is the devkit (#39) its follow-up?
- **Lint:** use Ahmad's `eslintConfig` for datashell too?

**Affects my work:**
- **Devkit (#39):** this is the closest thing to it. Use serapath's 5 levels (root dataset → type → named dataset → node → files), not Ali's 6. Actions in a task bar, the graph explorer for the tree, `raw` content instead of entries.
- **Tests:** export a root dataset → import under a new name → apply it (once apply exists).
- **Lint (#39):** Ahmad's `eslintConfig` as the starting point.
- **283 is the last worklog:** the thread ends with no answer from Ali after 22/9. So every ⏳ in these notes is open work (→ 2️⃣).

**From the video (8 min):**
- **0:00** Root datasets working. The quick editor's structure changed for more nested tabs: roots, types, names, nodes, files, entries.
- **0:20** Roots and names have radio buttons, one active at a time.
- **0:58** Import and export work, **apply doesn't**: it needs changes in STATE to discuss.
- **1:17** Export a root dataset, rename the file ("rainbow"), import it: a copy. People could also edit the file in between.
- **3:03** He could add a copy button.
- **3:26** Backend: one recursive function for all tab levels, instead of one loop each.
- **4:04** In STATE, every db read / write has a prefix. That prefix becomes the root dataset: `state` is the default. It has to change from a constant to a variable for the active root dataset.
- **5:57** The strict mapping rule is in his local STATE copy, not in main, because it would cause many errors for everyone. "Let me know when."
- **6:49** Lint: standardx turned off, the whole file was red and he couldn't tell real errors from format errors.
- **7:49** playproject now uses the local STATE hosted from datashell, not its own copy.

---

## Thread: datashell api integration into quick editor + theme widget (21/9–5/12/2025, after 283)

links: [Discord thread](https://discord.com/channels/859134561018839060/1419075656079249449) · [Ahmad's worklog 62: graphdb (video)](https://www.youtube.com/watch?v=r2-E0dAFI3o&t=319s)

**What it is:** a joint task for Ahmad and Ali: use Ahmad's **graph explorer** inside the quick editor.
- **Three repos:** quick editor and graph explorer each in their own GitHub repo, both used in **ui-components**.
- **The admin api via messages:** find the balance for a nice developer experience when `statedb.admin` is exposed through message sending, to power the graph explorer in the theme widget and the quick editor.
- **(21/9)** Serapath waits for Ali's proposal for the STATE changes that "apply" needs (see 283).
- [**(25/9) The bigger picture**](https://discord.com/channels/859134561018839060/1419075656079249449/1420546238914498643) (to Lupay): all apps and components use identity, the p2p network and p2p data structures **through datashell** (the "state management library", "more like a p2p data runtime engine", name not settled). This thread slowly brings together the frontend work, the datashell work and the p2p work. p2p-news-app has to integrate with it too.
- [**(1/10)**](https://discord.com/channels/859134561018839060/1419075656079249449/1422704656530018385) Ali should watch Ahmad's graphdb video: `statedb.admin` should expose an api with **read access** (maybe write later) to the internal structure of all instances, so the graph explorer can show it. What data is there, and how should the api look from STATE's side?
- **(25/10)** Serapath: `statedb.admin` is how the graphdb gets into datashell, but how that db looks is up to Ahmad. "**Ali is sadly not available** and it's unclear if that will change."
  - Ahmad: is Ali or Lupay working on it? Lupay: not sure what Ahmad or Ali work on; serapath is the only one who knows where to start.
- **(4/12)** Serapath: is the quick editor in ui-components done, based on this thread? Ahmad (5/12): he wasn't involved, Ali made the PR to ui-components himself; details are in Ali's worklogs.

**Ahmad's graphdb (worklog 62, 30/9/2025, from 5:19):** a new file in graph explorer, a basic db over the `entries` object:
- now: get an entry, `has`, all keys, is empty, the root entry, all entries (what graph explorer uses)
- planned: `put` (update an entry, e.g. change its parent / subs, also enough to link two entries), delete an entry (a whole tree)
- a first step, so the api can change without touching the graph explorer

**Status today (checked in datashell):**
- ⏳ **An admin api for the graph explorer:** nothing in STATE.js mentions a graph. The admin api has `xget(id)` and `get_all()` (raw db entries) and `status` ([STATE.js:867-880](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/lib/node_modules/STATE.js#L867-L880)), but no message-based access and nothing shaped like graphdb.
- ⏳ **Docs:** [`doc/data-structures.md`](https://github.com/playproject-io/datashell/blob/7976541ff36f2b7b1c237873aae4104d8f079d1e/doc/data-structures.md) has a short "Graph Explorer" part (entities, relations hub / sub / input / output, slots), nothing about the admin api.
- ❓ **Quick editor in ui-components, graph explorer repo:** not checked.

**Questions for serapath:**
- **Is this the devkit task?** The devkit (sys_ui) in #39 reads site state via `sdb.admin`. Does it replace "quick editor + theme widget", and does it use Ahmad's graphdb?
- **The admin api:** read-only first, through messages (`io`), or direct calls?

**Affects my work:**
- **Devkit (#39):** this thread is its background: the graph explorer for the tree, `statedb.admin` as the data source, read first.
- **p2p-news-app:** must reach identity / network / data **through datashell**, not around it.
- **2️⃣:** "Ali is not available" (25/10), so Ali's open work needs a new owner.
