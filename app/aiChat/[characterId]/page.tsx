"use client";

import { Header } from "@/app/_components/Header";
import { useState } from "react";

export default function Chat({ characterId }: { characterId: string }) {
  const [messages, setMessages] = useState<
    Array<{ role: string; content: string }>
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);

    const res = await fetch(`/api/chat/${characterId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    const aiMsg = { role: "assistant", content: data.reply };

    setMessages((prev) => [...prev, aiMsg]);

    setInput("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <Header characterId={characterId} />
      <div className="flex-1 overflow-y-auto space-y-3 p-2 border rounded">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded max-w-[80%] ${
              m.role === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            {m.content}
          </div>
        ))}

        {loading && <div className="text-gray-400">ai is typing...</div>}
      </div>

      {/* input box */}
      <div className="flex items-center gap-2 mt-4">
        <input
          className="flex-1 border p-2 rounded"
          placeholder="type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === "enter" ? sendMessage() : null)}
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 py-2 rounded"
        >
          send
        </button>
      </div>
    </div>
  );
}
