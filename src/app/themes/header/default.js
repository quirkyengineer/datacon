export const headerTheme = {
    type: "light",
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: '#475259',
                    background: '#F5F7FA'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    background: '#FFFFFF'
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#8595A6',
                    background: '#FFFFFF',
                    '&:hover': {
                        color: '#475259',
                        background: '#FFFFFF',
                    }
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#7352C7',
            light: '#A67FFB',
            dark: '#5E3BB7',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#E44A77',
            light: '#FF7EA6',
            dark: '#DF295E',
            contrastText: '#FFF'
        },
        error: {
            main: '#E73145',
            light: '#FF6A70',
            dark: '#AD001E',
            contrastText: '#FFF'
        },
        warning: {
            main: '#F39711',
            light: '#FFC84C',
            dark: '#BB6900',
            contrastText: '#FFF'
        },
        info: {
            main: '#2EB5C9',
            light: '#6FE7FC',
            dark: '#008598',
            contrastText: '#FFF'
        },
        success: {
            main: '#3BD2A2',
            light: '#78FFD3',
            dark: '#00A073',
            contrastText: '#FFF'
        },
        text: {
            primary: '#475259',
            secondary: '#8595A6',
            disabled: '#A2B2C3',
        },
        divider: '#DEE2E6',
        background: {
            paper: '#FFFFFF',
            default: '#F5F7FA',
        },
        action: {
            active: '#475259',
            hover: '#F5F7FA',
        },
    },
};