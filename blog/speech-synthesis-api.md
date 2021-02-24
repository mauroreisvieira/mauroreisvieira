---
title: 'Prism with Next.js'
description: 'Example using Prism / Markdown with Next.js including switching syntax highlighting themes.'
---

The `Speech Synthesis API` is an awesome API, great to experiment new kind of interfaces and let the browser talk to you.

### API

The API exposes several objects to the window object.\
The most simple example of using the Speech Synthesis API stays on one line:

```js
    speechSynthesis.speak(new SpeechSynthesisUtterance('Hello Word!'))
```

### Custom Language

The default voice speaks in **English**.

You can use any language you want, by setting the utterance `lang` property:

```js
    const utterance = new SpeechSynthesisUtterance('Olá');
    utterance.lang = 'pt-BR';
    speechSynthesis.speak(utterance);
```
