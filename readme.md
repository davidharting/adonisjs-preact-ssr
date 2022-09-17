# Adonis + Preact for server-only rendering

I ♥️ [Adonis](https://github.com/adonisjs/core)! It provides a fun, type-safe, batteries-included way to build full-stack apps wtih TypeScript.

However, the type-safety does not extend to the templates, which are rendered as text.

I wanted a way to achieve two things:

1. Keep the simplicity of server-only rendering and defining all app logic "inside" Adonis.
2. Type safety for my HTML

To achieve this, I define a HTML content using [`htm`](https://github.com/developit/htm), and then render it to a string using Preact.

I imagine building some nice utilities to make this easy and fun. But in this repository, I define everything in a single controller file to demonstrate the appracoh. You can find that [here](https://github.com/davidharting/adonisjs-preact-ssr/blob/main/app/Controllers/Http/HomeController.ts).
