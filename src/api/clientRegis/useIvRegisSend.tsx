import { useMutation } from '@tanstack/react-query';
import formspreeApi from '@/lib/formspree-api';
import type { MutationConfig, MutationFn, QueryError } from '@/lib/react-query';
import type {
  CapacityRoleEnum,
  InterestProgramEnum,
  RegisterTrainingTypeEnum,
} from '@/utils';

const ivadformspree = import.meta.env.VITE_IVAD_ENDPOINT;

export interface IvRegisSendVar {
  trainRegisType: RegisterTrainingTypeEnum;
  capaRole: CapacityRoleEnum;
  name: string;
  phone: string;
  email: string;
  age: string;
  location: string;
  progInter: Array<InterestProgramEnum>;
  question?: string;
}

export type IvRegisSendRes = unknown;

export const fetchIvRegisSet: MutationFn<
  IvRegisSendRes,
  IvRegisSendVar
> = async (props) => {
  const request = await formspreeApi.post<IvRegisSendVar, IvRegisSendRes>(
    ivadformspree,
    { ...props, progInter: props.progInter.join(', ') },
  );
  return request;
};

type UseIvRegisSendOpts = MutationConfig<
  IvRegisSendRes,
  QueryError,
  IvRegisSendVar
>;

export const useIvRegisSend = (options?: UseIvRegisSendOpts) => {
  const mutation = useMutation({
    mutationFn: fetchIvRegisSet,
    ...options,
  });

  return {
    ...mutation,
    sendRegis: mutation.mutate,
    isLoad: mutation.isPending,
  };
};
