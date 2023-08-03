import React from "react";
import { IconMoonStars, IconSunFilled } from "@tabler/icons-react";
import useStore from "../../../Store";

export default function ThemeToggle({
  className,
  color,
  ...props
}: React.HTMLProps<HTMLButtonElement>) {
  const { theme, setTheme } = useStore();

  return (
    <button
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      className={className}
      {...props}
      type="button"
    >
      {theme == "dark" ? (
        <IconMoonStars />
      ) : (
        <IconSunFilled
          color="red"
          fill="#000"
          stroke="#000"
          className={`text-${color}`}
        />
      )}
    </button>
  );
}
