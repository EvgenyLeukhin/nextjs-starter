import styles from './ToDoList.module.scss';

const ToDoList = () => {
  return (
    <section className={styles.ToDoList}>
      <h2>Best practice</h2>

      <ol>
        <li>Minimal abstractions</li>
        <li>Atomic design</li>
        <li>DRY-aproach</li>
        <li>KISS-aproach</li>
        <li>No unreadble logic code</li>
      </ol>

      <hr />

      <h2 className='text-success'>TODO Basics +++</h2>

      <ul>
        <li>Scss +++</li>
        <li>Scss-modules +++</li>
        <li>Scss vars, mixins, animations +++</li>
        <li>ClassNames bind +++</li>
        <li>Fonts +++</li>
        <li>Images +++</li>
        <li>Links +++</li>
        <li>Components examples +++</li>
      </ul>

      <hr />

      <h2 className='text-success'>TODO Layout +++</h2>

      <ul>
        <li>Basic layout +++</li>
        <li>Header +++</li>
        <li>Footer +++</li>
        <li>NavBar +++</li>
        <li>Templates pages +++</li>
      </ul>

      <hr />

      <h2>TODO Linters, scripts ++-</h2>
      <ul>
        <li>ESLint +++</li>
        <li>Prettier +++</li>
        <li>tsconfig +++</li>
        <li>Editorconfig +++</li>
        <li>Bundle Analizer +++</li>
        <li>Stylelint, Precommit, Husky ---</li>
        <li>Deploy to GH-pages +++</li>
        <li>Deploy to Netlify +++</li>
        <li>Local Express server +++</li>
        <li>Gzip compression +++</li>
      </ul>

      <hr />

      <h2>TODO SEO ---</h2>
      <ul>
        <li>Seo-block ---</li>
        <li>Favicons ---</li>
        <li>Sharing meta-tags ---</li>
        <li>Socials links +++</li>
      </ul>

      <hr />

      <h2>TODO UI ---</h2>
      <ul>
        <li>Modals ---</li>
        <li>Slider ---</li>
        <li>Video-player ---</li>
        <li>Buttons ---</li>
        <li>Alerts ---</li>
        <li>Multi-lang ---</li>
        <li>Dark-theme ---</li>
        <li>Cokkies-popup ---</li>
        <li>UI-elements on ui-kit page ---</li>
      </ul>

      <hr />

      <h2>TODO Forms ---</h2>
      <ul>
        <li>Input ---</li>
        <li>Select ---</li>
        <li>Multi-Select ---</li>
        <li>Checkbox, radio ---</li>
        <li>Searcheble select ---</li>
        <li>Calendar ---</li>
        <li>Validation ---</li>
      </ul>

      <hr />

      <h2>TODO API ---</h2>
      <ul>
        <li>State-management (mobx, redux)---</li>
        <li>API, axios, requests, env-variables ---</li>
        <li>LocalStorage and cookies saving ---</li>
        <li>Registration, authtoriztion, data binding ---</li>
        <li>Protected route ---</li>
        <li>Redirects ---</li>
        <li>Error handlers ---</li>
        <li>Debounce, throttling ---</li>
      </ul>

      <hr />

      <h2>Libs and hooks ---</h2>
      <ul>
        <li>Ui-framework ???</li>
        <li>Lodash ---</li>
        <li>React-device-detect ---</li>
        <li>React-reveal ---</li>
        <li>Custom react-hooks ---</li>
        <li>Date-fns ---</li>
        <li>Header auto hide ---</li>
        <li>UseMediaQuery ---</li>
        <li>colors in js ---</li>
        <li>PWA ---</li>
        <li>Desktop App ---</li>
      </ul>
    </section>
  );
};

export default ToDoList;
