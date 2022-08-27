// —————————————————————————————————————————————————————————————————————————————
// DO NOT EDIT THIS FILE!
// —————————————————————————————————————————————————————————————————————————————

import { test } from "uvu";
import * as assert from "uvu/assert";
import { once } from "./called_once.mjs";

test("calls once", () => {
  let calls = 0;
  let spy = () => ++calls;
  let spyOnce = once(spy);

  assert.is(calls, 0);
  assert.is(spyOnce(), 1);
  assert.is(spyOnce(), 1);
});

const identity = (value) => value;

for (let [name, value] of [
  ["undefined", undefined],
  ["null", null],
  ["false", false],
  ["Symbol", Symbol()],
  ["Object", Object.create(null)],
]) {
  test(`memoize its return value: ${name}`, () => {
    let fn = once(identity);
    assert.is(fn(value), value);
    assert.ok(fn(Symbol()) === value);
  });
}

test.run();