// —————————————————————————————————————————————————————————————————————————————
// DO NOT EDIT THIS FILE!
// —————————————————————————————————————————————————————————————————————————————

import { setTimeout } from "node:timers/promises";

const kInternalClear = Symbol();
const kInternalGet = Symbol();
const kInternalSet = Symbol();

export class TableMock {
  #data;
  #latency;

  constructor(latency) {
    this.#data = new Map();
    this.#latency = latency;
  }

  async get(key) {
    await setTimeout(this.#latency);
    return this[kInternalGet](key);
  }

  async set(key, value) {
    this[kInternalSet](key, value);
  }

  [kInternalClear]() {
    this.#data.clear();
  }

  [kInternalGet](key) {
    return this.#data.get(key);
  }

  [kInternalSet](key, value) {
    this.#data.set(key, value);
  }
}

export const symbols = {
  kInternalClear,
  kInternalGet,
  kInternalSet,
};