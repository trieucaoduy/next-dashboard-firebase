import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    darker?: string
    lighter?: string
  }
}

export const mainTheme = createTheme({
  typography: {
    fontFamily: ['Public Sans', 'sans-serif'].join(', ')
  },
  components: {
    MuiCard: {
      defaultProps: {
        sx: {
          padding: 2,
          borderRadius: 3,
          boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        }
      }
    }
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      main: '#22c55e',
      light: '#5BE584',
      lighter: '#C8FACD',
      dark: '#007B55',
      darker: '#005249',
      contrastText: '#fff'
    },
    secondary: {
      main: '#3366FF',
      light: '#84A9FF',
      lighter: '#D6E4FF',
      dark: '#1939B7',
      darker: '#091A7A',
      contrastText: '#fff'
    },
    info: {
      main: '#00B8D9',
      light: '#61F3F3',
      lighter: '#CAFDF5',
      dark: '#006C9C',
      darker: '#003768',
      contrastText: '#fff'
    },
    success: {
      main: '#36B37E',
      light: '#86E8AB',
      lighter: '#D8FBDE',
      dark: '#1B806A',
      darker: '#0A5554',
      contrastText: '#fff'
    },
    warning: {
      main: '#FFAB00',
      light: '#FFD666',
      lighter: '#FFF5CC',
      dark: '#B76E00',
      darker: '#7A4100',
      contrastText: '#fff'
    },
    error: {
      main: '#FF5630',
      light: '#FFAC82',
      lighter: '#FFE9D5',
      dark: '##B71D18',
      darker: '#7A0916',
      contrastText: '#fff'
    },
    grey: {
      100: '#F9FAFB',
      200: '#F4F6F8',
      300: '#DFE3E8',
      400: '#C4CDD5',
      500: '#919EAB',
      600: '#637381',
      700: '#454F5B',
      800: '#212B36',
      900: '#161C24'
    }
  }
})
