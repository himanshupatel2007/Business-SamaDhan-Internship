import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

 const linegraphData = [
  { "date": "01 Oct", "sales": 1200 },
  { "date": "02 Oct", "sales": 4500 },
  { "date": "03 Oct", "sales": 3200 },
  { "date": "04 Oct", "sales": 6100 },
  { "date": "05 Oct", "sales": 5800 },
  { "date": "06 Oct", "sales": 2100 },
  { "date": "07 Oct", "sales": 4000 },
  { "date": "08 Oct", "sales": 6000 },
  { "date": "09 Oct", "sales": 4800 },
  { "date": "10 Oct", "sales": 6200 },
  { "date": "11 Oct", "sales": 7900 },
  { "date": "12 Oct", "sales": 3500 },
  { "date": "13 Oct", "sales": 7800 },
  { "date": "14 Oct", "sales": 5400 },
  { "date": "15 Oct", "sales": 5200 },
  { "date": "16 Oct", "sales": 9100 },
  { "date": "17 Oct", "sales": 7400 },
  { "date": "18 Oct", "sales": 4600 },
  { "date": "19 Oct", "sales": 10100 },
  { "date": "20 Oct", "sales": 7600 },
  { "date": "21 Oct", "sales": 3400 },
  { "date": "22 Oct", "sales": 8900 },
  { "date": "23 Oct", "sales": 11200 },
  { "date": "24 Oct", "sales": 6400 },
  { "date": "25 Oct", "sales": 6100 },
  { "date": "26 Oct", "sales": 7200 },
  { "date": "27 Oct", "sales": 8500 },
  { "date": "28 Oct", "sales": 5900 },
  { "date": "29 Oct", "sales": 9800 },
  { "date": "30 Oct", "sales": 11500 }
]

const SalesLineChart = () => {
  return (
 <div className="bg-[#3a3c44] p-4 rounded-xl w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={linegraphData}>
          
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />

          {/* Axes */}
          <XAxis dataKey="date" stroke="#f5f5f5" />
          <YAxis stroke="#f5f5f5" />

          {/* Tooltip */}
          <Tooltip />

          {/* Line */}
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#44a83e"   // your theme green
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesLineChart;
