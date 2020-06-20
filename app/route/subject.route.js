module.exports = function(app) {
    const subjects = require('../controller/subject.controller.js');

        // Create a new subjects
        app.post('/Subjects', subjects.create);
 
        // Retrieve all subjects
        app.get('/Subjects', subjects.findAll);
     
        // Retrieve a single subjects by Id
        app.get('/Subjects/:id', subjects.findById);
     
        // Update a subjects with Id
        app.put('/Subjects', subjects.update);
     
        // Delete a subjects with Id
        app.delete('/Subjects/:id', subjects.delete);

}