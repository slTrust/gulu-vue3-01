declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const ComponentOptions: ComponentOptions
  export default ComponentOptions
}

/* 告诉ts md文件 以什么形式返回 */
declare module '*.md' {
  const str: string
  export default str
}