import React, {FC} from "react";
import { Outlet} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const RootLayout: FC = () => {
    return  <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}