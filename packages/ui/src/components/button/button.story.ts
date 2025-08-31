import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from ".";


const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "success", "destructive", "warning", "info", "accent", "outline", "ghost", "link"],
        },
        size: {
            control: "select",
            options: ["xm", "sm", "md", "lg", "xl", "icon"],
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

export const Primary: Story = {
    args: {
        children: "Primary",
        variant: "primary",
        size: "md",
        shape: "rect",
    },
};

export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary",
    },
};

export const Success: Story = {
    args: {
        children: "Success",
        variant: "success",
    },
};

export const Destructive: Story = {
    args: {
        children: "Delete",
        variant: "destructive",
    },
};

export const Warning: Story = {
    args: {
        children: "Warning",
        variant: "warning",
    },
};

export const Info: Story = {
    args: {
        children: "Info",
        variant: "info",
    },
};

export const Accent: Story = {
    args: {
        children: "Accent",
        variant: "accent",
    },
};

export const Outline: Story = {
    args: {
        children: "Outline",
        variant: "outline",
    },
};

export const Ghost: Story = {
    args: {
        children: "Ghost",
        variant: "ghost",
    },
};

export const Link: Story = {
    args: {
        children: "Go to link",
        variant: "link",
    },
};

export const Pill: Story = {
    args: {
        children: "Pill",
        shape: "pill",
    },
};
