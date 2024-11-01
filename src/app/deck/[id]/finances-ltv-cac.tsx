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

const calculatePaybackData = (totalUsers = 1) => {
  const ltvPerUser = 375;
  const cacPerUser = 80;
  const monthlyRevenuePerUser = 25 * 0.75; // $25 ARPU × 75% margin
  const monthsToLTV = Math.ceil(ltvPerUser / monthlyRevenuePerUser); // ~20 months

  const data = [];
  let cumulativePayback = -cacPerUser * totalUsers;

  for (let month = 0; month <= monthsToLTV; month++) {
    if (month > 0) {
      // Add monthly revenue until we reach LTV
      const remainingToLTV =
        ltvPerUser * totalUsers - (cumulativePayback + cacPerUser * totalUsers);
      const monthlyIncrease = Math.min(
        monthlyRevenuePerUser * totalUsers,
        remainingToLTV
      );
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

const CACPaybackChart = ({ totalUsers = 1 }) => {
  const data = calculatePaybackData(totalUsers);

  return (
    <ResponsiveContainer width="100%" height={340}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          label={{
            value: "Customer Lifetime (Months)",
            position: "insideBottomRight",
            offset: 0,
          }}
          ticks={[0, 4, 8, 12, 16, 20, 24]} // Custom ticks every 4 months
        />
        <YAxis
          label={{ value: "MRR", angle: -90, position: "insideLeft" }}
          domain={[-80, 300]}
          ticks={[-80, 0, 60, 120, 180, 240, 300]}
        />
        <Tooltip formatter={(value: any) => value?.toFixed(2)} />
        <Legend />

        {/* Negative CAC area */}
        <Area
          type="monotone"
          dataKey="CAC"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
          stackId="1"
        />

        {/* Positive Payback area */}
        <Area
          type="monotone"
          dataKey="Payback"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.5}
          stackId="1"
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
  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wide font-medium pb-2 mr-auto text-left">
        Go-To-Market
      </p>
      {/* 
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Simple • Scalable • Extensible
      </p>
        */}
      <div className="h-40 text-xs">
        <CACPaybackChart totalUsers={1} />
      </div>
      <div className="overflow-x-auto text-xs">
        <div>LTV = ARPU × Gross Margin × (1/Monthly Churn)</div>
        <div>LTV = $25 × 0.75 × (1/0.05) = $375</div>
        <div>Target CAC: $80 (based on similar content-focused platforms)</div>
        <div>LTV/CAC ratio: 4.7:1 ($375/$80)</div>
        <div>CAC payback period: ~4 months</div>
      </div>
      {/* 
        <table className="min-w-full text-base text-left">
          <thead>
            <tr className="bg-white/10">
              <th className="py-2 px-6 border-b-2 border-black border-r-4 rounded-tl-xl">
                Metric
              </th>
              <th className="py-2 px-6 border-b-2 border-r-2 font-narrow uppercase text-3xl border-black">
                Pre-seed
              </th>
              <th className="py-2 px-6 border-b-2 border-r-2 font-narrow uppercase text-3xl border-black">
                Seed
              </th>
              <th className="py-2 px-6 border-b-2 border-r-2 font-narrow uppercase text-3xl border-black rounded-tr-xl">
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
                    "py-2 px-6 border-b-2 border-black font-medium border-r-4 rounded-bl-xl",
                    stage.highlighted ? "font-bold" : "opacity-60"
                  )}
                >
                  {stage.metric}
                </td>
                <td
                  className={clsx(
                    "py-2 px-6 border-b-2 border-r-2 border-black",
                    stage.highlighted ? "font-bold" : "opacity-60"
                  )}
                >
                  {stage.preSeed}
                </td>
                <td
                  className={clsx(
                    "py-2 px-6 border-b-2 border-r-2 border-black",
                    stage.highlighted ? "font-bold" : "opacity-60"
                  )}
                >
                  {stage.seed}
                </td>
                <td
                  className={clsx(
                    "py-2 px-6 border-b-2 border-r-2 border-black rounded-br-xl",
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
         */}
    </div>
  );
}
