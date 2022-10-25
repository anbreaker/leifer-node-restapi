import { Request, Response, NextFunction } from 'express';

import { handleHttpError } from '../utils/handleHttpError';

/**
 * Array with roles
 * @param rol
 * @returns
 */
export const checkRole =
  (roles: string[]) => async (req: Request | any, res: Response, next: NextFunction) => {
    try {
      const { user } = req;

      const roleByUser = user.role;

      const checkValidRol = roles.some((rolSingle: string) => roleByUser.includes(rolSingle));

      if (!checkValidRol) {
        handleHttpError(res, 'USER_NOT_PERMISSIONS', 403);

        return;
      }

      next();
    } catch (error) {
      handleHttpError(res, 'ERROR_INIT_SESSION', 401);

      console.log(error);
    }
  };
