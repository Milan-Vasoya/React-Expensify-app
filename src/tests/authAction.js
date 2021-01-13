import { Login,Logout } from "../actions/auth";

test('shouold generate login expense object',()=>{
    const uid='milan';
    const action=(Login(uid));
    expect(action).toEqual({
        type:'LOGIN',
        uid
    });
});
test('shouold generate logout expense object',()=>{
    const action=(Logout());
    expect(action).toEqual({
        type:'LOGOUT',
    });
});