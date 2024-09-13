import Head from "next/head";
import React from "react";

type AnimeData = {
  title_english: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

type Props = {
  data: AnimeData | null;
  error: boolean;
};

const IndexPage = ({ data, error }: Props) => {
  if (error || !data) {
    return (
      <div>
        <p>Error fetching data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <Head>
        {/* Basic Meta Tags */}
        <meta name="title" content={data?.title_english || "Default Title"} />
        <meta
          name="description"
          content={data?.synopsis || "Default Description"}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://awandri.com"} />
        <meta
          property="og:title"
          content={data?.title_english || "Default Title"}
        />
        <meta
          property="og:description"
          content={data?.synopsis || "Default Description"}
        />
        <meta
          property="og:image"
          content={data?.images?.jpg?.image_url || "default-image-url"}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={"https://awandri.com"} />
        <meta
          name="twitter:title"
          content={data?.title_english || "Default Title"}
        />
        <meta
          name="twitter:description"
          content={data?.synopsis || "Default Description"}
        />
        <meta
          name="twitter:image"
          content={data?.images?.jpg?.image_url || "default-image-url"}
        />
      </Head>

      <p className="bg-black flex justify-center items-center min-h-screen text-white">
        Try Custom Metadata Pages Router
      </p>
    </div>
  );
};

export default IndexPage;

// Server-side fetching
export async function getServerSideProps(context: any) {
  const { id } = context.query;

  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const response = await res.json();

    return {
      props: {
        data: response.data || null,
        error: false,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: true,
      },
    };
  }
}
