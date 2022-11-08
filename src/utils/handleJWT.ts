import jwt from 'jsonwebtoken';
import { getProperties } from './handlePropertiesEngine';

const jwtSecret = process.env.JWT_SECRET;

const engineDB = process.env.ENGINE_DB;

const propertiesKey = getProperties(engineDB!);

/**
 * Object User
 * @param user
 */
export const tokenSing = async (user: any) => {
  const sign = await jwt.sign(
    {
      [propertiesKey.id]: user[propertiesKey.id],
      role: user.role,
    },
    jwtSecret!,
    {
      expiresIn: '24h',
    }
  );

  return sign;
};

/**
 *
 * @param tokenJwt
 * @returns
 */
export const verifyToken = async (tokenJwt: string) => {
  try {
    return jwt.verify(tokenJwt, jwtSecret!);
  } catch (error) {
    console.log(error);

    return null;
  }
};
