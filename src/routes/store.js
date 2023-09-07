import { writable } from "svelte/store";

export const navItems = writable([
  {
    label: "3학년게시판",
    href: "/",
  },
  {
    label: "메세지보내기",
    href: "/send",
  },
]);
