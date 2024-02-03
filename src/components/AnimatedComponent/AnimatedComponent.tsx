import { useSpring, animated } from "@react-spring/web";
import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  css: string;
}

const AnimatedComponent: FC<IProps> = ({ children, css }) => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300, delay: 400 },
  });

  return (
    <animated.div style={fadeIn} className={css ? css : ""}>
      {children}
    </animated.div>
  );
};

export default AnimatedComponent;
