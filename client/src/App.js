import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/statics/Header'
import Home from './components/statics/Home'

import './config/dataTableTheme'
import './App.css'

import Login from './components/User/Login'
import Register from './components/User/Register'

import PurchaseList from './components/Purchases/PurchaseList'
import OrderShow from './components/Purchases/OrderShow'
import ReportList from './components/Reports/ReportList'


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header/>
      
      <div className="appContent">
      
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/businesses/:businessId/purchases" component={PurchaseList} exact/>
      <Route path="/businesses/:businessId/purchases/new" component={OrderShow} exact />
      <Route path="/businesses/:businessId/reports" component={ReportList} exact/>
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App