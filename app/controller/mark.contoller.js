const db = require('../config/db.config.js');
const Mark = db.marks;

//Post a subject
exports.create = (req, res) => {
    //Save to postgeSQL db
    Mark.create({
        "mark": req.body.mark, 
        "teacher": req.body.teacher, 
        "student": req.body.student,
        "subject": req.body.subject
    }).then(mark => {
        res.json(mark);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Subjects
exports.findAll = (req, res) => {
	Mark.findAll().then(marks => {
			// Send All Subjects to Client
			res.json(marks.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
// Find a Subject by Id
exports.findById = (req, res) => {	
	Mark.findById(req.params.id).then(mark => {
			res.json(mark);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a Student
exports.update = (req, res) => {
	const id = req.body.id;
	Mark.update( req.body, 
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
	Mark.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Student Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};