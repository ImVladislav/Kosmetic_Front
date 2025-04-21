export const XS_SCREEN = 320;
export const XS_TYPE = "xs-mobile";

export const MOBILE_SCREEN = 600;
export const MOBILE_TYPE = "mobile";

export const TABLET_SCREEN = 768;
export const TABLET_TYPE = "tablet";

export const SM_DESKTOP_SCREEN = 1024;
export const SM_DESKTOP_TYPE = "small-desktop";

export const LG_DESKTOP_SCREEN = 1440;
export const LG_DESKTOP_TYPE = "desktop";

export const RESOLUTIONS_LIST = [
  { type: XS_TYPE, size: XS_SCREEN },
  { type: MOBILE_TYPE, size: MOBILE_SCREEN },
  { type: TABLET_TYPE, size: TABLET_SCREEN },
  { type: SM_DESKTOP_TYPE, size: SM_DESKTOP_SCREEN },
  { type: LG_DESKTOP_TYPE, size: LG_DESKTOP_SCREEN },
];

// Об'єкт для швидкого доступу до точок перелому
export const RESOLUTIONS_MAP = {
  xs: XS_SCREEN,
  mobile: MOBILE_SCREEN,
  tablet: TABLET_SCREEN,
  smallDesktop: SM_DESKTOP_SCREEN,
  desktop: LG_DESKTOP_SCREEN,
};
