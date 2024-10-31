import { postFormSubmission } from '@/app/services';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useSendEmail = () => {
  const { mutate: sendMail, isPending: isSendingMail } = useMutation({
    mutationFn: postFormSubmission,
    onSuccess: () => {
      toast.success('Your message has been sent to Bestin.');
    },
  });

  return { sendMail, isSendingMail };
};
