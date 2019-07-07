export const SEND_MESSAGE = '@@message/SEND_MESSAGE'; //@@message обеспечивает пространство имен для сохраненеия уникальности                                                       //message - то, что стоит перед Actions, Reducer

export const sendMessage = ( messageId, text, sender, chatId ) => ({
    type: SEND_MESSAGE, //обязательно определять тип, он должен быть уникален
    messageId,
    text,
    sender,
    chatId, 
});