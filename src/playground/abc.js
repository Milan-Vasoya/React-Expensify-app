import {createStore} from 'redux';

const incrementCount =({incrementBy = 1}={})=>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy = 1}={})=>({
    type : 'DECREMENT',
    decrementBy
});

const resetCount=()=>({
    type : 'RESET',
});

const setCount = ({count = 0}={})=>({
    type :'SET',
    count

});
const store = createStore((state={count:0}, action)=>{
    
    switch(action.type){
        
        case 'INCREMENT':
        return{
                count: state.count + action.incrementBy
            };
            case 'DECREMENT':
               return{
                    count: state.count - action.decrementBy
                };
            case 'RESET':
               
                return{
                    count: 0
                };
            case 'SET':
                const count = action.count?action.count:0;
                return{
                    count
                };
        default:
            return state;
        

    }
    
   
});

const unsbscribe= store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(
    {
        type : 'INCREMENT',
        incrementBy : 5
    }
);

store.dispatch(incrementCount());


store.dispatch(
resetCount()
);

store.dispatch(decrementCount({decrementBy:8}));

store.dispatch(setCount({count:502}));

