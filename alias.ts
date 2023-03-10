/*
 * @Author: Aaron.ux
 * @Date: 2023-03-10 17:48:04
 * @LastEditors: Aaron.ux
 * @LastEditTime: 2023-03-10 17:48:12
 * @FilePath: \vue-turbo-starter\alias.ts
 * @Description:
 *
 */
import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@ui': r('./packages/ui/src/'),
  pinia: r('./node_modules/pinia/dist/pinia.mjs'),
}
