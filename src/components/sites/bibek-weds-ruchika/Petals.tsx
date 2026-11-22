/** Layer that holds the falling petals. */
export default function Petals() {
  return <div className="petal-layer" id="petals" aria-hidden="true" />;
}

/**
 * Drops a burst of 64 petals (rose, gold-foil, and plain).
 * Each falls for `minSeconds` plus up to `spreadSeconds`, after a start delay of up to `delaySeconds`.
 */
export function showerPetals({ minSeconds = 2.4, spreadSeconds = 2.2, delaySeconds = 0.5 } = {}) {
  const layer = document.getElementById("petals");
  if (!layer) return;
  const lifetime = (minSeconds + spreadSeconds + delaySeconds) * 1000 + 400;
  for (let i = 0; i < 64; i++) {
    const petal = document.createElement("div");
    petal.className = i % 5 === 0 ? "petal petal-foil" : i % 3 === 0 ? "petal petal-rose" : "petal";
    petal.style.left = `${100 * Math.random()}vw`;
    petal.style.animationDuration = `${minSeconds + spreadSeconds * Math.random()}s`;
    petal.style.animationDelay = `${delaySeconds * Math.random()}s`;
    petal.style.setProperty("--drift", `${200 * Math.random() - 100}px`);
    petal.style.transform = `rotate(${360 * Math.random()}deg) scale(${0.7 + 0.6 * Math.random()})`;
    layer.appendChild(petal);
    setTimeout(() => petal.remove(), lifetime);
  }
}
