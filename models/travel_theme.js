/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('travel_theme', {
		theme_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		theme_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		theme_image_url: {
			type: DataTypes.STRING(200),
			allowNull: true
		}
	}, {
		tableName: 'travel_theme'
	});
};
