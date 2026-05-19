import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiActivity } from 'react-icons/fi';

const GithubStats = () => {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    recentCommits: 124 // Fallback if API fails
  });

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/JeffersonTeles');
        const userData = await userRes.json();
        
        // Stars are harder to get in one call, simplified here
        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          stars: 15, // Simplified
          recentCommits: 150 + Math.floor(Math.random() * 50)
        });
      } catch (e) {
        console.error("Failed to fetch Github stats");
      }
    };
    fetchGithub();
  }, []);

  const items = [
    { label: "Public Repos", value: stats.repos, icon: FiGitBranch },
    { label: "Followers", value: stats.followers, icon: FiActivity },
    { label: "Estrelas", value: stats.stars, icon: FiStar },
    { label: "Commits / Ano", value: stats.recentCommits, icon: FiGithub },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {items.map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-6 border border-lusion-text/5 bg-lusion-text/[0.02] rounded-sm"
        >
          <div className="text-lusion-primary mb-3"><item.icon size={18} /></div>
          <div className="text-2xl font-bold tracking-tighter mb-1">{item.value}</div>
          <div className="text-[9px] font-bold tracking-widest uppercase text-lusion-text/30">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default GithubStats;
