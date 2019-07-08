import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import chatReducer from './chatReducer';

/**
 * Собирает несколько редюсеров в стор
 */
export default combineReducers({
    messageReducer,
    chatReducer,
});