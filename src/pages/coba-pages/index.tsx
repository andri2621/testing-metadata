import Head from "next/head";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const IndexPage = () => {
  const [data, setData] = useState<any | null>(null);

  const params = useSearchParams();
  const id = params?.get("id");

  const fetchData = useCallback(async () => {
    if (!id) return;

    try {
      await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        .then((res) => res.json())
        .then((response) => setData(response.data));
    } catch (err) {
      console.log("Failed to fetch KV details");
    } finally {
      console.log("done");
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main>
      <Head>
        {/* Basic Meta Tags */}
        <meta name="title" content={data?.title_english} />
        <meta name="description" content={data?.synopsis} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://awandri.com"} />
        <meta property="og:title" content={data?.title_english} />
        <meta property="og:description" content={data?.synopsis} />

        <meta property="og:image" content={data?.images?.jpg?.image_url} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={"https://awandri.com"} />
        <meta name="twitter:title" content={data?.title_english} />
        <meta name="twitter:description" content={data?.synopsis} />
        <meta name="twitter:image" content={data?.images?.jpg?.image_url} />
      </Head>

      <div>Try Custom Metadata Pages Router</div>
    </main>
  );
};

export default IndexPage;
