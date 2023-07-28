import "./globals.css";
import { Montserrat } from "next/font/google";

// Add other classes to the 'body' element
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  className: "flex flex-col min-h-screen bg-orange-100", // Add the classes you want here, separated by spaces
});

export const metadata = {
  title: "Nature paint web app",
  description: "landing page for nature paint industry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
