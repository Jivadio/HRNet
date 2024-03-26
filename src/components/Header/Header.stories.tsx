import { Meta, Story } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Layouts/Header",
  component: Header,
  tags: ["autodocs"],
} as Meta;

const Template: Story = (args: any) => <Header {...args} />;

export const Default = Template.bind({});
