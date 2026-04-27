import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    party: "",
    address: "",
    quotation: "",
    date: "",
    payment: "",
    due: "",
    items: [{ description: "", code: "", quantity: "", price: "" }],
  });
  const deleteOrder = (index) => {
    const updated = orders.filter((_, i) => i !== index);
    setOrders(updated);
  };

  const downloadInvoice = (order) => {
    const invoiceWindow = window.open("", "_blank");

    // Logic to convert total number to words (Simple version)
    const amountInWords = (num) => {
      // You can integrate a library like 'number-to-words' here for production
      return "Rupees " + num.toLocaleString("en-IN") + " Only";
    };

    const html = `
  <html>
    <head>
      <title>Purchase Order - ${order.party}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #000; font-size: 11px; }
        .wrapper { border: 1px solid #000; width: 100%; max-width: 800px; margin: auto; }
        
        /* Header */
        .header-box { border-bottom: 1px solid #000; padding: 10px; text-align: center; position: relative; }
        .gstin { position: absolute; left: 10px; top: 10px; font-weight: bold; font-size: 12px; }
        .po-title { font-weight: bold; text-decoration: underline; margin-bottom: 5px; font-size: 12px; }
        .company-name { font-size: 22px; font-weight: bold; }
        .company-addr { font-size: 10px; line-height: 1.3; margin-top: 5px; }

        /* Address & Info Grid */
        .info-container { display: flex; border-bottom: 1px solid #000; }
        .box { flex: 1; padding: 10px; min-height: 100px; }
        .left-box { border-right: 1px solid #000; }
        .label { font-weight: bold; font-style: italic; text-decoration: underline; display: block; margin-bottom: 5px; }

        /* Main Table */
        table { width: 100%; border-collapse: collapse; border-bottom: 1px solid #000; }
        th, td { border-right: 1px solid #000; padding: 6px; font-size: 10px; vertical-align: top; }
        th { border-bottom: 1px solid #000; text-align: center; background: #fff; }
        td { text-align: center; }
        .text-left { text-align: left; }
        .text-right { text-align: right; }
        .last-col { border-right: none; }
        .empty-row td { height: 150px; } /* Creates the blank vertical space like the image */

        /* Totals Section */
        .totals-section { border-bottom: 1px solid #000; }
        .total-row { display: flex; border-bottom: 1px dotted #000; padding: 5px 10px; justify-content: space-between; }
        .grand-total-row { display: flex; justify-content: space-between; padding: 10px; font-weight: bold; font-size: 13px; border-top: 1px solid #000; }
        
        .tax-summary { width: 50%; padding: 10px; font-size: 9px; }
        .tax-table { width: 100%; border: 1px solid #000; margin-top: 5px; }

        .footer { display: flex; justify-content: space-between; padding: 20px 10px 10px; }
        .signatory { text-align: center; margin-top: 40px; }
      </style>
    </head>

    <body>
      <div class="wrapper">
        <div class="header-box">
          <div class="gstin">GSTIN : 23AADCT9240K1Z7</div>
          <div class="po-title">Purchase ORDER</div>
          <div class="company-name">TEKTRONICS EMS LIMITED</div>
          <div class="company-addr">
            PLOT NO 31, SECTOR B II, IGL MANERI,, Food Park Maneri, Dist. Mandla, M.P.-481885<br/>
            CIN : U31506DL2011PLC222909 ; Udyam No. : UDYAM-DL-06-0001228<br/>
            email : anand.gupta@tektronics.com
          </div>
        </div>

        <div class="info-container">
          <div class="box left-box">
            <span class="label">Party Details :</span>
            <strong>${order.party}</strong><br/>
            ${order.address}<br/><br/>
            <strong>GSTIN / UIN : 06AAGCM2579P1ZT</strong>
          </div>
          <div class="box">
            <p><strong>Quotation No. :</strong> ${order.quotation}</p>
            <p><strong>Dated :</strong> ${order.date}</p>
            <p><strong>DUE DATE :</strong> ${order.due}</p>
            <p><strong>PAYMENT TERMS :</strong> ${order.payment}</p>
            <p><strong>REFERENCE NO :</strong> </p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th width="30">S.N.</th>
              <th class="text-left">Description of Goods</th>
              <th width="80">HSN/SAC Code</th>
              <th width="60">Qty. Unit</th>
              <th width="80">Price</th>
              <th class="last-col" width="100">Amount(₹)</th>
            </tr>
          </thead>
          <tbody>
            ${order.items
              .map(
                (item, i) => `
              <tr>
                <td>${i + 1}.</td>
                <td class="text-left">${item.description}</td>
                <td>${item.code}</td>
                <td>${Number(item.quantity).toLocaleString("en-IN", { minimumFractionDigits: 2 })} PCS</td>
                <td>${Number(item.price).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                <td class="text-right last-col">${(item.quantity * item.price).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
              </tr>
            `,
              )
              .join("")}
            <tr class="empty-row">
                <td></td><td></td><td></td><td></td><td></td><td class="last-col"></td>
            </tr>
          </tbody>
        </table>

        <div class="totals-section">
          <div class="total-row">
            <span></span>
            <span class="text-right font-bold">${(order.total - order.tax).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
          </div>
          <div class="total-row" style="border-bottom: none;">
            <span style="font-style: italic;">Add : IGST @ 5.00 %</span>
            <span class="text-right">${Number(order.tax).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
          </div>
          <div class="grand-total-row">
            <span>Grand Total</span>
            <span>${Number(order.quantity || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })} PCS</span>
            <span>₹ ${Number(order.total).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div style="padding: 10px; font-weight: bold; border-bottom: 1px solid #000;">
          Rupees ${order.total} Only
        </div>

        <div class="footer">
          <div class="tax-summary">
            <strong>Tax Rate | Taxable Amt. | IGST Amt. | Total Tax</strong><br/>
            5% | ${order.total - order.tax} | ${order.tax} | ${order.tax}
          </div>
          <div class="signatory">
            <p><strong>TEKTRONICS EMS LIMITED</strong></p>
            <p style="margin-top: 50px;">Authorised Signatory</p>
          </div>
        </div>
      </div>

      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
  </html>
  `;

    invoiceWindow.document.write(html);
    invoiceWindow.document.close();
  };
  // 🔹 Handle normal input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle item change
  const handleItemChange = (index, e) => {
    const updatedItems = [...formData.items];
    updatedItems[index][e.target.name] = e.target.value;

    setFormData({ ...formData, items: updatedItems });
  };

  // 🔹 Add new item
  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { description: "", code: "", quantity: "", price: "" },
      ],
    });
  };

  // 🔹 Submit form
  const handleSubmit = () => {
    let subtotal = 0;

    formData.items.forEach((item) => {
      subtotal += Number(item.quantity) * Number(item.price);
    });

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    const newOrder = {
      ...formData,
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };

    setOrders([newOrder, ...orders]);
    setShowForm(false);

    // reset
    setFormData({
      party: "",
      address: "",
      quotation: "",
      date: "",
      payment: "",
      due: "",
      items: [{ description: "", code: "", quantity: "", price: "" }],
    });
  };

  return (
    <div className="p-5 text-white">
      {/* 🔹 Top */}
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Orders</h2>

        <button
          onClick={() => setShowForm(true)}
          className="bg-[#44a83e] px-4 py-2 rounded"
        >
          + Add Order
        </button>
      </div>

      {/* 🔹 Table */}
      <div className="bg-[#3a3c44] p-5 rounded-xl">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="text-gray-300 border-b border-gray-700 text-xs uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Party</th>
                <th className="px-4 py-3 text-left">Products</th>
                <th className="px-4 py-3 text-left">Unit Price</th>
                <th className="px-4 py-3 text-left">Tax</th>
                <th className="px-4 py-3 text-left">Total</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-700/40 hover:bg-[#30333e]"
                >
                  {/* Party */}
                  <td className="px-4 py-3 whitespace-nowrap">{order.party}</td>

                  {/* Products */}
                  <td className="px-4 py-3">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="text-xs mb-1">
                        {item.description} ({item.quantity} pcs)
                      </div>
                    ))}
                  </td>

                  {/* FIXED: Unit Price - Now shows all prices for the order */}
                  <td className="px-4 py-3">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="text-xs mb-1">
                        ₹
                        {Number(item.price).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </div>
                    ))}
                  </td>

                  {/* Tax */}
                  <td className="px-4 py-3 text-orange-400">
                    ₹
                    {Number(order.tax).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </td>

                  {/* Total */}
                  <td className="px-4 py-3 text-[#44a83e] font-semibold">
                    ₹
                    {Number(order.total).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      onClick={() => downloadInvoice(order)}
                      className="bg-blue-500 px-2 py-1 rounded text-xs"
                    >
                      Invoice
                    </button>
                    <button
                      onClick={() => deleteOrder(i)}
                      className="bg-red-500 px-2 py-1 rounded text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🔹 Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center overflow-y-auto">
          <div className="bg-[#2b3140] p-6 rounded-xl w-[600px]">
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

              {/* Order Date */}
              <div className="flex flex-col">
                <label className="text-xs text-gray-300 mb-1">Order Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={(e) => e.target.showPicker?.()}
                  className="p-2 bg-[#3a3c44] rounded cursor-pointer"
                />
              </div>

              <input
                name="payment"
                placeholder="Payment Type"
                onChange={handleChange}
                className="p-2 bg-[#3a3c44] rounded"
              />

              {/* Due Date */}
              <div className="flex flex-col">
                <label className="text-xs text-gray-300 mb-1">Due Date</label>
                <input
                  type="date"
                  name="due"
                  value={formData.due}
                  onChange={handleChange}
                  onFocus={(e) => e.target.showPicker?.()}
                  className="p-2 bg-[#3a3c44] rounded cursor-pointer"
                />
              </div>
            </div>

            {/* 🔹 Items */}
            <div className="mt-4">
              {formData.items.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-3 rounded mb-3"
                >
                  <p className="text-xs text-gray-400 mb-2">Item {index + 1}</p>

                  <input
                    name="description"
                    placeholder="Product Description"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, e)}
                    className="p-2 bg-[#3a3c44] rounded w-full mb-2"
                  />

                  <div className="grid grid-cols-3 gap-2">
                    <input
                      name="code"
                      placeholder="Code"
                      value={item.code}
                      onChange={(e) => handleItemChange(index, e)}
                      className="p-2 bg-[#3a3c44] rounded"
                    />

                    <input
                      name="quantity"
                      type="number"
                      placeholder="Qty"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, e)}
                      className="p-2 bg-[#3a3c44] rounded"
                    />

                    <input
                      name="price"
                      type="number"
                      placeholder="Price"
                      value={item.price}
                      onChange={(e) => handleItemChange(index, e)}
                      className="p-2 bg-[#3a3c44] rounded"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={addItem}
                className="w-full py-2 bg-[#30333e] rounded border border-white/10"
              >
                + Add More Product
              </button>
            </div>

            {/* 🔹 Buttons */}
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
