<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "@tsxfactory/element-ui";
@Component
export default class SFCts extends Vue {
  render() {
    return (
      <div>
        <h1>sfc and tsx</h1>
        <Button type="primary">has tsx IntelliSense </Button>
      </div>
    );
  }
}
</script>
