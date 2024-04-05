const Prices = ({ products }) => {
  //   let subTotal = 0;

  //   for (let item of products) {
  //     subTotal +=
  //       (item.amount * (item.price * (100 - item.discountPercentage))) / 100;
  //   }

  const subTotal = products.reduce(
    (acc, item) =>
      acc +
      (item.amount * (item.price * (100 - item.discountPercentage))) / 100,
    0
  );

  const tax = subTotal * 0.0825;
  const shipping = 10 * products.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div>
      <article id="card-prices">
        <table className="table">
          <tbody>
            <tr className="text-end">
              <th className="text-start">Subtotal</th>
              <td>
                $<span className="subtotal">{subTotal.toFixed(2)}</span>
              </td>
            </tr>
            <tr className="text-end">
              <th className="text-start">Tax(8.25%)</th>
              <td>
                $<span className="tax">{tax.toFixed(2)}</span>
              </td>
            </tr>
            <tr className="text-end">
              <th className="text-start">Shipping</th>
              <td>
                $<span className="shipping">{shipping}</span>
              </td>
            </tr>
            <tr className="text-end">
              <th className="text-start">Total</th>
              <td>
                $
                <span className="total">
                  {(subTotal + tax + shipping).toFixed(2)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  );
};

export default Prices;
