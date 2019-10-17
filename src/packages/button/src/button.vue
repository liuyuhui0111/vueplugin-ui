<template>
<div>
  <div class="cs">样式</div>
  <button class="icon ivue ivue-iconfanhuidingbu" @click="handleClick">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <span v-else></span>
  </button>
</div>
</template>
<script>

export default {
  name: 'VElButton',

  props: {
    type: {
      type: String,
      default: 'default',
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
};
</script>
<style scoped>
@import url('../../iconfont/iconfont.css');
  .ivue-iconfanhuidingbu{
    font-size:12px;
  }
  .cs{
    color: #abc;
  }
</style>
