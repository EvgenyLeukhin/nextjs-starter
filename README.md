## Nextjs-starter

**Under development**

- Demo no Netlify: [link](https://scintillating-dango-7563dc.netlify.app/)

---

### Starter concepts:

- Minimal abstractions
- [Atomic-design](https://bradfrost.com/blog/post/atomic-web-design/) aproach
- [DRY](https://ru.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself) aproach
- [KISS](<https://ru.wikipedia.org/wiki/KISS_(%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF)>) aproach
- No unreadble logic code
- Quick, simple projects and start-ups: **Yes!**
- Annoying, long and boring enterprises projects: No
- VS Code: **Yes!**
- WebStorm: No

---

### Tech stack

- [React](https://ru.reactjs.org/): Frontend library
- [NextJS](https://nextjs.org/): Bundler, framework
- [TypeScript](https://www.typescriptlang.org/) - JS-typizator
- [ESLint](https://eslint.org/) - JS/TS linter
- [Prettier](https://prettier.io/) - Code formator
- [SCSS](https://sass-scss.ru/) - CSS-preprocessor
- [SCSS modules](https://www.freecodecamp.org/news/how-to-use-sass-with-css-modules-in-next-js/) - CSS modules
- [Normalize.css](https://necolas.github.io/normalize.css/) - CSS styles reboot
- [Express](https://expressjs.com/ru/) - Local server
- [compression-webpack-plugin](https://www.npmjs.com/package/compression-webpack-plugin), [compression](https://www.npmjs.com/package/compression) - Gzip compression
- [bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) - Bundle analizer
- [netlify](https://www.netlify.com/) - Test stand (from `netlify` branch)
- [formik](https://formik.org/) - Forms handler
- [axios](https://axios-http.com/ru/docs/intro) - Http-client (fetch based)

---

- No UI-framework

---

### Component layout template

```tsx
import styles from './SomeComponent.module.scss';

type TProps = {
  someProp: string;
};

const SomeComponent = ({ someProp }: TProps) => {
  return (
    <section className={styles.SomeComponent}>
      <h2>SomeComponent</h2>
    </section>
  );
};

export default SomeComponent;
```

---

### Component styles template

Desktop first aproach.

```scss
.SomeComponent {
  // desktop and common styles
  color: inherit;

  // laptop styles (<= 1200px>)
  @include laptop {
  }

  // tablet styles (<= 1023px>)
  @include tablet {
  }

  // mobile styles (<= 767px>)
  @include mobile {
  }
}
```
