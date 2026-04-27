import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    party: "",
    address: "",
    quotation: "",
    date: "",
    description: "",
    code: "",
    quantity: "",
    price: "",
    payment: "",
    due: "",
  });

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = () => {
    const subtotal = formData.quantity * formData.price;
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    const newOrder = {
      ...formData,
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };

    setOrders([newOrder, ...orders]);
    setShowForm(false);

    // reset form
    setFormData({
      party: "",
      address: "",
      quotation: "",
      date: "",
      description: "",
      code: "",
      quantity: "",
      price: "",
      payment: "",
      due: "",
    });
  };

  return (
    <div className="p-5 text-white">
      {/* 🔹 Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Orders</h2>

        <button
          onClick={() => setShowForm(true)}
          className="bg-[#44a83e] px-4 py-2 rounded hover:opacity-90"
        >
          + Add Order
        </button>
      </div>

      {/* 🔹 Table */}
      <div className="bg-[#3a3c44] p-5 rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-300 border-b border-gray-700">
            <tr>
              <th>Party</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Tax (5%)</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="border-b border-gray-700/40">
                <td className="py-3">{order.party}</td>
                <td>{order.description}</td>
                <td>{order.quantity}</td>
                <td>${order.price}</td>
                <td className="text-orange-400">${order.tax}</td>
                <td className="text-[#44a83e] font-semibold">${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔹 Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-[#2b3140] p-6 rounded-xl w-[500px]">
            <h3 className="mb-4 font-semibold">Add Order</h3>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <input
                name="party"
                placeholder="Party Name"
                onChange={handleChange}
                className="p-2 bg-[#3a3c44] rounded"
              />
              <input
                name="address"
                placeholder="Address"
                onChange={handleChange}
                className="p-2 bg-[#3a3c44] rounded"
              />

              <input
                name="quotation"
                placeholder="Quotation No."
                onChange={handleChange}
                className="p-2 bg-[#3a3c44] rounded"
              />
              <div className="flex flex-col">
                <label className="text-xs text-gray-300 mb-1">Order Date</label>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={(e) => e.target.showPicker?.()}
                  className="p-2 bg-[#3a3c44] rounded text-white cursor-pointer"
                />
              </div>

              <input
                name="description"
                placeholder="Product Description"
                onChange={handleChange}
                className="p-2 bg-[#3a3c44] rounded col-span-2"
              />

              <input
                name="code"
                placeholder="Product Code"
                onChange={handleChange}
                className="p-2 bg-[#3a3c44] rounded"
              />
              <input
                name="quantity"
                type="number"
                placeholder="Quantity"
                onChange={handleChange}
                className="p-2 bg-[#3a3c44] rounded"
              />

              <input
                name="price"
                type="number"
                placeholder="Unit Price"
                onChange={handleChange}
                className="p-2 bg-[#3a3c44] rounded"
              />
              <input
                name="payment"
                placeholder="Payment Type"
                onChange={handleChange}
                className="p-2 bg-[#3a3c44] rounded"
              />

              <div className="flex flex-col col-span-2">
                <label className="text-xs text-gray-300 mb-1">Due Date</label>
                <input
                  name="due"
                  type="date"
                  value={formData.due}
                  onChange={handleChange}
                  onFocus={(e) => e.target.showPicker?.()}
                  className="p-2 bg-[#3a3c44] rounded text-white cursor-pointer"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="px-3 py-1 bg-gray-500 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-1 bg-[#44a83e] rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
