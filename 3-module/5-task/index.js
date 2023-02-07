let result = {
  min: -5.8,
  max: 73,
};

let inputData = "1 и -5.8 или 10 хотя 34 + -5.3 и 73";

function getMinMax(str) {
  let array = str.split(/[ ,]+/);

  let minV = +array[0];
  let maxV = minV;
  for (let i = 0; i < array.length; i++) {
    let e = +array[i];
    if (e < minV) minV = e;
    if (e > maxV) maxV = e;
  }
  return { min: minV, max: maxV };
}

console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }
