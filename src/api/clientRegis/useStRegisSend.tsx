import { useMutation } from '@tanstack/react-query';
import formspreeApi from '@/lib/formspree-api';
import type { MutationConfig, MutationFn, QueryError } from '@/lib/react-query';
import type {
  CapacityRoleEnum,
  RegisterTrainingTypeEnum,
  ShortTermTraingEnum,
} from '@/utils';

const stadformspree = import.meta.env.VITE_STAD_ENDPOINT;

export interface StRegisSendVar {
  trainRegisType: RegisterTrainingTypeEnum;
  capaRole: CapacityRoleEnum;
  name: string;
  phone: string;
  email: string;
  age: string;
  location: string;
  shortTermTrain: Array<ShortTermTraingEnum>;
  question?: string;
}

export type StRegisSendRes = unknown;

export const fetchStRegisSet: MutationFn<
  StRegisSendRes,
  StRegisSendVar
> = async (props) => {
  const request = await formspreeApi.post<StRegisSendVar, StRegisSendRes>(
    stadformspree,
    { ...props, shortTermTrain: props.shortTermTrain.join(', ') },
  );
  return request;
};

type UseStRegisSendOpts = MutationConfig<
  StRegisSendRes,
  QueryError,
  StRegisSendVar
>;

export const useStRegisSend = (options?: UseStRegisSendOpts) => {
  const mutation = useMutation({
    mutationFn: fetchStRegisSet,
    ...options,
  });

  return {
    ...mutation,
    sendRegis: mutation.mutate,
    isLoad: mutation.isPending,
  };
};
