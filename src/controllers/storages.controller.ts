import { Request, Response } from 'express';

import { Storage } from '../models/nosql/storage.model';

const publicUrl = process.env.PUBLIC_URL;

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
    console.log(error);
  }
};

/**
 *
 * @param req Get details from Storage
 * @param res
 */
export const getItem = (req: Request, res: Response) => {
  try {
    const response = 'item';

    return res.json(response);
  } catch (error) {
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
    const { body, file } = req;

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
 * Update Storage
 * @param req
 * @param res
 */
export const updateItem = (req: Request, res: Response) => {};

/**
 * Delete a Storage
 * @param req
 * @param res
 */
export const deleteItem = (req: Request, res: Response) => {};
