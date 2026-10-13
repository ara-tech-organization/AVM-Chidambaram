// Resolves an image under src/assets/images to its bundled (hashed, base-aware) URL.
const files = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const asset = (path) => files[`/src/${path.replace(/^\//, '')}`] ?? path