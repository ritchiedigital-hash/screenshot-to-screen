# Screenshot to Screen

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/eb98253a-ae9b-4d5e-ab95-70d0c1390f9e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Production notes

- All images are served from this repository: the logo and every photo live in `public/images/` and are referenced with root-relative `/images/...` URLs, so the site renders the same outside Lovable hosting.
- Production is deployed to Cloudflare Workers from this repository's `main` branch.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
