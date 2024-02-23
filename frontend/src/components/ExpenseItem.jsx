import React from "react";
import { currencyFormatter } from "../lib/utils";

function ExpenseItem({ expense }) {
  return (
    <div className="bg-slate-900 mb-2 text-gray-300 text-sm py-1 px-4 rounded-full capitalize cursor-pointer hover:bg-slate-800">
      <div className="flex justify-between items-center">
        <div>
          <h2>{expense.description}</h2>
          <small>{new Date(expense.createdAt).toLocaleString("en-za")}</small>
        </div>
        <h2>{currencyFormatter(expense.amount)}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
