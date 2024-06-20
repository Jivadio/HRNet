import { Meta, StoryFn } from "@storybook/react";
import Datatable from "./Datatable";

export default {
  title: "Components/Datatable",
  component: Datatable,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args: any) => <Datatable {...args} />;

export const Default = Template.bind({});
