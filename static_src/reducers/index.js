import { combineReducers } from 'redux';
import messageReducer from './messageReducer';

/**
 * Собирает несколько редюсеров в стор
 */
export default combineReducers({
    messageReducer,
});