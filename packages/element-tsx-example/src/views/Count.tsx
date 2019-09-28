import { Component, Vue } from "vue-property-decorator";
import { countModule } from '@/store/modules/count';

import { Button } from '@tsxfactory/element-ui';
@Component
export default class Count extends Vue {
  render() {
    return (
      <div class="about">
        <h2>{countModule.count}</h2>
        <Button type='success' onClick={() => { countModule.increment() }} disabled={countModule.loading}>+1</Button>
        <Button type='danger' onClick={() => { countModule.decrement() }} disabled={countModule.loading}>-1</Button>
        <Button type='primary' onClick={() => { countModule.add(3) }} disabled={countModule.loading} >async +3</Button>
        <Button type='warning' onClick={() => { countModule.subtract(3) }} disabled={countModule.loading} >async -3</Button>
      </div>
    );
  }
}
