import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi', likesCount:'0'},
                {id: 1, message: 'My 1st post', likesCount:'1'},
                {id: 2, message: 'My 2nd post', likesCount:'2'},
            ],
            newPostText: 'Sergei'
        },
    
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sergei'},
                {id: 2, name: 'John'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Alex'},
                {id: 5, name: 'Valera'}
            ],
    
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: '1'},
                {id: 3, message: '2'},
                {id: 4, message: '3'},
                {id: 5, message: '4'}
            ],
            newMessageBody: ''
        },
        
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changes")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // pattern observer 
    },

    dispatch(action) { // {type: 'ADD-POSt'}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


export default store
window.store = store