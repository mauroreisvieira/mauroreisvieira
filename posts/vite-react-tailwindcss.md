---
title: "Vite + React + TailwindCSS"
description: "In this post I'll show you how to integrate and configure TailwindCSS in a Vite + React project."
date: '2021-03-08'
image: 'http://mauroreisvieira.com/static/og/vite-react-tailwindcss.png'
---

[Vite](https://vitejs.dev/) is a new building tool how improve the developer experience for development with the local machine and for the build of optimized assets for production.

## Initialization Application

```bash
npm init @vitejs/app
```

## Setup Application

You can use the scaffold to setup the Vite app, with React templates.

The following command will:

```bash
# NPM 7+, extra double-dash is needed:
npm init @vitejs/app vite-react-tailwindcss --template react

# Enter in the new directory:
cd vite-react-tailwindcss

# install NPM packages:
npm install
```

Vite is installed and ready to use, let take a look in your `package.json` file.

Here is the default NPM scripts in a scaffolded Vite project:

```json
{
    "scripts": {
        "dev": "vite", // start dev server
        "build": "vite build", // build for production
        "serve": "vite preview" // locally preview production build
    }
}
```

Next step run application `npm run dev`.

You are now able to open application in the browse: [http://localhost:3000/](http://localhost:3000/)

## TailwindCSS

Let's stop server and continue the configuration.

```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

### Create configuration files

Next, generate your `tailwind.config.js` and `postcss.config.js` files:

```bash
npx tailwindcss init -p
```

### Include Tailwind in your CSS

Now you have [TailwindCSS](tailwindcss.com) in application.

To include them you need to create CSS file:

```bash
touch src/tailwind.css
```

Now you need to use the `@tailwind` directive to include Tailwind's `base`, `components`, and `utilities` styles.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, ensure that CSS file is being imported in your `./src/App.tsx` file:

```jsx
import React from 'react';
import './tailwind.css';

function App() {
    return (
        <div>
            <p className="text-red-500">Vite + React + TailwindCSS</p>
        </div>
    );
}

export default App;
```

Application configuration are finished.

Now when you run `npm run dev`, Tailwind CSS will be ready to use in your application.

---

If you want you can check the whole code in this [repository](https://github.com/mauroreisvieira/vite-react-tailwindcss).
