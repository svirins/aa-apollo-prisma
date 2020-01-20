import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import StatisticBar from './statistic'
import { Statistic } from 'semantic-ui-react'

configure({adapter: new Adapter()})

describe('<StatisticBar />', () => {
  it('should render 6 statistic blocks', () => {
    const wrapper = shallow(<StatisticBar />)
    expect(wrapper.find(Statistic)).toHaveLength(6)
  });
})