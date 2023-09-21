import Friends from "./Friends";

const Myself = ({asset}) => {
    return (
        <div className="border border-zinc-200 m-4 p-2 rounded-xl bg-pink-500">
            <h2>Myself</h2>
            <section className="flex">
                <Friends asset={asset}></Friends>
            </section>
        </div>
    );
};

export default Myself;