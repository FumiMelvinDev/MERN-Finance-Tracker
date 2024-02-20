export const currencyFormatter = (amount) => {
  const formatter = Intl.NumberFormat("en-za", {
    currency: "ZAR",
    style: "currency",
  });

  return formatter.format(amount);
};
