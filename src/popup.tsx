import React from "react"

import { CountButton } from "~features/count-button"
import ChatForm from "~features/form"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-h-[400px] plasmo-w-[400px] plasmo-max-h-[400px] plasmo-max-w-[400px] plasmo-m-auto">
      {/* <CountButton /> */}
      <ChatForm />
    </div>
  )
}

export default IndexPopup
