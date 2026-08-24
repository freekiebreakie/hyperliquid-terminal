# Depth — asset export

Brand, icon and token export for the Hyperliquid terminal redesign.
Everything here is generated from the design in `Depth Terminal.dc.html`.

## Tokens
| File | Use |
| --- | --- |
| `tokens.css` | Drop-in custom properties. Dark is the default; `[data-theme="light"]` overrides. |
| `tokens.json` | Design Tokens Format — import into Figma variables or Style Dictionary. |

## Brand
| File | Use |
| --- | --- |
| `logo/depth-mark.svg` | The mark. Cyan on any dark surface. |
| `logo/depth-mark-mono.svg` | Single-colour, inherits `currentColor`. |
| `logo/depth-wordmark.svg` | DEPTH, Archivo 800, tracking −0.035em. |
| `logo/depth-lockup.svg` | Mark + wordmark, gap = 0.25 × mark width. |
| `logo/depth-mark-512.png` | Raster fallback. |

The wordmark SVGs reference Archivo by name — convert the text to outlines before
shipping to a surface that will not have the webfont.

## App icon
SVG at 1024 / 512 / 192 / 180 / 167 / 152 / 120 / 96 / 76, plus
`icon-maskable-512.svg` (mark inside Android's 80% safe zone) and
`icon-rounded-1024.svg` (preview only — iOS applies its own squircle).

PNGs: `icon-1024.png`, `icon-512.png`, `icon-192.png`,
`apple-touch-icon-180.png`, `icon-maskable-512.png`.

```html
<link rel="apple-touch-icon" href="/assets/app-icon/apple-touch-icon-180.png">
<link rel="manifest" href="/assets/manifest.json">
<meta name="theme-color" content="#0a0b0e">
```

## Splash
1290×2796 · 1179×2556 · 1170×2532 · 1125×2436 · 828×1792 · 1080×1920.
Background `#07080a`. Wire up per device with
`<link rel="apple-touch-startup-image" media="...">`.

## Icons
Lucide 0.474.0, pinned — install the 36-glyph subset listed on the
Design System page rather than the whole library.

```html
<script src="https://unpkg.com/lucide@0.474.0/dist/umd/lucide.min.js"></script>
```

Three custom glyphs live in `icons/`: `depth-ladder.svg`, `spread.svg`,
`hyperliquid-venue.svg`. Strokes only, 1.75px at 20px, no fills.

## Type
Archivo (UI, 400/500/600/700/800) and IBM Plex Mono (machine output, 400/500).
Self-host two weights each as woff2 for the PWA — roughly 60KB total — so the
app renders offline and the wordmark never falls back.
