import C0usin from "./C0usin";

const Ancale = ({asset}) => {
    return (
        <div className="border border-zinc-200 m-4 p-5 rounded-xl bg-green-600">
            <h2>Uncale</h2>
            <section className="flex">
                <C0usin asset={asset} name={'Rufsun'}></C0usin>
                <C0usin name={'Sohana'}></C0usin>
            </section>
        </div>
    );
};

export default Ancale;