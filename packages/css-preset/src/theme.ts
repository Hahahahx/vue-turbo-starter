import presetTheming from 'unocss-preset-theming'
import { colors, theme } from '@unocss/preset-mini'

const { indigo, slate, white, black } = colors

export enum Theme {
  Light = 'light',
  Dark = 'dark',
  Compact = 'compact',
  IoSmaller = 'io-smaller',
  IoSmall = 'io-small',
  IoNormal = 'io-normal',
  IoLarge = 'io-large',
  IoLarger = 'io-larger',

}

export const presetTheme = presetTheming([
  {
    name: Theme.Light,
    theme: {
      colors: {
        primary: {
          dark: indigo[700],
          darker: indigo[800],
          light: indigo[500],
          lighter: indigo[400],
          DEFAULT: indigo[600],
        },
        text: slate[900],
        bkg: {
          primary: white,
          secondary: slate[100],
        },
      },
      borderRadius: {
        DEFAULT: theme.borderRadius.md,
      },
    },
    selectors: [':root'],
  },
  {
    name: Theme.Dark,
    theme: {
      colors: {
        text: slate[50],
        bkg: {
          primary: black,
          secondary: slate[900],
        },
      },
    },
  },
  {
    name: Theme.Compact,
    theme: {
      borderRadius: {
        DEFAULT: theme.borderRadius.sm,
      },
    },
  },

  {
    name: Theme.IoSmaller,
    theme: {
      io: {
        height: '22px',
        padding: '0 12px 0 12px',
        fontSize: theme.fontSize?.sm[0],
      },
    },
  },
  {
    name: Theme.IoSmall,
    theme: {
      io: {
        height: '26px',
        padding: '0 14px 0 14px',
        fontSize: theme.fontSize?.base[0],
      },
    },
  },
  {
    name: Theme.IoNormal,
    theme: {
      io: {
        height: '30px',
        padding: '0 16px 0 16px',
        fontSize: theme.fontSize?.base[0],
      },
    },
    selectors: [':root'],
  },
  {
    name: Theme.IoLarge,
    theme: {
      io: {
        height: '34px',
        padding: '0 18px 0 18px',
        fontSize: theme.fontSize?.base[0],
      },
    },
  },
  {
    name: Theme.IoLarger,
    theme: {
      io: {
        height: '38px',
        padding: '0 20px 0 20px',
        fontSize: theme.fontSize?.lg[0],
      },
    },
  },
  ...Object.entries(colors)
    .filter(([_, v]) => typeof v === 'object')
    .map(([k, v]) => ({
      name: k,
      theme: {
        colors: {
          primary: {
            dark: v[700],
            darker: v[800],
            light: v[500],
            lighter: v[400],
            DEFAULT: v[500],
          },
        },
      },
    })) as any,
])
