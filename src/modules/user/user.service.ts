import { prisma } from '../../lib/prisma';
const getUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
};
export const userService = { getUserById };
