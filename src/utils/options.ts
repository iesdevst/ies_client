import {
  CapacityRoleEnum,
  InterestProgramEnum,
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

const capacityRoleEnumsObj: EnumObjBase<
  typeof CapacityRoleEnum,
  { color: string }
> = {
  Student: {
    label: 'Student',
    value: CapacityRoleEnum.Student,
    color: 'grey',
  },
  Parent: {
    label: 'Parent',
    value: CapacityRoleEnum.Parent,
    color: '#1554ad',
  },
};

const capacityRoleOptions = eNumEntities<typeof CapacityRoleEnum>(
  CapacityRoleEnum,
).keys.map((enumKey) => {
  const { label, value, color } = capacityRoleEnumsObj[enumKey];
  return { label, value, color };
});

const interestProgramEnumsObj: EnumObjBase<
  typeof InterestProgramEnum,
  { group?: string }
> = {
  OfficeIT: {
    label: 'Office IT',
    value: InterestProgramEnum.OfficeIT,
  },
  InformationTechnology: {
    label: 'Information Technology',
    value: InterestProgramEnum.InformationTechnology,
  },
  IndustrialElectrical: {
    label: 'Industrial & Residential Electrical',
    value: InterestProgramEnum.IndustrialElectrical,
  },
  OfficeAdministration: {
    label: 'Office Administration',
    value: InterestProgramEnum.OfficeAdministration,
  },
  HotelManagement: {
    label: 'Hotel Management',
    value: InterestProgramEnum.HotelManagement,
  },
  Marketing: {
    label: 'Marketing',
    value: InterestProgramEnum.Marketing,
  },
  BusinessAdministration: {
    label: 'Business Administration',
    value: InterestProgramEnum.BusinessAdministration,
  },
  GraphicDesign: {
    label: 'Graphic Design',
    value: InterestProgramEnum.GraphicDesign,
  },
  Accounting: {
    label: 'Accounting',
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
    label: 'Beverage Preparation',
    value: ShortTermTraingEnum.BeveragePre,
  },
  Cooking: {
    label: 'Professional Cooking',
    value: ShortTermTraingEnum.Cooking,
  },
  Baking: {
    label: 'Baking',
    value: ShortTermTraingEnum.Baking,
  },
  AiApp: {
    label: 'AI Applications',
    value: ShortTermTraingEnum.AiApp,
  },
};

const shortTermTrainOptions = eNumEntities<typeof ShortTermTraingEnum>(
  ShortTermTraingEnum,
).keys.map((enumKey) => {
  const { label, value, group } = shortTermTrainEnumsObj[enumKey];
  return { label, value, group };
});

export {
  capacityRoleEnumsObj,
  capacityRoleOptions,
  interestProgramEnumsObj,
  interestProgramOptions,
  shortTermTrainEnumsObj,
  shortTermTrainOptions,
};
export type { AppOption };
