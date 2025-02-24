import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "users",
        timestamps: false
    }
);

export default User;