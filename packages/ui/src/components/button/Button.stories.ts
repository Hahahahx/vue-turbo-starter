import type { Meta, StoryFn } from '@storybook/vue3'
import IconCamera from '../icon/Camera.vue'
import Button from '../input/Button.vue'
import { ButtonEnum, ButtonIconSizeEnum, ButtonSizeEnum } from './Button.model'

export default {
  component: { Button },
  title: 'Button',
  args: {
    type: '',
    text: 'Button',
    icon: false,
    size: ButtonSizeEnum.Normal,
    iconSize: ButtonIconSizeEnum.Normal,
    disabled: false,
    loading: false,
  },
  argTypes: {
    type: {
      options: [ButtonEnum.Contained, ButtonEnum.Outline, ButtonEnum.Text],
      control: { type: 'select' },
    },
    iconSize: {
      options: [ButtonIconSizeEnum.Normal, ButtonIconSizeEnum.Small],
      control: { type: 'select' },
    },
  },
} as Meta

const Template: StoryFn<typeof Button> = args => ({
  components: { Button, IconCamera },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args"><template v-if="args.icon" #icon><IconCamera /></template>{{ args.text }}</Button>',
})

export const Contained = Template.bind({})
Contained.args = {
  type: ButtonEnum.Contained,
  prefix: 'Contained',
}
export const Outline = Template.bind({})
Outline.args = {
  type: ButtonEnum.Outline,
  prefix: 'Outline',
}
export const Text = Template.bind({})
Text.args = {
  type: ButtonEnum.Text,
  prefix: 'Text',
}
