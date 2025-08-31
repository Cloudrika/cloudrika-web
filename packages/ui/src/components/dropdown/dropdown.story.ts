import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";
import { 
  Users, 
  Mail, 
  Calendar, 
  Target, 
  BarChart3, 
  Globe, 
  Zap, 
  FileText 
} from "lucide-react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "outline", "secondary"],
    },
    size: {
      control: "select", 
      options: ["sm", "default", "lg"],
    },
    shape: {
      control: "select",
      options: ["rect", "pill", "square"],
    },
    multiple: {
      control: "boolean",
    },
    searchable: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    placeholder: "Select an option...",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const AudienceSelection: Story = {
  args: {
    label: "Select Audience",
    placeholder: "Choose your audience...",
    searchable: true,
    options: [
      { 
        value: "all-subscribers", 
        label: "All Subscribers", 
        count: 15420,
        description: "All active subscribers"
      },
      { 
        value: "newsletter-subscribers", 
        label: "Newsletter Subscribers", 
        count: 8930,
        category: "Lists"
      },
      { 
        value: "promotional-list", 
        label: "Promotional List", 
        count: 12340,
        category: "Lists"
      },
      { 
        value: "high-engagement", 
        label: "High Engagement Users", 
        count: 3450,
        category: "Segments"
      },
      { 
        value: "new-subscribers", 
        label: "New Subscribers (Last 30 days)", 
        count: 890,
        category: "Segments"
      },
      { 
        value: "cart-abandoners", 
        label: "Cart Abandoners", 
        count: 2340,
        category: "Segments"
      },
    ],
  },
};

export const MultiAudienceSelection: Story = {
  args: {
    label: "Target Multiple Audiences",
    placeholder: "Select audiences to target...",
    multiple: true,
    searchable: true,
    helperText: "You can select multiple audiences for this campaign",
    options: [
      { value: "newsletter", label: "Newsletter Subscribers", count: 8930, category: "Lists" },
      { value: "promotional", label: "Promotional List", count: 12340, category: "Lists" },
      { value: "vip", label: "VIP Customers", count: 450, category: "Segments" },
      { value: "high-engagement", label: "High Engagement", count: 3450, category: "Segments" },
      { value: "recent-buyers", label: "Recent Buyers", count: 1230, category: "Segments" },
    ],
  },
};

export const CampaignTypeSelection: Story = {
  args: {
    label: "Campaign Type",
    placeholder: "Select campaign type...",
    options: [
      { 
        value: "newsletter", 
        label: "Newsletter", 
        description: "Regular newsletter to subscribers"
      },
      { 
        value: "promotional", 
        label: "Promotional Campaign", 
        description: "Sales and promotional emails"
      },
      { 
        value: "automated", 
        label: "Automated Sequence", 
        description: "Triggered email sequence"
      },
      { 
        value: "transactional", 
        label: "Transactional", 
        description: "Order confirmations, receipts"
      },
    ],
  },
};

export const TemplateSelection: Story = {
  args: {
    label: "Email Template",
    placeholder: "Choose a template...",
    searchable: true,
    options: [
      { value: "welcome-series-1", label: "Welcome Series Template", category: "Welcome" },
      { value: "newsletter-modern", label: "Modern Newsletter", category: "Newsletter" },
      { value: "newsletter-classic", label: "Classic Newsletter", category: "Newsletter" },
      { value: "promo-sale", label: "Sale Announcement", category: "Promotional" },
      { value: "promo-discount", label: "Discount Offer", category: "Promotional" },
      { value: "cart-abandonment", label: "Abandoned Cart Reminder", category: "Automation" },
      { value: "re-engagement", label: "Win-back Campaign", category: "Automation" },
      { value: "product-launch", label: "Product Launch", category: "Promotional" },
    ],
  },
};

export const TimezoneSelection: Story = {
  args: {
    label: "Timezone",
    placeholder: "Select timezone...",
    searchable: true,
    options: [
      { value: "UTC", label: "UTC (Coordinated Universal Time)" },
      { value: "America/New_York", label: "Eastern Time (EST/EDT)" },
      { value: "America/Chicago", label: "Central Time (CST/CDT)" },
      { value: "America/Denver", label: "Mountain Time (MST/MDT)" },
      { value: "America/Los_Angeles", label: "Pacific Time (PST/PDT)" },
      { value: "Europe/London", label: "London (GMT/BST)" },
      { value: "Europe/Paris", label: "Paris (CET/CEST)" },
      { value: "Asia/Tokyo", label: "Tokyo (JST)" },
    ],
  },
};

export const SendTimeOptimization: Story = {
  args: {
    label: "Send Time",
    placeholder: "When to send...",
    options: [
      { 
        value: "now", 
        label: "Send Now", 
        description: "Send immediately"
      },
      { 
        value: "scheduled", 
        label: "Schedule for Later", 
        description: "Pick a specific date and time"
      },
      { 
        value: "optimized", 
        label: "AI-Optimized Send Time", 
        description: "Let AI choose the best time for each recipient"
      },
      { 
        value: "recurring", 
        label: "Recurring Schedule", 
        description: "Set up a repeating schedule"
      },
    ],
  },
};

export const AnalyticsFilter: Story = {
  args: {
    label: "Filter Analytics",
    placeholder: "Filter by...",
    multiple: true,
    searchable: true,
    options: [
      { value: "opens", label: "Email Opens" },
      { value: "clicks", label: "Link Clicks" },
      { value: "bounces", label: "Bounces" },
      { value: "unsubscribes", label: "Unsubscribes" },
      { value: "complaints", label: "Spam Complaints" },
      { value: "forwards", label: "Forwards" },
    ],
  },
};

export const IntegrationSelection: Story = {
  args: {
    label: "Connect Integration",
    placeholder: "Select platform to connect...",
    searchable: true,
    options: [
      { value: "shopify", label: "Shopify", description: "E-commerce platform" },
      { value: "woocommerce", label: "WooCommerce", description: "WordPress e-commerce" },
      { value: "salesforce", label: "Salesforce", description: "CRM platform" },
      { value: "hubspot", label: "HubSpot", description: "Marketing automation" },
      { value: "zapier", label: "Zapier", description: "Workflow automation" },
      { value: "facebook", label: "Facebook Ads", description: "Social advertising" },
      { value: "google", label: "Google Analytics", description: "Web analytics" },
    ],
  },
};

export const BulkActionsDropdown: Story = {
  args: {
    variant: "outline" as const,
    placeholder: "Bulk Actions",
    options: [
      { value: "export", label: "Export Selected" },
      { value: "delete", label: "Delete Selected" },
      { value: "move", label: "Move to List" },
      { value: "tag", label: "Add Tags" },
      { value: "unsubscribe", label: "Unsubscribe All" },
    ],
  },
};

export const LoadingState: Story = {
  args: {
    label: "Loading Templates",
    loading: true,
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Audience Selection",
    placeholder: "Select audience...",
    error: "Failed to load audience lists. Please try again.",
    options: [],
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm" as const,
    placeholder: "Small dropdown",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg" as const,
    placeholder: "Large dropdown",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
  },
};