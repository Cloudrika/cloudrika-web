// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";


const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg", "icon"],
        },
        shape: {
            control: "select",
            options: ["rect", "pill"],
        },
        asChild: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default button
export const Default: Story = {
    args: {
        children: "Click Me",
        variant: "default",
        size: "default",
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
