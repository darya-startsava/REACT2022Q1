export default class LocalStorageMock {
  store: Record<string, string>;
  length = 0;
  constructor() {
    this.store = {};
  }

  key(index: number) {
    return Object.keys(this.store)[index];
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}
