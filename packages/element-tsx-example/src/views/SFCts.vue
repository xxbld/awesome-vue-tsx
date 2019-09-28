<template>
  <div class="sfc-ts">
    <h1>sfc and ts</h1>
    <Button type='warning'>no tsx IntelliSense </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "@tsxfactory/element-ui";
@Component({
  components: { Button }
})
export default class SFCts extends Vue {}
</script>
