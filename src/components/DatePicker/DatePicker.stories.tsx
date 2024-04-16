import { Meta, StoryFn } from "@storybook/react";
import DatePicker from "./DatePicker";

export default {
    title: "Components/DatePicker",
    component: DatePicker,
    tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args: any) => <DatePicker {...args} />;

export const Default = Template.bind({});
