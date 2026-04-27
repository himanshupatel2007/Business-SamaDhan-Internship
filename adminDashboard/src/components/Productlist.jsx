import React from "react";

const ProductList = () => {
  const products = [
    {
      id: "P001",
      name: "Laptop",
      cost: "$500",
      price: "$750",
      sold: 120,
      left: 30,
    },
    {
      id: "P002",
      name: "Mouse",
      cost: "$5",
      price: "$12",
      sold: 300,
      left: 150,
    },
    {
      id: "P003",
      name: "Keyboard",
      cost: "$15",
      price: "$30",
      sold: 180,
      left: 60,
    },
    {
      id: "P004",
      name: "Monitor",
      cost: "$120",
      price: "$200",
      sold: 75,
      left: 20,
    },
  ];

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-white text-xl font-semibold mb-4">
        Product List
      </h1>

      {/* Table Container */}
      <div className="bg-[#3a3c44] rounded-xl overflow-hidden shadow-md">
        
        <table className="w-full text-sm text-left text-[#f5f5f5]">
          
          {/* Header */}
          <thead className="bg-[#2b3140] text-gray-300 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3">Product ID</th>
              <th className="px-4 py-3">Product Name</th>
              <th className="px-4 py-3">Making Cost</th>
              <th className="px-4 py-3">Selling Price</th>
              <th className="px-4 py-3">Units Sold</th>
              <th className="px-4 py-3">Units Left</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`border-b border-white/10 hover:bg-[#2f3340] transition ${
                  index % 2 === 0 ? "bg-[#3a3c44]" : "bg-[#353741]"
                }`}
              >
                <td className="px-4 py-3 font-medium">{product.id}</td>
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">{product.cost}</td>
                <td className="px-4 py-3 text-[#44a83e] font-semibold">
                  {product.price}
                </td>
                <td className="px-4 py-3">{product.sold}</td>
                <td className="px-4 py-3">{product.left}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ProductList;