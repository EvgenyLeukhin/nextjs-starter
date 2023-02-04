import styles from './HomeList.module.scss';

const HomeList = () => {
  return (
    <section>
      <h2 className={styles.HomeList}>TODO Basic</h2>
      <ul>
        <li>fonts ---</li>
        <li>scss +++</li>
        <li>scss-modules +++</li>
        <li>scss vars, mixins, animations ---</li>
        <li>images ---</li>
        <li>links ---</li>
        <li>templates pages +++</li>
      </ul>

      <hr />

      <h2>TODO SEO</h2>
      <ul>
        <li>seo-block ---</li>
        <li>Favicons ---</li>
        <li>Sharing meta-tags ---</li>
      </ul>

      <hr />

      <h2>TODO Linters, scripts</h2>
      <ul>
        <li>ESLint +++</li>
        <li>Prettier ---</li>
        <li>tsconfig +++</li>
        <li>editorconfig +++</li>
        <li>Bundle Analizer ---</li>
        <li>Precommit, husky ---</li>
        <li>Deploy to GH-pages ---</li>
        <li>Deploy to Netlify ---</li>
        <li>Local Express server ---</li>
      </ul>

      <hr />

      <h2>TODO ui</h2>
      <ul>
        <li>Layout-components +++</li>
        <li>Header +++</li>
        <li>Footer +++</li>
        <li>NavBar ---</li>
        <li>Modals ---</li>
        <li>UI-elements, ui-kit ---</li>
        <li>multi-lang ---</li>
        <li>dark-theme ---</li>
        <li>cokkies-popup ---</li>
        <li>header auto hide ---</li>
      </ul>

      <hr />

      <h2>TODO API</h2>
      <ul>
        <li>state-management ---</li>
        <li>API, axios, requests, env-variables ---</li>
        <li>Form elements, validation ---</li>
        <li>localStorage and cookies saving ---</li>
        <li>registration, authtoriztion, data binding ---</li>
      </ul>

      <hr />

      <h2>Libs</h2>
      <ul>
        <li>lodash ---</li>
        <li>react-device-detect ---</li>
        <li>react-reveal ---</li>
        <li>custom react-hooks ---</li>
        <li>date-fns ---</li>
        <li>ui-framework ???</li>
      </ul>
    </section>
  )
}

export default HomeList;
