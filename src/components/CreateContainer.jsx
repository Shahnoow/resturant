import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";
import { supabase } from "../supabaseClient";
import { useStateValue } from "../context/StateProvider";
import { getAllFoodItems } from "../utils/supabaseFunction";
import { actionType } from "../context/reducer";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(true);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ food_items }, dispatch] = useStateValue();

  const uploadImage = async (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const fileName = `${Date.now()}-${imageFile.name}`;

    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, imageFile);

    if (error) {
      console.error("Upload Error:", error.message);
      setFields(true);
      setMsg("Error while uploading : Try Again 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("images").getPublicUrl(fileName);

    setImageAsset(publicUrl);
    setIsLoading(false);
    setFields(true);
    setMsg("Image uploaded successfully 😊");
    setAlertStatus("success");
    setTimeout(() => {
      setFields(false);
    }, 4000);
  };

  const deleteImage = async () => {
    if (!imageAsset) return;

    const fileName = imageAsset.split("/").pop();

    const { error } = await supabase.storage.from("images").remove([fileName]);

    if (error) {
      console.error("Delete Error:", error.message);
      setFields(true);
      setMsg("Error while deleting the image 😢");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    } else {
      setImageAsset(null);
      setFields(true);
      setMsg("Image deleted successfully 🗑️");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    }
  };

  const saveItem = async (itemData) => {
    const { data, error } = await supabase
      .from("food_items")
      .insert([itemData]);

    if (error) {
      console.error("Database Insert Error:", error.message);
      setFields(true);
      setMsg("Error saving data to the database 😢");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    }
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title,
          imageURL: imageAsset,
          category,
          calories,
          qty: 1,
          price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try Again 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory(null);
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        food_items: data,
      });
    });
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}

        {/* Title Input */}
        <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..."
            className="w-full h-full text-lg bg-transparent border-none outline-none placeholder:text-gray-400 text-textColor"
          />
        </div>

        {/* Category Selector */}
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 text-base border-b-2 border-gray-200 rounded-md outline-none cursor-pointer"
          >
            <option value="" className="bg-white">
              Select Category
            </option>

            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base capitalize bg-white text-headingColor"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dotted rounded-lg cursor-pointer group h-225 md:h-340">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
                      <MdCloudUpload className="text-3xl text-gray-500 hover:text-gray-700" />
                      <p className="text-gray-500 hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      alt="uploaded"
                      className="object-cover w-full h-full"
                    />
                    <button
                      type="button"
                      className="absolute p-3 text-xl transition-all bg-red-500 rounded-full outline-none cursor-pointer bottom-3 right-3 hover:shadow-md"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Calories and Price */}
        <div className="flex flex-col items-center w-full gap-3 md:flex-row">
          <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300">
            <MdFoodBank className="text-2xl text-gray-700" />
            <input
              type="text"
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Calories"
              className="w-full text-lg bg-transparent border-none outline-none placeholder:text-gray-400 text-textColor"
            />
          </div>
          <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300">
            <MdAttachMoney className="text-2xl text-gray-700" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full text-lg bg-transparent border-none outline-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center w-full">
          <button
            type="button"
            onClick={saveDetails}
            className="w-full px-12 py-2 ml-0 text-lg font-semibold text-white border-none rounded-lg outline-none md:ml-auto md:w-auto bg-emerald-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
