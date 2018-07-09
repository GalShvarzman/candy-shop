import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const initialState:{} = {
    candies:[]
};


const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;