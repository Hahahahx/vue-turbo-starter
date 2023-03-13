<!--
 * @Author: Aaron.ux
 * @Date: 2023-03-07 14:40:32
 * @LastEditors: Aaron.ux
 * @LastEditTime: 2023-03-11 17:43:56
 * @FilePath: \vue-turbo-starter\packages\ui\src\components\button\Button.vue
 * @Description:
 *
-->
<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref } from 'vue'
import IconSpinner from '@ui/components/icon/Spinner.vue'
import type { ButtonIconSizeType, ButtonType } from './Button.model'
import { ButtonEnum, ButtonIconSizeEnum } from './Button.model'

const props = defineProps({
  prefix: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<ButtonType>,
    default: ButtonEnum.Primary,
  },
  iconSize: {
    type: String as PropType<ButtonIconSizeType>,
    default: ButtonIconSizeEnum.Normal,
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

const emit = defineEmits<{ (e: 'click', event: MouseEvent): void }>()

const classes = {
  primary: 'bg-primary text-white w-full border-primary border-2 border-solid rounded-md active:(bg-primary-700 border-primary-700)',
  secondary: 'bg-transparent text-primary w-full border-primary border-2 border-solid rounded-md active:(text-primary-700 border-primary-700)',
  tertiary: 'bg-white text-normal w-full border-2 border-gray-400 border-solid rounded-full',
  quaternary: 'bg-white text-normal border-2 border-gray border-solid rounded-full shadow-lg',
}

const iconSizeClasses = {
  small: 'h-1 w-1',
  normal: 'h-1.5 w-1.5',
}

const inloading = ref(props.loading)

const onClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <button
    :id="`${prefix}ButtonButton`"
    class="cursor-pointer flex justify-center items-center h-3 mb-0.5 overflow-hidden overflow-ellipsis whitespace-nowrap transition-opacity text-lg focus:(outline-none ring) p-4"
    :class="[{ 'opacity-20 cursor-not-allowed': disabled }, { 'cursor-wait': loading }, classes[type]]"
    :disabled="inloading || disabled"
    @click="onClick"
  >
    <IconSpinner v-if="inloading" class="h-10" />
    <div v-else class="flex items-center justify-center gap-0.25">
      <div v-if="$slots.icon" :class="iconSizeClasses[iconSize]">
        <slot name="icon" />
      </div>
      <slot>Button Text</slot>
    </div>
  </button>
</template>

<style scoped>
</style>
