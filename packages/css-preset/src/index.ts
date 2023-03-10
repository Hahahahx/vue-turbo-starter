import type { Preset } from '@unocss/core'
import type { UnocssNuxtOptions } from '@unocss/nuxt'
import type { Theme, PresetWindOptions } from '@unocss/preset-wind'
import { presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'
import { UserConfig } from '@unocss/core'
import { rules } from './rules'
import { presetTheme } from './theme'

/**
 * Preset Vue Turbo for UnoCSS
 */
export const presetVueTurbo = (): Preset<Theme> => {
  return {
    name: 'unocss-preset-vue-turbo',
    rules,
    safelist: [
      'hidden',
    ],
    shortcuts: [],
  }
}

interface CustomOptions {
  /**
   * Custom options for PresetWind
   */
  customPresetWindOptions?: PresetWindOptions
}
interface CustomUserConfig extends UserConfig, CustomOptions { }
interface CustomNuxtConfig extends UnocssNuxtOptions, CustomOptions { }

/**
 * Extends unocss/vite Plugin Options Config
 */
export const extendUnocssOptions = ({ customPresetWindOptions, ...options }: CustomUserConfig = {}): UserConfig => {
  return {
    ...options,
    presets: [
      presetWind({
        ...(customPresetWindOptions || {}),
      }),
      presetTheme(),
      presetVueTurbo(),
      ...(options.presets || []),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
      ...(options.transformers || []),
    ],
  }
}

/**
 * Extends unocss/nuxt Plugin Options Config
 */
export function extendUnocssNuxtOptions (options: CustomNuxtConfig = {}): UnocssNuxtOptions {
  return {
    preflight: true,
    ...extendUnocssOptions(options),
  }
}
