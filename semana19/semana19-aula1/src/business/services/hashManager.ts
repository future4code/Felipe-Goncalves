import * as bcrypt from 'bcryptjs';

export const hash = async (plainText: string): Promise<any> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  return bcrypt.hash(plainText, salt)
}

export const compare = async (plainText: string, cypherText: string): Promise<any> => {
  return bcrypt.compare(plainText, cypherText)
}