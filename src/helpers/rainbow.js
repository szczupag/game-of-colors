const rainbow = (stops, current) => {
  const c = current / stops;
  return rainbowElement(c);
}

const rainbowElement = (h) => {
  const f = (n, k = (n + h * 12) % 12) =>
    0.5 - 0.5 * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  const rgb2hex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map(x =>
        Math.round(x * 255)
          .toString(16)
          .padStart(2, 0)
      )
      .join("");
  return rgb2hex(f(0), f(8), f(4));
};

export default rainbow;
