export type InputVariantType = 'contained' | 'outline' | 'text'
export type InputSizeType = 'smaller' | 'small' | 'normal' | 'large' | 'larger'
export type InputIconSizeType = 'small' | 'normal'
export type InputType = keyof typeof InputTypeEnum

export enum InputVariantEnum {
  Contained = 'contained',
  Outline = 'outline',
  Text = 'text',
}

export enum InputIconSizeEnum {
  Small = 'small',
  Normal = 'normal',
}

export enum InputSizeEnum {
  Smaller = 'smaller',
  Small = 'small',
  Normal = 'normal',
  Large = 'large',
  Larger = 'larger',
  None = '',
}

export enum InputTypeEnum {
  text = 'text',
  email = 'email',
  password = 'password',
  number = 'number',
}
