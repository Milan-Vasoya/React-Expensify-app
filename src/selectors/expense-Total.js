export default (expenses)=>{
    if(expenses.length === 0 ){
        return 0;
    }else if (expenses.amount) {
        return expenses.amount;
    }else{
     return expenses.map((expense)=>expense.amount).reduce((sum, value) => sum + value, 0 );

}}