"use client";

import React, { useState, type ChangeEvent } from "react";

type Props = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires?: string;
};

export default function UploadForm({ user, expires }: Props) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files?.[0] ?? null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (res.ok) {
      setDescription("");
      setImage(null);
    }
  };

  if (!user) return <h2>Sign In To Upload!</h2>;

  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
      <p className="text-sm">Session expires: {expires ?? "unknown"}</p>

      <textarea
        className="outline h-20 outline-blue-300"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Description"
        maxLength={100}
        style={{ resize: "none" }}
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />

      <button className="self-start bg-blue-300 px-3 rounded-sm" type="submit">
        Upload
      </button>
    </form>
  );
}
