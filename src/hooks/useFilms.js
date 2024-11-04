import { getFilms } from '../services/getFilms';
import { useQuery } from '@tanstack/react-query';

export const useFilms = () => {
  return useQuery({
    queryKey: ['films'],
    queryFn: () => getFilms(),
  });
};
