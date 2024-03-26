import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { IconType } from "./Button.types";

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonWithIcon: Story = {
    args: {
        label: 'Button with icon',
        icon: IconType.ArrowRight,
        type: 'button',
    },
};

export const ButtonWithoutIcon: Story = {
    args: {
        label: 'Button without icon',
        type: 'button',
    },
};

export const LinkButtonWhithoutIcon: Story = {
    args: {
        label: 'Link button without icon',
        type: 'link',
        href: '/testpath',
    },
};

export const LinkButtonWithIcon: Story = {
    args: {
        label: 'Link button with icon',
        icon: IconType.ArrowRight,
        type: 'link',
        href: '/testpath',
    },
};

export const ButtonWithClassName: Story = {
    args: {
        label: 'Button with class name',
        type: 'button',
        className: 'bg-red-500 hover:bg-red-400',
    },
};