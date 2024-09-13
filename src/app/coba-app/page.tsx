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
  console.log(id);

  // const anime = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  //   .then((res) => res.json())
  //   .then((response) => response.data);

  const CustomMetaData = {
    title: "ini adalah judul",
    description: "ini deskripsi",
    openGraph: {
      title: "ini adalah judul",
      description: "ini deskripsi",
      type: "website",
      siteName: "coba doang",
      url: "https://awandri.com",
      images: [
        {
          url: "https://og.awandri.com/api/general?bgImageUrl=https%3A%2F%2Fcdn.myanimelist.net%2Fimages%2Fanime%2F1439%2F93480.jpg&bgType=image&description=Gabung%20bersama%20kami%21&siteName=PRUAFFILIATE&title=COBA%20COBA%20DOANG",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ini adalah judul",
      description: "ini deskripsi",
      images: [
        "https://og.awandri.com/api/general?bgImageUrl=https%3A%2F%2Fcdn.myanimelist.net%2Fimages%2Fanime%2F1439%2F93480.jpg&bgType=image&description=Gabung%20bersama%20kami%21&siteName=PRUAFFILIATE&title=COBA%20COBA%20DOANG",
      ],
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
