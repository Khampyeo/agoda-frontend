import React, { Component } from 'react'
import FilterHeaderBar from '../component/filterHeaderBar/FilterHeaderBar'
import FilterNavBar from '../component/filterNavBar/FilterNavBar'
import SortBar from '../component/sortBar/SortBar'
import HotelBodySearch from '../component/hotelBodySearch/HotelBodySearch'

export default class FlightSearchPage extends Component {
  render() {
    return (
      <div className='pt-28 w-full'>
        <FilterHeaderBar></FilterHeaderBar>
        <div className="flex flex-row justify-center pt-8">
          <div className="w-[260px] mr-4">
            <FilterNavBar></FilterNavBar>
          </div>
          <div className="w-[848px]">
            <SortBar></SortBar>
            <HotelBodySearch></HotelBodySearch>
          </div>
        </div>
      </div>
    )
  }
}
