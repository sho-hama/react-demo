import {Page2} from "../components/Page2";
import {UrlParameter} from "../UrlParameter";

export const page2Routes = [
    {
        path: "",
        exact: true,
        children: <Page2 />
    },
    {
        path: "/:id",
        exact: false,
        children: <UrlParameter />
    }
]
