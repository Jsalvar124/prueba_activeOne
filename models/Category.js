module.exports = function(sequelize, DataTypes) {
    
    let alias="Category"  // table alias in the Model.

    // Columns
	let cols={ 
		id:{
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		nombre:{
			type: DataTypes.STRING(150)
		},
		fecha_creacion:{
			type: DataTypes.DATE,
            defaultValue: DataTypes.NOW 
		},
        fecha_actualizacion:{
			type: DataTypes.DATE,
            defaultValue: DataTypes.NOW 
		}
	};

    // Table Name
	let config={
		timestamps: false,
		tableName: "categorias" //Table name in DB
	}

	let Category = sequelize.define(alias,cols,config);

    return Category;
}