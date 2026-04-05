import { useState } from 'react';
import { Plus, Calculator } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (!isNaN(n1) && !isNaN(n2)) {
      setResult(n1 + n2);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Calculator className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Máy tính Tổng</h1>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="num1" className="block text-sm font-medium text-slate-600 mb-2">
              Số thứ nhất
            </label>
            <input
              id="num1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Nhập số..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
            />
          </div>

          <div className="flex justify-center">
            <Plus className="text-slate-300 w-6 h-6" />
          </div>

          <div>
            <label htmlFor="num2" className="block text-sm font-medium text-slate-600 mb-2">
              Số thứ hai
            </label>
            <input
              id="num2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Nhập số..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Tính kết quả
          </button>

          {result !== null && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center"
            >
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider block mb-1">
                Kết quả là
              </span>
              <span className="text-4xl font-bold text-blue-900">
                {result.toLocaleString()}
              </span>
            </motion.div>
          )}
        </div>

        <p className="mt-8 text-center text-slate-400 text-xs">
          Nhập hai số bất kỳ để xem tổng của chúng
        </p>
      </motion.div>
    </div>
  );
}
