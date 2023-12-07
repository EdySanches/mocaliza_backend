import { DataTypes } from "sequelize";
import { database_c } from "../database";

export default database_c.get_instance().sequelize.define('Brands', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

})