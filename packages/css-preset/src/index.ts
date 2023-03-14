import type { UnocssNuxtOptions } from '@unocss/nuxt'
import type { PresetWindOptions } from '@unocss/preset-wind'
import { presetAttributify, presetIcons, presetMini, presetUno, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'
import type { UserConfig } from '@unocss/core'
import { rules } from './rules'
import { presetTheme } from './theme'
import { shortcuts } from './shortcuts'

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
    shortcuts,
    presets: [
      presetUno(),
      presetMini(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        cdn: 'https://esm.sh/',
      }),
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
export function extendUnocssNuxtOptions(options: CustomNuxtConfig = {}): UnocssNuxtOptions {
  return {
    preflight: true,
    ...extendUnocssOptions(options),
  }
}
