const db = require('../config/db.config.js');
const Subject = db.subjects;

//Post a subject
exports.create = (req, res) => {
    //Save to postgeSQL db
    Subject.create({
        "name": req.body.name, 
        "teacherSurname": req.body.teacherSurname, 
        "hours": req.body.hours
    }).then(subject => {
        res.json(subject);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Subjects
exports.findAll = (req, res) => {
	Subject.findAll().then(subjects => {
			// Send All Subjects to Client
			res.json(subjects.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
// Find a Subject by Id
exports.findById = (req, res) => {	
	Subject.findById(req.params.id).then(subject => {
			res.json(subject);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a Student
exports.update = (req, res) => {
	const id = req.body.id;
	Subject.update( req.body, 
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
	Subject.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Student Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};