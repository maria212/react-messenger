import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'me') {
                setTimeout(() => store.dispatch(  //т к функции вызывается с аргументами, ее нужно обернуть в функцию без аргумента. Чтобы она не вызывалась сразу, а был промежуток
                        //верхняя часть: из middleware можно отправлять actions, нижняя: можно получать данные из редьюсеров 
                        // метод getState() возвращает все редьюсеры
                        sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1,
                            "I'm bot", 'bot', action.chatId)),
                    500);
            }
    }
    return next(action)
}