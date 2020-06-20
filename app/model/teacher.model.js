module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define('teacher', {
        fullName: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return Teacher;
}