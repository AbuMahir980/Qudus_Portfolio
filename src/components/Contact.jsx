/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const sendEmail = (data) => {
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,  
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            data,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY    
        )
        .then(() => {
            alert('Message sent successfully!');
            reset(); // Reset the form on successful submission
        }, (error) => {
            alert('Failed to send message. Please try again later.');
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 rounded-lg text-white px-4 py-5">
        <div className="w-full max-w-lg bg-gray-800 bg-opacity-40 p-8 sm:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get in Touch</h2>
            <form onSubmit={handleSubmit(sendEmail)}>
            {/* Name Input */}
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Your Name</label>
                <input
                type="text"
                placeholder="What's your name?"
                {...register("user_name", { required: "Name is required" })}
                className={`w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.user_name ? "ring-red-500" : "ring-blue-500"
                }`}
                />
                {errors.user_name && <p className="text-red-500 text-sm mt-1">{errors.user_name.message}</p>}
            </div>

            {/* Email Input */}
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Your Email</label>
                <input
                type="email"
                placeholder="What's your email?"
                {...register("user_email", {
                    required: "Email is required",
                    pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address"
                    }
                })}
                className={`w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.user_email ? "ring-red-500" : "ring-blue-500"
                }`}
                />
                {errors.user_email && <p className="text-red-500 text-sm mt-1">{errors.user_email.message}</p>}
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Your Message</label>
                <textarea
                placeholder="What's your message?"
                {...register("message", { required: "Message is required" })}
                className={`w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.message ? "ring-red-500" : "ring-blue-500"
                }`}
                rows="4"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-white hover:bg-gray-800 hover:text-white text-gray-950 font-bold py-3 rounded-lg transition-colors"
            >
                Send Message ✉️
            </button>
            </form>
        </div>
        </div>
    );
};

export default ContactForm;
