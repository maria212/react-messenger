import update from 'react-addons-update'; //пакет для обновления стора
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    messages: {
        //Ключи - ID сообщений
       1: {text: "Hello", sender: "me"},
       2: {text: "Hi", sender: "me"},
       3: {text: "Hey", sender: "me"},
       4: {text: "Wow", sender: "me"},
       5: {text: "Yeah", sender: "me"},
       6: {text: ":=)", sender: "me"},
       7: {text: ":=(", sender: "me"},
   },
};

/**
 * То, что возвращает эта функция, попаает в стор и обноляет его. Вызывается каждый раз, когда вызывается любой action. Аргументы store и фиксированы
 */
export default function messageReducer(store = initialStore, action) {
    switch (action.type) { //кроме типа можно получить любые данные из messageActions.js
        case SEND_MESSAGE: { 
            //return update работает как setState. Нужно дать старый стор и правила обновления, дальше она создаст новый стор и вернет
            return update(store, {  
                messages: {$set: { ...store.messages, [action.messageId]: {text: action.text, sender: action.sender} }}, 
            });
        }
        default:
            return store;
    }
}