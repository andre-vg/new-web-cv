'use client';
import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';
import { Projeto } from '@/types';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { subtitle, text, title } from '../primitives';
import { Chip } from '@nextui-org/chip';
import moment from 'moment';
import { ExternalLinkIcon, History } from 'lucide-react';

type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  childArray?: Projeto[];
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  },
  blur: {
    hidden: { filter: 'blur(4px)' },
    visible: { filter: 'blur(0px)' },
  },
  'blur-slide': {
    hidden: { filter: 'blur(4px)', y: 20 },
    visible: { filter: 'blur(0px)', y: 0 },
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 8 },
    },
  },
};

const addDefaultVariants = (variants: Variants) => ({
  hidden: { ...defaultItemVariants.hidden, ...variants.hidden },
  visible: { ...defaultItemVariants.visible, ...variants.visible },
});

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  childArray,
}: AnimatedGroupProps) {
  const selectedVariants = {
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants),
  };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
    >
      {childArray?.map((project: Projeto, idx) => (
        <motion.div
          className="h-full last:!col-span-3 data-[col=true]:col-span-2"
          key={idx}
          variants={itemVariants}
          data-col={idx % 2 === 0}
          data-row={idx % 3 === 0}
        >
          <Card
            shadow="sm"
            classNames={{
              base: cn(
                'p-4 h-full bg-neutral-100 dark:bg-neutral-900 border border-default-100',
              ),
              header: 'flex flex-col gap-2 items-start text-left',
              footer: 'flex flex-wrap gap-2',
            }}
          >
            <CardHeader>
              <div className="flex w-full items-center justify-between">
                <h3 className={title({ size: 'xs' })}>{project.name}</h3>
                <ExternalLinkIcon
                  className="cursor-pointer hover:text-primary-500"
                  onClick={() => window.open(project.html_url, '_blank')}
                />
              </div>
              <div className="flex items-center gap-2">
                <History className="text-default-600" size={16} />
                <p className={subtitle({ size: 'sm', className: '!text-sm' })}>
                  {moment(project.pushed_at).format('DD/MM/YYYY HH:mm')}
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p className={text()}>{project.description}</p>
            </CardBody>
            <CardFooter>
              {project.topics?.map((topic) => (
                <Chip
                  size="lg"
                  classNames={{
                    content: 'font-semibold capitalize',
                  }}
                  key={topic}
                  variant="bordered"
                  color="primary"
                >
                  {topic}
                </Chip>
              )) // This is a list of topics related to the project.
              }
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

export { AnimatedGroup };
