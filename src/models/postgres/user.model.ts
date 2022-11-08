import { DataTypes } from 'sequelize';

import { sequelize } from '../../database/db.config.sequlize';

export const User = sequelize.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.NUMBER,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
    },
  },
  { timestamps: true }
);
