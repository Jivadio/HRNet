import { Meta, StoryFn } from "@storybook/react";
import Layout from "./Layout";

export default {
  title: "Layouts/Layout",
  component: Layout,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args: any) => <Layout {...args} />;

export const Default = Template.bind({});
