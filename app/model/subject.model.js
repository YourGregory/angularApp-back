module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define('subject', {
        subjectName: {
			type: Sequelize.STRING
	  },
	  teacher: {
			type: Sequelize.STRING
	  },
	  group: {
		  type: Sequelize.STRING
	  }
    });

    return Subject;
}