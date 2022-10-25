import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;
/**
 * Object User
 * @param user
 */
export const tokenSing = async (user: any) => {
  const sign = await jwt.sign(
    {
      _id: user._id,
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
