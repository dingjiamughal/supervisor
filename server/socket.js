const socketIo = require('socket.io');

module.exports = server => {
    const io = socketIo.listen(server);
    let messageQueue = [];

    io.on('connection', socket => {
        console.log(`id: ${socket.id} is connected`);

        if (messageQueue.length > 0) {
            messageQueue.forEach(message => {
                socket.emit('new-message', message);
            });
        }

        socket.on('send-message', message => {

            message.text = message.text += 'haha';
            messageQueue.push(message);
            console.log(message);
            socket.broadcast.emit('new-message', message);
            if (messageQueue.length > 10) {
                messageQueue = messageQueue.slice(-10);
            }
        });
    });
};
