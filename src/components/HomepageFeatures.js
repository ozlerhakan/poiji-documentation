import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";

const FeatureList = [
  {
    title: 'Straightforward',
    imageUrl: require("../../static/img/run.jpg").default,
    description: (
        <>
        Poiji is a tiny thread-safe Java 11 library that provides one way mapping from Excel sheets to Java classes.
        </>
    ),
  },
  {
    title: 'Apache Poi',
    imageUrl: require("../../static/img/power.jpg").default,
    description: (
        <p>Poiji uses Apache Poi (the Java API for Microsoft Documents) under the hood.</p>
    ),
  },
  {
    title: 'Customizable',
    imageUrl: require("../../static/img/customizable.jpg").default,
    description: (
        <>Poiji options/configurations can be customized using <b>PoijiOptionsBuilder</b> easily.</>
    ),
  }, 
];

function Feature({imageUrl, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          style={{maxWidth: '100%', width: '100px'}}
          src={imageUrl}
        />
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
