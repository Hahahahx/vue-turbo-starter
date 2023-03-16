<script lang="ts" setup>
import { useHelloWorld } from 'pinia-store'

const store = useHelloWorld()
const { message } = store
console.log('---------', message)

const onClick = (e: any) => {
  console.log('---------------', e)
}

const onClickAsync = () => {
  return new Promise((_resolve) => {
    setTimeout(() => { _resolve('') }, 1000)
  })
}
</script>

<template>
  <div class="flex flex-col place-items-center h-screen w-full justify-center bg-bkg-primary gap-10">
    <h1>vue turbo starter</h1>
    <div class="block">
      <Button variant="contained" @click="onClick">
        <slot name="icon">
          <i class="i-svg-spinners-bars-scale-fade" />
        </slot>
        {{ $t('nav.home') }}
      </Button>
      <Button variant="outline" size="smaller" @click="onClick">
        Button1
      </Button>
      <Button variant="contained" disabled @click="onClick">
        Button1
      </Button>
      <Button variant="contained" loading @click="onClick">
        Button1
      </Button>
      <Button variant="text" @click="onClick">
        <slot name="icon">
          <i class="i-svg-spinners-bars-scale-fade" />
        </slot>
        Button1
      </Button>
      <Button variant="text" @click="onClick">
        Button1
      </Button>
      <Button size="larger" variant="contained" @click="onClick">
        Button1
      </Button>
    </div>
    <div>
      <Input variant="contained" />
      <Input variant="outline" />
      <Input variant="text" />
    </div>
    <div>
      <Group size="small" class="mb-10">
        <Button variant="contained" @click="onClick">
          Button1
        </Button>
        <Input variant="contained" />
        <Button variant="contained" @click="onClick">
          Button1
        </Button>
        <Button variant="contained" @click="onClick">
          Button1
        </Button>
      </Group>
      <Group direction="col">
        <Button variant="contained" @click="onClick">
          Button1
        </Button>
        <Input variant="contained" size="larger" />
        <Button variant="contained" @click="onClick">
          Button1
        </Button>
      </Group>
    </div>
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<style>
body {
  background-color: theme('colors.primary.lighter');
}
</style>
