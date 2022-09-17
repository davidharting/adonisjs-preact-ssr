# Adonis + Preact for server-only rendering

I ♥️ [Adonis](https://github.com/adonisjs/core)! It provides a fun, type-safe, batteries-included way to build full-stack apps wtih TypeScript.

However, the type-safety does not extend to the templates, which are rendered as text.

I wanted a way to achieve two things:

1. Keep the simplicity of server-only rendering and defining all application and vie4w logic "inside" Adonis.
2. Type-safety for my HTML, using familiar JSX components.

To achieve this, I define pages and components using JSX, and then render it to a string with Preact.
There is no frontend build-step to support this, and no additional dependencies on the build tool-chain. The TypeScript compiler natively supports compiling JSX.

I imagine building some nice utilities to make this easy and fun. But in this repository, I define everything I can in a single controller file to demonstrate the approach. You can find that [here](https://github.com/davidharting/adonisjs-preact-ssr/blob/main/app/Controllers/Http/HomeController.ts).

If you wish to emulate this setup, also check out the tsconfig (I used [these instructions](https://github.com/preactjs/preact-render-to-string#render-preact-components-to-html)).

I think that this approach would pair nicely with [Unpoly](https://unpoly.com) or [htmx](https://htmx.org) to achieve interactivity while still pushing all logic to the backend.
