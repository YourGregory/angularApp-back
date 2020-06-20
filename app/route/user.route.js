module.exports = function(app) {
    const users = require('../controller/student.controller.js');

    app.post('/Users', users.create);

    app.get('/Users', users.findAll);

    app.get('/Users/:id', users.findById);

    app.put('/Users', users.update);

    app.delete('/Users/:id', users.delete);

}