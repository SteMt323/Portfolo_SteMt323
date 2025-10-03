declare module "@radix-ui/react-alert-dialog" {
  const content: any;
  export = content;
}

declare module "@radix-ui/react-checkbox" {
  const content: any;
  export = content;
}

// Fallbacks for a few packages that may not ship types in this repo snapshot
declare module "input-otp" {
  export const OTPInput: any;
  export const OTPInputContext: any;
  const _default: any;
  export default _default;
}

declare module "cmdk" {
  export const Command: any;
  export const Input: any;
  export const List: any;
  export const Empty: any;
  export const Group: any;
  export const Separator: any;
  export const Item: any;
  const _default: any;
  export default _default;
}
