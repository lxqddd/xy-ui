<template>
  <div id="app">
    <XyIcon :size="'ri-10x'" />
    <h3>mini 按钮</h3>
    <XyButton size="mini">
      小按钮
    </XyButton>
    <hr>
    <h3>small 按钮</h3>
    <XyButton size="sm">
      small 按钮
    </XyButton>
    <hr>
    <h3>
      默认按钮
    </h3>
    <XyButton type="default">
      这是按钮组件
    </XyButton>
    <XyButton
      type="primary"
      disabled
      @click="handleClick"
    >
      这是按钮组件
    </XyButton>
    <XyButton
      type="info"
      :block="true"
    >
      这是按钮组件
    </XyButton>
    <XyButton
      type="success"
      :ghost="true"
    >
      这是按钮组件
    </XyButton>
    <XyButton type="warning">
      这是按钮组件
    </XyButton>
    <XyButton type="danger">
      这是按钮组件
    </XyButton>
    <hr>
    <h3>大按钮</h3>
    <XyButton
      size="lg"
      @hover="handleHover"
    >
      大按钮
    </XyButton>
    <hr>
  </div>
</template>

<script lang="ts" setup>
const handleClick = (e: MouseEvent) => {
  console.log(e)
}
const handleHover = (e: MouseEvent) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>
#app {
  text-align: center;
}
</style>
