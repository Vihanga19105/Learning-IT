// let customerList = [
//     {
//         name: "kamal kumar",
//         email: "kamal@example.com",
//         item: [

//         ]
//     },
//     {
//         name: "sita devi",
//         email: "sita@example.com"
//     }
// ]

// console.log(customerList);

// let customerList = [];
// function btnAddCustoemrOnAction() {
//     let name = document.getElementById("txtName").value
//     let address = document.getElementById("txtAddress").value
//     let phone = document.getElementById("txtPhone").value
//     let email = document.getElementById("txtEmail").value

//     console.log(name, address, phone, email);

//     let customer = {
//         name: name,
//         address: address,
//         phone: phone,
//         email: email
//     }
//     console.log(customer);
//     customerList.push(customer);
//     console.log(customerList);
//     btnLoadTableOnAction();
    
// }
// function btnLoadTableOnAction(){
//     let tblCustomer = document.getElementById("tblCustomer")

//     let body = "";
    
//     for(let i = 0; i < customerList.length; i++){

//         body += `
//         <tr>
//           <td>${customerList[i].name}</td>
//           <td>${customerList[i].address}</td>
//           <td>${customerList[i].phone}</td>
//           <td>${customerList[i].email}</td>  
//         </tr>
//         `

//     }
    

//     tblCustomer.innerHTML = body;
// }


// let studentList = [
//     {
//         name: "kamal kumar",
//         age: 20,
//     },
//     {
//         name: "sita devi",
//         age:22
//     },
//     {
//         name: "ram kumar",
//         age: 21
//     }
// ]

// console.log(studentList[2].name);



// let y = Math.floor(Math.random() *10) +1;
// console.log(y);

// function btnSubmitGuessOnAction(){
//     let userGuess =  document.getElementById("txtGuess").value

//     if(userGuess == y){
//         Swal.fire({
//   title: "Congratulations!",
//   width: 600,
//   padding: "3em",
//   color: "#716add",
//   background: "#fff url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cTVudG8xenVwZTJ3MW53dXd4MHF4ZjFueGhhcGZhaHh1cXFqajV2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2Z6S6n38zjPswo/giphy.gif')",
//   backdrop: `
//     rgba(0,0,123,0.4)
//     url("/images/nyan-cat.gif")
//     left top
//     no-repeat
//   `
// });
//     }else if(userGuess > y){
//         guess++;
//         alert("Your guess is too high! Try again.");
//     }else{
//         guess++;
//         alert("Your guess is too low! Try again.");
//     }

// }


//
// let var


//const 

// let custoemr = ["Saman","Kumara","Kavindu"]
// console.log(custoemr);
// console.log(typeof custoemr);



// custoemr = "Navindu"

// custoemr.push("Kumara")

// console.log(custoemr);
// console.log(typeof custoemr);


// const customer = ["nimal","kamal","saman"]
// console.log(customer);
// customer.push("kavindu");
// console.log(customer);

// ----------------- arrylist -----------------------------
// -push and reverse methods
// const customerList = [];

// customerList.push(1);
// customerList.push(2);
// customerList.push(3);
// customerList.push(4);
// customerList.push(5);


// console.log(customerList);
// customerList.reverse();
// console.log(customerList);


//- filter method
// const productList = [
//     {name:"bun",inStock:true,price:50},
//     {name:"milk",inStock:false,price:100},
//     {name:"egg",inStock:true,price:10},
//     {name:"bread",inStock:false,price:80},
//     {name:"butter",inStock:true,price:150}
// ]

// let inStockProductList = productList.filter(
//     function (product) {
//         return productFilter(product)
//     }
// );
// function productFilter(product){
//     return product.inStock == true;
// }
// console.log(inStockProductList);

// let inStockProductList2 = productList.filter(product => product.inStock == true);

// console.log(inStockProductList2);


// - sort method

// const leterList = ["c","a","b","f","e"]
// console.log(leterList);

// leterList.sort();
// console.log(leterList);

// -map method

// const salaryList = [10000,20000,30000,40000,50000]
// console.log(salaryList);

// let newSalaryList = salaryList.map(salary => salary * 2);
// console.log(newSalaryList);


// -find method
// const studentList = [
//     {name:"kamal",age:20},
//     {name:"nuwan",age:22},
//     {name:"kasun",age:21}
// ]

// let findStudent = studentList.find(student => student.name == "kamal");
// console.log(findStudent);



// ------------------------------ JSON - JavaScript Object Notation -----------------------------


fetch("https://fakestoreapi.com/products/").then(response => response.json()).then(data => {
    console.log(data);

    let table = document.getElementById("cardId");
    

    let tblbody = "";

    data.forEach(element => {
        tblbody += `
               <div class="card shadow-sm">
           <img src="${element.image}" class="card-img-top" alt="${element.title}">
            <div class="card-body">
              <p class="card-text">${element.title}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        `
    });
    table.innerHTML = tblbody;
});