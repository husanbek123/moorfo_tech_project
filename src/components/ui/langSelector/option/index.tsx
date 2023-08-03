import React from "react";

type Props = {
  value: string;
  setValue: (data: string) => void;
  children: React.ReactNode;
  currentLang: string;
} & React.HTMLProps<HTMLDivElement>;

export default function Option({
  setValue,
  value,
  children,
  currentLang,
}: Props) {
  return (
    <div
      style={{
        backgroundColor:
          currentLang == value ? "rgba(213, 213, 213, 0.334)" : "transparent",
      }}
      onClick={() => setValue(value)}
    >
      {children}
    </div>
  );
}
