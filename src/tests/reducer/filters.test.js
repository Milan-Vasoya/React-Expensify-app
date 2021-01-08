import filterReducer from '../../reducers/filters';
import moment from 'moment';


test('should set filter reducer with default values',()=>{
    const state= filterReducer(undefined,{type:'@@INIT'});

expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
});
});

test('should sort BY amount',()=>{
    const state= filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should sort BY DATE',()=>{
    const currentState={
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const state= filterReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text in filter',()=>{
    const text= 'my text filter';
    const action ={
        type:'SET_TEXT',
        text
    }
    const state= filterReducer(undefined,action);

    expect(state.text).toBe('my text filter');
});


test('should set start date filter',()=>{
    const startDate =moment().startOf('day');

    const action ={
        type:'SET_START_DATE',
        startDate
    };

    const state= filterReducer(undefined , action);

    expect(state.startDate).toEqual(moment().startOf('day'));
});

test('should set start date filter',()=>{
    const endDate = moment().startOf('day');

    const action ={
        type:'SET_END_DATE',
        endDate
    };

    const state= filterReducer(undefined , action);

    expect(state.endDate).toEqual(moment().startOf('day'));
});