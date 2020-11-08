export const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1,
    transition: { duration: 1.5, ease: [0.96, 0.23, 0.13, 0.43] }
  },
  out: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1
};
