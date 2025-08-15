import { supabase } from "../supabaseClient"; // your initialized supabase client

// Save a new food item to Supabase
export const saveItem = async (data) => {
  const itemWithId = {
    id: Date.now().toString(),
    ...data,
  };
  const { error } = await supabase.from("food_items").insert([itemWithId]);

  if (error) {
    console.error("Error saving item:", error);
    throw error;
  }
};

export const getAllFoodItems = async () => {
  const { data, error } = await supabase
    .from("food_items")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching food items:", error);
    throw error;
  }
  return data;
};
