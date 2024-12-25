import { Provider } from "react-redux";
import { FC, PropsWithChildren } from "react";
import { store } from "./store";

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
