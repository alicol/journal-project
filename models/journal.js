
//need title, date, entry
//title as string

module.exports = (sequelize, DataTypes) => {
    const Journal = sequelize.define('journal', {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        date:{
            type: DataTypes.STRING,
            allowNull: false
        },
        entry:{
            type: DataTypes.STRING(1234),
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })
    return Journal;
};
