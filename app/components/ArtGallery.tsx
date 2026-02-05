"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type ArtItem = {
  id: string;
  imageUrl: string;
  description: string;
};

export default function ArtGallery() {
  const [artItems, setArtItems] = useState<ArtItem[]>([]);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const fetchArtItems = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          console.error("Failed to fetch art");
          return;
        }

        const data: ArtItem[] = await response.json();
        setArtItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtItems();
  }, []); // ✅ run once on mount

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  return (
    <div className="flex flex-col gap-6">
      {artItems.slice(0, visibleItems).map((item) => (
        <div key={item.id} className="flex flex-col gap-2">
          <Image
            src={item.imageUrl}
            alt={item.description}
            width={350}
            height={350}
          />
          <p>{item.description}</p>
        </div>
      ))}

      {visibleItems < artItems.length && (
        <button
          onClick={handleLoadMore}
          className="self-start bg-blue-300 px-4 py-2 mt-4 rounded-sm text-white"
        >
          Load more
        </button>
      )}
    </div>
  );
}
