import "./globals.css";

export const metadata = {
  title: "AI Chatbot",
  description: "Build your future with AI Chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
