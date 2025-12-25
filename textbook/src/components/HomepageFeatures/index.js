import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Physical AI Integration',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn how to connect AI "brains" with physical robotic systems, bridging the gap between digital intelligence and real-world applications.
      </>
    ),
  },
  {
    title: 'Robotics Simulation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Master simulation environments like Gazebo and NVIDIA Isaac for testing humanoid robotics applications in virtual worlds before deployment.
      </>
    ),
  },
  {
    title: 'ROS 2 Framework',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Explore Robot Operating System (ROS 2) for building sophisticated humanoid robotics applications with advanced perception and control.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={clsx(styles.featureSvg, 'robotic-section')} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.features, 'robotic-section')}>
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
