// Create JSON object any detail
// E.g. EmployeeData = {{fname:”abc”, lname:”xyz”, id: 1}, {fname:”abc”, lname:”xyz”, id: 2}}
// Apply CURD operation on that JSON Data.

const EmployeeData= [
    {
        fname: "abc",
        lname: "xyz",
        id: 1
    },
    {
        fname: "ajay",
        lname: "raut",
        id: 2
    }
]

// Create or new data
const newEmployee = {
    fname: "ajit",
    lname: "chavan",
    id: 4
}

EmployeeData.push(newEmployee);

    
//Update data (reanme abc to amar)
EmployeeData.forEach(employee => {
    if(employee.fname == "abc") {
        employee.fname = "Amar",
        employee.lname = "Narote"
    }
});


//Delete record where id: 2
EmployeeData.splice(2 - 1, 1);

console.log(EmployeeData)