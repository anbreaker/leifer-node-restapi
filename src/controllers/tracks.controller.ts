import { Request, Response } from 'express';

import { keepSetGreetings } from '../repositories/tracks.repository';

export const getItems = (req: Request, res: Response) => {
  const response = keepSetGreetings();

  try {
    return res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createItemRepo = (req: Request, res: Response) => {};
export const deleteItemRepo = (req: Request, res: Response) => {};
export const getItemRepo = (req: Request, res: Response) => {};
export const getItemsRepo = (req: Request, res: Response) => {};
export const postItemRepo = (req: Request, res: Response) => {};
export const updateItemRepo = (req: Request, res: Response) => {};

// TODO https://ibm-learning.udemy.com/course/api-rest-nodejs-desde-cero-usando-mongodb-o-mysql/learn/lecture/31410770#overview
// 3.33
