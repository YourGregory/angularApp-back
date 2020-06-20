const db = require('../config/db.config.js');
const Teacher = db.teachers;

//Post a subject
exports.create = (req, res) => {
    //Save to postgeSQL db
    Teacher.create({
        "fullName": req.body.fullName, 
        "username": req.body.username, 
        "password": req.body.password
    }).then(subject => {
        res.json(subject);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Subjects
exports.findAll = (req, res) => {
	Teacher.findAll().then(teachers => {
			// Send All Subjects to Client
			res.json(teachers.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
// Find a Subject by Id
exports.findById = (req, res) => {	
	Teacher.findById(req.params.id).then(teacher => {
			res.json(teacher);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a Student
exports.update = (req, res) => {
	const id = req.body.id;
	Teacher.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Subject Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
             });
 };

  // Delete a Subject by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Teacher.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Student Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};