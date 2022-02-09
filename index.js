function addMoney() {
    let totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    let currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
        let money = parseInt(document.getElementById('money').value);        
            totalBudget = money;
            currentBalance = money;
            document.getElementById("totalBudget").innerHTML = totalBudget;
            document.getElementById("currentBalance").innerHTML = currentBalance;

    
        
}
function addExpense() {
    let currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    let expenseName = document.getElementById('expenseName').value;
        let expenseAmount = parseInt(document.getElementById('expenseAmount').value);
            currentBalance -= expenseAmount;
            document.getElementById("currentBalance").innerHTML = currentBalance;

            let para = document.createElement('li');
            let textnode = document.createTextNode(expenseName);
            para.appendChild(textnode);
            document.getElementById("expenseList").appendChild(para);

            let node = document.createElement('li');
            let amountNode = document.createTextNode(expenseAmount);
            node.appendChild(amountNode);
            document.getElementById("expenseAmountList").appendChild(node);

}
