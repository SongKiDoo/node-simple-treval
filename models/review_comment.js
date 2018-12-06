/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('review_comment', {
		comment_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		table_name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		table_key_id: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		comment_review: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		group_num: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		group_disc: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		comment_dics: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		create_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'review_comment'
	});
};
