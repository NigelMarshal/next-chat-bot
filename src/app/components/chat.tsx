"use client";

import { useChat } from "ai/react";
import React from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col h-screen">
      <header className="px-6 py-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white shadow-md">
        <h1 className="text-2xl font-bold text-center">HAL NOT 9000</h1>
      </header>

      {/* Chat Container */}
      <div className="flex flex-col flex-1 p-4 overflow-auto bg-gray-300">
        <div className="flex flex-col flex-1 p-4 mb-4 bg-white rounded-lg shadow">
          <ul className="space-y-2">
            {messages.map((m, index) => (
              <li
                key={index}
                className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                  m.role === "user"
                    ? "bg-blue-700 text-white ml-auto"
                    : "bg-gray-600 text-white"
                }`}
              >
                <span className="text-sm font-bold">
                  {m.role === "user" ? "Ordinary human:" : "Friendly(?)AI:"}
                </span>
                <p className="mt-1 text-sm">{m.content}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSubmit}
          className="flex items-end w-full p-2 bg-white rounded-lg shadow"
        >
          <label className="flex-grow">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me anything!"
              className="w-full p-3 m-1 text-sm leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </form>
      </div>

      <footer className="px-6 py-4 bg-gray-100 shadow-inner">
        <div className="text-sm text-gray-700 text-center">
          <p>
            © {currentYear} by{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-blue-800"
            >
              Nigel Marshal
            </a>
            . Crafted with care and AI apprehension.
          </p>
        </div>
      </footer>
    </div>
  );
}
