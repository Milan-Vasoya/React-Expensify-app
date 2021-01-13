import { ReactWrapper } from 'enzyme';
import authReducer from '../../reducers/auth';


test('should set uid for Login',()=>{
const uid = 'milan';
const action ={
    type:'LOGIN',
    uid
}
const state = authReducer({},action);
expect(state.uid).toBe('milan'); 
});


test('should set uid for Login',()=>{
    
    const action ={
        type:'LOGOUT',
       
    }
    const state = authReducer({uid:'milan'},action);
    expect(state).toEqual({}); 
    });