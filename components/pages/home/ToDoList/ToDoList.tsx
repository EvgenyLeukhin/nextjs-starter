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
        <li>Global styles +++</li>
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

      <h2>TODO Forms ++-</h2>
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
        <li>---</li>
        <li>
          <code>react-input-range</code> +++
        </li>
        <li>
          <code>react-select</code> ---
        </li>
        <li>
          <code>react-editor</code> ---
        </li>
        <li>
          <code>react-datepicker</code> ---
        </li>
        <li>Captcha ---</li>
        <li>Remember me checkbox ---</li>
      </ul>

      <hr />

      <h2>TODO API ---</h2>
      <ul>
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
              <code>axios</code> ---
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
        <li>Debounce, throttling ---</li>
        <li>Registration, authtoriztion, data binding ---</li>
        <li>Deploy with cross-env by npm scripts +++</li>
        <li>
          LocalStorage and cookies saving
          <ul>
            <li>
              <code>js-cookies</code> ---
            </li>
          </ul>
        </li>
        <li>
          <code>react-table</code> ---
        </li>
      </ul>

      <hr />

      <h2>Libs, hooks and features ---</h2>
      <ul>
        <li>
          <code>lodash</code> ---
        </li>
        <li>
          <code>date-fns</code> ---
        </li>
        <li>
          <code>react-share</code> +++
        </li>
        <li>
          <code>react-awesome-reveal</code> (animations) +++
        </li>
        <li>
          <code>react-device-detect</code> +++
        </li>
        <li>
          <code>react-countdown</code> ---
        </li>
        <li>UseWindowResize +++</li>
        <li>Custom react-hooks +++</li>
      </ul>

      <hr />

      <h2>On future ---</h2>
      <ul>
        <li>Cookies-popup ---</li>
        <li>Multi-lang ---</li>
        <li>Dark-theme ---</li>
        <li>CodeStyle file ---</li>
        <li>GSAP ---</li>
        <li>ScrollMagic ---</li>
        <li>PWA ---</li>
        <li>Canvas ---</li>
        <li>Desktop App ---</li>
        <li>gh-pages ---</li>
        <li>Fix some TS Errors ---</li>
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
