"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
