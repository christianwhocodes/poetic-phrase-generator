# 🪶 Poetic Phrase Generator ![](./favicon.png)

Generates a short, witty, Wildean-style poetic phrase paired with a fitting background image.

- Image: Unsplash Random Photo API (via Scrimba proxy)
- Text: OpenAI Completions API (via Scrimba proxy)
- Tech: Vanilla JS, HTML, CSS
- Caching: Stores the last prompt and generated result in localStorage

## Quick Start

1. Serve this folder with a local static server (recommended). Some browsers block ES module imports from file:// and may show CORS errors.
   - VS Code: Live Server extension
   - Node: npx serve
   - Python: python3 -m http.server 5500
   - Bun: bun serve
   - Deno: deno run --allow-net https://deno.land/std/http/file_server.ts .
2. Or open index.html directly from the filesystem; this can work in some browsers (e.g., Firefox), but may fail in Chrome-based browsers.
3. Edit index.js to set:
   - name
   - favoriteActivity
   - favoritePlace
   - temperature (0–1; higher = more creative)
4. Optional:
   - Adjust Gravatar size (gravatarSize) or default style (d=mp) in index.js.

## How It Works

- utils.js fetches a background image from Unsplash based on your favoritePlace.
- It creates a prompt using favoriteActivity and favoritePlace and requests a short phrase from the OpenAI endpoint.
- It shows a loader while fetching, then displays the image, phrase, and name + month/year.
- localStorage caches the last prompt/quote to avoid repeated requests for the same prompt.

## Configuration Tips

- temperature in index.js controls creativity:
  - 0.2–0.4: stable and safe
  - 0.7–1.0: playful and experimental
- Fonts and colors are customizable via CSS variables in index.css.

## Notes

- This project uses Scrimba proxy endpoints; availability and rate limits may vary.
- No API keys are required in this setup.
- Requires internet access for the APIs and Google Fonts.

## Troubleshooting

- Failed to load module script / blocked by CORS policy (origin null): run a local static server instead of opening via file://.
- Image not loading: Unsplash rate limits may apply; try a different query or wait and retry.

## Acknowledgements

- Unsplash for images.
- OpenAI (via Scrimba proxy) for text generation.

## Optional: Use Gravatar for the avatar

1. Compute the MD5 of your email (trimmed, lowercased). Examples:
   - Node:
   ```shell
   node -e "console.log(require('crypto').createHash('md5').update('you@example.com'.trim().toLowerCase()).digest('hex'))"
   ```

   - Online MD5 tools also work.
2. In index.js set:
   - gravatarHash to your MD5
   - gravatarSize (optional)
3. If no Gravatar exists for your email, a neutral silhouette (mp) is shown.
