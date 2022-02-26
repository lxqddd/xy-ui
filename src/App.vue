<template>
  <div id="app">
    <XyAvatar
      size="small"
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp01%2F1ZZQ20QJS6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648455857&t=9610ea62f26a07e8a429ddb1c36b323a"
    />
    <XyAvatar src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp01%2F1ZZQ20QJS6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648455857&t=9610ea62f26a07e8a429ddb1c36b323a" />
    <XyAvatar
      size="large"
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp01%2F1ZZQ20QJS6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648455857&t=9610ea62f26a07e8a429ddb1c36b323a"
    />
    <XyIcon :size="'ri-10x'" />
    <h3>mini 按钮</h3>
    <XyButton
      name="home"
      size="mini"
    >
      <template #append>
        <XyIcon
          name="home"
          size="ri-1x"
        />
      </template>
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
