module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define('group', {
        name: {
			type: Sequelize.STRING
	  },
	  studentsQuantity: {
		  type: Sequelize.INTEGER
      }
    });

    return Group;
}