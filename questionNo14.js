const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },

  { name: "Bob", tasksCompleted: 4, rating: 4.0 },

  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

  { name: "David", tasksCompleted: 10, rating: 4.9 },

  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
];

let filtered = employees.filter((item)=>item.tasksCompleted > 5);

let performancelist = filtered.map((item)=>{
    if(item.rating > 4.5){
        item.performance = "Excellent";
    }
    else if(item.rating > 3 && item.rating <= 4.5){
        item.performance = "Good";
    }
    else{
    item.performance = "Needs Improvement";
    }
    return {name: item.name , performance:item.performance}
})

    performancelist.sort((a,b)=>{
        if(a.performance < b.performance){
            return -1;
        }
        else if(a.performance > b.performance) {
            return 1;
        }
        else{
            return 0;
        }
    });   
    console.log(performancelist);

