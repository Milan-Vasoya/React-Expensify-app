import React from 'react';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { shallow } from 'enzyme';
import { filters, altFilters } from '../fixture/filters';
import moment from 'moment';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;
beforeEach(() => {

    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();


    wrapper = shallow(<ExpenseListFilters
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        filters={filters}
    />);

});

test('Should render Correctly with default data', () => {
    expect(wrapper).toMatchSnapshot();
});


test('Should render Correctly with alter data', () => {

    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'this is value of expense list filtler test '
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);

});


test('should sort by date', () => {

    const value = 'date'

    wrapper.setProps({
        filters: altFilters
    });


    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });

    expect(sortByDate).toHaveBeenCalled();


});


test('should sort by date', () => {

    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });

    expect(sortByAmount).toHaveBeenCalled();

});


test('should change date ', () => {
    const startDate = moment(0).add(3, 'years');
    const endDate = moment(0).add(6, 'years');


    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});

// test('should change calender foucus state ', () => {
//     const calenderFocused=null;

//     wrapper.find('DateRangePicker').prop('onFocusChange')({calenderFocused});
//     expect(wrapper.state('calenderFocused')).toEqual(null);

// });