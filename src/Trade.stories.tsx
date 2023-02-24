import { ComponentMeta, Story } from "@storybook/react";
import { Trade, TradeProps } from "./Trade";

export default {
  title: "ConfirmationDialog",
  component: Trade,
} as ComponentMeta<typeof Trade>;

const Template = ({ trade }: TradeProps) => <Trade trade={trade} />;

export const Default: Story<TradeProps> = Template.bind({});
Default.args = {
  trade: { type: "buy", rate: 222222.0, amount: 0.000003 },
};
