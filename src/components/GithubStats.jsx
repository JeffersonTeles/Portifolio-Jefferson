import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiActivity } from 'react-icons/fi';

const GithubStats = () => {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    recentCommits: 124
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/JeffersonTeles');
        const userData = await userRes.json();
        
        const reposRes = await fetch('https://api.github.com/users/JeffersonTeles/repos?per_page=100&sort=updated');
        const reposData = await reposRes.json();
        
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        
        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          stars: totalStars,
          recentCommits: reposData.reduce((acc, repo) => acc + (repo.updated_at ? 1 : 0), 0)
        });
      } catch (e) {
        console.error("Failed to fetch Github stats");
      } finally {
        setLoading(false);
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
