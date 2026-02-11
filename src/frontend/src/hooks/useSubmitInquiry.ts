import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryData {
  name: string;
  email: string;
  message: string;
  company: string | null;
  phone: string | null;
  topic: string | null;
  preferredContactTime: string | null;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      await actor.submitInquiry(
        data.name,
        data.email,
        data.message,
        data.company,
        data.phone,
        data.topic,
        data.preferredContactTime
      );
    },
    onSuccess: () => {
      // Invalidate inquiries list so admin view refreshes
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
