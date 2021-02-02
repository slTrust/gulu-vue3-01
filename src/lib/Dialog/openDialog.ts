import Dialog from "./Dialog.vue";
import { createApp, h ,VNode} from "vue";

type Props = {
  title:string,
  content:VNode|string,
  ok:()=>void,
  cancel:()=>void
}
export const openDialog = (options:Props) => {
  const { title, content, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible:boolean) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};