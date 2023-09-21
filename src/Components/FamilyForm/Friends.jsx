import { useContext } from "react";
import { AssetContext } from "./Grandpa";

/* eslint-disable react/prop-types */
const Friends = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div className="border border-zinc-200 m-4 p-2 rounded-xl bg-pink-900">
            <h2>Special</h2>
            <p>{asset}</p>
            <h1>{gift}</h1>
        </div>
    );
};

export default Friends;