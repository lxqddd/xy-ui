<template>
  <div id="app">
    <Icon />
    <h3>mini 按钮</h3>
    <Button size="mini">
      小按钮
    </Button>
    <hr>
    <h3>small 按钮</h3>
    <Button size="sm">
      small 按钮
    </Button>
    <hr>
    <h3>
      默认按钮
    </h3>
    <Button type="default">
      这是按钮组件
    </Button>
    <Button
      type="primary"
      disabled
      @click="handleClick"
    >
      这是按钮组件
    </Button>
    <Button
      type="info"
      :block="true"
    >
      这是按钮组件
    </Button>
    <Button
      type="success"
      :ghost="true"
    >
      这是按钮组件
    </Button>
    <Button type="warning">
      这是按钮组件
    </Button>
    <Button type="danger">
      这是按钮组件
    </Button>
    <hr>
    <h3>大按钮</h3>
    <Button
      size="lg"
      @hover="handleHover"
    >
      大按钮
    </Button>
    <hr>
  </div>
</template>

<script lang="ts" setup>
import Button from './components/button/button.vue'
import Icon from './components/icon/icon.vue'
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
