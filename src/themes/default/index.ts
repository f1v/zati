import colorList from './_colors.scss'; // tslint:disable-line
import dimensionList from './_dimensions.scss'; // tslint:disable-line

interface IPropertyList {
  [key: string]: string;
}

interface ITheme {
  colors: IPropertyList;
  spacers: IPropertyList;
}

const colors: IPropertyList = { ...colorList };

const spacers: IPropertyList = {
  xxs: dimensionList.spacerxxs,
  xs: dimensionList.spacerxs,
  s: dimensionList.spacers,
  m: dimensionList.spacerm,
  l: dimensionList.spacerl,
  xl: dimensionList.spacerxl,
  xxl: dimensionList.spacerxxl,
};

export const theme: ITheme = {
  colors,
  spacers,
};
