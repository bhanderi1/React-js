import React from 'react'
import { buy_pasty } from '../Redux'
import { connect } from 'react-redux'
import { add_pasty } from '../Redux'


const PastyContainer = (props) => {
  return (
    <div>
      <h1>NumberOfPasty: {props.numOfPasty}</h1>
      <button className='btn' onClick={props.buy_pasty}>Click</button>
      <button className='btn' onClick={props.add_pasty}>add</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfPasty:state.numOfPasty
  }
}

const mapdispatchToPrpos = dispatch => {
  return{
    buy_pasty:() =>dispatch(buy_pasty()),
    add_pasty:() =>dispatch(add_pasty())
  }
}
export default connect(mapStateToProps , mapdispatchToPrpos) (PastyContainer)
