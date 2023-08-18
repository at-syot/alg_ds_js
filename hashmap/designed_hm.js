function MyHashMap() {
  this.hashmap = {};
}

MyHashMap.prototype.put = function (key, value) {
  this.hashmap[key] = value;
};

MyHashMap.prototype.get = function (key) {
  if (key in this.hashmap) {
    return this.hashmap[key];
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  delete this.hashmap[key];
};
