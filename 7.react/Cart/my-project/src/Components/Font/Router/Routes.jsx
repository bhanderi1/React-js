import React from 'react'
import { Route , Switch} from 'react-router-dom'
import Product from '../Product/Product'

const Router = ({produ}) => {
  return (
    <div>
      
      <Switch>
        <Route path="/" exact>
           <Product/>
        </Route>
      </Switch>
    </div>
  )
}

export default Router
