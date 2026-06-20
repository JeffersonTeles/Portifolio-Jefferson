import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiShare2, FiTwitter, FiLinkedin, FiLink, FiCheck } from "react-icons/fi";

const ShareButtons = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  const shareData = [
    {
      name: "Twitter",
      icon: FiTwitter,
      color: "hover:text-[#1DA1F2]",
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
      },
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      color: "hover:text-[#0A66C2]",
      action: () => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank"
        );
      },
    },
    {
      name: "Copy Link",
      icon: copied ? FiCheck : FiLink,
      color: copied ? "text-green-400" : "hover:text-white",
      action: async () => {
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      },
    },
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      {navigator.share && (
        <motion.button
          onClick={handleNativeShare}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Compartilhar"
        >
          <FiShare2 size={18} />
        </motion.button>
      )}

      {shareData.map((item) => (
        <motion.button
          key={item.name}
          onClick={item.action}
          className={`p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 transition-all ${item.color} hover:bg-white/10`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={item.name}
        >
          <item.icon size={18} />
        </motion.button>
      ))}
    </div>
  );
};

export default ShareButtons;
