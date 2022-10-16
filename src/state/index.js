import { atom, selector } from "recoil";

const tabState = atom({
  key: "tabState",
  default: "TECH",
});

export { tabState };
