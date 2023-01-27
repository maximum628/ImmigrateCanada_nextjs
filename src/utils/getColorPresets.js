// theme
import palette from '../theme/palette';

// ----------------------------------------------------------------------

export const colorPresets = [
  // DEFAULT
  {
    name: 'default',
    ...palette.light.primary,
  },
  // RED
  {
    name: 'red',
    lighter: '#FFE3D5',
    light: '#FFC1AC',
    main: '#FF3030',
    dark: '#B71833',
    darker: '#7A0930',
    contrastText: '#fff',
  },
];

export const defaultPreset = colorPresets[0];
export const redPreset = colorPresets[1];

export default function getColorPresets(presetsKey) {
  return {
    red: redPreset,
    default: defaultPreset,
  }[presetsKey];
}
