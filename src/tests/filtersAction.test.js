import moment from 'moment';
import { setEndDate, setStartDate, setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

test('should set Text in filter Action with value', () => {
    const action = setTextFilter('milan');
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: 'milan'
    });
});

test('should set Text in filter Action with Defaults', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});

test('should set Text in filter Action withou value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});



test('should set start Date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should set End Date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate object for sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});


test('Should generate object fot sort by Date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});



