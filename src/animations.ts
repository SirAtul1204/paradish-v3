type CustomAnimationProps = {
  delay?: number;
  duration?: number;
  doStagger?: boolean;
};

export const fadeInUp = ({
  delay = 0,
  duration = 0.2,
  doStagger = false,
}: CustomAnimationProps) => ({
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration,
      delay: doStagger
        ? ((delay as number) * (duration as number)) / 2
        : (delay as number) * (duration as number),
    },
  },
});

export const fadeInDown = ({
  delay = 0,
  duration = 0.2,
  doStagger = false,
}: CustomAnimationProps) => ({
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration,
      delay: doStagger
        ? ((delay as number) * (duration as number)) / 2
        : (delay as number) * (duration as number),
    },
  },
});

export const fadeInRight = ({
  delay = 0,
  duration = 0.2,
  doStagger = false,
}: CustomAnimationProps) => ({
  initial: {
    x: 30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration,
      delay: doStagger
        ? ((delay as number) * (duration as number)) / 2
        : (delay as number) * (duration as number),
    },
  },
});

export const fadeInLeft = ({
  delay = 0,
  duration = 0.2,
  doStagger = false,
}: CustomAnimationProps) => ({
  initial: {
    x: -30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration,
      delay: doStagger
        ? ((delay as number) * (duration as number)) / 2
        : (delay as number) * (duration as number),
    },
  },
});

export const fadeOutLeft = ({ duration = 0.2 }: CustomAnimationProps) => ({
  opacity: 0,
  x: -30,
  transition: {
    duration,
  },
});

export const fadeOutRight = ({ duration = 0.2 }: CustomAnimationProps) => ({
  opacity: 0,
  x: 30,
  transition: {
    duration,
  },
});
