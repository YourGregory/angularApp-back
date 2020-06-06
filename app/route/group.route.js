module.exports = function(app) {
    const groups = require('../controller/group.controller.js');

        // Create a new group
        app.post('/api/groups', groups.create);
 
        // Retrieve all groups
        app.get('/api/groups', groups.findAll);
     
        // Retrieve a single group by Id
        app.get('/api/groups/:id', groups.findById);
     
        // Update a group with Id
        app.put('/api/groups', groups.update);
     
        // Delete a group with Id
        app.delete('/api/groups/:id', groups.delete);

}