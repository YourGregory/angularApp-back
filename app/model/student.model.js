module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('student', {
        fullName: {
			type: Sequelize.STRING
	  	},
	  	username: {
			type: Sequelize.STRING
	  	},
	  	group: {
		  type: Sequelize.STRING
	  	},
	  	password: {
		  type: Sequelize.STRING
	  	}
    });

    return Student;
}