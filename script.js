const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  let arry = [
    { name: "jordon", age: "21", profession: "backend-developer" },
    { name: "ram", age: "22", profession: "frontend-developer" },
    { name: "salim", age: "30", profession: "system-admin" },
  ];
  // 1. Print Developers
  function printDeveloper() {
    data.map((s)=>{
        console.log(s)
    })
  }
  
  // 2. Add Data
  function addData() {
    let obj = {name:"susan",age:20, profession:"intern"}
     data.push(obj);
    console.log(data)
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data.splice( data.findIndex(a => a.profession === "admin"), 1)
  console.log(data)
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let concated = [...data,...arry];
    console.log(concated)
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0
    data.map((s)=>{
         sum  += s.age; 
    })
    let avgAge = sum/data.length;
    console.log(avgAge)
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    data.map((s) => {
        if(s.age > 0){
            console.log(`the person is present in the data`)
        }else{
            console.log(`no person's age is greater than 25 `)
        }
    })
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const unique = [...new Set(data.map(item => item.profession))]
    console.log(unique);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => {
        return a.age - b.age;
    });
    console.log(data)
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.map((s) => {
        if(s.name === "john"){
            s.profession = "manager"
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const totalDev = data.reduce((total,curr) =>{
        let count = 0;
        let tot = 0
        //  const {profession} = curr;
        console.log(curr)
   if(curr.profession==="admin"){
    count++;
   }
    else if(curr.profession === "developer"){
    tot++;
   }

    total.developer += tot;
    total.admin += count;
     return total;   
    },{
        admin : 0,
        developer : 0
    })
    console.log(totalDev)
  }
  