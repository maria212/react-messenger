import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from '../middlewares';


function store(additionalMiddlewares = []) { //из функции initStor ??? (корневой index.jsx)
    const innitialStore = {};
    if (__IS_DEV__) {
        return createStore(
            initReducers, //по-умолчанию берется index.js из импортираванной папки
            innitialStore,
            compose(
                applyMiddleware(...additionalMiddlewares, ...middlewares), //middlewares - раскрываем экспортный массив из файла по-умолчанию index.js
                window.__REDUX_DEVTOOLS_EXTENSION__(),
            ),
        );
    }
    return createStore(
        initReducers,
        innitialStore,
        applyMiddleware(...additionalMiddlewares, ...middlewares),
    );
}

export default store;