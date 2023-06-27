import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import CustomerLandingPage from './pages/CustomerLandingPage'
import LoginPage from './pages/CustomerLoginPage'
import RegisterPage from './pages/CustomerRegisterPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import UserPasswordResetPage from './pages/UserPasswordResetPage'
import UserPasswordSetPage from './pages/UserPasswordSetPage'
import HomePage from './pages/HomePage'
import VerifyOtpPage from './pages/VerifyOtpPage'

import './App.css'

export default function App() {
    const isLoggedIn = () => {
        const storedToken = localStorage.getItem('token');
        if(storedToken === null){
            return false;
        } else {
            return true;
        }
    }
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ CustomerLandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/reset-password" component={ UserPasswordResetPage } />
                    <Route path="/create-password" component={ UserPasswordSetPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/verify-otp" component={ VerifyOtpPage } />
                    {/*<Route path="/home" >*/}
                    {/*    {isLoggedIn() && <HomePage />}*/}
                    {/*    {!isLoggedIn() && <Redirect to = '/' />}*/}
                    {/*</Route>*/}
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by Angular Whiplash</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "fixed",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}