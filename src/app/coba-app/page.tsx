import { Metadata } from "next";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const id = searchParams.id;

  const anime = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    .then((res) => res.json())
    .then((response) => response.data);

  const CustomMetaData = {
    title: anime?.title_english,
    description: anime?.synopsis,
    openGraph: {
      title: anime?.title_english,
      description: anime?.synopsis,
      type: "article",
      siteName: "coba doang",
      url: "https://awandri.com",
      images: [
        {
          url: anime?.images?.jpg?.image_url,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: anime?.title_english,
      description: anime?.synopsis,
      images: [anime?.images?.jpg?.image_url],
    },
  };

  return CustomMetaData;
}

const page = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      Try Custom Opengraph
    </div>
  );
};

export default page;
