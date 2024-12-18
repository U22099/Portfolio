import { create } from "zustand";

export const useNav = create(set => ({
  nav: "home",
  setNav: (nav) => {
    set({ nav });
  }
}));