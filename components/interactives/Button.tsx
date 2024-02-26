import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

type Props = {
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
};

const ButtonVariant = tv({
    base: 'text-white bg-black',
    variants: {
        color: {
            primary: 'text-black bg-white',
            secondary: 'text-white bg-black',
        },
        size: {
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-lg',
        },
    },
    compoundVariants: [
        {
            color: 'primary',
            size: 'sm',
            className: 'text-black bg-white text-sm',
        },
    ],
    defaultVariants: {
        color: 'primary',
        size: 'md',
    },
});

export const Button: FC<Props> = (Props : Props) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={Props.onClick}
            className={ButtonVariant({
                color: Props.color,
                size: Props.size,
            })}
        >
            {Props.children}
        </motion.button>
    );
};

