import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Thank you! Your message has been sent.");
      } else {
        setResponseMessage(result.message || "An error occurred.");
      }
    } catch (error) {
      setResponseMessage("An error occurred while sending your message.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-[90%] m-auto flex justify-between items-center py-10 flex-col lg:flex-row lg:gap-0 gap-10">
      <form
        className="flex flex-col gap-4 lg:w-[40%] w-full lg:order-1 order-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="border-2 border-black rounded-md h-16 px-5 text-lg w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-black rounded-md h-16 px-5 text-lg w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Your website (if exists)"
            className="border-2 border-black rounded-md h-16 px-5 text-lg w-full"
            {...register("website", {
              pattern: {
                value:
                  /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:[0-9]{1,5})?(\/.*)?$/i,
                message: "Invalid website URL",
              },
            })}
          />
          {errors.website && (
            <p className="text-red-500 text-sm">{errors.website.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="How can I help you?"
            rows="4"
            className="border-2 border-black rounded-md px-5 py-2 text-lg w-full"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Message must be at least 10 characters" },
            })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white sora border-none h-14 w-32 rounded-lg text-lg"
        >
          Submit
        </button>
      </form>

      <div className="lg:w-[50%] flex flex-col gap-5 lg:order-2 order-1">
        <h1 className="sora font-bold text-4xl">Let's talk for</h1>
        <h1 className="sora font-bold text-4xl">Something special</h1>
        <p className="text-base text-gray-600">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        {responseMessage && (
          <p className="text-lg text-green-500">{responseMessage}</p>
        )}
      </div>
    </div>
  );
}

export default ContactMe;
