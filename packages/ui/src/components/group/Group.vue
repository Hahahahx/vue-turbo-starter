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
    <slot class="group-item" />
  </div>
</template>

<style>
.group-row {
  @apply [&>.group-item]:(rounded-none border-r-0) first:[&>.group-item]:rounded-l last:[&>.group-item]:rounded-r;
}
.group-col {
  @apply [&>.group-item]:(rounded-none border-b-0 block w-full) first:[&>.group-item]:rounded-t last:[&>.group-item]:(rounded-b border-b-1);
}
</style>
