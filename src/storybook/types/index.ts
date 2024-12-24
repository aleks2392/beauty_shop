import { Preview } from "@storybook/react";

type ExtractArrayType<T> = T extends Array<infer U> ? U : never;

export type Decorator = ExtractArrayType<Preview["decorators"]>;
