import { Poppins } from "next/font/google";
import Head from "next/head";
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
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="web design, web development, front end design, latest technology, trends, online store, accessories"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mahamudul-hasan.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://example.com/images/cover.jpg"
        />
        <meta property="og:url" content="https://mahamudul-hasan.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@mahamudulhasanx" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://example.com/images/cover.jpg"
        />

        {/* LinkedIn */}
        <meta property="og:site_name" content="Mahamudul Hasan" />
        <meta property="og:type" content="website" />

        {/* GitHub */}
        <meta property="github:site" content="mahamudulhasan-me" />
        <meta property="github:repo" content="mahamudul-hasan" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </>
  );
}
