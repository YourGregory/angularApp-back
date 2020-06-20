module.exports = function(app) {
    const students = require('../controller/student.controller.js');

        // Create a new students
        app.post('/Students', students.create);
 
        // Retrieve all students
        app.get('/Students', students.findAll);
     
        // Retrieve a single students by Id
        app.get('/Students/:id', students.findById);
     
        // Update a students with Id
        app.put('/Students', students.update);
     
        // Delete a students with Id
        app.delete('/Students/:id', students.delete);

}