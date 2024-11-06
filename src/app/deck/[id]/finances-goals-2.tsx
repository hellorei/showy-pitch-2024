import clsx from "clsx";
import humanFormat from "human-format";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dataCashFlowGraphic, dataFinancialModel } from "./unitEconomics";

const formatTooltipValue = (value: number): string => {
  return humanFormat(value);
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
      <div className="bg-gray-800 bg-opacity-75 py-1 px-3 rounded shadow-lg">
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

const stages = dataFinancialModel;
const data = dataCashFlowGraphic;
export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wide font-medium pb-2 mr-auto text-left">
        Finances - Pre-Seed Financial OKRs
      </p>
      {/* 
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Simple • Scalable • Extensible
      </p>
        */}
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-x-auto pt-8">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-white/40">
                <th className="py-1 px-3 border-b-2 border-black border-r rounded-tl-xl">
                  Quarter
                </th>
                <th className="py-1 px-3 border-b-2 border-r font-narrow uppercase text-lg border-black">
                  Q1
                </th>
                <th className="py-1 px-3 border-b-2 border-r font-narrow uppercase text-lg border-black">
                  Q2
                </th>
                <th className="py-1 px-3 border-b-2 border-r font-narrow uppercase text-lg border-black">
                  Q3
                </th>
                <th className="py-1 px-3 border-b-2 border-r font-narrow uppercase text-lg border-black rounded-tr-xl">
                  Q4
                </th>
              </tr>
            </thead>
            <tbody className="">
              {stages.map((stage, index) => (
                <tr
                  key={index}
                  className={clsx(
                    stage.metric === "divider"
                      ? "bg-black"
                      : index % 2 === 0
                      ? "bg-white/10"
                      : "bg-white/5"
                  )}
                >
                  <td
                    className={clsx(
                      "py-0.5 px-3 border-t border-r border-black font-medium bg-white/10",
                      stage.highlighted ? "font-bold" : "opacity-70"
                    )}
                  >
                    {stage.metric === "divider" ? "" : stage.metric}
                  </td>
                  <td
                    className={clsx(
                      "py-0.5 px-3 border-t border-r border-black",
                      stage.highlighted ? "font-bold" : "opacity-70"
                    )}
                  >
                    {stage.q1}
                  </td>
                  <td
                    className={clsx(
                      "py-0.5 px-3 border-t border-r border-black",
                      stage.highlighted ? "font-bold" : "opacity-70"
                    )}
                  >
                    {stage.q2}
                  </td>
                  <td
                    className={clsx(
                      "py-0.5 px-3 border-t border-r border-black",
                      stage.highlighted ? "font-bold" : "opacity-70"
                    )}
                  >
                    {stage.q3}
                  </td>
                  <td
                    className={clsx(
                      "py-0.5 px-3 border-t border-r border-black",
                      stage.highlighted ? "font-bold" : "opacity-70"
                    )}
                  >
                    {stage.q4}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-40 text-xs text-or">
          <ResponsiveContainer width="100%" height={420}>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={0} // Remove gap between bars
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="quarter" stroke="#9CA3AF" />
              <YAxis
                stroke="#9CA3AF"
                tickFormatter={(value) => `$${value / 1000}K`}
                domain={[-100000, 250000]}
                ticks={[
                  -100000, -50000, 0, 50000, 100000, 150000, 200000, 250000,
                ]}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
              />
              <Legend />
              <Bar
                dataKey="cashFlow"
                name="Cash Flow"
                stroke="#6366f1"
                fill="#4f46e5"
                fillOpacity={0.8}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="burn"
                name="Burn"
                stroke="#f97316"
                fill="#f97316"
                fillOpacity={0.8}
                radius={[4, 4, 0, 0]}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
