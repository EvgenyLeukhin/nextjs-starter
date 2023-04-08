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
        <li>Test stand +++</li>
        <li>Readme +++</li>
      </ul>

      <hr />

      <h2 className='text-success'>Styling +++</h2>
      <ul>
        <li>Global styles +++</li>
        <li>Scss +++</li>
        <li>Scss vars +++</li>
        <li>Scss mixins +++</li>
        <li>Scss-modules +++</li>
        <li>ClassNames bind +++</li>
        <li>
          Animations (<code>react-awesome-reveal</code>) +++
        </li>
      </ul>

      <hr />

      <h2 className='text-success'>Layout +++</h2>

      <ul>
        <li>Header +++</li>
        <li>Header auto hide +++</li>
        <li>Footer +++</li>
        <li>NavBar +++</li>
        <li>Basic layout +++</li>
        <li>404 page +++</li>
        <li>500 page +++</li>
        <li>GoToTop +++</li>
        <li>Burger +++</li>
      </ul>

      <hr />

      <h2 className='text-success'>SEO +++</h2>
      <ul>
        <li>Favicons +++</li>
        <li>Seo-block +++</li>
        <li>Socials links +++</li>
        <li>Sharing meta-tags +++</li>
        <li>
          <code>react-share</code> +++
        </li>
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

      <h2 className='text-success'>Minimal UI +++</h2>
      <ul>
        <li>Modal +++</li>
        <li>Slider +++</li>
        <li>Loader +++</li>
        <li>Alert +++</li>
        <li>Icons +++</li>
        <li>Button +++</li>
        <li>Tabs +++</li>
        <li>Accordion +++</li>
        <li>Tooltip +++</li>
        <li>Video-player and frames +++</li>
        <li>UI-elements on ui-kit page +++</li>
      </ul>

      <hr />

      <h2 className='text-success'>Forms +++</h2>
      <ul>
        <li>Custom Inputs +++</li>
        <li>Custom Select +++</li>
        <li>Custom Select Buttons +++</li>
        <li>Custom Select Checkboxes +++</li>
        <li>Custom MultiSelect +++</li>
        <li>Custom Datepicker +++</li>
        <li>Phone mask input+++</li>
        <li>Custom Checkbox and Radio +++</li>
        <li>Custom Upload file +++</li>
        <li>Switch +++</li>
        <li>Custom Number Counter +++</li>
        <li>Form examples +++</li>
        <li>
          <code>react-datepicker</code> +++
        </li>
        <li>
          <code>react-select</code> +++
        </li>
        <li>
          <code>react-quill</code> +++
        </li>
        <li>
          <code>react-input-range</code> +++
        </li>
      </ul>

      <hr />

      <h2>TODO Rest-API ---</h2>
      <ul>
        <li>Deploy with cross-env by npm scripts +++</li>
        <li>
          <code>react-table</code> ---
        </li>
        <li>
          <b>State-management</b> ---
          <ul>
            <li>
              <code>mobx, mobx-state-tree</code> ---
            </li>
            <li>
              <code>redux, redux-toolkit</code> ---
            </li>
            <li>
              <code>context</code> ---
            </li>
            <li>
              <code>react-query</code> ---
            </li>
          </ul>
        </li>
        <li>
          <b>API, async</b>, requests
          <ul>
            <li>
              <code>axios</code> +++
            </li>
            <li>
              <code>ws</code> ---
            </li>
            <li>
              <code>graphQL</code> ---
            </li>
          </ul>
        </li>
        <li>Redirects ---</li>
        <li>Error handlers ---</li>
        <li>Protected route ---</li>
        <li>Debounce, throttling (&lt;DebounceInput /&gt;) +++</li>
        <li>
          LocalStorage/cookies saving, user token (<code>js-cookies</code>) ---
        </li>
        <li>---</li>
        <li>Registration ---</li>
        <li>Autharization ---</li>
        <li>Create item ---</li>
        <li>Get data +++</li>
        <li>Edit data ---</li>
        <li>Delete data ---</li>
        <li>Filtering +++</li>
        <li>Lazy loading ---</li>
      </ul>

      <hr />

      <h2>TODO Libs, hooks and features ---</h2>
      <ul>
        <li>
          <code>react-device-detect</code> +++
        </li>
        <li>UseWindowResize +++</li>
        <li>Custom react-hooks +++</li>
        <li>Dark-theme ---</li>
        <li>CodeStyle file ---</li>
        <li>gh-pages ---</li>
        <li>Cookies-popup ---</li>
        <li>Multi-lang ---</li>
        <li>Fix TS ignores ---</li>
        <li>---</li>
        <li>Remember me checkbox</li>
        <li>Captcha</li>
        <li>GSAP</li>
        <li>ScrollMagic</li>
        <li>Canvas</li>
        <li>Desktop App</li>
        <li>PWA</li>
        <li>
          <code>lodash</code>
        </li>
        <li>
          <code>date-fns</code>
        </li>
        <li>
          <code>react-countdown</code>
        </li>
      </ul>

      <hr />

      <h2>Theory ---</h2>
      <ul>
        <li>React-hooks and lifecycle</li>
        <li>NextJS</li>
        <li>JS - Objects</li>
        <li>JS - Cycles</li>
        <li>JS - Logics</li>
        <li>JS - Events</li>
        <li>JS - Storage</li>
        <li>---</li>
        <li>JS - Async</li>
        <li>JS - Data binding</li>
        <li>JS - Reg exp</li>
      </ul>
    </section>
  );
}
