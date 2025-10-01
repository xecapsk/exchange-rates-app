"use client";

import React from "react";
import { ExchangeRate } from "../../../types/exchangeRates";
import { DateTime } from "luxon";

interface Props {
  rate: ExchangeRate;
}

const ExchangeRateTable: React.FC<Props> = ({ rate }) => {
  return (
    <table className="min-w-full border-collapse mt-[20px] bg-blue-200">
      <tbody>
        {/* Normal pair */}
        <tr>
          <td className="p-[8px]">
            {rate.base_currency} / {rate.target_currency}
          </td>
          <td className="p-[8px]">
            <b>{rate.rate.toFixed(4)}</b> on{" "}
            {DateTime.fromISO(rate.recorded_at).toFormat("dd-MM-yyyy HH:mm")}
          </td>
        </tr>
        {/* Inverse pair */}
        <tr>
          <td className="p-[8px]">
            {rate.target_currency} / {rate.base_currency}
          </td>
          <td className="p-[8px]">
            <b>{(1 / rate.rate).toFixed(4)}</b> on{" "}
            {DateTime.fromISO(rate.recorded_at).toFormat("dd-MM-yyyy HH:mm")}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExchangeRateTable;
