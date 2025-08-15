import React, { useState, useEffect } from "react";
import MenuSlider from "./MenuSlider";
import { supabase } from "../supabaseClient";

const MenuPage = () => {
  const [dishes, setDishes] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 168,
    hours: 0,
    mins: 32,
    secs: 16,
  });

  useEffect(() => {
    const fetchDishes = async () => {
      const { data, error } = await supabase
        .from("food_items")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching dishes:", error);
      } else {
        setDishes(data);
      }
    };
    fetchDishes();

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;
        if (secs > 0) secs--;
        else {
          secs = 59;
          if (mins > 0) mins--;
          else {
            mins = 59;
            if (hours > 0) hours--;
            else {
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <section
        className="flex items-center justify-center text-4xl font-bold text-white bg-center bg-cover h-60"
        style={{ backgroundImage: "url('/img/menu-bg.jpg')" }}
      >
        FOOD MENU 01
      </section>

      <section className="max-w-6xl px-4 py-12 mx-auto">
        <h2 className="flex items-center gap-2 mb-8 text-3xl font-bold">
          <span>🔥</span> POPULAR DISHES <span>🔥</span>
        </h2>
        <p className="mb-6 text-lg text-gray-600">Our Most Popular Deals</p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="overflow-hidden transition bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl"
            >
              <img
                src={dish.imageURL}
                alt={dish.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{dish.title}</h3>
                <p className="mt-2 text-gray-600">
                  {dish.desc || "Delicious dish"}
                </p>
                <p className="mt-4 text-lg font-bold text-orange-500">
                  ${dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <MenuSlider />

      <section className="py-12 text-center bg-yellow-100">
        <h2 className="flex items-center justify-center gap-2 mb-4 text-3xl font-bold">
          <span>🎉</span> Special Offer <span>🎉</span>
        </h2>
        <p className="mb-6 text-xl">Get 30% Discount Every Item</p>
        <div className="flex justify-center gap-6 mb-6 text-2xl font-semibold">
          <span>{timeLeft.days} days</span>
          <span>{timeLeft.hours.toString().padStart(2, "0")} hrs</span>
          <span>{timeLeft.mins.toString().padStart(2, "0")} mins</span>
          <span>{timeLeft.secs.toString().padStart(2, "0")} secs</span>
        </div>
        <button className="px-8 py-3 font-semibold text-white transition bg-orange-500 rounded-lg hover:bg-orange-600">
          ORDER NOW
        </button>
      </section>
    </div>
  );
};

export default MenuPage;
