# Qwik v2: `trigger()` / `waitForDrain` resolve before a lazily loaded `useVisibleTask$` runs

```sh
npm install
npm test
```

`src/repro.spec.tsx` renders a component whose `useVisibleTask$` sets a signal, fires `qvisible` through
`createDOM().userEvent`, and asserts on the DOM:

- `userEvent('qvisible') waits for the visible task it starts` fails: the DOM still shows `initial`.
- `control: the visible task does complete eventually` passes after waiting 200ms.

`src/slow-dep.ts` uses a top-level `await` to make the visible task's segment take 50ms to load, which makes
the failure deterministic. Without it, the same failure happens intermittently depending on how fast the
segment loads.

The tests run in a `happy-dom` environment, so the Qwik Vite plugin applies client transforms and the visible
task becomes a lazily loaded segment. Under vitest's default `node` environment both tests pass.
