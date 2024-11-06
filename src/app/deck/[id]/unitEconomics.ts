import humanFormat from "human-format";

export const lifetime = 24;
export const averageRevenuePerUser = 25;
export const margin = 0.75;
export const churn = 0.05;
export const ltvPerUser = averageRevenuePerUser * lifetime * margin;
export const ltvPerUserWithChurn = averageRevenuePerUser * margin * (1 / churn);
export const cacPerUser = 50;
export const ltvCacRatio = ltvPerUser / cacPerUser;
export const monthlyRevenuePerUser = averageRevenuePerUser * margin;
// export const monthsToLTV = Math.ceil(ltvPerUser / monthlyRevenuePerUser); // ~20 months
export const monthsToLTV = lifetime;
// calculate payback time period
export const paybackTimePeriod = Math.ceil(
  ltvPerUserWithChurn / monthlyRevenuePerUser
);

export const arpuGoals = [averageRevenuePerUser, 28, 32];
export const marginGoals = [margin, 0.75, 0.78];
export const userAcquisitionGoals = [0.1, 0.5, 2]; // Million users
export const conversionRates = [0.04, 0.035, 0.03];

export const cacGoals = [cacPerUser, 60, 80];

export const ltvGoals = [
  ltvPerUser,
  Math.ceil(arpuGoals[1] * (1 / churn) * marginGoals[1]),
  Math.ceil(arpuGoals[1] * (1 / churn) * marginGoals[2]),
];

export const ltvCacRatioGoals = [
  ltvCacRatio,
  ltvGoals[1] / cacGoals[1],
  ltvGoals[2] / cacGoals[2],
];

export const arrGoals = [1.2, 5.88, 41.47];

export const grossProfitGoals = [0.9, 4.41, 31.1];

export const investmentGoals = [0.3, 2, 15];

export const revenueGoals = [
  (
    (ltvGoals[0] * conversionRates[0] * (userAcquisitionGoals[0] * 1000000)) /
    1000000
  ).toFixed(1),
  (
    (ltvGoals[1] * conversionRates[1] * (userAcquisitionGoals[1] * 1000000)) /
    1000000
  ).toFixed(1),
  (
    (ltvGoals[2] * conversionRates[2] * (userAcquisitionGoals[2] * 1000000)) /
    1000000
  ).toFixed(1),
];

export interface DataPoint {
  year: string;
  ARR: number;
  GrossProfit: number;
  Investment: number;
}

export const data: DataPoint[] = [
  {
    year: "Pre-Seed",
    ARR: arrGoals[0],
    GrossProfit: grossProfitGoals[0],
    Investment: investmentGoals[0],
  },
  {
    year: "Seed",
    ARR: arrGoals[1],
    GrossProfit: grossProfitGoals[1],
    Investment: investmentGoals[1],
  },
  {
    year: "Series A",
    ARR: arrGoals[2],
    GrossProfit: grossProfitGoals[2],
    Investment: investmentGoals[2],
  },
];

export const preSeedUsers = [1000, 10000, 40000, 100000];
export const preSeedNewUsers = [
  preSeedUsers[0],
  preSeedUsers[1] - preSeedUsers[0],
  preSeedUsers[2] - preSeedUsers[1],
  preSeedUsers[3] - preSeedUsers[2],
];
export const preSeedUsersGrowthRates = [
  0,
  preSeedNewUsers[1] / preSeedUsers[0],
  preSeedNewUsers[2] / preSeedUsers[1],
  preSeedNewUsers[3] / preSeedUsers[2],
];
export const preSeedArpu = [25, 25, 25, 25];
export const preSeedConversionRates = [0.2, 0.08, 0.06, 0.04];
export const preSeedNewClients = [
  preSeedNewUsers[0] * preSeedConversionRates[0],
  preSeedNewUsers[1] * preSeedConversionRates[1],
  preSeedNewUsers[2] * preSeedConversionRates[2],
  preSeedNewUsers[3] * preSeedConversionRates[3],
];
const q1Clients = preSeedNewClients[0];
const q2Clients = preSeedNewClients[1] + q1Clients;
const q3Clients = preSeedNewClients[2] + q2Clients;
const q4Clients = preSeedNewClients[3] + q3Clients;
export const preSeedClients = [q1Clients, q2Clients, q3Clients, q4Clients];

export const preSeedMrr = [
  preSeedClients[0] * preSeedArpu[0],
  preSeedClients[1] * preSeedArpu[1],
  preSeedClients[2] * preSeedArpu[2],
  preSeedClients[3] * preSeedArpu[3],
];

export const preSeedQuarterRevenue = [
  preSeedMrr[0] * 3,
  preSeedMrr[1] * 3,
  preSeedMrr[2] * 3,
  preSeedMrr[3] * 3,
];

export const preSeedExpensesGrowth = [15000, 24000, 72000, 150000];
export const preSeedExpensesOperations = [70000, 84000, 165000, 249000];
export const preSeedExpensesTotal = [
  preSeedExpensesOperations[0] + preSeedExpensesGrowth[0],
  preSeedExpensesOperations[1] + preSeedExpensesGrowth[1],
  preSeedExpensesOperations[2] + preSeedExpensesGrowth[2],
  preSeedExpensesOperations[3] + preSeedExpensesGrowth[3],
];

export const preSeedGrossProfit = [
  preSeedQuarterRevenue[0] - preSeedExpensesTotal[0],
  preSeedQuarterRevenue[1] - preSeedExpensesTotal[1],
  preSeedQuarterRevenue[2] - preSeedExpensesTotal[2],
  preSeedQuarterRevenue[3] - preSeedExpensesTotal[3],
];

export const preSeedInvestment = [285000, 0, 0, 0];

export const cashFlow1 = preSeedGrossProfit[0] + preSeedInvestment[0];
export const cashFlow2 =
  preSeedGrossProfit[1] + preSeedInvestment[1] + cashFlow1;
export const cashFlow3 =
  preSeedGrossProfit[2] + preSeedInvestment[2] + cashFlow2;
export const cashFlow4 =
  preSeedGrossProfit[3] + preSeedInvestment[3] + cashFlow3;

export const preSeedCashFlow = [cashFlow1, cashFlow2, cashFlow3, cashFlow4];

export const preSeedBurn0 = preSeedExpensesTotal[0] - preSeedQuarterRevenue[0];
export const preSeedBurn1 = preSeedExpensesTotal[1] - preSeedQuarterRevenue[1];
export const preSeedBurn2 = preSeedExpensesTotal[2] - preSeedQuarterRevenue[2];
export const preSeedBurn3 = preSeedExpensesTotal[3] - preSeedQuarterRevenue[3];

export const preSeedBurn = [
  preSeedBurn0 > 0 ? preSeedBurn0 : 0,
  preSeedBurn1 > 0 ? preSeedBurn1 : 0,
  preSeedBurn2 > 0 ? preSeedBurn2 : 0,
  preSeedBurn3 > 0 ? preSeedBurn3 : 0,
];

export const preSeedBurnRate = [
  preSeedBurn[0] / 3,
  preSeedBurn[1] / 3,
  preSeedBurn[2] / 3,
  preSeedBurn[3] / 3,
];

// Pre-seed quarterly data from table
export const preSeedQuarters = {
  Q1: {
    users: 1000,
    newClients: 40,
    clients: 40,
    mrr: 1000,
    revenue: 3000,
    cac: 345,
    simpleCac: 300,
    growth: 12000,
    operations: 55500,
    cashFlow: 220500,
    burn: 64500,
    burnRate: 21500,
    runway: 10,
  },
  Q2: {
    users: 10000,
    newClients: 360,
    clients: 400,
    mrr: 10000,
    revenue: 30000,
    cac: 67,
    simpleCac: 42,
    growth: 15000,
    operations: 82500,
    cashFlow: 153000,
    burn: 67500,
    burnRate: 22500,
    runway: 7,
  },
  Q3: {
    users: 40000,
    newClients: 1200,
    clients: 1600,
    mrr: 40000,
    revenue: 120000,
    cac: 45,
    simpleCac: 30,
    growth: 36000,
    operations: 136500,
    cashFlow: 100500,
    burn: 52500,
    burnRate: 17500,
    runway: 6,
  },
  Q4: {
    users: 100000,
    newClients: 2400,
    clients: 4000,
    mrr: 100000,
    revenue: 300000,
    cac: 36,
    simpleCac: 25,
    growth: 60000,
    operations: 202500,
    cashFlow: 138000,
    burn: 0,
    burnRate: 0,
    runway: 0,
  },
};

// Constants from table
export const preSeedMetrics = {
  arpu: 25,
  cr: 0.04,
  margin: 0.75,
  averageCac: 50, // Using your conservative average for Q2-Q4
  ltv: 450, // 25 * 24 * 0.75
  ltvCacRatio: 9, // 450/50
  paybackPeriod: 4, // months
};

// Keep your existing funding stage variables as they are

// Data interface
export interface DataPointPreSeed {
  q: string;
  users: number;
  revenue: number;
  operations: number;
  growth: number;
}

// Data array
export const dataPreSeed: DataPointPreSeed[] = [
  {
    q: "Q1",
    users: 1000,
    revenue: 3000,
    operations: 55500,
    growth: 12000,
  },
  {
    q: "Q2",
    users: 10000,
    revenue: 30000,
    operations: 82500,
    growth: 15000,
  },
  {
    q: "Q3",
    users: 40000,
    revenue: 120000,
    operations: 136500,
    growth: 36000,
  },
  {
    q: "Q4",
    users: 100000,
    revenue: 300000,
    operations: 202500,
    growth: 60000,
  },
];

// tables
export const dataGrowthModel = [
  {
    metric: "Users",
    q1: humanFormat(preSeedUsers[0]),
    q2: humanFormat(preSeedUsers[1]),
    q3: humanFormat(preSeedUsers[2]),
    q4: humanFormat(preSeedUsers[3]),
    highlighted: true,
  },
  {
    metric: "New Users",
    q1: humanFormat(preSeedNewUsers[0]),
    q2: humanFormat(preSeedNewUsers[1]),
    q3: humanFormat(preSeedNewUsers[2]),
    q4: humanFormat(preSeedNewUsers[3]),
  },
  {
    metric: "divider",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  },
  {
    metric: "Clients",
    q1: humanFormat(preSeedClients[0]),
    q2: humanFormat(preSeedClients[1]),
    q3: humanFormat(preSeedClients[2]),
    q4: humanFormat(preSeedClients[3]),
    highlighted: true,
  },
  {
    metric: "New Clients",
    q1: humanFormat(preSeedNewClients[0]),
    q2: humanFormat(preSeedNewClients[1]),
    q3: humanFormat(preSeedNewClients[2]),
    q4: humanFormat(preSeedNewClients[3]),
  },
  {
    metric: "divider",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  },
  {
    metric: "CR",
    q1: preSeedConversionRates[0] * 100 + "%",
    q2: preSeedConversionRates[1] * 100 + "%",
    q3: preSeedConversionRates[2] * 100 + "%",
    q4: preSeedConversionRates[3] * 100 + "%",
  },
  {
    metric: "ARPU / Mo",
    q1: preSeedArpu[0],
    q2: preSeedArpu[1],
    q3: preSeedArpu[2],
    q4: preSeedArpu[3],
  },
  {
    metric: "divider",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  },
  {
    metric: "MRR",
    q1: humanFormat(preSeedMrr[0]),
    q2: humanFormat(preSeedMrr[1]),
    q3: humanFormat(preSeedMrr[2]),
    q4: humanFormat(preSeedMrr[3]),
    highlighted: true,
  },
  {
    metric: "ARR",
    q1: humanFormat(preSeedMrr[0] * 12),
    q2: humanFormat(preSeedMrr[1] * 12),
    q3: humanFormat(preSeedMrr[2] * 12),
    q4: humanFormat(preSeedMrr[3] * 12),
    highlighted: true,
  },
];

export const runway0 = preSeedCashFlow[0] / preSeedBurnRate[0];
export const runway1 = preSeedCashFlow[1] / preSeedBurnRate[1];
export const runway2 = preSeedCashFlow[2] / preSeedBurnRate[2];
export const runway3 = preSeedCashFlow[3] / preSeedBurnRate[3];

export const preSeedRunway = [runway0, runway1, runway2, runway3];

export const dataFinancialModel = [
  {
    metric: "Revenue",
    q1: humanFormat(preSeedQuarterRevenue[0]),
    q2: humanFormat(preSeedQuarterRevenue[1]),
    q3: humanFormat(preSeedQuarterRevenue[2]),
    q4: humanFormat(preSeedQuarterRevenue[3]),
    highlighted: true,
  },
  {
    metric: "Expenses",
    q1: humanFormat(preSeedExpensesTotal[0]),
    q2: humanFormat(preSeedExpensesTotal[1]),
    q3: humanFormat(preSeedExpensesTotal[2]),
    q4: humanFormat(preSeedExpensesTotal[3]),
    highlighted: true,
  },
  {
    metric: "Market/Growth",
    q1: humanFormat(preSeedExpensesGrowth[0]),
    q2: humanFormat(preSeedExpensesGrowth[1]),
    q3: humanFormat(preSeedExpensesGrowth[2]),
    q4: humanFormat(preSeedExpensesGrowth[3]),
    // highlighted: true,
  },
  {
    metric: "Operations",
    q1: humanFormat(preSeedExpensesOperations[0]),
    q2: humanFormat(preSeedExpensesOperations[1]),
    q3: humanFormat(preSeedExpensesOperations[2]),
    q4: humanFormat(preSeedExpensesOperations[3]),
    // highlighted: true,
  },
  {
    metric: "Margin",
    q1: humanFormat(preSeedGrossProfit[0]),
    q2: humanFormat(preSeedGrossProfit[1]),
    q3: humanFormat(preSeedGrossProfit[2]),
    q4: humanFormat(preSeedGrossProfit[3]),
    highlighted: true,
  },
  {
    metric: "divider",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  },
  {
    metric: "Investment",
    q1: preSeedInvestment[0] > 0 ? humanFormat(preSeedInvestment[0]) : "-",
    q2: preSeedInvestment[1] > 0 ? humanFormat(preSeedInvestment[1]) : "-",
    q3: preSeedInvestment[2] > 0 ? humanFormat(preSeedInvestment[2]) : "-",
    q4: preSeedInvestment[3] > 0 ? humanFormat(preSeedInvestment[3]) : "-",
    highlighted: true,
  },
  {
    metric: "Cash Flow",
    q1: humanFormat(preSeedCashFlow[0]),
    q2: humanFormat(preSeedCashFlow[1]),
    q3: humanFormat(preSeedCashFlow[2]),
    q4: humanFormat(preSeedCashFlow[3]),
    highlighted: true,
  },
  {
    metric: "divider",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  },
  {
    metric: "Burn",
    q1: preSeedBurn[0] > 0 ? humanFormat(preSeedBurn[0]) : "-",
    q2: preSeedBurn[1] > 0 ? humanFormat(preSeedBurn[1]) : "-",
    q3: preSeedBurn[2] > 0 ? humanFormat(preSeedBurn[2]) : "-",
    q4: preSeedBurn[3] > 0 ? humanFormat(preSeedBurn[3]) : "-",
    highlighted: true,
  },
  {
    metric: "Burn Rate",
    q1: preSeedBurnRate[0] > 0 ? humanFormat(preSeedBurnRate[0]) : "-",
    q2: preSeedBurnRate[1] > 0 ? humanFormat(preSeedBurnRate[1]) : "-",
    q3: preSeedBurnRate[2] > 0 ? humanFormat(preSeedBurnRate[2]) : "-",
    q4: preSeedBurnRate[3] > 0 ? humanFormat(preSeedBurnRate[3]) : "-",
    highlighted: true,
  },
  {
    metric: "Runway",
    q1: preSeedRunway[0] > 0 ? Math.round(preSeedRunway[0]) : "-",
    q2: preSeedRunway[1] > 0 ? Math.round(preSeedRunway[1]) : "-",
    q3: preSeedRunway[2] > 0 ? Math.round(preSeedRunway[2]) : "-",
    q4: preSeedRunway[3] > 0 ? Math.round(preSeedRunway[3]) : "-",
    highlighted: true,
  },
];

interface DataPointGrowth {
  quarter: string;
  users: number;
  mrr: number;
}

export const dataGrowthModelGraphic: DataPointGrowth[] = [
  { quarter: "Q1", users: preSeedUsers[0], mrr: preSeedMrr[0] },
  { quarter: "Q2", users: preSeedUsers[1], mrr: preSeedMrr[1] },
  { quarter: "Q3", users: preSeedUsers[2], mrr: preSeedMrr[2] },
  { quarter: "Q4", users: preSeedUsers[3], mrr: preSeedMrr[3] },
];

export interface CashFlowPoint {
  quarter: string;
  cashFlow: number;
  burn: number;
  burnRate: number;
  runway: number;
}

export const dataCashFlowGraphic: CashFlowPoint[] = [
  {
    quarter: "Q1",
    cashFlow: preSeedCashFlow[0],
    burn: -preSeedBurn[0],
    burnRate: preSeedBurnRate[0],
    runway: preSeedRunway[0],
  },
  {
    quarter: "Q2",
    cashFlow: preSeedCashFlow[1],
    burn: -preSeedBurn[1],
    burnRate: preSeedBurnRate[1],
    runway: preSeedRunway[1],
  },
  {
    quarter: "Q3",
    cashFlow: preSeedCashFlow[2],
    burn: -preSeedBurn[2],
    burnRate: preSeedBurnRate[2],
    runway: preSeedRunway[2],
  },
  {
    quarter: "Q4",
    cashFlow: preSeedCashFlow[3],
    burn: -preSeedBurn[3],
    burnRate: preSeedBurnRate[3],
    runway: preSeedRunway[3],
  },
];
