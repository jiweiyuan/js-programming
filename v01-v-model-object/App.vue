/**
 * 使用方法
 * 1. 安装全局扩展 npm install -g @vue/cli-service-global
 * 2. 在 App.vue 文件所在的目录下运行  vue serve
**/
<template>
  <div>
    <div v-fullscreen="fullscreen" style="background: #cdbdce;width: 100px; height: 50px" @click="fullscreen = !fullscreen"></div>
    测试 {{ fullscreen }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullscreen: false
    }
  },
  directives: {
    fullscreen: function (el, binding) {
      if(el.requestFullscreen && binding.value) {
        el.requestFullscreen().then((data) => {
          console.log(data)
        })
      }
    }
  }
}
</script>
