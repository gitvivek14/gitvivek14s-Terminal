import { getBio } from '@/api';

export const about = async (): Promise<string> => {
  const bio = await getBio();

  return bio;
};
