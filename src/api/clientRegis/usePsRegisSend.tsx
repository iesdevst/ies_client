import { useMutation } from '@tanstack/react-query';
import formspreeApi from '@/lib/formspree-api';
import type { MutationConfig, MutationFn, QueryError } from '@/lib/react-query';
import type {
  LocationRegis,
  PartnershipProgEnum,
  RegisterTrainingTypeEnum,
} from '@/utils';

const psadformspree = import.meta.env.VITE_PSAD_ENDPOINT;

export interface PsRegisSendVar {
  trainRegisType: RegisterTrainingTypeEnum;
  name: string;
  phone: string;
  email: string;
  locationRegis: LocationRegis;
  psProgTrain: Array<PartnershipProgEnum>;
}

export type PsRegisSendRes = unknown;

export const fetchPsRegisSet: MutationFn<
  PsRegisSendRes,
  PsRegisSendVar
> = async (props) => {
  const request = await formspreeApi.post<PsRegisSendVar, PsRegisSendRes>(
    psadformspree,
    props,
  );
  return request;
};

type UsePsRegisSendOpts = MutationConfig<
  PsRegisSendRes,
  QueryError,
  PsRegisSendVar
>;

export const usePsRegisSend = (options?: UsePsRegisSendOpts) => {
  const mutation = useMutation({
    mutationFn: fetchPsRegisSet,
    ...options,
  });

  return {
    ...mutation,
    sendRegis: mutation.mutate,
    isLoad: mutation.isPending,
  };
};
