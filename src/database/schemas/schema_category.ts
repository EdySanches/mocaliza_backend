import { DataTypes } from "sequelize";
import { database_c } from "../database";

export const Category = database_c.get_instance().sequelize.define('Category', {
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

