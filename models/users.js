/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		password: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		user_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		create_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'users'
	});
};
