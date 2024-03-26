import { Meta, Story } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Layouts/Footer",
  component: Footer,
} as Meta;

const Template: Story = (args: any) => <Footer {...args} />;

export const Default = Template.bind({});
