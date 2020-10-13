module.exports = (sequelize,dataTypes) =>{
    
    let alias = "Peliculas";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11).UNSIGNED,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        title: {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,
            defaultValue: 0
        },
        release_date : {
            type : dataTypes.DATEONLY,
            allowNull : false            
        },
        length : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        },
        genre_id : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        }
    }

    let config = {
        tableName : "movies",
        timestamps : true,
        underscored : true
    }
    const Movie = sequelize.define(alias,cols,config)
    return Movie
}