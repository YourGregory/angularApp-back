const db = require('../config/db.config.js');
const Group = db.groups;

//Post a group
exports.create = (req, res) => {
    //Save to postgeSQL db
    Group.create({
        "groupName": req.body.groupName
    }).then(group => {
        res.json(group);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Students
exports.findAll = (req, res) => {
	Group.findAll().then(groups => {
			// Send All Groups to Client
			res.json(groups.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a Group by Id
exports.findById = (req, res) => {	
	Group.findById(req.params.id).then(group => {
			res.json(group);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a Group
exports.update = (req, res) => {
	const id = req.body.id;
	Group.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Group Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
             });
 };

  // Delete a Group by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Group.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Student Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};