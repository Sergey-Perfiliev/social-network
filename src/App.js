import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux'
import Loader from './components/Common/Loader'
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './redux/redux-store'
import { WithSuspense } from './hoc/WithSuspense'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


class App extends React.Component {
	catchAllUnhandledErrors = () => {
		console.log("some error occurred");
	}

	componentDidMount() {
		this.props.initializeApp()
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}

	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}

	render() {
		if (!this.props.initialized) return <Loader />

		return (
			<div className='app'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Switch>
						<Route exact path="/"
							render={() => <Redirect from="/" to="/profile" />} />
						<Route path="/profile/:userId?"
							render={WithSuspense(ProfileContainer)} />
						<Route path="/dialogs"
							render={WithSuspense(DialogsContainer)} />
						<Route path="/users"
							render={() => <UsersContainer />} />
						<Route path="/login"
							render={() => <Login />} />
						<Route path="*"
							render={() => <div>404</div>} />
					</Switch>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App)

let SocialNetworkApp = (props) => {
	// should remake to browserrouter; heroic
	return <HashRouter> 
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>
}

export default SocialNetworkApp