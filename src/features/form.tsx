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
    <div className="plasmo-border-2 plasmo-border-black plasmo-max-h-full plasmo-max-w-full plasmo-m-auto plasmo-p-3">
      <div className="plasmo-h-[360px] plasmo-min-h-[360px] plasmo-max-h-[360px] plasmo-overflow-y-auto  ">
        <div className="plasmo-flex plasmo-flex-1 plasmo-flex-col plasmo-gap-2">
          {messages.map((m) => (
            <div
              key={m.id}
              className="plasmo-flex plasmo-justify-start plasmo-flex-1 plasmo-gap-2 ">
              <div className="plasmo-flex-[0.1] plasmo-text-md plasmo-font-semibold">
                {m.role === "user" ? "User: " : "AI: "}
              </div>

              <div
                className={
                  m.role === "user"
                    ? "plasmo-bg-cyan-100 w-auto plasmo-text-black plasmo-flex-1 plasmo-px-2 plasmo-rounded-md plasmo-text-md "
                    : "plasmo-bg-violet-200 plasmo-text-black  plasmo-flex-1 plasmo-px-2 plasmo-rounded-md"
                }>
                {m.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="plasmo-w-full plasmo-p-2 plasmo-flex plasmo-flex-1">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Enter message"
          className="plasmo-mr-2 plasmo-border-black plasmo-flex-1 plasmo-p-1 plasmo-rounded-md plasmo-border-2 "
        />
        <button
          type="submit"
          className=" plasmo-bg-red-300 plasmo-py-2 plasmo-px-4 plasmo-flex-[0.5] plasmo-rounded-md plasmo-text-black plasmo-text-center">
          Generate
        </button>
      </form>
    </div>
  )
}
