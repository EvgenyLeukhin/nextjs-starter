## Nextjs-starter +

**<span style="color: red;">Under development</span>**

- Demo on Netlify: [link](https://scintillating-dango-7563dc.netlify.app/)

---

### NodeJS

- nodejs: `^19.7.0`
- npm: `^9.6.1`
- yarn: `^1.22.17`

---

### Scripts

#### Install

- `yarn` || `npm i` - Install packages
- `yarn husky` || `npm run husky` - Install husky (Do it after install packages)

#### Development

- `yarn dev` || `npm run dev` - Dev mode (http://localhost:3000/)

#### Production

- `yarn build` || `npm run build` - Build with test env
- `yarn build:prod` || `npm run build:prod` - Build with prod env

#### Serve

- `yarn serve` || `npm run serve` - Start build-in nextjs server
- `yarn serve:custom` || `npm run serve:cust` - Start custom express server with gzip compression (server.js file)

#### Lint

- `yarn lint` || `npm run lint` - Start eslint without fix (check only)
- `yarn lint:fix` || `npm run lint:fix` - Start eslint with fix
- `yarn prettier:check` || `npm run prettier:check` - Start prettier without fix (check only)
- `yarn prettier:fix` || `npm run prettier:fix` - Start prettier with fix

#### Bundle analyzer

- `yarn analyze` || `npm run analyze` - Analyze client and server-side build
- `yarn analyze:browser` || `npm run analyze:browser` - Analyze client build only
- `yarn analyze:server` || `npm run analyze:server` - Analyze server-side build only

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
- [NextJS](https://nextjs.org/): Bundler, react-framework
- [TypeScript](https://www.typescriptlang.org/) - JS-typizator
- [ESLint](https://eslint.org/) - JS/TS linter
- [Prettier](https://prettier.io/) - Code formator
- [SCSS](https://sass-scss.ru/) - CSS-preprocessor, [SCSS modules](https://www.freecodecamp.org/news/how-to-use-sass-with-css-modules-in-next-js/) - CSS modules
- [Normalize.css](https://necolas.github.io/normalize.css/) - CSS styles reboot
- [Express](https://expressjs.com/ru/) - Local server
- [compression-webpack-plugin](https://www.npmjs.com/package/compression-webpack-plugin), [compression](https://www.npmjs.com/package/compression) - Gzip compression
- [bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) - Bundle analizer
- [netlify](https://www.netlify.com/) - Test stand (from `netlify` branch)
- [formik](https://formik.org/) - Forms handler, [Yup](https://github.com/jquense/yup/) - Forms validation
- [axios](https://axios-http.com/ru/docs/intro) - Http-client (fetch based)

---

- No UI-framework

---

### Component template

```tsx
import styles from './SomeComponent.module.scss';

type TProps = {
  someProp?: string;
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

## Combine style classes

```tsx
import classNames from "classnames/bind";
import styles from "styles/pages/SomeFile.module.scss";

// save cnb const to bind styles
const cnb = classNames.bind(styles);

...
// simple combines
<div className={cnb(styles.someModuleClass1, styles.someModuleClass2)} />
<div className={cnb('some-static-class', styles.someModuleClass3)} />

// with condition
<div className={
  cnb(
    styles.Breadcrumbs__item,
    isCurrent && styles.Breadcrumbs__isCurrent,
    isCurrent && 'someTextClass',
  )
}>
```

---

### Styles template (scss)

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

## useWindowSize hook (adaptivity inside components)

```tsx
import useWindowSize from "utils/customHooks/useWindowResize";
import { DeviceList } from "types/device";
...

const screenType = useWindowSize();

// save to consts
const isDesktop = screenType === DeviceList.DESKTOP;
const isLaptop = screenType === DeviceList.LAPTOP;
const isTablet = screenType === DeviceList.TABLET;
const isMobile = screenType === DeviceList.MOBILE;

...

// use
isDesktop && ( ... )
isLaptop && ( ... )
isTablet && ( ... )
isMobile && ( ... )

```

---

### Next-image example

```tsx
import Image from 'next/image';
import someImage from '/public/images/image.png';

...

// need some div wrapper
<div className={styles.Images__image2}>
  <Image
    src={someImage}
    alt='preview'
    width={160}
    height={90}
    placeholder='blur'
  />
</div>;
```
