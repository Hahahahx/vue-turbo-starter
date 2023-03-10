/*
 * @Author: Aaron.ux
 * @Date: 2023-03-09 16:18:07
 * @LastEditors: Aaron.ux
 * @LastEditTime: 2023-03-10 10:21:10
 * @FilePath: \vue-turbo-starter\packages\unocss-preset-theming\build.config.js
 * @Description:
 *
 */
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  failOnWarn: false,
  rollup: {
    emitCJS: true,
  },
})
