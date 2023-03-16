<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref } from 'vue'
import type { ButtonIconSizeType, ButtonSizeType, ButtonType } from '../button/Button.model'
import { ButtonEnum, ButtonIconSizeEnum, ButtonSizeEnum } from '../button/Button.model'

const props = defineProps({
  variant: {
    type: String as PropType<ButtonType>,
    default: ButtonEnum.Contained,
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: ButtonSizeEnum.None,
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
  contained: 'btn-contained',
  outline: 'btn-outline',
  text: 'btn-text',
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

const onClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <button
    class="btn io-group-item group-item" :class="[{ disabled }, { loading: inLoading }, classes[variant], sizeClasses[size]]"
    :disabled="inLoading || disabled" @click="onClick"
  >
    <div v-if="inLoading" class="i-svg-spinners-180-ring-with-bg " />
    <div v-else class="flex items-center justify-center gap-0.25">
      <div v-if="$slots.icon" :class="iconSizeClasses[iconSize]">
        <slot name="icon" />
      </div>
      <slot>Button Text</slot>
    </div>
  </button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply rounded transition-colors duration-300 px-4 font-medium outline-none align-middle io-size;

  &.disabled {
    @apply zinc cursor-not-allowed ring-0 text-zinc-300;
  }

  &.loading{
    @apply cursor-wait;
  }

  &.btn-contained {
    @apply border-1 border-solid border-primary-lighter text-white bg-primary hover:(bg-primary-light border-primary-dark) focus:(ring-3 ring-primary/20);
  }

  &.btn-outline {
    @apply border-1 border-solid border-primary-lighter text-primary hover:(bg-primary-light/5 border-primary-dark) focus:(ring-3 ring-primary/20);
  }

  &.btn-text {
    @apply text-primary bg-transparent hover:(bg-primary-light/5 border-primary-dark);
  }
}
</style>
