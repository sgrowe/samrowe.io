---
title: 'Using AI to proofread markdown files in the terminal'
publishedAt: 2025-02-11T21:18:00Z
---

Here I’m using the [LLM CLI](https://llm.datasette.io) with the [Anthropic plugin](https://github.com/simonw/llm-anthropic):

```sh
$ cat doc.md | llm -m claude-3.5-sonnet -s 'Proofread this markdown file'
```

Example response:

> I've reviewed the markdown document and here are my suggestions for improvements:
>
> 1. Formatting consistency:
>
> ...

If you're dealing with markdown files in a code editor, this is a quick and easy way to check for mistakes without having to copy and paste them into other apps

## Save as a template

You can also save this as a preset template to make it easier to reuse in the future:

```sh
# Save
llm -m claude-3.5-sonnet -s 'Proofread this' --save proofread
```

```sh
# Use
llm -t proofread < doc.md
```
