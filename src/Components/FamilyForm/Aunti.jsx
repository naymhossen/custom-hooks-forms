import { useContext } from "react";
import C0usin from "./C0usin";
import { MoneyContext } from "./Grandpa";


const Aunti = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className="border border-zinc-200 m-4 p-2 rounded-xl bg-red-600">
            <h2>Aunti</h2>
            <section className="flex">
                <C0usin name={'Rubaya'}></C0usin>
                <C0usin name={'Ruksana'}></C0usin>
            </section>
            <h3>Money: ${money}</h3>
            <button onClick={() => setMoney(money + 1000)}>Add $2000</button>
        </div>
    );
};

export default Aunti;