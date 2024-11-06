import clsx from "clsx";
import humanFormat from "human-format";
import { Cable, FileLock, MessageSquareLock } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  averageRevenuePerUser,
  cacPerUser,
  churn,
  ltvCacRatio,
  ltvPerUser,
  margin,
  monthlyRevenuePerUser,
  monthsToLTV,
  paybackTimePeriod,
} from "./unitEconomics";

const timeToPayback = monthsToLTV - paybackTimePeriod;

const calculatePaybackData = (totalUsers = 1) => {
  const data = [];
  let cumulativePayback = -cacPerUser * totalUsers;

  for (let month = 0; month <= monthsToLTV; month++) {
    if (month > 0) {
      // // Add monthly revenue until we reach LTV
      // const remainingToLTV =
      //   ltvPerUser * totalUsers - (cumulativePayback + cacPerUser * totalUsers);
      // const monthlyIncrease = Math.min(
      //   monthlyRevenuePerUser * totalUsers,
      //   remainingToLTV
      // );
      const monthlyIncrease = monthlyRevenuePerUser * totalUsers;
      cumulativePayback += monthlyIncrease;
    }

    data.push({
      month,
      value: cumulativePayback,
      CAC: cumulativePayback < 0 ? cumulativePayback : 0,
      Payback: cumulativePayback > 0 ? cumulativePayback : 0,
      Breakeven: 0,
    });
  }

  return data;
};
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

const CACPaybackChart = ({
  totalUsers = 1,
  ltvPerUser = 1,
  cacPerUser = 1,
}) => {
  const data = calculatePaybackData(totalUsers);

  return (
    <ResponsiveContainer width="100%" height={420}>
      <AreaChart data={data} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis
          dataKey="month"
          label={{
            value: "Months",
            position: "insideBottomRight",
            offset: -10,
          }}
          // ticks={[0, 4, 8, 12, 16, 20, 24]} // Custom ticks every 4 months
        />
        <YAxis
          label={{
            value: "Revenue",
            angle: -90,
            position: "insideTopLeft",
            offset: 15,
            dy: 33,
          }}
          domain={[-cacPerUser * totalUsers, ltvPerUser * totalUsers]}
          // ticks={[-cacPerUser, 0, 50, 100, 150, 200, 250]}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
        <Legend />

        {/* Negative CAC area */}
        <Area
          type="monotone"
          dataKey="CAC"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
          stackId="1"
          name="Acquisition Balance"
        />

        {/* Positive Payback area */}
        <Area
          type="monotone"
          dataKey="Payback"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
          stackId="1"
          name="Payback"
        />

        {/* Breakeven line */}
        <Line
          type="monotone"
          dataKey="Breakeven"
          stroke="#666"
          strokeDasharray="3 3"
          name="Break-even"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);

  const retention = [
    {
      key: (
        <>
          Storage Lock-in:{" "}
          <span className="text-slate-400 ">Pain to migrate out</span>
        </>
      ),
      icon: (
        <FileLock
          className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
          size={24}
          strokeWidth={1}
        />
      ),
    },
    {
      key: (
        <>
          Aggressive Pricing:{" "}
          <span className="text-slate-400 ">Accessible to all actors</span>
        </>
      ),
      icon: (
        <MessageSquareLock
          className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
          size={24}
          strokeWidth={1}
        />
      ),
    },
    {
      key: (
        <>
          Integration & Automation:{" "}
          <span className="text-slate-400 ">Facilitates adoption</span>
        </>
      ),
      icon: (
        <Cable
          className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
          size={24}
          strokeWidth={1}
        />
      ),
    },
  ];

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wide font-medium pb-2 mr-auto text-left">
        Finances - Pre-Seed
      </p>
      <div className="grid grid-cols-5 gap-8 items-center">
        <div className="col-span-2 flex flex-col space-y-2">
          <div className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
            Lifetime & Customer Acquisition
          </div>
          <div className="rounded-xl border-2 border-indigo-500 grid grid-cols-3">
            <div className="flex flex-col items-center p-4">
              <div className="font-bold text-4xl font-narrow">
                <span className="font-semibold mr-1 text-xl">$</span>
                {cacPerUser}
              </div>
              <div className="text-sm font-bold">CAC</div>
            </div>
            <div className="flex flex-col items-center p-4 border-l border-dashed border-indigo-500 mb-2">
              <div className="font-bold text-4xl font-narrow">
                <span className="font-semibold mr-1 text-xl">$</span>
                {ltvPerUser}
              </div>
              <div className="text-sm font-bold">LTV</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-indigo-500 rounded-r-lg">
              <div className="font-bold text-4xl font-narrow">
                {ltvCacRatio.toFixed(1)}x
              </div>
              <div className="text-sm font-bold">LTV / CAC</div>
            </div>
          </div>
          <p className="text-xs italic text-slate-300"></p>
          <div className="rounded-xl grid grid-cols-3">
            <div className=" col-span-2 pr-2">
              <div className="flex flex-col items-start text-left text-xs text-slate-400 px-4 w-full py-2 border-2 border-dashed border-slate-700 rounded-lg relative">
                <div className="font-bold">Metrics</div>
                <div>ARPU / Mo: ${averageRevenuePerUser}</div>
                <div>Gross Margin: {margin * 100}%</div>
                <div>Churn: {churn * 100}%</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pb-2 border-2 border-dashed border-emerald-500 rounded-lg relative">
              <div className="absolute -top-5 left-1/2 w-1 h-5 border-l-2 border-dashed border-emerald-500"></div>
              <div className="font-bold text-4xl font-narrow">
                {timeToPayback}
                <span className="font-bold ml-1 text-xl">Mo</span>
              </div>
              <div className="text-sm font-bold">to Payback</div>
            </div>
          </div>
          <div className="text-slate-400 text-base font-base mr-auto text-left mt-4">
            Key Tactics
          </div>
          <ol className={clsx("flex flex-col items-left mt-4 space-y-2")}>
            {retention?.map((item, index) => (
              <li
                key={`retention-${index}-${index}`}
                className={clsx(
                  "text-sm leading-[1.1] text-slate-200 text-center flex items-center justify-start border rounded-xl border-slate-700 space-x-1",
                  "px-3 py-2"
                )}
              >
                {item.icon}
                <span>{item.key}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="col-span-3 text-xs pt-12">
          <CACPaybackChart
            totalUsers={1}
            ltvPerUser={ltvPerUser}
            cacPerUser={cacPerUser}
          />
        </div>
      </div>
      {/* 
      <div className="overflow-x-auto text-xs">
        <div>LTV = ARPU × Gross Margin × (1/Monthly Churn)</div>
        <div>LTV = $25 × 0.75 × (1/0.05) = $375</div>
        <div>Target CAC: $80 (based on similar content-focused platforms)</div>
        <div>LTV/CAC ratio: 4.7:1 ($375/$80) {ltvCacRatio.toFixed(2)}</div>
        <div>CAC payback period: ~4 months</div>
        <div>lifetime: {lifetime}</div>
        <div>averageRevenuePerUser: {averageRevenuePerUser}</div>
        <div>margin: {margin}</div>
        <div>churn: {churn}</div>
        <div>ltvPerUser: {ltvPerUser}</div>
        <div>cacPerUser: {cacPerUser}</div>
        <div>ltvCacRatio: {ltvCacRatio}</div>
        <div>monthlyRevenuePerUser: {monthlyRevenuePerUser}</div>
        <div>monthsToLTV: {monthsToLTV}</div>
        <div>paybackTimePeriod: {paybackTimePeriod}</div>
        <div>timeToPayback: {timeToPayback}</div>
      </div>
       */}
    </div>
  );
}
