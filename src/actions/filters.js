

//SET TEXT
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text

});

//Sort By Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//Sort By AMOUNT

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//set start date

export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

//set end date
export  const setEndDate = ( endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});
