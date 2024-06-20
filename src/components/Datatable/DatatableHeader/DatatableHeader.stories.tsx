import { Meta, StoryFn } from "@storybook/react";
import DatatableHeader from "./DatatableHeader";

export default {
  title: "Components/Datatable/DatatableHeader",
  component: DatatableHeader,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args: any) => <DatatableHeader {...args} />;

export const Default = Template.bind({});
