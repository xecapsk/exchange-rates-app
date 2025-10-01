"use client";

import React, { useEffect, useState } from "react";
import {
  fetchExchangeRates,
  fetchCurrencies,
} from "../../../services/exchangeRates";
import { ExchangeRate } from "../../../types/exchangeRates";
import ExchangeRateChart from "./ExchangeRateChart";
import ExchangeRatesConversionForm from "./ExchangeRatesConversionForm";
import ExchangeRateTable from "./ExchangeRateTable";
import CurrencySelector from "../CurrencySelector";
import { CurrencyInfo } from "../../../types/currencies";

const ExchangeRatesClient: React.FC = () => {
  const [rates, setRates] = useState<ExchangeRate[]>([]);
  const [currencies, setCurrencies] = useState<CurrencyInfo[]>([]);
  const [base, setBase] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [rateData, currencyData] = await Promise.all([
          fetchExchangeRates(),
          fetchCurrencies(),
        ]);
        if (rateData && currencyData) {
          setRates(rateData);
          setCurrencies(currencyData);
          setBase(currencyData[0]?.code || "");
          console.log("currencyData", currencyData);
          const firstTarget =
            currencyData.find((c) => c.code !== currencyData[0].code)?.code ||
            "";

          console.log("Setting initial target to:", firstTarget);
          setTarget(firstTarget);
        } else {
          setError("Failed to load data");
        }
      } catch {
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filteredRate = rates.find(
    (rate) => rate.base_currency === base && rate.target_currency === target
  );

  return (
    <div>
      <CurrencySelector
        base={base}
        target={target}
        currencies={currencies}
        onBaseChange={(newBase) => {
          setBase(newBase);
          if (newBase === target) {
            const firstAvailable =
              currencies.find((c) => c.code !== newBase)?.code || "";
            setTarget(firstAvailable);
          }
        }}
        onTargetChange={setTarget}
      />

      {filteredRate && (
        <ExchangeRatesConversionForm
          base={base}
          target={target}
          rate={filteredRate.rate}
        />
      )}

      {!filteredRate ? (
        <p>No exchange rate available for this pair.</p>
      ) : (
        <ExchangeRateTable rate={filteredRate} />
      )}

      {base && target && <ExchangeRateChart base={base} target={target} />}
    </div>
  );
};

export default ExchangeRatesClient;
