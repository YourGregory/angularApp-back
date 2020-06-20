module.exports = (sequelize, Sequelize) => {
    const Mark = sequelize.define('mark', {
        mark: {
            type: Sequelize.INTEGER
        },
        student: {
            type: Sequelize.STRING
        },
        subject: {
            type: Sequelize.STRING
        },
        teacher: {
            type: Sequelize.STRING
        }
    });
    return Mark;
}