import { useMutation } from '@tanstack/react-query';
import formspreeApi from '@/lib/formspree-api';
import type { MutationConfig, MutationFn, QueryError } from '@/lib/react-query';
import type { CapacityRoleEnum, InterestProgramEnum } from '@/utils';

const epformspree = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export interface ClientRegisSendVar {
  capaRole: CapacityRoleEnum;
  name: string;
  phone: string;
  email: string;
  age: string;
  location: string;
  progInter: Array<InterestProgramEnum>;
  question?: string;
}

export type ClientRegisSendRes = unknown;

export const fetchClientRegisSet: MutationFn<
  ClientRegisSendRes,
  ClientRegisSendVar
> = async (props) => {
  const request = await formspreeApi.post<
    ClientRegisSendVar,
    ClientRegisSendRes
  >(epformspree, { ...props, progInter: props.progInter.join(', ') });
  return request;
};

type UseClientRegisSendOpts = MutationConfig<
  ClientRegisSendRes,
  QueryError,
  ClientRegisSendVar
>;

export const useClientRegisSend = (options?: UseClientRegisSendOpts) => {
  const mutation = useMutation({
    mutationFn: fetchClientRegisSet,
    ...options,
  });

  return {
    ...mutation,
    sendRegis: mutation.mutate,
    isLoad: mutation.isPending,
  };
};
