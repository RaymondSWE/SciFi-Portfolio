'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/utils/cn';
export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className=" opacity-0">
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('', className)}>
      <div className="mt-2">
        <div className="sm:text-lg text-gray-400 italic sm:my-4 my-2 max-w-[600px] text-center md:text-left text-sm">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
