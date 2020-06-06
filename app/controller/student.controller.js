const db = require('../config/db.config.js');
const Student = db.students;

//Post a student
exports.create = (req, res) => {
    //Save to postgeSQL db
    Student.create({
        "firstname": req.body.firstname, 
        "lastname": req.body.lastname, 
        "age": req.body.age
    }).then(student => {
        res.json(student);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Students
exports.findAll = (req, res) => {
	Student.findAll().then(students => {
			// Send All Students to Client
			res.json(students.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a Student by Id
exports.findById = (req, res) => {	
	Student.findById(req.params.id).then(student => {
			res.json(student);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a Student
exports.update = (req, res) => {
	const id = req.body.id;
	Student.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Student Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
             });
 };

 // Delete a Student by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Student.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Student Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};