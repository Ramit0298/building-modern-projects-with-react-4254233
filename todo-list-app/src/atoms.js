import { atom } from "recoil";

export const todosAtom = atom({
  key: "todos",
  default: [
    {
      text: "Talk about Recoil",
      isCompleted: false,
    },
  ],
});
