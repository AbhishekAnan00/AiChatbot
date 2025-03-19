import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1>Welcome to AI Chatbot</h1>
      <Link href="/chat" className="text-blue-500 underline">
        Go to Chat
      </Link>
    </div>
  );
}
