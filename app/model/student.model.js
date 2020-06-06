module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('student', {
        firstname: {
			type: Sequelize.STRING
	  },
	  lastname: {
			type: Sequelize.STRING
	  },
	  age: {
		  type: Sequelize.INTEGER
	  }
    });

    return Student;
}