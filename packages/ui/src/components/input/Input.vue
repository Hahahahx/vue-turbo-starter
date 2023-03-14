<script lang="ts" setup>
import type { PropType } from 'vue'
import { onMounted, ref } from 'vue'
import type { InputIconSizeType, InputSizeType, InputType, InputVariantType } from './Input.model'
import { InputIconSizeEnum, InputSizeEnum, InputTypeEnum, InputVariantEnum } from './Input.model'

const props = defineProps({
  variant: {
    type: String as PropType<InputVariantType>,
    default: InputVariantEnum.Outline,
  },
  type: {
    type: String as PropType<InputType>,
    default: InputTypeEnum.text,
  },
  size: {
    type: String as PropType<InputSizeType>,
    default: InputSizeEnum.None,
  },
  iconSize: {
    type: String as PropType<InputIconSizeType>,
    default: InputIconSizeEnum.Normal,
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
  contained: 'border-1 border-solid border-primary-lighter text-white bg-primary-light hover:(bg-primary-lighter border-primary) focus:(ring-3 ring-primary/20) shadow-primary-darker/50 ',
  outline: 'border-1 border-solid border-primary-lighter text-primary hover:(bg-primary-light/5 border-primary-dark) focus:(ring-3 ring-primary/20) shadow-primary/10',
  text: 'text-primary hover:(bg-primary-light/5 border-primary-dark) shadow-primary/20 ',
}

const sizeClasses = {
  smaller: 'io-smaller',
  small: 'io-small',
  normal: 'io-normal',
  large: 'io-large',
  larger: 'io-larger',
  none: '',
}

const iconSizeClasses = {
  small: 'h-1 w-1',
  normal: 'h-1.5 w-1.5',
}
const inLoading = ref(props.loading)
const inType = ref(props.type)

onMounted(() => {
  if (!Object.keys(InputTypeEnum).includes(inType.value)) {
    console.warn('input type waring: not a ', props.type)
    inType.value = InputTypeEnum.text
  }
})

const onClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <input
    class="input io-size" :class="[{ 'zinc cursor-not-allowed ring-0 text-zinc-300': disabled },
                                   { 'cursor-wait': inLoading }, classes[variant], sizeClasses[size]]"
    :disabled="inLoading || disabled" :type="inType"
  >
</template>

<style lang="postcss" scoped>
.input {
  @apply shadow-inner rounded-md transition-colors duration-300 px-4 font-semibold outline-none align-middle;
}
</style>
