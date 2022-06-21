function collectStrings(obj) {
  let arr = [];
  Object.values(obj).forEach((value) => {
    if (typeof value === "string") {
      arr.push(value);
    } else if (typeof value === "object") {
      arr = arr.concat(collectStrings(value));
    }
  });

  return arr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
