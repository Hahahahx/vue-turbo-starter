<script lang="ts" setup>
import { useHelloWorld } from 'pinia-store'

const store = useHelloWorld()
const { message } = store
console.log(message)

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
  <div class="flex place-items-center h-screen w-full justify-center rose bg-bkg-primary ">
    <h1>vue turbo starter</h1>
    <div class="block">
      <Button prefix="test" type="primary" :on-click-async="onClickAsync" @click="onClick">
        Button1
      </Button>
    </div>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
