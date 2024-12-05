
const person = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];

let names = person.map((el,i)=>el.name)
// console.log(names);


person.forEach((item)=>{
let ans = (item.price>50)? `${item.name} is above $50` : `${item.name} is below $50`;
console.log(ans);
})
