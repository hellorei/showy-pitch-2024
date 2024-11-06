import clsx from "clsx";
import humanFormat from "human-format";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dataGrowthModel, dataGrowthModelGraphic } from "./unitEconomics";

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

const stages = dataGrowthModel;
const data = dataGrowthModelGraphic;

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wide font-medium pb-2 mr-auto text-left">
        Finances - Pre-Seed
      </p>
      <p className="text-slate-400 text-xl font-base mr-auto text-left">
        Go-to-market & Growth OKRs
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-x-auto pt-8">
          <table className="min-w-full text-base text-left">
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
        <div className="h-40 text-xs">
          <ResponsiveContainer width="100%" height={420}>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="quarter" stroke="#9CA3AF" />
              <YAxis
                yAxisId="left"
                stroke="#8884d8"
                tickFormatter={(value) => `${value / 1000}K`}
                domain={[0, 130000]}
                ticks={[
                  0, 5000, 10000, 20000, 30000, 40000, 50000, 60000, 70000,
                  80000, 90000, 95000, 100000,
                ]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#10B981"
                tickFormatter={(value) => `$${value / 1000}K`}
                domain={[0, 130000]}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
              />
              <Legend />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="users"
                name="Users"
                stroke="#8884d8"
                fill="url(#colorUsers)"
                strokeWidth={2}
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="mrr"
                name="MRR"
                stroke="#10B981"
                fill="url(#colorMrr)"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
