class Bank{

    createAccount(){
        let first_name=fname.value;
        let account_number=accno.value;
        let password=pwd.value;
        let balance=bal.value;
        //let confirm_password=pwd1.value;
        let user={
            first_name,account_number,password,balance
        }
        localStorage.setItem(user.account_number,JSON.stringify(user))
        alert("account created")
        location.href="../login/index.html"
    }
    reg(){
        location.href="../login/index.html"
    }
    
}

var bank=new Bank();


//local storage

// function validateAccno(accno){
//     return accno in localStorage ? true : false
// }
// console.log(validateAccno(1002));

// function getBalance(accno){
//     if(validateAccno(accno)){
//         let data = JSON.parse(localStorage.getItem(accno))
//         return data.balance
//     }
// }
// console.log(getBalance(1002));


// function authenticate(accno,pass){
//     if(validateAccno(accno)){
//         let data=JSON.parse(localStorage.getItem(accno))
//         if(pass == data.password){
//             console.log("login successful");
//         }else{
//             console.log("login failed");
//         }
//     }
// }
