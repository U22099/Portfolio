import { create } from "zustand";

export const useNav = create(set => ({
  nav: "home",
  setNav: (nav) => {
    set({ nav });
  }
}));

export const useAnimation = create(set => ({
  animation: false,
  setAnimation: (animation) => {
    set({ animation });
  }
}));