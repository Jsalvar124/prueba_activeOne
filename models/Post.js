module.exports = function(sequelize, DataTypes) {
    
    let alias="Post"  // table alias in the Model.

    // Columns
	let cols={ 
		id:{
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		titulo:{
			type: DataTypes.STRING(150)
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
		tableName: "posts" //Table name in DB
	}

	let Post = sequelize.define(alias,cols,config);

    return Post;
}