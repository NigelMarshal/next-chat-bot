"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label>
          Ask me anything!
          <input
            value={input}
            onChange={handleInputChange}
            className="text-black"
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
