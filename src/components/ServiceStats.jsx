import React from "react";

const stats = [
  { id: 1, number: "976", label: "Satisfied Customer" },
  { id: 2, number: "12", label: "Best Restaurants" },
  { id: 3, number: "1K+", label: "Food Delivered" },
];

const ServiceStats = () => {
  return (
    <section className="w-full max-w-6xl mx-auto my-12 p-4 md:p-6 flex flex-col md:flex-row items-center gap-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 w-full md:w-[250px] text-center md:text-left">
        Service shows good taste
      </h2>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 flex-1">
        {stats.map(({ id, number, label }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center gap-2 p-4 md:p-6 min-w-[150px] md:min-w-[200px] bg-white rounded-lg"
          >
            <p className="text-3xl md:text-4xl font-extrabold text-orange-500">
              {number}
            </p>
            <p className="text-gray-700 font-medium text-center">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceStats;
