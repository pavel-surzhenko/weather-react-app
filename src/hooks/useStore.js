import { useContext } from "react";
import { Context } from "../lib/Provider";

export const useStore = () => {
    const store = useContext(Context);

    return store;
};
