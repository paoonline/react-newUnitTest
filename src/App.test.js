import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme'
import { ProductList } from './functions/service'
import { DataList } from './components/'

let wrapper;

const dataMock = [{
  imagePath: '',
  _id: '5e0c1c7d42a16702a061c4d5',
  productName: '12',
  productModify: '2020-01-04T06:24:33.848Z',
  productQuantity: 11,
  __v: 0
}]

beforeEach(() => {
  wrapper = mount(<App />)
})

afterEach(() => {
  wrapper.unmount()
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('set state show text', () => {
  wrapper.find('button').simulate('click')
  expect(wrapper.find('p#showtext').length).toEqual(1)
})

it('call service api', () => {
  let myMock = ProductList()
  myMock = jest.fn()
  myMock.mockResolvedValue(dataMock)
  expect(myMock()).resolves.toEqual(dataMock)
})

it('dataList component show list', () => {
  const newWrapper = mount(<DataList data={dataMock}/>)
  expect(newWrapper.find('ul').length).toEqual(1)
})
