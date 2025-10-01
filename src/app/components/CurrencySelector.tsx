"use client";

import React from "react";
import { Select } from "./form/select/Select";
import { CurrencyInfo, currencyNames } from "../../types/currencies";

interface Props {
  base: string;
  target: string;
  currencies: CurrencyInfo[];
  onBaseChange: (newBase: string) => void;
  onTargetChange: (newTarget: string) => void;
}

const CurrencySelector: React.FC<Props> = ({
  base,
  target,
  currencies,
  onBaseChange,
  onTargetChange,
}) => {
  return (
    <div className="justify-between flex mb-[20px]">
      <label>
        <Select
          value={base}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onBaseChange(e.target.value)
          }
        >
          {currencies.map((c) => (
            <option key={c.code} value={c.code}>
              {c.code} - {currencyNames[c.code]}
            </option>
          ))}
        </Select>
      </label>

      <label className="ml-[16px]">
        <Select
          value={target}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onTargetChange(e.target.value)
          }
        >
          {currencies
            .filter((c) => c.code !== base)
            .map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} - {currencyNames[c.code]}
              </option>
            ))}
        </Select>
      </label>
    </div>
  );
};

export default CurrencySelector;
