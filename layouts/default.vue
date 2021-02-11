<template>
  <component :is="agentTheme || 'DefaultTheme'">
    <h4>{{ agentTheme }}</h4>
    <Nuxt />
  </component>
</template>

<script>
import Sun from '@/components/theme/Sun.vue'
import Moon from '@/components/theme/Moon.vue'
import DefaultTheme from '@/components/theme/DefaultTheme.vue'
import checkAgentTheme from '~/plugins/checkAgentTheme'

export default {
  components: {
    Sun,
    Moon,
    DefaultTheme,
  },
  data() {
    return {
      agentTheme: '',
    }
  },
  mounted() {
    this.agentTheme = checkAgentTheme(
      window.location.hostname || 'DefaultTheme'
    )
  },
}
</script>
