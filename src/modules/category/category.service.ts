import { prisma } from '../../lib/prisma';

const createCategory = async (payload: {
  title: string;
  subject: string;
  classLevel: string;
  description: string;
}) => {
  return await prisma.category.create({
    data: payload,
  });
};
export const categoryService = { createCategory };
