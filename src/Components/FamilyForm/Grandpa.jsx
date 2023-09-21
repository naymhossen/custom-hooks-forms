import { createContext, useState } from "react";
import Ancale from "./Ancale";
import Aunti from "./Aunti";
import Dad from "./Dad";

export const AssetContext = createContext("💎💎");
export const MoneyContext = createContext(2000);

const Grandpa = () => {
    const [money, setMoney] = useState(2000)
  const asset = "👑";
  return (
    <div className="border border-zinc-200 m-4 p-5 rounded-xl bg-yellow-600">
      <h2>Grandpa</h2>
      <h2>Net Money: ${money}</h2>
      <div className="flex">
        <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="💎">
          <Dad asset={asset}></Dad>
          <Ancale asset={asset}></Ancale>
          <Aunti></Aunti>
        </AssetContext.Provider>
        </MoneyContext.Provider>
      </div>
    </div>
  );
};

export default Grandpa;
