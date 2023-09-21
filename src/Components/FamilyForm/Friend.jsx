import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Friend = () => {
    const gift = useContext(AssetContext);
    return (
        <div className="border border-zinc-200 m-4 p-5 rounded-xl bg-orange-400">
            <h2>Friend</h2>
            <h1>{gift}</h1>
        </div>
    );
};

export default Friend;