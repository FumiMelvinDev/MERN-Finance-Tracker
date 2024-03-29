import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../lib/utils";
import Modal from "../components/Modal";
import AddExpense from "../components/AddExpense";
import AddIncome from "../components/AddIncome";
import { Blocks } from "react-loader-spinner";
import { getExpenses, reset } from "../features/expense/expenseSlice";
import { getIncome } from "../features/income/incomeSlice";
import ExpenseItem from "../components/ExpenseItem";
import ProgressBar from "@ramonak/react-progress-bar";

function Dashboard() {
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { expenses, isLoading, isError, message } = useSelector(
    (state) => state.expenses
  );
  const { incomes } = useSelector((state) => state.incomes);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getIncome());
    dispatch(getExpenses());

    return () => {
      reset();
    };
  }, [user, navigate, isError, message, dispatch]);

  useEffect(() => {
    if (expenses.length > 0) {
      const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
      setTotalExpenses(total);
    }
  }, [expenses]);

  useEffect(() => {
    if (incomes.length > 0) {
      const total = incomes.reduce((acc, income) => acc + income.amount, 0);
      setTotalIncome(total);
    }
  }, [incomes]);

  const myBalance = totalIncome - totalExpenses;

  if (isLoading) {
    return (
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    );
  }

  return (
    <>
      <div className="px-4 max-w-2xl justify-center">
        <section className=" w-4/5"></section>
        <section>
          <small className="text-slate-600 text-sm">My Balance</small>
          <h1 className="font-semibold text-2xl">
            {currencyFormatter(myBalance)}
          </h1>

          {/* <ProgressBar completed="60" /> */}
          <div className="flex gap-2">
            <button
              className="text-sm border px-2 py-1 rounded-lg bg-[#A10702] hover:bg-[#56445D]"
              onClick={() => setShowExpenseModal(true)}
            >
              + Expense
            </button>
            <button
              className="text-sm border px-2 py-1 rounded-lg bg-[#7DCE82] hover:bg-[#56445D]"
              onClick={() => setShowIncomeModal(true)}
            >
              + Income
            </button>
          </div>
        </section>
        <section>
          <h1>Recent Expenses</h1>
          {expenses.length > 0 ? (
            <div>
              {expenses.map((expense) => (
                <ExpenseItem key={expense._id} expense={expense} />
              ))}
            </div>
          ) : (
            <h2>No recent transactions</h2>
          )}
        </section>
      </div>
      <Modal
        show={showExpenseModal}
        onClose={setShowExpenseModal}
        children={<AddExpense />}
      />
      <Modal
        show={showIncomeModal}
        onClose={setShowIncomeModal}
        children={<AddIncome />}
      />
    </>
  );
}

export default Dashboard;
