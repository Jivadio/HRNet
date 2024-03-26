import { Meta, Story } from "@storybook/react";
import Layout from "./Layout";

export default {
  title: "Layouts/Layout",
  component: Layout,
  tags: ["autodocs"],
} as Meta;

const Template: Story = (args: any) => <Layout {...args} />;

export const Default = Template.bind({});
