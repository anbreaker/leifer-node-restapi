import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

import { handleHttpError } from '../utils/handleHttpError';

const engineDB = process.env.ENGINE_DB;
const { Storage } = require(`../models/${engineDB}/storage.model`);

const publicUrl = process.env.PUBLIC_URL;
const mediaPath = path.join(__dirname, '../storage');

/**
 * Get list DB
 * @param req
 * @param res
 * @returns
 */
export const getItems = async (req: Request, res: Response) => {
  try {
    const data = await Storage.find({});

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS');

    console.log(error);
  }
};

/**
 *
 * @param req Get details from Storage
 * @param res
 */
export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await Storage.findById(id);

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS');

    console.log(error);
  }
};

/**
 * Create a new Storage
 * @param req
 * @param res
 */
export const createItem = async (req: Request, res: Response) => {
  try {
    const { file } = req;

    const fileData = {
      filename: file?.filename,
      url: `${publicUrl}/${file?.filename}`,
    };

    const data = await Storage.create(fileData);

    return res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Delete a Storage
 * @param req
 * @param res
 */
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await Storage.findById(id);

    await Storage.deleteOne({ id });

    const { filename } = data!;

    const filePath = `${mediaPath}/${filename}`;

    fs.unlinkSync(filePath);

    return res.json({ filePath, deleted: 1 });
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM');

    console.log(error);
  }
};
