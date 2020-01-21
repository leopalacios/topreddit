export const FONT_SIZES = {
  XS: '14px',
  S: '16px',
  M: '20px',
  L: '24px',
};

export const SIZES = {
  XXS: '4px',
  XS: '8px',
  S: '12px',
  M: '16px',
  L: '20px',
  XL: '24px',
  XXL: '28px',
};

export const COLORS = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  ORANGE: '#fc9637',
  DARK_GREY: '#0F0F0F',
};

const DEVICES_SIZES = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const DEVICES = {
  mobileS: `(min-width: ${DEVICES_SIZES.mobileS})`,
  mobileM: `(min-width: ${DEVICES_SIZES.mobileM})`,
  mobileL: `(min-width: ${DEVICES_SIZES.mobileL})`,
  tablet: `(min-width: ${DEVICES_SIZES.tablet})`,
  laptop: `(min-width: ${DEVICES_SIZES.laptop})`,
  laptopL: `(min-width: ${DEVICES_SIZES.laptopL})`,
  desktop: `(min-width: ${DEVICES_SIZES.desktop})`,
  desktopL: `(min-width: ${DEVICES_SIZES.desktop})`
};
