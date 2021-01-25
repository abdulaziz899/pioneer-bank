let login=document.getElementById('login');
login.addEventListener('click',function () {
   let loginArea=document.getElementById('login-area')
   loginArea.style.display='none';
   let transactionArea=document.getElementById('transactionArea');
   transactionArea.style.display='block';
})


// let btnDeposit=document.getElementById('btn-deposit');

//     btnDeposit.addEventListener('click',function () {
//     let depositAmount=document.getElementById('depositAmount').value;
//     let depositNumber=parseFloat(depositAmount);
//    let currentDeposit=document.getElementById('currentDeposit').innerText;
//     let currentDepositNumber=parseFloat(currentDeposit);
//  let totalDeposit=currentDepositNumber+depositNumber;
//    let  document.getElementById('currentDeposit').innerText=totalDeposit;
//    let document.getElementById('depositAmount').value=' ';
// let balanceDeposit=document.getElementById('balanceDeposit').innerText;
//    let  balanceDepositNumber=parseFloat(balanceDeposit);
// let totalBalance=totalDeposit+balanceDepositNumber;
//     document.getElementById('balanceDeposit').innerText=totalBalance;
// })




let btnDeposit=document.getElementById('btn-deposit');

    btnDeposit.addEventListener('click',function () {
        let depositAmount=document.getElementById('depositAmount').value;
        let depositNumber=parseFloat(depositAmount);
        updateSpanText("currentDeposit",depositNumber);
        updateSpanText("balanceDeposit",depositNumber);
       
        document.getElementById('depositAmount').value=' ';
})


function updateSpanText(id,depositNumber) {
     let current=document.getElementById(id).innerText;;
     let currentAmount=parseFloat(current);
     let totalAmount=currentAmount+depositNumber;
     document.getElementById(id).innerText= totalAmount;
}

function dateSpanText(id,withdrawAmountNumber) {
    let current=document.getElementById(id).innerText;;
    let currentAmount=parseFloat(current);
    let totalAmount=currentAmount+withdrawAmountNumber;
    document.getElementById(id).innerText= totalAmount;
}



   let btnWithdraw=document.getElementById('btnWithdraw');
    btnWithdraw.addEventListener('click',function () {
      let withdrawAmount=document.getElementById('withdrawAmount').value;
      let withdrawAmountNumber=parseFloat(withdrawAmount);

         updateSpanText("currentWithdraw",withdrawAmountNumber);
         updateSpanText("balanceDeposit",-1*withdrawAmountNumber);
            document.getElementById('withdrawAmount').value=' ';
   })   









