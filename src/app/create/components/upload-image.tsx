import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Spinner from "@/components/ui/spinner";

interface UploadImageProps {
  setUrl: (url: string) => void;
}

const UploadImage = ({ setUrl }: UploadImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { toast } = useToast();
  const pinataJWT = process.env.VITE_PINATA_KEY;

  const handleImageClick = () => {
    if (isLoading) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        const pinataMetadata = JSON.stringify({
          name: file.name,
        });
        formData.append("pinataMetadata", pinataMetadata);
        const pinataOptions = JSON.stringify({
          cidVersion: 0,
        });
        formData.append("pinataOptions", pinataOptions);
        const res = await fetch(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${pinataJWT}`,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          const ipfsHash = data.IpfsHash;
          const ipfsImageUri = `https://ipfs.io/ipfs/${ipfsHash}`;
          setImageUrl(ipfsImageUri);
          setUrl(ipfsImageUri);
          toast({
            title: "Success",
            description: "Image uploaded successfully",
          });
        } else {
          throw new Error("Upload failed");
        }
      } catch (error) {
        console.error("Upload failed", error);
        toast({
          title: "Error",
          description: "Image upload failed",
          variant: "destructive",
        });
      }
      setIsLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="relative">
      <div
        className="w-40 h-40 rounded-full overflow-hidden cursor-pointer"
        onClick={handleImageClick}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Uploaded Image"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl">📷</span>
          </div>
        )}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Spinner size={8} className="text-white" />
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default UploadImage;
