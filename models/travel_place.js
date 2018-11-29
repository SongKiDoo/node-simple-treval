/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('travel_place', {
		place_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		theme_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		course_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		place_name: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		place_content: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		place_image_url: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		place_address: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		place_lat: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		place_long: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		place_hash_tag: {
			type: DataTypes.STRING(1000),
			allowNull: true
		}
	}, {
		tableName: 'travel_place'
	});
};
