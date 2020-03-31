export const colour = {
    black: '#170710',
    white: '#FFFFFF',
    off_white: '#FFFCF9',
    grey: '#F5F5F5',
    grey_dark: '#B5B1B2',
    primary: '#B1EDE8',
    focus: '#EDB1D4',
    error: '#EDB1B6'
};

export const font = {
    heading: "'Archivo Black', sans-serif",
    body: "'Open Sans', sans-serif",
    base_size: "16px"
};

export const screen_size = {
    mobile: '768px',
    tablet: '959px',
    desktop: '1024px',
    hd: '1440px'
};

export const breakpoint = {
    tablet: `(min-width: ${screen_size.mobile})`,
    desktop: `(min-width: ${screen_size.tablet})`,
    hd: `(min-width: ${screen_size.desktop})`,
    super_hd: `(min-width: ${screen_size.hd})`
};