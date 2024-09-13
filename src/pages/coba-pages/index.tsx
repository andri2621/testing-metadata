import Head from "next/head";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const IndexPage = () => {
  const [data, setData] = useState<any | null>(null);

  const params = useSearchParams();
  const id = params?.get("id");
  const title = params?.get("title");

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
    <div>
      <Head>
        {/* Basic Meta Tags */}
        <meta name="title" content={data?.title_english} />
        <meta name="description" content={data?.synopsis} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://awandri.com"} />
        <meta property="og:title" content={title as string} />
        <meta property="og:description" content={"Gabung bersama kami!"} />

        <meta
          property="og:image"
          content={
            "https://og.awandri.com/api/general?bgImageUrl=https%3A%2F%2Fpruforce-uat.prudential.co.id%2Fpap-web%2Fassets%2Fimages%2Fcta.png&bgType=image&borderColor=%23000000&borderRadius=0px&borderWidth=0&description=Gabung%20bersama%20kami%21&logo=https%3A%2F%2Fpruforce-uat.prudential.co.id%2Fpap-web%2Fassets%2Fimages%2FPruLogo.png&siteName=PRUAFFILIATE&title=Cara%20Menjadi%20Affiliator"
          }
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={"https://awandri.com"} />
        <meta property="og:title" content={title as string} />
        <meta property="og:description" content={"Gabung bersama kami!"} />
        <meta
          name="twitter:image"
          content={
            "https://og.awandri.com/api/general?bgImageUrl=https%3A%2F%2Fpruforce-uat.prudential.co.id%2Fpap-web%2Fassets%2Fimages%2Fcta.png&bgType=image&borderColor=%23000000&borderRadius=0px&borderWidth=0&description=Gabung%20bersama%20kami%21&logo=https%3A%2F%2Fpruforce-uat.prudential.co.id%2Fpap-web%2Fassets%2Fimages%2FPruLogo.png&siteName=PRUAFFILIATE&title=Cara%20Menjadi%20Affiliator"
          }
        />
      </Head>

      <p className="bg-black flex justify-center items-center min-h-screen text-white">
        Try Custom Metadata Pages Router
      </p>
    </div>
  );
};

export default IndexPage;
