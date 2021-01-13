import React from 'react';
import {Header} from '../../components/Header';
import {shallow} from 'enzyme';

test('Should render header', ()=>{

    const wrapper=shallow(<Header startLogOut={()=>{}} />);
    expect(wrapper).toMatchSnapshot();

    //  const renderer=new ReactShallowRenderer();
//  renderer.render(<Header />);
//  expect(renderer.getRenderOutput()).toMatchSnapshot();
 
});

test('should simulate button click',()=>{
    const startLogOut= jest.fn();
    const wrapper=shallow(<Header startLogOut={startLogOut} />);
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenLastCalledWith();
});