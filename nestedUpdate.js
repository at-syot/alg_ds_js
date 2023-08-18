function objectSet(obj, k, v) {
  const cpObj = Object.assign({}, obj);
  cpObj[k] = v;
  return cpObj;
}

function update(obj, k, mod) {
  return objectSet(obj, k, mod(obj[k]));
}

function nestedUpdate(obj, keys, mod) {
  let keyIdx = 0;
  const update = (_obj, k) => {
    if (typeof _obj !== "object") throw "invalid object";
    if (keyIdx == keys.length - 1) {
      return objectSet(_obj, k, mod(_obj[k]));
    }

    keyIdx += 1;
    return objectSet(_obj, k, update(_obj[k], keys[keyIdx]));
  };

  return update(obj, keys[0]);
}

function dropFirst(array) {
  const cp = array.slice();
  cp.shift();
  return cp;
}

function nestedUpdate1(obj, keys, mod) {
  if (keys.length == 0) return mod(obj);

  const k = keys[0];
  const _keys = dropFirst(keys);
  return update(obj, k, () => nestedUpdate1(obj[k], _keys, mod));
}

// t1: { cart_1: ... }, [cart_1, ...], k = cart_1, _keys = [items, item_1, price]
// t2: { items: ... }, [items, ...], k = items, _keys = [item_1, price]
// t3: { item_1: ... }, [price], k = item_1, _keys = [price]
// t4: { name, price }, [], k = price, _keys = [] -->
// t5 --> mod(price)

const case1 = {
  // lv0 -> root
  ["cart_1"]: {
    // lv1
    items: {
      // lv2
      ["item_1"]: {
        // lv3
        name: "",
        price: 0,
      },
    },
  },
};

const keys = ["cart_1", "items", "item_1", "price"];
const actual0 = nestedUpdate(case1, keys, (v) => v + 10);
const actual1 = nestedUpdate1(case1, keys, (v) => v + 10);

function dfs(obj) {
  if (typeof obj !== "object") return;
  const keys = Object.keys(obj);

  console.log("inspect", obj);

  keys.forEach((k) => dfs(obj[k]));
}

dfs(actual1);

function deepEqual(obj1, obj2) {}
