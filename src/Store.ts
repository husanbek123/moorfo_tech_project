import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Themes = "light" | "dark";
export type Languages = "uz" | "ru" | "en" | null;

interface State {
  theme: Themes;
  setTheme: (data: Themes) => void;
  lang: Languages;
  setLang: (lang: Languages) => void;
}

const Store = (set): State => ({
  setTheme: (data) =>
    set({
      theme: data,
    }),
  theme: "dark",
  lang: null,
  setLang: (lang) =>
    set({
      lang,
    }),
});

const useStore = create(
  persist(Store, {
    name: "Store",
  })
);

export default useStore;
