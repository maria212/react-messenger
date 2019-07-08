import update from 'react-addons-update'; //пакет для обновления стора
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    chats: {
        // Ключи - ID чатов
       1: {tittle: 'Chat 1', messageList: [1, 6]},
       2: {tittle: 'Chat 2',  messageList: [2]},
       3: {tittle: 'Chat 3',  messageList: [2, 7]},
       4: {tittle: 'Chat 4',  messageList: [4]},
       5: {tittle: 'Chat 5',  messageList: [5]},
   },
};

/**
 * То, что возвращает эта функция, попадает в стор и обноляет его. Вызывается каждый раз, когда вызывается любой action. Аргументы store и фиксированы
 */
export default function chatReducer(store = initialStore, action) {
    switch (action.type) { //кроме типа можно получить любые данные из messageActions.js
        case SEND_MESSAGE: { 
            //return update работает как setState. Нужно дать старый стор и правила обновления, дальше она создаст новый стор и вернет его
            return update(store, {  
                //chats: {$set: {...store.chats, [action.chatId]: {...store.chats[action.chatId], messageList: [...store.chats[action.chatId]['messageList'], action.messageId]}}},
                // merge - это слияние, т е сохранение старого и добавление нового/обновление(если найдено по ключу). Замена spread operator
                //внутрянка значения по ключу затирается, нужно полностью все прописать
                chats: {$merge: { [action.chatId]: {
                    tittle: store.chats[action.chatId].tittle,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId],
                } } },
            });
        }
        default:
            return store;
    }
}