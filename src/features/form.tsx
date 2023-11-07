import { useChat } from "ai/react"
import React from "react"

export default function ChatForm() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "http://localhost:3000/api/chat",
    // headers: {
    //   "Access-Control-Allow-Origin": "*"
    // },
    credentials: "omit"
  })

  return (
    <div className="plasmo-max-h-[400px] plasmo-max-w-[400px] plasmo-m-auto">
      <div className="plasmo-h-[300px] plasmo-min-h-[300px] plasmo-max-h-[360px]">
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="plasmo-max-w-[400px] plasmo-min-w-[360px]">
        <label>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Enter message"
            className="plasmo-mr-2 plasmo-border-black plasmo-p-1 plasmo-rounded-md plasmo-border-2"
          />
        </label>
        <button
          type="submit"
          className="plasmo-bg-gray-600 plasmo-py-1 plasmo-px-2 plasmo-rounded-md plasmo-text-white">
          Send
        </button>
      </form>
    </div>
  )
}
