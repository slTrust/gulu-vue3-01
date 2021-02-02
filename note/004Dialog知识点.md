### Dialog知识点

#### 具名插槽

#### Teleport

- dialog的内容不该在页面的某一个位置，而是在 document.body 才对，不然会有层级问题

```
<Teleport to="body">
  <div class="gulu-dialog">...</div>
</Teleport>
```