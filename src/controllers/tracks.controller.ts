import { Request, Response } from 'express';

import { Track } from '../models/nosql/track.model';

/**
 * Get list DB
 * @param req
 * @param res
 * @returns
 */
export const getItems = async (req: Request, res: Response) => {
  try {
    const data = await Track.find({});

    return res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param req Get details from track
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
 * Create a new track
 * @param req
 * @param res
 */
export const createItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const data = await Track.create(body);

    return res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Update track
 * @param req
 * @param res
 */
export const updateItem = (req: Request, res: Response) => {};

/**
 * Delete a track
 * @param req
 * @param res
 */
export const deleteItem = (req: Request, res: Response) => {};
