import selectExpenseTotal from '../../selectors/expense-Total';
import expenses from '../fixture/expenses';

test('should return zero when pass the empty array',()=>{
    const res =selectExpenseTotal([]);
    expect(res).toBe(0);
});
test('test should correctly add single expense',()=>{
    const res =selectExpenseTotal(expenses[0]);
    expect(res).toBe(195);
});

test('test should correctly add multiple expense',()=>{
    const res =selectExpenseTotal(expenses);
    expect(res).toBe(114195);
});