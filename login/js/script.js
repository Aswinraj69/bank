class Bank {

    validateAccountNumber(accno) {
        return accno in localStorage ? true : false
    }

    login(){
        location.href="../registration/index.html"
    }

    authenticate() {
        let account_number = accno.value;
        let password = pwd.value;
        if (this.validateAccountNumber(account_number)) {
            let data = JSON.parse(localStorage.getItem(account_number))
            if (password == data.password) {
                sessionStorage.setItem("user", account_number)
                alert("login successfull")
                location.href = "../user/index.html"
            } else {
                alert("invalid password")
            }
        } else {
            alert("invalid account number")
        }
    }
}
var bank = new Bank()