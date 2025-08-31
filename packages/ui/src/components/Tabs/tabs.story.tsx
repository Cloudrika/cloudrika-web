import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from ".";
import { 
  User, 
  Mail, 
  Settings, 
  Shield, 
  CreditCard, 
  Bell,
  BarChart3,
  Users,
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Download,
  Globe,
  Database,
  Code,
  Zap,
  Eye,
  Send,
  Target,
  List
} from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    defaultValue: {
      control: "text",
    },
    value: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultValue: "account",
  },
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// EMAIL PORTAL SPECIFIC TAB EXAMPLES

export const EmailCampaignBuilder: Story = {
  render: () => (
    <Tabs defaultValue="content" className="w-full max-w-4xl">
      <TabsList>
        <TabsTrigger value="content">
          <FileText className="w-4 h-4 mr-2" />
          Content
        </TabsTrigger>
        <TabsTrigger value="design">
          <Image className="w-4 h-4 mr-2" />
          Design
        </TabsTrigger>
        <TabsTrigger value="audience">
          <Users className="w-4 h-4 mr-2" />
          Audience
        </TabsTrigger>
        <TabsTrigger value="schedule">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule
        </TabsTrigger>
        <TabsTrigger value="review">
          <Eye className="w-4 h-4 mr-2" />
          Review
        </TabsTrigger>
      </TabsList>
      <TabsContent value="content">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Email Content</h3>
          <p className="text-muted-foreground mb-4">Write your email content and customize the message.</p>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Subject Line</label>
              <div className="mt-1 p-2 border rounded text-sm">Your weekly newsletter is here!</div>
            </div>
            <div>
              <label className="text-sm font-medium">Preview Text</label>
              <div className="mt-1 p-2 border rounded text-sm text-muted-foreground">Don't miss our latest updates...</div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="design">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Email Design</h3>
          <p className="text-muted-foreground">Choose templates and customize the look of your email.</p>
        </div>
      </TabsContent>
      <TabsContent value="audience">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Select Audience</h3>
          <p className="text-muted-foreground">Choose who will receive this email campaign.</p>
        </div>
      </TabsContent>
      <TabsContent value="schedule">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Schedule Send</h3>
          <p className="text-muted-foreground">Choose when to send your email campaign.</p>
        </div>
      </TabsContent>
      <TabsContent value="review">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Review & Send</h3>
          <p className="text-muted-foreground">Review all settings before sending your campaign.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const EmailAnalytics: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">
          <BarChart3 className="w-4 h-4 mr-2" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="engagement">
          <Target className="w-4 h-4 mr-2" />
          Engagement
        </TabsTrigger>
        <TabsTrigger value="subscribers">
          <Users className="w-4 h-4 mr-2" />
          Subscribers
        </TabsTrigger>
        <TabsTrigger value="revenue">
          <CreditCard className="w-4 h-4 mr-2" />
          Revenue
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Campaign Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted rounded">
              <div className="text-2xl font-bold">12,456</div>
              <div className="text-sm text-muted-foreground">Emails Sent</div>
            </div>
            <div className="p-4 bg-muted rounded">
              <div className="text-2xl font-bold">23.5%</div>
              <div className="text-sm text-muted-foreground">Open Rate</div>
            </div>
            <div className="p-4 bg-muted rounded">
              <div className="text-2xl font-bold">4.2%</div>
              <div className="text-sm text-muted-foreground">Click Rate</div>
            </div>
            <div className="p-4 bg-muted rounded">
              <div className="text-2xl font-bold">0.8%</div>
              <div className="text-sm text-muted-foreground">Bounce Rate</div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="engagement">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Engagement Metrics</h3>
          <p className="text-muted-foreground">Detailed engagement analytics and click tracking.</p>
        </div>
      </TabsContent>
      <TabsContent value="subscribers">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Subscriber Activity</h3>
          <p className="text-muted-foreground">Track subscriber growth and activity patterns.</p>
        </div>
      </TabsContent>
      <TabsContent value="revenue">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Revenue Tracking</h3>
          <p className="text-muted-foreground">Monitor revenue generated from email campaigns.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const EmailTemplateEditor: Story = {
  render: () => (
    <Tabs defaultValue="html" className="w-full">
      <TabsList>
        <TabsTrigger value="html">
          <Code className="w-4 h-4 mr-2" />
          HTML
        </TabsTrigger>
        <TabsTrigger value="preview">
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </TabsTrigger>
        <TabsTrigger value="text">
          <FileText className="w-4 h-4 mr-2" />
          Text Version
        </TabsTrigger>
      </TabsList>
      <TabsContent value="html">
        <div className="p-4 border rounded-lg bg-gray-900 text-green-400 font-mono text-sm">
          <div>&lt;!DOCTYPE html&gt;</div>
          <div>&lt;html&gt;</div>
          <div className="ml-4">&lt;body&gt;</div>
          <div className="ml-8">&lt;h1&gt;Welcome!&lt;/h1&gt;</div>
          <div className="ml-8">&lt;p&gt;Thank you for subscribing...&lt;/p&gt;</div>
          <div className="ml-4">&lt;/body&gt;</div>
          <div>&lt;/html&gt;</div>
        </div>
      </TabsContent>
      <TabsContent value="preview">
        <div className="p-6 border rounded-lg bg-white">
          <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
          <p className="text-gray-700">Thank you for subscribing to our newsletter. We're excited to share our latest updates with you.</p>
        </div>
      </TabsContent>
      <TabsContent value="text">
        <div className="p-4 border rounded-lg bg-gray-50 font-mono text-sm">
          <div>Welcome!</div>
          <div className="mt-2">Thank you for subscribing to our newsletter. We're excited to share our latest updates with you.</div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ContactManagement: Story = {
  render: () => (
    <Tabs defaultValue="all" className="w-full">
      <TabsList>
        <TabsTrigger value="all">
          <List className="w-4 h-4 mr-2" />
          All Contacts
        </TabsTrigger>
        <TabsTrigger value="subscribed">
          <Mail className="w-4 h-4 mr-2" />
          Subscribed
        </TabsTrigger>
        <TabsTrigger value="unsubscribed">
          <Bell className="w-4 h-4 mr-2" />
          Unsubscribed
        </TabsTrigger>
        <TabsTrigger value="bounced">
          <Shield className="w-4 h-4 mr-2" />
          Bounced
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">All Contacts</h3>
          <p className="text-muted-foreground mb-4">Total: 15,429 contacts</p>
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b">
              <span>john@example.com</span>
              <span className="text-green-600">Subscribed</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>sarah@example.com</span>
              <span className="text-green-600">Subscribed</span>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="subscribed">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Subscribed Contacts</h3>
          <p className="text-muted-foreground">Active subscribers: 12,834</p>
        </div>
      </TabsContent>
      <TabsContent value="unsubscribed">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Unsubscribed Contacts</h3>
          <p className="text-muted-foreground">Unsubscribed: 2,345</p>
        </div>
      </TabsContent>
      <TabsContent value="bounced">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Bounced Emails</h3>
          <p className="text-muted-foreground">Bounced addresses: 250</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// VARIANT EXAMPLES

export const OutlineVariant: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList variant="outline">
        <TabsTrigger value="tab1" variant="outline">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" variant="outline">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" variant="outline">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for tab 1</TabsContent>
      <TabsContent value="tab2">Content for tab 2</TabsContent>
      <TabsContent value="tab3">Content for tab 3</TabsContent>
    </Tabs>
  ),
};

export const PillsVariant: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList variant="pills" shape="pill">
        <TabsTrigger value="tab1" variant="pills" shape="pill">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" variant="pills" shape="pill">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" variant="pills" shape="pill">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for tab 1</TabsContent>
      <TabsContent value="tab2">Content for tab 2</TabsContent>
      <TabsContent value="tab3">Content for tab 3</TabsContent>
    </Tabs>
  ),
};

export const UnderlineVariant: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList variant="underline">
        <TabsTrigger value="tab1" variant="underline">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" variant="underline">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" variant="underline">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for tab 1</TabsContent>
      <TabsContent value="tab2">Content for tab 2</TabsContent>
      <TabsContent value="tab3">Content for tab 3</TabsContent>
    </Tabs>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[300px]">
      <TabsList size="sm">
        <TabsTrigger value="tab1" size="sm">Small</TabsTrigger>
        <TabsTrigger value="tab2" size="sm">Tabs</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Small tab content</TabsContent>
      <TabsContent value="tab2">More small content</TabsContent>
    </Tabs>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[500px]">
      <TabsList size="lg">
        <TabsTrigger value="tab1" size="lg">Large Tab</TabsTrigger>
        <TabsTrigger value="tab2" size="lg">Another Large Tab</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Large tab content</TabsContent>
      <TabsContent value="tab2">More large content</TabsContent>
    </Tabs>
  ),
};