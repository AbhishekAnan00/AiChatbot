// "use client";
// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5000");

// export default function Chat() {
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         socket.on("message", (msg) => setMessages((prev) => [...prev, msg]));
//         return () => socket.off("message");
//     }, []);

//     const sendMessage = () => {
//         if (message.trim()) {
//             socket.emit("message", message);
//             setMessages((prev) => [...prev, { sender: "user", text: message }]);
//             setMessage("");
//         }
//     };

//     return (
//         <div>
//             <h2>AI Chatbot</h2>
//             <div style={{ height: "300px", overflowY: "scroll" }}>
//                 {messages.map((msg, i) => (
//                     <p key={i} style={{ color: msg.sender === "bot" ? "red" : "blue" }}>
//                         {msg.sender}: {msg.text}
//                     </p>
//                 ))}
//             </div>
//             <input style={{border:"2px solid white"}} value={message} onChange={(e) => setMessage(e.target.value)} />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// }
"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (msg) => setMessages((prev) => [...prev, msg]));
    return () => socket.off("message");
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", message);
      setMessages((prev) => [...prev, { sender: "user", text: message }]);
      setMessage("");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        width: "320px",
        height: "480px",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#4a90e2",
          padding: "0.75rem 1rem",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          color: "#fff",
          textAlign: "center",
          position: "relative",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Chatbot</span>
      </div>

      <div
        style={{
          flex: 1,
          padding: "0.5rem",
          overflowY: "auto",
          background: "#f9f9f9",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: "0.5rem",
              display: "flex",
              justifyContent: msg.sender === "bot" ? "flex-start" : "flex-end",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "0.5rem 0.75rem",
                borderRadius: "12px",
                background: msg.sender === "bot" ? "#e0e0e0" : "#4a90e2",
                color: msg.sender === "bot" ? "#000" : "#fff",
                maxWidth: "80%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "0.5rem",
          borderTop: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            color:"black",
            marginRight: "0.5rem",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            background: "#4a90e2",
            border: "none",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}


