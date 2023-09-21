import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Dad = ({asset}) => {
    return (
        <div className="border border-zinc-200 m-4 p-2 rounded-xl bg-pink-600">
            <h2>Dad</h2>
           <div className="flex">
           <Myself asset={asset}></Myself>
            <Brother></Brother>
            <Sister></Sister>
           </div>
        </div>
    );
};

export default Dad;