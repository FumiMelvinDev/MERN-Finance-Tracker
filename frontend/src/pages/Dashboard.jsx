import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { currencyFormatter } from "../lib/utils";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="px-4">
      <section>
        <small className="text-slate-300 text-sm">My Balance</small>
        <h1 className="font-semibold text-2xl">{currencyFormatter(100000)}</h1>
      </section>
    </div>
  );
}

export default Dashboard;
