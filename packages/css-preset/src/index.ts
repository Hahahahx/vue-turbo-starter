
import type { UnocssNuxtOptions } from '@unocss/nuxt'
import type { PresetWindOptions } from '@unocss/preset-wind'
import { presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'
import { UserConfig } from '@unocss/core'
import { rules } from './rules'
import { presetTheme } from './theme'

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
  Compact = 'compact',
  IoSmaller = 'io-smaller',
  IoSmall = 'io-small',
  IoNormal = 'io-normal',
  IoLarge = 'io-large',
  IoLarger = 'io-larger',

}

interface CustomOptions {
  /**
   * Custom options for PresetWind
   */
  customPresetWindOptions?: PresetWindOptions
}
interface CustomUserConfig extends UserConfig, CustomOptions {}
interface CustomNuxtConfig extends UnocssNuxtOptions, CustomOptions {}

/**
 * Extends unocss/vite Plugin Options Config
 */
export const extendUnocssOptions = ({ customPresetWindOptions, ...options }: CustomUserConfig = {}): UserConfig => {
  return {
    ...options,
    rules,
    presets: [
      presetWind({
        ...(customPresetWindOptions || {}),
      }),
      presetTheme,
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
