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

// const eNumEntities = <T extends Record<string, string | number>>(
//   originEnum: T,
// ) => {
//   const keys = Object.keys(originEnum).filter((key) =>
//     isNaN(Number(key)),
//   ) as Array<keyof T>;

//   const values = keys.map((key) => originEnum[key]) as Array<ValueOf<T>>;

//   return { keys, values };
// };

// const countryCodeEnumObj: EnumObjBase<typeof CountryCodeEnum> = {
//   TW: { label: 'TW', value: CountryCodeEnum.TW },
//   US: { label: 'US', value: CountryCodeEnum.US },
//   CN: { label: 'CN', value: CountryCodeEnum.CN },
//   JP: { label: 'JP', value: CountryCodeEnum.JP },
//   DE: { label: 'DE', value: CountryCodeEnum.DE },
//   FR: { label: 'FR', value: CountryCodeEnum.FR },
//   IN: { label: 'IN', value: CountryCodeEnum.IN },
//   SG: { label: 'SG', value: CountryCodeEnum.SG },
//   TH: { label: 'TH', value: CountryCodeEnum.TH },
//   KR: { label: 'KR', value: CountryCodeEnum.KR },
//   MY: { label: 'MY', value: CountryCodeEnum.MY },
//   PH: { label: 'PH', value: CountryCodeEnum.PH },
//   VN: { label: 'VN', value: CountryCodeEnum.VN },
//   GB: { label: 'GB', value: CountryCodeEnum.GB },
//   AU: { label: 'AU', value: CountryCodeEnum.AU },
//   CA: { label: 'CA', value: CountryCodeEnum.CA },
//   BR: { label: 'BR', value: CountryCodeEnum.BR },
//   ZA: { label: 'ZA', value: CountryCodeEnum.ZA },
//   MX: { label: 'MX', value: CountryCodeEnum.MX },
//   AE: { label: 'AE', value: CountryCodeEnum.AE },
//   SA: { label: 'SA', value: CountryCodeEnum.SA },
// };

// const countryCodeEnumOptions = Object.keys(CountryCodeEnum).map((key) => {
//   const enumKey = key as keyof typeof CountryCodeEnum;
//   const { label = 'undefined', value } = countryCodeEnumObj[enumKey];
//   return { label, value };
// });
// export { countryCodeEnumOptions };
export type { AppOption };
