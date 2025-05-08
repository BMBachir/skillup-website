"use client";

import { Input } from "@/components/ui/input";
import { MessageCircleDashed, X } from "lucide-react";
import { useState } from "react";

export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-[#001282] text-white rounded-full p-4 shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out flex items-center justify-center"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? <X /> : <MessageCircleDashed />}
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 z-50 bg-white border mb-4 shadow-lg rounded-lg w-80 h-96 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center bg-[#001282] text-white rounded-t-lg">
            <h4 className="text-lg font-semibold">Skillup Link Chat</h4>
            <button onClick={() => setIsChatOpen(false)}>
              <X />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-sm text-gray-600">
              Bonjour! Comment pouvons-nous vous aider aujourd'hui?
            </p>
          </div>
          <div className="p-2 border-t">
            <Input
              type="text"
              placeholder="Écrivez un message..."
              className="w-full p-2 border rounded focus:outline-none focus:ring"
            />
          </div>
        </div>
      )}
    </>
  );
}
