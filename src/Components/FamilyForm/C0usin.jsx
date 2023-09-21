import Friend from "./Friend";
import Friends from "./Friends";

/* eslint-disable react/prop-types */
const C0usin = ({name, asset}) => {
    return (
        <div className="border border-zinc-200 m-4 p-5 rounded-xl bg-green-900">
            <h2>Cousin</h2>
            <p>{name}</p>
           <section>
           {asset && <Friends asset={asset}></Friends>}
           {name === "Ruksana" && <Friend></Friend>}
           </section>
        </div>
    );
};

export default C0usin;