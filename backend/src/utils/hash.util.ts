import bcrypt from 'bcrypt'

// Encrypt pw
export const hashed = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12) // 12 recommended salt rounds
}

// Compare login pw with hashed pw
export const compareHash = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword)
}