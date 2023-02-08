import styles from './ToDoList.module.scss';

export default function ToDoList() {
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

      <h2 className='text-success'>Basics +++</h2>
      <ul>
        <li>Fonts +++</li>
        <li>Links +++</li>
        <li>Images +++</li>
        <li>Templates pages +++</li>
        <li>Components examples +++</li>
      </ul>

      <hr />

      <h2 className='text-success'>Styling +++</h2>
      <ul>
        <li>Scss +++</li>
        <li>Scss vars +++</li>
        <li>Scss mixins +++</li>
        <li>Scss-modules +++</li>
        <li>Animations +++</li>
        <li>ClassNames bind +++</li>
      </ul>

      <hr />

      <h2 className='text-success'>Layout +++</h2>

      <ul>
        <li>Header +++</li>
        <li>Footer +++</li>
        <li>NavBar +++</li>
        <li>Basic layout +++</li>
      </ul>

      <hr />

      <h2 className='text-success'>SEO +++</h2>
      <ul>
        <li>Favicons +++</li>
        <li>Seo-block +++</li>
        <li>Socials links +++</li>
        <li>Sharing meta-tags +++</li>
      </ul>

      <hr />

      <h2 className='text-success'>Linters, scripts +++</h2>
      <ul>
        <li>ESLint +++</li>
        <li>Prettier +++</li>
        <li>tsconfig +++</li>
        <li>Editorconfig +++</li>
        <li>Bundle Analizer +++</li>
        <li>Gzip compression +++</li>
        <li>Deploy to Netlify +++</li>
        <li>Local Express server +++</li>
        <li>Precommit with Husky +++</li>
      </ul>

      <hr />

      <h2>TODO UI ---</h2>
      <ul>
        <li>Modal +++</li>
        <li>Slider ---</li>
        <li>Calendar ---</li>
        <li>GoToTop ---</li>
        <li>Loader ---</li>
        <li>Alert ---</li>
        <li>Icons ---</li>
        <li>Button +++</li>
        <li>Table ---</li>
        <li>Tooltip ---</li>
        <li>Video-player ---</li>
        <li>UI-elements on ui-kit page +--</li>
      </ul>

      <hr />

      <h2>TODO Forms ---</h2>
      <ul>
        <li>Input ---</li>
        <li>Select ---</li>
        <li>Calendar ---</li>
        <li>Validation ---</li>
        <li>Multi-Select ---</li>
        <li>Checkbox, radio ---</li>
        <li>Upload file ---</li>
        <li>Searcheble select ---</li>
      </ul>

      <hr />

      <h2>TODO API ---</h2>
      <ul>
        <li>Redirects ---</li>
        <li>Error handlers ---</li>
        <li>Protected route ---</li>
        <li>Debounce, throttling ---</li>
        <li>
          <b>State-management</b> (mobx, redux)---
        </li>
        <li>LocalStorage and cookies saving ---</li>
        <li>
          <b>API, axios, async</b>, requests, env-variables ---
        </li>
        <li>Registration, authtoriztion, data binding ---</li>
        <li>Deploy with cross-env by npm scripts ---</li>
      </ul>

      <hr />

      <h2>Libs, hooks and features ---</h2>
      <ul>
        <li>React-share +++</li>
        <li>React-reveal (animations) +++</li>
        <li>Lodash ---</li>
        <li>Date-fns ---</li>
        <li>UseWindowResize +++</li>
        <li>Header auto hide ---</li>
        <li>Custom react-hooks ---</li>
        <li>React-device-detect ---</li>
        <li>Cookies-popup ---</li>
      </ul>

      <h2>On future</h2>
      <ul>
        <li>Multi-lang ---</li>
        <li>Dark-theme ---</li>
        <li>CodeStyle file ---</li>
        <li>GSAP ---</li>
        <li>ScrollMagic ---</li>
        <li>PWA ---</li>
        <li>Canvas ---</li>
        <li>Desktop App ---</li>
        <li>Tests coverage ---</li>
      </ul>
    </section>
  );
}
