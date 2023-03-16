<script lang="ts" setup>
import type { PropType } from 'vue'
import type { GroupDirectionType, GroupSizeType, GroupType } from './Group.model'
import { GroupDirectionEnum, GroupEnum, GroupSizeEnum } from './Group.model'

const props = defineProps({
  variant: {
    type: String as PropType<GroupType>,
    default: GroupEnum.Contained,
  },
  size: {
    type: String as PropType<GroupSizeType>,
    default: GroupSizeEnum.Normal,
  },
  direction: {
    type: String as PropType<GroupDirectionType>,
    default: GroupDirectionEnum.Row,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const sizeClasses = {
  smaller: 'io-smaller',
  small: 'io-small',
  normal: 'io-normal',
  large: 'io-large',
  larger: 'io-larger',
}

const directionClass = {
  row: 'group-row',
  col: 'group-col',
}
</script>

<template>
  <div :class="[directionClass[direction], sizeClasses[size]]">
    <slot />
  </div>
</template>

<style lang="postcss">
.group-row{
  .group-item{
    @apply rounded-none first:(rounded-l) last:(rounded-r) not-last:border-r-0
  }
}
.group-col{
  .group-item{
    @apply block w-full rounded-none first:(rounded-t) last:(rounded-b) not-last:border-b-0
  }
}
</style>
