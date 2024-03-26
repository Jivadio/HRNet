import { Meta, StoryFn } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Layouts/Footer",
  component: Footer,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args: any) => <Footer {...args} />;

export const Default = Template.bind({});
