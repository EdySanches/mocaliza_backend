import { DataTypes } from "sequelize";
import { database_c } from "../database";

export default database_c.get_instance().sequelize.define('Categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

