module.exports = function(sequelize, DataTypes) {
    
    let alias="Comment"  // table alias in the Model.

    // Columns
	let cols={ 
		id:{
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		contenido:{
			type: DataTypes.TEXT
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
		tableName: "comentarios" //Table name in DB
	}

	let Comment = sequelize.define(alias,cols,config);

    return Comment;
}