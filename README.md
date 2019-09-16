# 使用vue (cli3) + tsx的一些总结
喜欢ts,执着于vue+tsx的完美体验

## 创建一个ts项目
### vue create
* 必选:babel,ts
* 推荐:node-sass,eslint+prettier
* 可选:vuex,router

### 热更新
vue cli 并没直接支持jsx/tsx的热更新(SFC默认支持热更新),需要引入插件
* [vue-jsx-hot-loader](https://github.com/skyrpex/vue-jsx-hot-loader)
```js
module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: config => {
    // JSX|TSX 热更新
    config.module
      .rule(/\.(j|t)sx$/)
      .test(/\.(j|t)sx$/)
      .use('vue-jsx-hot-loader')
      .before('babel-loader')
      .loader('vue-jsx-hot-loader');
  }
}
```

## vue常见的ts使用方法
* [*.vue(SFC)中使用]()
* [tsx中使用]()

## 创建带提示的tsx组件
* 依赖[vue-tsx-support](https://github.com/wonderful-panda/vue-tsx-support)

常用组件tsx提示包装
* [element-ui]()
* [ant-design-vue]()
* [iview]()

## 使用ts|tsx需要注意的事项
### class 写法
1. 属性声明
* 非响应式属性在`created`中初始化,不建议使用`constructor`构造函数
* 禁止使用`data`或`get data`作为组件响应式属性
```js
@Component
export default class Test extends Vue {
    attr0 = true; // reactive
    attr1:string; // not reactive

    // forbid
    // 原因:编译时会被当成{data(){return {}}}
    // data = 'data';
    // get data(){return this.attr0}

    // 可以使用但不建议
    // @Prop()data!:string[];
    // @Prop()style!:string;
    // @Prop()vTest!:string;    //v开头的驼峰命名属性

    //constructor(){super()}    //not recommend

    // recommend
    created(){
        this.attr1 = 'test';
    }

}
```
2. render函数写法 [参考](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1)
* 编译目标环境为es5时需要手动注入`h`
* 当使用保留字做`props`*如：v+驼峰命名、style*时需要注意jsx组件的写法
* 直接在组件上使用`v+驼峰命名`的`props`会被当做vue指令编译
* 直接在组件上使用`style`的`props`会被当做`html style`编译
```js
@Component
export default class Test extends Vue {
    //    render(h:any){} // right also
    render(){
        const h = this.$createElement;
        // const jsxError = (<Comp style={} vTest={}/>);
        const jsxCorrect=(<Com {...{props:{style:{},vTest:{}}}}/>);
        return (
            <div>
                {/**{jsxError}*/}
                {jsxCorrect}
            </div>);
    }
}
```
