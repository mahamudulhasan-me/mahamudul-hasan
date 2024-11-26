import { Spotlight } from "@/components/motion-ui/Spotlight";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Mahamudul Hasan - Web Application Developer",
  description:
    "Skilled front-end and web developer adept at creating engaging and responsive digital experiences. With expertise in modern technologies and frameworks, I specialize in translating design concepts into user-friendly websites and applications. Committed to delivering high-quality, SEO-optimized solutions that enhance online visibility and drive organic traffic. Passionate about staying updated with industry trends to ensure cutting-edge and effective web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N6SV9VSLK8"
        ></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N6SV9VSLK8');`}
        </Script>
      </head>
      <body className={poppins.className}>
        <Spotlight
          className="blur-3xl pointer-events-none"
          size={300}
          springOptions={{
            bounce: 0.3,
            duration: 0.1,
            width: 0.5,
          }}
        />

        {children}
      </body>
    </html>
  );
}
