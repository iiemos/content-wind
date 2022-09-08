<script setup lang="ts">
import { ElSwitch } from 'element-plus'
import DarkIcon from '@/components/icon/DarkIcon.vue'
import LightIcon from '@/components/icon/LightIcon.vue'
const colorMode = useColorMode()
const isDark = ref(false)
const onClick = (val: any) => (isDark.value ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <el-switch v-model="isDark" size="large" inline-prompt @change="onClick" :active-icon="DarkIcon" :inactive-icon="LightIcon" style="--el-switch-on-color: #4a5568; --el-switch-off-color: #e2e8f0" />
</template>
