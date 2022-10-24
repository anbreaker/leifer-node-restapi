import { Response } from 'express';

export const handleHttpError = (res: Response, message = 'Error', code = 403) => {
  res.status(code);

  res.json({ error: message });
};
