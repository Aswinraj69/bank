class Bank {
     validateAccountNumber(accno) {
          return accno in localStorage ? true : false
      }
    logOut() {
        sessionStorage.removeItem("user")
        location.href = "../login/index.html"
    }
    home(){
        location.href = "./index.html"
    }

    getBalance(){
        let accno = sessionStorage.getItem("user");
        let data = JSON.parse(localStorage.getItem(accno))
        return  data.balance
    }

    balanceEnquiry() {
        landing.style.display="none"    
        balance.style.display ="block"
        document.querySelector("#result").innerHTML=` ${this.getBalance()}`
    }

    fundTransfer(){
        let to_accountnumber=to_acc.value;
        let confirmaccount = c_acc.value;
        let amount = amnt.value;
        if(to_accountnumber == confirmaccount){
            if(this.validateAccountNumber(confirmaccount)){
                if(amount < Number( this.getBalance())){
                     let user_acno = sessionStorage.getItem("user")
                     let payer_details = this.getAccountDetails(user_acno)
                     let receiver_details = this.getAccountDetails(confirmaccount)
                     let cur_bal = Number(receiver_details.balance)
                     let bal = cur_bal+Number(amount)
                     receiver_details["balance"]=bal
                     localStorage.setItem(confirmaccount,JSON.stringify(receiver_details))
                     payer_details["balance"]-=Number(amount)
                     localStorage.setItem(user_acno,JSON.stringify(payer_details))
                     swal("payment successfull!", "Thank you", "success");
                }
                else{
                    alert("insufficent balance")
                }
            }else{
                alert("invalid account number")
            }
        }else{
            alert("account number mismatch")
        }
    }

    getAccountDetails(accno){
        return JSON.parse(localStorage.getItem(accno))
    }
}
var bank = new Bank()