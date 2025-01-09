"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    emailjs
      .send("service_tnuiu9k", "template_kr8vquk", data, "-MjWEwcYrKTa02ybk")
      .then(
        (response) => {
          console.log("Message sent successfully:", response);
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("Failed to send message:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="py-20 bg-gradient-to-t from-gray-700 via-gray-900 to-black mx-auto my-auto h-screen text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Contact me for
              <br />
              hiring me or collab
              <br />
              with me
            </motion.h2>
            <p className="text-secondary mb-8">Contact me via email</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:a251080262@gmail.com"
                  className="text-primary hover:text-primary-hover"
                >
                  a251080262@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary text-black"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary text-black"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message?.toString()}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary text-black"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="number"
                    placeholder="+49 196 xxx xxx"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary text-black"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message?.toString()}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-primary text-black"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message?.toString()}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                className="bg-primary text-black px-8 py-3 rounded-md hover:bg-primary-hover transition-colors bg-white hover:scale-105"
              >
                Send message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
