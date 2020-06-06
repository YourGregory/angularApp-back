module.exports = function(app) {
    const subjects = require('../controller/subject.controller.js');

        // Create a new subjects
        app.post('/api/subjects', subjects.create);
 
        // Retrieve all subjects
        app.get('/api/subjects', subjects.findAll);
     
        // Retrieve a single subjects by Id
        app.get('/api/subjects/:id', subjects.findById);
     
        // Update a subjects with Id
        app.put('/api/subjects', subjects.update);
     
        // Delete a subjects with Id
        app.delete('/api/subjects/:id', subjects.delete);

}