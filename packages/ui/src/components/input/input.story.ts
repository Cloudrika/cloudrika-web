// =============================================================================
// FILE: packages/ui/src/components/input/input.stories.tsx
// =============================================================================

import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error", "success", "ghost"],
    },
    size: {
      control: "select", 
      options: ["sm", "default", "lg"],
    },
    shape: {
      control: "select",
      options: ["rect", "pill", "square"],
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search", "file"],
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    characterCount: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Basic input
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

// EMAIL PORTAL SPECIFIC INPUTS

// Subject line with character count
export const SubjectLine: Story = {
  args: {
    type: "text",
    placeholder: "Enter a compelling subject line",
    label: "Email Subject",
    characterCount: true,
    maxLength: 60,
    helperText: "Keep it under 60 characters for better deliverability",
  },
};

// Sender email with validation
export const SenderEmail: Story = {
  args: {
    type: "email",
    placeholder: "sender@company.com",
    label: "From Email",
    helperText: "This email must be verified in your account",
  },
};

// Sender name
export const SenderName: Story = {
  args: {
    type: "text", 
    placeholder: "Your Company Name",
    label: "From Name",
    helperText: "This appears as the sender name in recipients' inboxes",
  },
};

// Preview text (90 chars optimal)
export const PreviewText: Story = {
  args: {
    type: "text",
    placeholder: "Add preview text to entice opens...",
    label: "Preview Text",
    characterCount: true,
    maxLength: 90,
    helperText: "Shows in email preview alongside subject line",
  },
};

// Recipient email for single email
export const RecipientEmail: Story = {
  args: {
    type: "email",
    placeholder: "recipient@email.com", 
    label: "Recipient Email",
  },
};

// Campaign name
export const CampaignName: Story = {
  args: {
    type: "text",
    placeholder: "November Newsletter 2024",
    label: "Campaign Name", 
    helperText: "Internal name for your records",
  },
};

// File upload for attachments
export const FileUpload: Story = {
  args: {
    type: "file",
    label: "Attachment",
    helperText: "Max file size: 25MB. Supported: PDF, DOC, JPG, PNG",
    accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  },
};

// Error state example
export const WithError: Story = {
  args: {
    type: "email",
    placeholder: "Enter recipient email",
    label: "Recipient Email",
    variant: "error",
    error: "Please enter a valid email address",
    defaultValue: "invalid-email",
  },
};

// Success state example  
export const WithSuccess: Story = {
  args: {
    type: "email",
    placeholder: "sender@company.com",
    label: "From Email",
    variant: "success", 
    helperText: "Email verified successfully!",
    defaultValue: "verified@company.com",
  },
};

// Different sizes
export const Small: Story = {
  args: {
    placeholder: "Quick search...",
    // size: "sm" as const,
    shape: "pill" as const,
  },
};

export const Large: Story = {
  args: {
    placeholder: "Enter your main subject line here",
    // size: "lg" as const,
    label: "Primary Subject Line",
  },
};