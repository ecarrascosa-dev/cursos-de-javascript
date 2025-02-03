const data = [
    { name: "Eduardo", age: 23, salary: 4000, active: true, team: "FrontEnd", bonus: 0},
    { name: "Jose", age: 22, salary: 5000, active: true, team: "BackEnd", bonus: 0},
    { name: "Fernanda", age: 26, salary: 7000, active: true, team: "FullStack", bonus: 0},
    { name: "Maju", age: 18, salary: 2000, active: true, team: "Marketing", bonus: 0},
    { name: "Elon", age: 54, salary: 4000, active: false, team: "Foguete", bonus: 0}   ,
]
 
// Find
// const user = data.find((user) => {
//     return user.age >= 25
// })
// console.log(user)

// Filter
// const users = data.filter((user) => {
//     return user.salary <= 3000 && user.active == true;
// })
// console.log(users)

//findIndex
// const indexUser = data.findIndex((user) => {
//     return user.name === "Maju"
// })
// console.log(indexUser)
// console.log(data[indexUser].active = false)
// console.log(data)

// Map
// const users = data.map((user, index) => {
//     if(user.salary <= 2500) {
//         user.salary += 900;
//         user.bonus += 1;
//     }
//
//     return {
//         name: user.name,
//         salary: user.salary,
//         bonus: user.bonus
//     }
// })
// console.log(users)

//console.log(data.reverse())

// Some
// const userInactive = data.some((user) => {
//     return user.active === false;
// })
// console.log(userInactive)

// Every
// const usersActive = data.every((user) => {
//     return user.active === true;
// })
// console.log(usersActive) 

// Reduce 
// const totalSalarios = data.reduce((total, user) => {
//     return total += user.salary
// }, 0)
// console.log(totalSalarios)

// ForEach

data.forEach(function(item, index){
    if(item.salary < 3000){
        console.log(`O funcionario(a) ${item.name}, está com o salario menos de 3 mil`)
    }

})