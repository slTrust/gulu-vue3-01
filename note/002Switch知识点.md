### Switch知识点

- props传递值，
- 组件内部通过事件传递 context


Switch内部

```

<template>
  <button @click="toggle" :class="{checked:value}"> <span></span> </button>
  <div>{{value}}</div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  props:{
    value:Boolean
  },
  setup(props,context){
    const toggle = ()=>{
      context.emit('input',!props.value)
    }
    return { toggle}
  } 
}
</script>
```

调用 Switch的地方

```
<Switch :value="y" @input="y=$event"/>
```

### 父子通信

> 内部数据

- 组件内部的数据，无法和外界通讯

```
export default {
  setup(props,context){
    const checked = ref(true);
    const toggle = ()=>{
      checked.value = !checked.value
    }
    return { toggle}
  } 
}
```

> 父子数据

```
// 父组件
<Switch :value="y" @input="y=$event"/>

// 通过 props 从父组件传递
// 通过 context.emit 触发更新
export default {
  props:{
    value:Boolean
  },
  setup(props,context){
    const toggle = ()=>{
      context.emit('input',!props.value)
    }
    return { toggle}
  } 
}
```

### 父子通讯的疑问

- 为啥事件名是 input ，**这个是个人喜好，你可以随便起名**
- `$event`是什么？
  - `$event` 的值是 emit的第二个参数
  - `emit(事件名称,事件参数)`

### v-model用法

```
// 组件外部
<Switch :value="y" @update:value="y=$event"/>

// 组件内部
context.emit('update:value',!props.value)

!!! 注意必须这样 update:属性值
```

> 简化后的语法糖 v-model

```
// 意思 Switch有个 value它是自动监听的
<Switch v-model:value="y" />
// 组件内部
context.emit('update:value',!props.value)
```

> v-model 使用方式

- 属性名任意 ，假设为x
- 事件名称必须为`update:x`

效果
```
从
<Switch :value="y" @update:value="y=$event"/>
变为
<Switch v-model:value="y" />
```