import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you can add real subscription logic (API call)
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="w-full max-w-4xl p-6 mx-auto my-12 text-center rounded-lg bg-orange-50">
      <h2 className="mb-6 text-2xl sm:text-3xl font-bold">
        Get the menu of your favorite restaurants every day
      </h2>
      {submitted ? (
        <p className="font-semibold text-green-600 text-lg">
          Thank you for subscribing!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2"
        >
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSubscription;
