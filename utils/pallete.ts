import { HslColor } from "react-colorful";
import { getColors } from "theme-colors";
import chroma from "chroma-js";

export function makePallete(color: string) {
  if (color.length < 7) {
    return;
  }
  localStorage.setItem("themeColor", color);
  let root = document.documentElement;

  let theme = getColors(color);

  Object.keys(theme).forEach((key) => {
    let auxColor = chroma(theme[key]).hsl();

    if (key === "500") {
      root.style.setProperty(
        `--nextui-primary`,
        `${auxColor[0]} ${auxColor[1] * 100}% ${auxColor[2] * 100}%`,
      );
    }

    root.style.setProperty(
      `--nextui-primary-${key}`,
      `${auxColor[0]} ${auxColor[1] * 100}% ${auxColor[2] * 100}%`,
    );
  });
}

export function rememberPallete(color: string | null) {
  let root = document.documentElement;

  if (!color) {
    return;
  }

  let theme = getColors(color);

  Object.keys(theme).forEach((key) => {
    let auxColor = chroma(theme[key]).hsl();

    if (key === "500") {
      root.style.setProperty(
        `--nextui-primary`,
        `${auxColor[0]} ${auxColor[1] * 100}% ${auxColor[2] * 100}%`,
      );
    }

    root.style.setProperty(
      `--nextui-primary-${key}`,
      `${auxColor[0]} ${auxColor[1] * 100}% ${auxColor[2] * 100}%`,
    );
  });
}
