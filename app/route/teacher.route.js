module.exports = function(app) {
    const teachers = require('../controller/teacher.controller.js');

    app.post('/Teachers', teachers.create);

    app.get('/Teachers', teachers.findAll);

    app.get('/Teachers/id', teachers.findById);

    app.put('/Teachers', teachers.update);

    app.delete('/Teachers/:id', teachers.delete);

}