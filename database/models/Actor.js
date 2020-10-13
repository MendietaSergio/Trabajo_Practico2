module.exports = (Sequelize,dataTypes) =>{
    
    let alias = "Actores";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        first_name: {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        last_name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        rating : {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            defaultValue: null
        },
        favorite_movie : {
            type : dataTypes.INTEGER(10),
            defaultValue: null
        },
        country : {
            type : dataTypes.STRING(255),
            defaultValue: null
        }
    }

    let config = {
        tableName : "actors",
        timestamps : true,
        underscored : true
    }
    const Actor = Sequelize.define(alias,cols,config)
    return Actor
}