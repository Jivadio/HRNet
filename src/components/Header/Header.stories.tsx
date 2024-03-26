import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from "./Header";
import { JSX } from "react/jsx-runtime";

export default {
  title: "Layouts/Header",
  component: Header,
} as Meta;

const Template: Story = (args: JSX.IntrinsicAttributes) => <Header {...args} />;

export const Default = Template.bind({});
