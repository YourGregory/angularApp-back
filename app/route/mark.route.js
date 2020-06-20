module.exports = function(app) {
    const marks = require('../controller/mark.contoller.js');

    app.post('/Marks', marks.create);

    app.get('/Marks', marks.findAll);

    app.get('/Marks/:id', marks.findById);

    app.put('/Marks', marks.update);

    app.delete('/Marks/id', marks.delete);

}