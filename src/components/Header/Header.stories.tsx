import { Meta, StoryFn } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Layouts/Header",
  component: Header,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args: any) => <Header {...args} />;

export const Default = Template.bind({});
