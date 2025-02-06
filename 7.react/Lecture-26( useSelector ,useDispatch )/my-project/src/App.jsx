import React from 'react'
import CakeContainer from './Component/CakeContainer'
import PastyContainer from './Component/PastyContainer'
import { Provider } from 'react-redux'
import store from './Redux/Store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer/>
        <PastyContainer/>
      </Provider>
    </div>
  )
}

export default App
