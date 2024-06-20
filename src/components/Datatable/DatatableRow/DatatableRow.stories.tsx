import { Meta, StoryFn } from "@storybook/react";
import DatatableRow from "./DatatableRow";

export default {
  title: "Components/Datatable/DatatableRow",
  component: DatatableRow,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args: any) => <DatatableRow {...args} />;

export const Default = Template.bind({});
