import { Request, Response } from 'express';
import { matchedData } from 'express-validator';

import { handleHttpError } from '../utils/handleHttpError';

const engineDB = process.env.ENGINE_DB;
const { Tracks } = require(`../models/${engineDB}/track.model`);

/**
 * Get list DB
 * @param req
 * @param res
 * @returns
 */
export const getTracks = async (req: Request | any, res: Response) => {
  try {
    const user = req.user;

    const data = await Tracks.findAll({});

    return res.json({ data, user });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_TRACKS');

    console.log(error);
  }
};

/**
 *
 * @param req Get details from track
 * @param res
 */
export const getTrack = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await Tracks.findByPk(id);

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_TRACK');

    console.log(error);
  }
};

/**
 * Create a new track
 * @param req
 * @param res
 */
export const createTrack = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);

    const data = await Tracks.create(body);

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_TRACK');

    console.log(error);
  }
};

/**
 * Update track
 * @param req
 * @param res
 */
export const updateTrack = async (req: Request, res: Response) => {
  try {
    const { id, ...body } = matchedData(req);

    const data = await Tracks.findOneAndUpdate(id, body);

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_TRACK');

    console.log(error);
  }
};

/**
 * Delete a track
 * @param req
 * @param res
 */
export const deleteTrack = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // trackSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
    // Logical delete
    const data = await Tracks.delete({ _id: id });

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM');

    console.log(error);
  }
};
