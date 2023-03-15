import { presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import type { UserConfig } from '@unocss/core'
import { rules } from './rules'
import { presetTheme } from './theme'
import { shortcuts } from './shortcuts'

/**
 * Extends unocss/vite Plugin Options Config
 */
export const extendUnocssOptions = ({ ...options }: UserConfig = {}): UserConfig => {
  return {
    ...options,
    rules,
    shortcuts,
    presets: [
      presetUno({
        attributifyPseudo: true,
      }),
      // presetMini(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          'color': 'inherit',
          // Avoid crushing of icons in crowded situations
          'min-width': '1.2em',
        },
        scale: 1.2,
        cdn: 'https://esm.sh/',
      }),
      // presetWind(),
      presetTypography(),
      presetWebFonts({
        provider: 'none',
        fonts: {
          script: 'Homemade Apple',
        },
      }),
      presetTheme,
      ...(options.presets || []),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
      ...(options.transformers || []),
    ],
    variants: [
    ],
  }
}
