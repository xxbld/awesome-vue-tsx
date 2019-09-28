import Vue, { VNode } from "vue";

import "vue-tsx-support/enable-check";
import "vue-tsx-support/options/allow-unknown-props";
import "vue-tsx-support/options/enable-vue-router";

// 默认shim ,引入tsx后就不需要了
// declare global {
    //   namespace JSX {
    //     // tslint:disable no-empty-interface
    //     interface Element extends VNode { }
    //     // tslint:disable no-empty-interface
    //     interface ElementClass extends Vue { }
    //     interface IntrinsicElements {
    //       [elem: string]: any;
    //     }
    //   }
// }
