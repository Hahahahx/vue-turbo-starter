import type { UserShortcuts } from '@unocss/core'

export const shortcuts: UserShortcuts<{}> = {
  'group-test': 'bg-black ',
  'group': '[&>.group-item]:rounded-none [&>.group-item]:border-r-0 first:[&>.group-item]:rounded-l last:[&>.group-item]:rounded-r',
}
