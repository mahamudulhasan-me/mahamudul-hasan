import ChangeBgOnMouseEvent from "@/components/ChangeBgOnMouseEvent/ChangeBgOnMouseEvent";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Mahamudul Hasan - Web Application Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="keywords"
        content="web design, web development, web developer, front end design, latest technology, trends, online store, accessories"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://example.com/page" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <meta
        name="description"
        content="Welcome to our online store! Find the latest trends in fashion and accessories."
      />
      <meta name="image" content="https://example.com/images/cover.jpg" />

      <meta
        property="og:title"
        content="Fashion Trends Online - Shop the Latest Styles"
      />
      <meta
        property="og:description"
        content="Discover the latest fashion trends and accessories at our online store. Shop now!"
      />
      <meta
        property="og:image"
        content="https://example.com/images/cover.jpg"
      />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@yourtwitterhandle" />
      <meta
        name="twitter:title"
        content="Fashion Trends Online - Shop the Latest Styles"
      />
      <meta
        name="twitter:description"
        content="Discover the latest fashion trends and accessories at our online store. Shop now!"
      />
      <meta
        name="twitter:image"
        content="https://example.com/images/cover.jpg"
      />
      <body className={poppins.className}>
        <ChangeBgOnMouseEvent /> {children}
      </body>
    </html>
  );
}
