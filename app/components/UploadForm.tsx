"use client"

import React, { useState } from 'react'

export default function UploadForm() {

    const [description, setDescription] = useState('');

    const [image, setImage] = useState(null);

    const handleDescriptionChange = (e) => {
        e.preventDefault();

        if (!image) {
            console.error("Please select an image");
            return;
        }

        const formData = new FormData();
        formData.append("image", image);
        formData.append("description", description);

        try {
            const response = await fetch ("/api/upload", {
                method: "POST",
                body: formaData,
            })
        }
    }

  return (
    <div>
      
    </div>
  )
}
