/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('travel_cource', {
		cource_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		cource_name: {
			type: DataTypes.STRING(200),
			allowNull: true
		}
	}, {
		tableName: 'travel_cource'
	});
};
