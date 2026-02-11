import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Inquiry } from '../backend';

export function useGetAllInquiries() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Inquiry[]>({
    queryKey: ['inquiries'],
    queryFn: async () => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      return actor.getAllInquiries();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}

export function useIsCallerAdmin() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['isAdmin'],
    queryFn: async () => {
      if (!actor) {
        return false;
      }
      try {
        return await actor.isCallerAdmin();
      } catch {
        return false;
      }
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}
