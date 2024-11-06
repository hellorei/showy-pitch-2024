import clsx from "clsx";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  arpuGoals,
  cacGoals,
  conversionRates,
  data,
  ltvCacRatioGoals,
  ltvGoals,
  marginGoals,
  revenueGoals,
  userAcquisitionGoals,
} from "./unitEconomics";

const formatYAxis = (value: number): string => {
  return `$${value}M`;
};

const formatTooltipValue = (value: number): string => {
  return `$${value.toFixed(2)}M`;
};

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 bg-opacity-75 py-1 px-4 rounded shadow-lg">
        <p className="text-gray-200 font-bold">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${formatTooltipValue(entry.value)}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const stages = [
  {
    metric: "Investment",
    preSeed: `$${data[0].Investment}M`,
    seed: `$${data[1].Investment}M+`,
    seriesA: `$${data[2].Investment}M+`,
    highlighted: true,
  },
  {
    metric: "Users",
    preSeed: `${userAcquisitionGoals[0] * 100}K`,
    seed: `${userAcquisitionGoals[1] * 100}K`,
    seriesA: `${userAcquisitionGoals[2]}M`,
    highlighted: true,
  },
  {
    metric: "CR",
    preSeed: `${conversionRates[0] * 100}%`,
    seed: `${(conversionRates[1] * 100).toFixed(1)}%`,
    seriesA: `${conversionRates[2] * 100}%`,
  },
  {
    metric: "ARPU",
    preSeed: `$${arpuGoals[0]}`,
    seed: `$${arpuGoals[1]}`,
    seriesA: `$${arpuGoals[2]}`,
  },
  {
    metric: "Revenue (ARR)",
    preSeed: `$${data[0].ARR}M`,
    seed: `~$${data[1].ARR}M`,
    seriesA: `~$${data[2].ARR}M`,
    highlighted: true,
  },
  {
    metric: "Gross Margin",
    preSeed: `${(marginGoals[0] * 100).toFixed(0)}%`,
    seed: `${(marginGoals[1] * 100).toFixed(0)}%`,
    seriesA: `${(marginGoals[2] * 100).toFixed(0)}%`,
  },
  {
    metric: "Gross Profit",
    preSeed: `$${data[0].GrossProfit}M`,
    seed: `~$${data[1].GrossProfit}M`,
    seriesA: `~$${data[2].GrossProfit}M`,
    highlighted: true,
  },
  {
    metric: "CAC",
    preSeed: `$${cacGoals[0]}`,
    seed: `$${cacGoals[1]}`,
    seriesA: `$${cacGoals[2]}`,
  },
  {
    metric: "LTV",
    preSeed: `$${ltvGoals[0]}`,
    seed: `$${ltvGoals[1]}`,
    seriesA: `$${ltvGoals[2]}`,
  },
  {
    metric: "LTV / CAC",
    preSeed: `${ltvCacRatioGoals[0].toFixed(1)}x`,
    seed: `${ltvCacRatioGoals[1].toFixed(1)}x`,
    seriesA: `${ltvCacRatioGoals[2].toFixed(1)}x`,
  },
  {
    metric: "Revenue LTV",
    preSeed: `$${revenueGoals[0]}M`,
    seed: `$${revenueGoals[1]}M`,
    seriesA: `$${revenueGoals[2]}M`,
    highlighted: true,
  },
];
export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wide font-medium pb-2 mr-auto text-left">
        Projections
      </p>
      {/* 
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Simple • Scalable • Extensible
      </p>
        */}
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-base text-left">
            <thead>
              <tr className="bg-white/10">
                <th className="py-1 px-4 border-b-2 border-black border-r-4 rounded-tl-xl">
                  Stage
                </th>
                <th className="py-1 px-4 border-b-2 border-r-2 font-narrow uppercase text-lg border-black">
                  Pre-seed
                </th>
                <th className="py-1 px-4 border-b-2 border-r-2 font-narrow uppercase text-lg border-black">
                  Seed
                </th>
                <th className="py-1 px-4 border-b-2 border-r-2 font-narrow uppercase text-lg border-black rounded-tr-xl">
                  Series A
                </th>
              </tr>
            </thead>
            <tbody className="">
              {stages.map((stage, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? "bg-gray-600/10" : "bg-gray-500/10"
                  }
                >
                  <td
                    className={clsx(
                      "py-1 px-4 border-b-2 border-black font-medium border-r-4 rounded-bl-xl",
                      stage.highlighted ? "font-bold" : "opacity-60"
                    )}
                  >
                    {stage.metric}
                  </td>
                  <td
                    className={clsx(
                      "py-1 px-4 border-b-2 border-r-2 border-black",
                      stage.highlighted ? "font-bold" : "opacity-60"
                    )}
                  >
                    {stage.preSeed}
                  </td>
                  <td
                    className={clsx(
                      "py-1 px-4 border-b-2 border-r-2 border-black",
                      stage.highlighted ? "font-bold" : "opacity-60"
                    )}
                  >
                    {stage.seed}
                  </td>
                  <td
                    className={clsx(
                      "py-1 px-4 border-b-2 border-r-2 border-black rounded-br-xl",
                      stage.highlighted ? "font-bold" : "opacity-60"
                    )}
                  >
                    {stage.seriesA}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-40 text-xs">
          <ResponsiveContainer width="100%" height={420}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorARR" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="colorGrossProfit"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="colorInvestment"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis
                dataKey="year"
                stroke="#9CA3AF"
                tick={{ fill: "#9CA3AF" }}
              />
              <YAxis
                stroke="#9CA3AF"
                tick={{ fill: "#9CA3AF" }}
                tickFormatter={formatYAxis}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: "#9CA3AF" }} />
              <Area
                type="monotone"
                dataKey="ARR"
                name="Annual Recurring Revenue"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorARR)"
              />
              <Area
                type="monotone"
                dataKey="GrossProfit"
                name="Gross Profit"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorGrossProfit)"
              />
              <Area
                type="monotone"
                dataKey="Investment"
                name="Investment"
                stroke="#F59E0B"
                fillOpacity={1}
                fill="url(#colorInvestment)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
