export default function Head() {
  return (
    <>
      <title>Developer Portfolio | Adrian Zinko</title>
      <meta
        name="description"
        content="Portfolio with blog section as well as resume page. There is an option to download resume provided in pdf format from the resume subpage."
      />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://adrianzinko.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Developer Portfolio | Adrian Zinko" />
      <meta
        property="og:description"
        content="Portfolio with blog section as well as resume page. There is an option to download resume provided in pdf format from the resume subpage. "
      />
      <meta property="og:image" content="https://adrianzinko.com/api/static" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="adrianzinko.com" />
      <meta property="twitter:url" content="https://adrianzinko.com" />
      <meta name="twitter:title" content="Developer Portfolio | Adrian Zinko" />
      <meta
        name="twitter:description"
        content="Portfolio with blog section as well as resume page. There is an option to download resume provided in pdf format from the resume subpage. "
      />
      <meta
        name="twitter:image"
        content="https://azinko.s3.eu-central-1.amazonaws.com/az-portfolio-design.png"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
