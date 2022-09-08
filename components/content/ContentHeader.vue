<script setup lang="ts">
import { ElSwitch } from 'element-plus'
const isHorizontal: any = ref(false)
const { data } = await useAsyncData(() => queryContent('/').find())
let types = []
data.value.forEach((i) => {
  if (i?.summary?.type) {
    return types.push(i.summary.type)
  }
})
</script>
<template>
  <div :class="$style['content_head']" class="container mx-auto mb-6 px-6 mt-10">
    <h5 class="text-xl fw-600">
      全部文章 <span class="text-sm ml-1">({{ types.length }})</span>
    </h5>
    <div :class="$style['content_switch']">
      <el-switch v-model="isHorizontal" size="default" style="--el-switch-on-color: #13ce66" />
    </div>
  </div>
</template>

<style lang="scss" module>
.content_head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h5 {
    display: flex;
    align-items: baseline;
  }
}
@media screen and (max-width: 768px) {
  .content_switch {
    display: none;
  }
}
</style>
