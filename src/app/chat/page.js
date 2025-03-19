import Chat from "../components/chat";

export default function ChatPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>
      <Chat/>
    </div>
  );
}