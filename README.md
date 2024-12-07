# My personal website

## Deployment

Uses the following `UNSTABLE_PRE_BUILD` setting in Cloudflare Pages:

```sh
asdf plugin add zola https://github.com/salasrod/asdf-zola && asdf install zola $ZOLA_VERSION && asdf global zola $ZOLA_VERSION
```

### Other environment variables

`ZOLA_VERSION` | 0.19.2
