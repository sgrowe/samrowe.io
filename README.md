# My personal website

## Deployment

Uses the following `UNSTABLE_PRE_BUILD` setting in Cloudflare Pages:

```sh
asdf plugin add zola https://github.com/salasrod/asdf-zola && asdf install zola $ZOLA_VERSION && asdf global zola $ZOLA_VERSION && asdf plugin-add tailwindcss https://github.com/virtualstaticvoid/asdf-tailwindcss.git && asdf install tailwindcss $TAILWIND_VERSION && asdf global tailwindcss $TAILWIND_VERSION && tailwindcss -i ./sass/_input.css -o ./static/output.css --minify
```

### Other environment variables

| Variable           | Value  |
| ------------------ | ------ |
| `ZOLA_VERSION`     | 0.19.2 |
| `TAILWIND_VERSION` | 3.4.17 |
