import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Senior Software Engineer',
    Svg: require('@site/static/img/knight.svg').default,
    description: (
      <>
        <p />
        <p>
          Extensive experience generating value for Startups, Government
          Organizations and Big Tech Companies.
        </p>
        <p>I can work on high-intensity environments with lots of ambiguity.</p>
        <p>
          High-productivity (
          <a
            href="https://github.com/mbassale?tab=overview&from=2019-12-01&to=2019-12-31"
            target="_blank">
            2200+ Commits in 2019
          </a>
          )
        </p>
        <p>
          I'm able to code, troubleshoot issues, design solutions and mentor
          engineers.
        </p>
        <p>
          Experience ramping up, stabilizing, refactoring and adding value to
          undocumented legacy systems.
        </p>
        <p />
      </>
    ),
  },
  {
    title: '15 Years of Experience',
    Svg: require('@site/static/img/writing1.svg').default,
    description: (
      <>
        <p />
        <p>
          I have experience on Frontend, Backend, Compilers, Interpreters, OCR
          & ML and Systems Administration.
        </p>
        <ul style={{textAlign: 'left'}}>
          <li>
            Compiler/Interpreter Engineering:{' '}
            <a href="https://github.com/mbassale/cpplox" target="_blank">
              cpplox
            </a>
            ,{' '}
            <a href="https://github.com/mbassale/glox" target="_blank">
              glox
            </a>
            ,{' '}
            <a href="https://github.com/mbassale/computer-science" target="_blank">
              CompSci
            </a>
            .
          </li>
          <li>
            Backend: C++ with Boost, Folly, Thrift, Protocol Buffers; Java EJB,
            Spring; C# ASP.NET MVC Framework.
          </li>
          <li>
            OCR & ML:{' '}
            <a href="https://www.abbyy.com/finereader-server/" target="_blank">
              ABBYY FineReader Server
            </a>
            , Jupyter, numpy, scikit-learn.
          </li>
          <li>Web UI: React.js, Vue.js, jQuery.</li>
          <li>Mobile UI: React Native.</li>
          <li>
            Desktop UI:{' '}
            <a
              href="https://learn.microsoft.com/en-us/cpp/mfc/mfc-desktop-applications?view=msvc-170"
              target="_blank">
              Microsoft MFC
            </a>
            ,{' '}
            <a href="https://www.wxwidgets.org/" target="_blank">
              wxWidgets
            </a>
            ,{' '}
            <a href="https://www.fltk.org/" target="_blank">
              FLTK
            </a>
            ,{' '}
            <a href="https://en.wikipedia.org/wiki/Swing_(Java)" target="_blank">
              Java AWT/Swing
            </a>
          </li>
        </ul>
        <p />
      </>
    ),
  },
  {
    title: 'Backend Engineer @ Meta',
    Svg: require('@site/static/img/castle-gate.svg').default,
    description: (
      <>
        <p />
        <p>Currently working as Systems Engineer on Meta FinTech Division.</p>
        <p>
          Experience working on Merchant on Record and Third Party Payment
          Processors integration.
        </p>
        <p>
          Experience with automated build systems, oncall, devops, linux server
          administration.
        </p>
        <p>Experience working with critical systems with live traffic.</p>
        <p />
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
