import { useMutation } from '@tanstack/react-query';
import formspreeApi from '@/lib/formspree-api';
import type { MutationConfig, MutationFn, QueryError } from '@/lib/react-query';
import type { LocationRegis, RegisterTrainingTypeEnum } from '@/utils';

const adviseformspree = import.meta.env.VITE_ADVISE_ENDPOINT;

export interface IesCtSendVar {
  contactType: RegisterTrainingTypeEnum;
  name: string;
  phone: string;
  email: string;
  locationAdvice: LocationRegis;
  adviceContent: string;
}

export type IesCtSendRes = unknown;

export const fetchIesCtSet: MutationFn<IesCtSendRes, IesCtSendVar> = async (
  props,
) => {
  const request = await formspreeApi.post<IesCtSendVar, IesCtSendRes>(
    adviseformspree,
    props,
  );
  return request;
};

type UseIesCtSendOpts = MutationConfig<IesCtSendRes, QueryError, IesCtSendVar>;

export const useIesCt = (options?: UseIesCtSendOpts) => {
  const mutation = useMutation({
    mutationFn: fetchIesCtSet,
    ...options,
  });

  return {
    ...mutation,
    sendCtRq: mutation.mutate,
    isLoad: mutation.isPending,
  };
};
