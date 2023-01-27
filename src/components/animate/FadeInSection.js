import React from 'react';
import PropTypes from 'prop-types';

// import './index.css';

// type Props = {
//   children: React.ReactNode;
// };

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef?.current) {
      observer.observe(domRef.current);
    }
  }, [domRef]);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired
};

export default FadeInSection;
