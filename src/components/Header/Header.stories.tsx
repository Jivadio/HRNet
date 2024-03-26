import { Meta, Story } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Layouts/Header",
  component: Header,
} as Meta;

const Template: Story = (args: any) => <Header {...args} />;

export const Default = Template.bind({});
