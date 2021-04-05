import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {
    GET_HISTORY_BEGIN,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAILURE
  } from './actions';

const persistConfig = {
    key: 'root',
    storage
}

const initialState={
    count:0,
    listData:[],
    userInfo:{},
    currentRole:"",
    taskHistory:[],
    loading: false,
    error: null
  }
const reducer = function(state=initialState, action){
    //console.log('reducer', state, action);
    return {
        count: countReducer(state.count, action),
        listData: listReducer(state.listData, action),
        userInfo: userInfoReducer(state.userInfo, action),
        currentRole: userRoleReducer(state.currentRole, action),
        ...(taskHistoryReducer({taskHistory:state.taskHistory,loading:state.loading,error:state.error}, action))
    }
  }
function countReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREASE':
            return state+1;
        case 'DECREASE':
            return state-1
        case 'RESET':
            return 0
        default:
            return state;
    }
}

function listReducer(state=[], action){
    switch(action.type){
        case 'ADDLIST':{
            const item = action.payload.listData;
            return [...state, item]
        }
        case 'UPDATEITEM':{
            return action.payload.listData;
        }
        case 'DELETEITEM':{
            return action.payload.listData;
        }
        default: return state;
    }
}

function userInfoReducer(state={},action){
    switch (action.type){
        case 'SETINFO':{
            let userInfo = action.playload.userInfo;
            return userInfo;
        }
        default: return state;
    }
}

function userRoleReducer(state={},action){
    switch(action.type){
        case 'SWITCHROLE':{
            let currentRole = action.playload;
            return currentRole;
        }
        case 'CLEARROLE':{
            let currentRole = '';
            return currentRole;
        }
        default: return state;
    }
}

function taskHistoryReducer(state={}, action){
    switch (action.type){
        case GET_HISTORY_BEGIN:{
            return {
                taskHistory:[],
                loading: true,
                error: null
            }
        }
        case GET_HISTORY_SUCCESS:{
            let taskHistory = action.payload.taskHistory;
            return {
                loading: false,
                error: null,
                taskHistory
            }
        }
        case GET_HISTORY_FAILURE:{
            let error = action.payload.error;
            return {
                taskHistory:[],
                loading: false,
                error
            }
        }
        default: return state
    }

}

const persistedReducer = persistReducer(persistConfig, reducer);
  
export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

//   switch (action.type){
//     case 'INCREASE':
//       return {count:state.count+1,listData:state.listData};
//     case 'DECREASE':
//       return {count:state.count-1,listData:state.listData};
//     case 'RESET':
//       return  {count:0,listData:state.listData};
//     case 'ADDLIST':
//       return {...state, listData:action.playload};
//     default:
//       return state;
//   }