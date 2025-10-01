"use client";

import React, { useState } from "react";

interface Props {
  base: string;
  target: string;
  rate: number; // base → target rate
}

const ExchangeRatesConversionForm: React.FC<Props> = ({ rate }) => {
  const [baseAmount, setBaseAmount] = useState<number>(1);
  const [targetAmount, setTargetAmount] = useState<number>(rate);

  // Handle base currency input change
  const handleBaseChange = (value: string) => {
    const amount = parseFloat(value);
    if (!isNaN(amount)) {
      setBaseAmount(Math.round(amount * 10000) / 10000);
      setTargetAmount(Math.round(amount * rate * 10000) / 10000);
    } else {
      setBaseAmount(0);
      setTargetAmount(0);
    }
  };

  // Handle target currency input change (inverse calculation)
  const handleTargetChange = (value: string) => {
    const amount = parseFloat(value);
    if (!isNaN(amount)) {
      setTargetAmount(Math.round(amount * 10000) / 10000);
      setBaseAmount(Math.round((amount / rate) * 10000) / 10000);
    } else {
      setBaseAmount(0);
      setTargetAmount(0);
    }
  };

  return (
    <div className="flex justify-between">
      <div>
        <label>
          <div>Amount:</div>
          <input
            type="number"
            value={baseAmount}
            onChange={(e) => handleBaseChange(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-[250px] bg-white"
          />
        </label>
      </div>
      <div>=</div>
      <div>
        <label>
          <div>Amount:</div>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => handleTargetChange(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-[250px] bg-white"
          />
        </label>
      </div>
    </div>
  );
};

export default ExchangeRatesConversionForm;
