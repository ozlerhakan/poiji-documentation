import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Straightforward',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Poiji is a tiny thread-safe Java 11 library that provides one way mapping from Excel sheets to Java classes.
      </>
    ),
  },
  {
    title: 'Apache Poi',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Poiji uses Apache Poi (the Java API for Microsoft Documents) under the hood
      </>
    ),
  },
  {
    title: 'Customizable',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Poiji options/configurations can be customized using `PoijiOptionsBuilder` easily.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
