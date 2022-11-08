const { DataTypes } = require('sequelize');

import { sequelize } from '../../database/db.config.sequlize';

export const Storage = sequelize.define(
  'storages',
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
