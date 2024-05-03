import { Meta, StoryFn } from "@storybook/react";
import DropDown from "./DropDown";

export default {
  title: "Components/DropDown",
  component: DropDown,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args: any) => <DropDown {...args} />;

export const Default = Template.bind({});
