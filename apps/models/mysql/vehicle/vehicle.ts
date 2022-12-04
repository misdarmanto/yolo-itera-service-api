import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { UserModel } from "../user/user";
import { ZygoteAttributes, ZygoteModel } from "../zygote";

export interface VehicleAttributes extends ZygoteAttributes {
    plateNumber: number;
    rfid: number;
    type: string;
    userId: number;
    name: string;
    color: string;
    photo: string;
}

type VehicleCreationAttributes = Optional<VehicleAttributes, "id" | "createdOn" | "modifiedOn">;

interface VehicleInstance extends Model<VehicleAttributes, VehicleCreationAttributes>, VehicleAttributes {}

export const VehicleModel = sequelize.define<VehicleInstance>(
    "vehicle",
    {
        ...ZygoteModel,
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        plateNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rfid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        ...sequelize,
        timestamps: false,
        tableName: "vehicle",
        deletedAt: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        engine: "InnoDB",
    }
);

UserModel.hasMany(VehicleModel, { sourceKey: "id", foreignKey: "user_id" });
VehicleModel.hasOne(UserModel, { sourceKey: "user_id", foreignKey: "id" });
