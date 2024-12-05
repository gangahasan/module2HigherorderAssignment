const students = [
  { name: "Alice", marks: 58 },

  { name: "Bob", marks: 85 },

  { name: "Charlie", marks: 92 },

  { name: "David", marks: 45 },
];

let marks = students.filter((item)=>item.marks>60)
console.log(marks);

// Output: ["Charlie", "Bob"];
marks.sort((a,b)=>b.marks-a.marks)
console.log(marks);

let shortlist = marks.map((item)=> item.name)
console.log(shortlist)