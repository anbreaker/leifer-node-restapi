import bcrypt from 'bcrypt';

/**
 * Password without encrypt
 * @param password
 */
export const encrypt = async (password: string) => {
  const hash = await bcrypt.hash(password, 10);

  return hash;
};

/**
 * Password without encrypt
 * Password encrypt
 * @param password
 * @param hashPassword
 */
export const compare = async (password: string, hashPassword: string) => {
  return await bcrypt.compare(password, hashPassword);
};
