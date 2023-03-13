/*
 * @Author: Aaron.ux
 * @Date: 2023-03-08 16:59:34
 * @LastEditors: Aaron.ux
 * @LastEditTime: 2023-03-11 15:58:19
 * @FilePath: \vue-turbo-starter\uno.config.ts
 * @Description:
 *
 */

import { defineConfig } from 'unocss'
import { extendUnocssOptions } from './packages/css-preset'

// for IDE support
export default defineConfig({
  ...extendUnocssOptions(),
  include: [
    '**/*.ts',
    '**/*.vue',
    '**/*.mdx',
  ],
})
