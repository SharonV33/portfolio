<template>
  <div class="projects">
    <div class="sign">
      <span class="sign__word">My projects</span>
    </div>
    <p>
      list of projects
    </p>
        <SingleProject title="Music Discovery" />
        <SingleProject title="Capturing Corona" />
        <SingleProject title="Frontend Applications" />
        <SingleProject title="Dinner Selector" />
  </div>
</template>
<script>
  import SingleProject from '@/components/SingleProject.vue'
  export default {
    name: 'Projects',
    components: {
      SingleProject
    }
  }
</script>