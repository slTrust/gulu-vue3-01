### Button知识点

#### 事件传递

- 默认事件直接传递给组件最外层的容器

```
<Button @click="onClick"
            @focus="onClick"
            @mouseover="onClick">你好</Button>

// Button内部
<template>
  <button>
    <slot/>
  </button>
</template>

// 但是如果 外层是个div呢？
你说你可以 挨个绑定事件
但是 如果事件非常多呢？ click mouseover mouseenter focus ...
```

> #### inheritAttrs 使用

```
<template>
  <div>
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
export default {
  // 继承属性改为 false, 这样 div就不会再有 外面绑定的事件了
  inheritAttrs: false,
  setup(porps, context) {
    const { ...rest } = context.attrs
    return { rest }
  }
}
</script>
```

### Vue3 属性绑定

- 默认所有属性都绑定到根元素
- 使用 inheritAttrs: false 取消默认绑定
- 使用 $attrs 或者 context.attrs 获取所有属性
- 使用 `v-bind="$attrs"` 批量绑定属性

### props和 attrs 区别

- props要先声明才能取，attrs不需要
- props不包含事件，attrs包含
- props里没有进行声明，会跑到 attrs里
- props支持string之外的类型，attrs只支持 string类型

### UI库的css注意事项

- 不能用 scoped
  - 使用后 标签会有 data-v-hash值 
  - 这样样式覆盖就有问题了
- 必须输出稳定不变的class选择器,方便覆盖
- 必须加前缀，防止冲突
  - gulu-button

### CSS影响最小原则

- 我们不该这样

```
*{margin:0;padding:0;box-sizing:border-box;}
```

- 而是

```
// [class^="gulu-"] 代表 gulu-开头的
// [class*=" gulu-"] 代表含有 gulu-的
[class^="gulu-"], [class*=" gulu-"] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  // 为什么这样写 font-family
  // 答案见 https://github.com/zenozeng/fonts.css/
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica,
    "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
    "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN",
    "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti",
    SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
```