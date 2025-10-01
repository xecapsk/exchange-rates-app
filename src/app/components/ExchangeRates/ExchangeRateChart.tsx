"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { HistoricalRate } from "@/types/exchangeRates";
import { fetchHistoricalRates } from "@/services/exchangeRates";
import { DateTime } from "luxon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  base: string;
  target: string;
}

const ExchangeRateChart: React.FC<Props> = ({ base, target }) => {
  const [data, setData] = useState<HistoricalRate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const rates = await fetchHistoricalRates(base, target);
      if (rates) setData(rates);
      setLoading(false);
    };
    loadData();
  }, [base, target]);

  if (loading) return <p>Loading chart...</p>;
  if (data.length === 0) return <p>No historical data available.</p>;

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: `Historical Rates: ${base} / ${target}` },
    },
  };

  return (
    <Line
      options={options}
      className="bg-white mt-5 p-3"
      datasetIdKey="id"
      data={{
        labels: data.map((d, index) =>
          index % 5 === 0
            ? DateTime.fromISO(d.recorded_at).toFormat("MMM dd HH:mm")
            : ""
        ),
        datasets: [
          {
            label: `${base} / ${target}`,
            data: data.map((d) => d.rate),
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      }}
    />
  );
};

export default ExchangeRateChart;
