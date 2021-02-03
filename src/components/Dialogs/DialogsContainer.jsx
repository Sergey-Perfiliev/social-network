import React from 'react'
import { sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
	// data from state
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody))
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRedirect
)(Dialogs)