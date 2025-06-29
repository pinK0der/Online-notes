import { useState } from "react";

export function InputTTL({ ttl, setTtl }: { ttl: number; setTtl: (value: number) => void }) {
    const [amount, setAmount] = useState(5);
    const [unit, setUnit] = useState("minutes");

    const updateTTL = (amt: number, u: string) => {
        let seconds = amt;
        if (u === "minutes") seconds = amt * 60;
        if (u === "hours") seconds = amt * 60 * 60;
        if (u === "days") seconds = amt * 60 * 60 * 24;
        setTtl(seconds);

        console.log("updateTTL time: ", seconds);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, parseInt(e.target.value) || 0);
        setAmount(value);
        updateTTL(value, unit);
    };

    const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const u = e.target.value;
        setUnit(u);
        updateTTL(amount, u);
    };

    return (
        <div className="flex flex-row justify-center items-center space-x-4">

            <input
                type="number"
                min={0}
                value={amount}
                onChange={handleAmountChange}
                className="w-24 backdrop-blur-md bg-white/5 border border-white/30 rounded-xl shadow-lg p-2 text-white placeholder-white/70 focus:outline-none"
                placeholder="Number"
            />

            <select
                value={unit}
                onChange={handleUnitChange}
                className="backdrop-blur-md bg-white/5 border border-white/30 rounded-xl shadow-lg p-2 text-white focus:outline-none appearance-none cursor-pointer"
            >
                <option className="bg-black text-white" value="minutes">minutes</option>
                <option className="bg-black text-white" value="hours">hours</option>
                <option className="bg-black text-white" value="days">days</option>
            </select>

            <p className="text-white/70">Note will live for {ttl} seconds</p>
        </div>
    );
}
