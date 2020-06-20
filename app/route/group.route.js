module.exports = function(app) {
    const groups = require('../controller/group.controller.js');

        // Create a new group
        app.post('/Groups', groups.create);
 
        // Retrieve all groups
        app.get('/Groups', groups.findAll);
     
        // Retrieve a single group by Id
        app.get('/Groups/:id', groups.findById);
     
        // Update a group with Id
        app.put('/Groups', groups.update);
     
        // Delete a group with Id
        app.delete('/Groups/:id', groups.delete);

}