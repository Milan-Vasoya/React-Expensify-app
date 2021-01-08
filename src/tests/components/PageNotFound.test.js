import React from 'react';
import {shallow} from 'enzyme' ;
import PageNotFound from '../../components/PageNotFound';

test('Should add three item in expense list ' ,()=>{
    const wrapper = new shallow(<PageNotFound />);

    expect(wrapper).toMatchSnapshot();
});