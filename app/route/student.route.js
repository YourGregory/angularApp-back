module.exports = function(app) {
    const students = require('../controller/student.controller.js');

        // Create a new students
        app.post('/api/students', students.create);
 
        // Retrieve all students
        app.get('/api/students', students.findAll);
     
        // Retrieve a single students by Id
        app.get('/api/students/:id', students.findById);
     
        // Update a students with Id
        app.put('/api/students', students.update);
     
        // Delete a students with Id
        app.delete('/api/students/:id', students.delete);

}