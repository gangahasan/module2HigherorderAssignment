let products = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];

let countObject = products.reduce((a, item) => {
  if (products.includes(item)) {
    let count = a[item] ?? 0;
    count++;
    a[item] = count;
    return a;
  }
}, {});


console.log(countObject);

let sortObject = Object.entries(countObject).sort((a,b)=>b[1]-a[1]);
console.log(sortObject);
