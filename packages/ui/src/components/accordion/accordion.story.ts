// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Accordion } from ".";


const meta: Meta<typeof Accordion> = {
    title: "Components/Accordion",
    component: Accordion,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "tertiary"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        asChild: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
    args: {
        children: "Primary",
        variant: "primary",
        size: "md",
    },
};

export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary",
    },
};

export const Tertiary: Story = {
    args: {
        children: "Tertiary",
        variant: "tertiary",
    },
};