import React from 'react';
import 'antd/dist/antd.css';
import { Admin } from './layout'
import { Login, ProductList, ProductAdd, ProductEdit } from './page'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/action/index'

const App = (props) => {
  if (!props.isAuthenticated) {
    props.onTryAutoSignup()
  }

  let auth = (
    <Switch>
      <Route path="/login" component={() => props.isAuthenticated ? null : AuthenRoute(Login)} />
      <Route exact path="/" component={() => AuthenRoute(<ProductList token={localStorage.getItem('token')} />)} />
      <Route path="/productList" component={() => AuthenRoute(<ProductList token={localStorage.getItem('token')} />)} />
      <Route path="/products/productAdd" component={() => AuthenRoute(<ProductAdd token={localStorage.getItem('token')}/>)} />
      <Route path="/products/productEdit" component={() => AuthenRoute(<ProductEdit token={localStorage.getItem('token')}/>)} />
    </Switch>
  )

  const AuthenRoute = Component => {
    let ComponentAuthen = null

    //authen
    if (props.isAuthenticated) {
      ComponentAuthen = (
        <Admin>
          {Component}
        </Admin>
      )
    }
    //not authen
    if (!props.isAuthenticated) {
      ComponentAuthen = (
        <Login />
      )
    }
    return ComponentAuthen
  }
  return auth
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null // token from authen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));