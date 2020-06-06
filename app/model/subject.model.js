module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define('subject', {
        name: {
			type: Sequelize.STRING
	  },
	  teacherSurname: {
			type: Sequelize.STRING
	  },
	  hours: {
		  type: Sequelize.INTEGER
	  }
    });

    return Subject;
}