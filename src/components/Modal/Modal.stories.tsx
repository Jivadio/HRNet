import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args: any) => <Modal {...args} />;

export const Default = Template.bind({});
