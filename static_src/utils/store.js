import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from '../middlewares';

import { persistStore, persistReducer } from 'redux-persist'; //для сохранения и восстаовления состояния приложения (сохранение в localstorage)
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2, //
    whitelist: ['messageReducer', 'chatReducer'], //будет сохрняться только то, что прописано в этом листе
};

function store(additionalMiddlewares = []) { //из функции initStor ??? (корневой index.jsx)
    const innitialStore = {};
    if (__IS_DEV__) {
        const store = createStore(
            persistReducer(persistConfig, initReducers), //по-умолчанию берется index.js из импортираванной папки
            innitialStore,
            compose(
                applyMiddleware(...additionalMiddlewares, ...middlewares), //middlewares - раскрываем экспортный массив из файла по-умолчанию index.js
                window.__REDUX_DEVTOOLS_EXTENSION__(),
            ),
        );
        const persistor = persistStore(store);
        return { store, persistor};
    }
    const store = createStore(
        persistReducer(persistConfig, initReducers), //прокидываем то, что уже сохранено
        innitialStore,
        applyMiddleware(...additionalMiddlewares, ...middlewares),
    );

    return { store, persistor};
}

export default store;