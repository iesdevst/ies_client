import {
  CapacityRoleEnum,
  InterestProgramEnum,
  PartnershipProgEnum,
  LocationRegis,
  ShortTermTraingEnum,
} from './enum';

type AppOption<O = object, V = string | number> = {
  label: string;
  value: V;
} & O;

type EnumObjBase<
  T extends Record<string, string | number>,
  Other = object,
> = Record<keyof T, { label: string; value: ValueOf<T> } & Other>;
/**
 * Convert an enum to Ant Design Select options
 * @param enumObj The enum object to convert
 * @returns An array of options for Ant Design Select
 */
export const enumToOptions = (enumObj: object): AppOption[] => {
  return Object.keys(enumObj)
    .filter((key) => Number.isNaN(Number(key))) // Filter out numeric keys (reverse mapping in TypeScript enums)
    .map((key) => ({
      label: key, // Use the enum key as the label
      value: enumObj[key as keyof typeof enumObj], // Use the enum value as the value
    }));
};

const eNumEntities = <T extends Record<string, string | number>>(
  originEnum: T,
) => {
  const keys = Object.keys(originEnum).filter((key) =>
    isNaN(Number(key)),
  ) as Array<keyof T>;

  const values = keys.map((key) => originEnum[key]) as Array<ValueOf<T>>;

  return { keys, values };
};

const capacityRoleEnumsObj: EnumObjBase<typeof CapacityRoleEnum> = {
  Student: {
    label: 'stu',
    value: CapacityRoleEnum.Student,
  },
  Parent: {
    label: 'parent',
    value: CapacityRoleEnum.Parent,
  },
};
const enrollmentAreaEnumsObj: EnumObjBase<typeof LocationRegis> = {
  HN: {
    label: 'hn',
    value: LocationRegis.HN,
  },
  HCM: {
    label: 'hcm',
    value: LocationRegis.HCM,
  },
  Other: {
    label: 'other',
    value: LocationRegis.Other,
  },
};

const enrollmentAreaOptions = eNumEntities<typeof LocationRegis>(
  LocationRegis,
).keys.map((enumKey) => {
  const { label, value } = enrollmentAreaEnumsObj[enumKey];
  return { label, value };
});

const capacityRoleOptions = eNumEntities<typeof CapacityRoleEnum>(
  CapacityRoleEnum,
).keys.map((enumKey) => {
  const { label, value } = capacityRoleEnumsObj[enumKey];
  return { label, value };
});

const interestProgramEnumsObj: EnumObjBase<
  typeof InterestProgramEnum,
  { group?: string }
> = {
  OfficeIT: {
    label: 'offIt',
    value: InterestProgramEnum.OfficeIT,
  },
  InformationTechnology: {
    label: 'ivIt',
    value: InterestProgramEnum.InformationTechnology,
  },
  IndustrialElectrical: {
    label: 'indus',
    value: InterestProgramEnum.IndustrialElectrical,
  },
  OfficeAdministration: {
    label: 'offAd',
    value: InterestProgramEnum.OfficeAdministration,
  },
  HotelManagement: {
    label: 'ivHotel',
    value: InterestProgramEnum.HotelManagement,
  },
  Marketing: {
    label: 'mkt',
    value: InterestProgramEnum.Marketing,
  },
  BusinessAdministration: {
    label: 'busiAdmin',
    value: InterestProgramEnum.BusinessAdministration,
  },
  GraphicDesign: {
    label: 'ds',
    value: InterestProgramEnum.GraphicDesign,
  },
  Accounting: {
    label: 'ivAccounting',
    value: InterestProgramEnum.Accounting,
  },
};

const interestProgramOptions = eNumEntities<typeof InterestProgramEnum>(
  InterestProgramEnum,
).keys.map((enumKey) => {
  const { label, value, group } = interestProgramEnumsObj[enumKey];
  return { label, value, group };
});

const shortTermTrainEnumsObj: EnumObjBase<
  typeof ShortTermTraingEnum,
  { group?: string }
> = {
  BeveragePre: {
    label: 'mixology',
    value: ShortTermTraingEnum.BeveragePre,
  },
  Cooking: {
    label: 'proCook',
    value: ShortTermTraingEnum.Cooking,
  },
  Baking: {
    label: 'baking',
    value: ShortTermTraingEnum.Baking,
  },
  AiApp: {
    label: 'aiApp',
    value: ShortTermTraingEnum.AiApp,
  },
};

const shortTermTrainOptions = eNumEntities<typeof ShortTermTraingEnum>(
  ShortTermTraingEnum,
).keys.map((enumKey) => {
  const { label, value, group } = shortTermTrainEnumsObj[enumKey];
  return { label, value, group };
});

const partnershipProgEnumsObj: EnumObjBase<
  typeof PartnershipProgEnum,
  { group?: string }
> = {
  ECom: {
    label: 'eco',
    value: PartnershipProgEnum.ECom,
  },
  BusiAd: {
    label: 'busiAd',
    value: PartnershipProgEnum.BusiAd,
  },
  Accounting: {
    label: 'accounting',
    value: PartnershipProgEnum.Accounting,
  },
  FinBank: {
    label: 'finBank',
    value: PartnershipProgEnum.FinBank,
  },
  IT: {
    label: 'it',
    value: PartnershipProgEnum.IT,
  },
  Law: {
    label: 'law',
    value: PartnershipProgEnum.Law,
  },
  EcoLaw: {
    label: 'ecoLaw',
    value: PartnershipProgEnum.EcoLaw,
  },
  EngLang: {
    label: 'englang',
    value: PartnershipProgEnum.EngLang,
  },
  ChinaLang: {
    label: 'cnLang',
    value: PartnershipProgEnum.ChinaLang,
  },
  TouTraMana: {
    label: 'touris',
    value: PartnershipProgEnum.TouTraMana,
  },
  HotelMana: {
    label: 'hotel',
    value: PartnershipProgEnum.HotelMana,
  },
};

const partnershipProgOptions = eNumEntities<typeof PartnershipProgEnum>(
  PartnershipProgEnum,
).keys.map((enumKey) => {
  const { label, value, group } = partnershipProgEnumsObj[enumKey];
  return { label, value, group };
});

export {
  capacityRoleEnumsObj,
  capacityRoleOptions,
  interestProgramEnumsObj,
  interestProgramOptions,
  shortTermTrainEnumsObj,
  shortTermTrainOptions,
  partnershipProgEnumsObj,
  partnershipProgOptions,
  enrollmentAreaEnumsObj,
  enrollmentAreaOptions,
};
export type { AppOption };
