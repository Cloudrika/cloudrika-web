// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { BUTTON_SHAPES, BUTTON_SIZES, BUTTON_VARIANTS } from "./button.utils";


const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: Object.keys(BUTTON_VARIANTS),
        },
        size: {
            control: "select",
            options: Object.keys(BUTTON_SIZES),
        },
        shape: {
            control: "select",
            options: Object.keys(BUTTON_SHAPES),
        },
        asChild: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary button
export const Primary: Story = {
    args: {
        children: "Primary",
        variant: "primary",
        size: "md",
        shape: "rect",
    },
};

// Destructive button
export const Destructive: Story = {
    args: {
        children: "Delete",
        variant: "destructive",
    },
};

// Outline button
export const Outline: Story = {
    args: {
        children: "Outline",
        variant: "outline",
    },
};

// Secondary button
export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary",
    },
};

// Ghost button
export const Ghost: Story = {
    args: {
        children: "Ghost",
        variant: "ghost",
    },
};

// Link button
export const Link: Story = {
    args: {
        children: "Go to link",
        variant: "link",
    },
};

// Pill shaped button
export const Pill: Story = {
    args: {
        children: "Pill",
        shape: "pill",
    },
};
