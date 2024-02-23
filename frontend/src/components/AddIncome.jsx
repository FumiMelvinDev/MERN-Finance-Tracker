import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Blocks } from "react-loader-spinner";
import { addIncome } from "../features/income/incomeSlice";

function AddIncome() {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
  });

  const { description, amount } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const incomeData = {
      description,
      amount,
    };

    dispatch(addIncome(incomeData));
    setFormData({
      description: "",
      amount: "",
    });
  };

  return (
    <div>
      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        <h3 className="text-3xl font-semibold">Add Income</h3>
      </div>
      <form className="space-y-6" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6"
          >
            Income Description
          </label>
          <div className="mt-2">
            <input
              id="description"
              name="description"
              value={description}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6"
          >
            Income Amount
          </label>
          <div className="mt-2">
            <input
              id="amount"
              name="amount"
              value={amount}
              onChange={onChange}
              type="number"
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            add income
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddIncome;
