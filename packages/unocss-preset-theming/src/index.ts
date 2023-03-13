/*
 * @Author: 胡鑫 1219654535@qq.com
 * @Date: 2023-03-09 16:18:36
 * @LastEditors: Aaron.ux
 * @LastEditTime: 2023-03-11 18:07:58
 * @FilePath: \vue-turbo-starter\packages\unocss-preset-theming\src\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import type { Preset, Rule } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'
import { set } from 'lodash-es'
import { isHex, getRgbValue } from '@jiaminghi/color'

export type ThemingOptions = Array<{
  name: string
  theme: Theme
  selectors?: string[]
}>

type varsTheme = { style: Theme | string, varName: string, keyName: string, callBack: (varsTheme: varsTheme) => void }

export function presetTheming (_options: ThemingOptions = []): Preset<Theme> {
  // 变量前缀
  const prefix = '--un-theme'
  // 校验是否是变量
  const varsRE = new RegExp(`var\\((${prefix}[\\w-]*)\\)`)

  // 使用的变量
  const usedTheme: Array<string> = []
  // 所有主题的样式
  const baseTheme: Record<string, any> = {}

  /**
   * @description: 遍历主题
   * @param {object} theme
   * @return {*}
   */
  function convertColorVars (theme: varsTheme) {
    if (typeof theme.style === 'string') {
      theme.callBack(theme)
    } else {
      Object.entries(theme.style).forEach(([k, v]) => {
        convertColorVars({ ...theme, style: v, varName: `${theme.varName}-${k}`, keyName: theme.keyName ? `${theme.keyName}.${k}` : k })
      })
    }
    return null
  }

  const generateCSS: string[] = []

  const rules: Rule<Theme>[] = _options.map((t) => {
    const rule: Record<string, any> = {}

    convertColorVars({
      style: t.theme,
      varName: prefix,
      keyName: '',
      callBack (vars) {
        const isColor = isHex(vars.style as string)
        // if (usedTheme.includes(vars.varName)) {
        rule[vars.varName] = isColor ? getRgbValue(vars.style as string).join(',') : vars.style
        // }
        // todo：判断是否是Color ， 进行转换
        set(baseTheme, vars.keyName, isColor ? `rgb(var(${vars.varName}))` : `var(${vars.varName})`)
      },
    })

    t.selectors?.forEach((selector) => {
      generateCSS.push(`${selector}{ ${Object.keys(rule).map(k => `${k}:${rule[k]};`).join('')} }`)
    })

    console.log('rule', rule)

    return [
      t.name,
      rule,
    ]
  })

  return {
    name: 'unocss-preset-theming',
    // enforce: 'post',
    // layers: { theming: -5 },
    extendTheme (_originalTheme) {
      console.log(_originalTheme)
      // mergeDeep(originalTheme, baseTheme)
    },
    rules,
    preflights: [
      {
        layer: 'theming',
        getCSS: () => {
          return generateCSS.join('\n')
        },
      },
    ],
    theme: baseTheme,
    postprocess (util) {
      util.entries.forEach(([, val]) => {
        if (typeof val === 'string') {
          const varName = val.match(varsRE)?.[1]
          if (varName) {
            usedTheme.push(varName)
          }
        }
      })
    },
  }
}

export default presetTheming
