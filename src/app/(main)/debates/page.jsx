"use client";

import { useState } from "react";
import Button from "@/components/atoms/Button";
import { DebateCard } from "@/components/atoms/DebateCard";
import { SearchDebates } from "@/components/atoms/SearchDebate";
import AllDevatesHeroSecton from "@/components/molicuses/AllDevatesHeroSecton";

// Mock data - expanded list
const allDebates = [
  {
    id: "1",
    title: "Should AI replace human customer service?",
    description:
      "Exploring the pros and cons of AI automation in customer support",
    category: "Technology",
    tags: ["AI", "automation", "jobs"],
    supportCount: 45,
    opposeCount: 32,
    totalVotes: 156,
    timeLeft: "2h 15m",
    participants: 77,
    image: "",
  },
  {
    id: "2",
    title: "Remote work is more productive than office work",
    description:
      "Debating the effectiveness of remote vs traditional office environments",
    category: "Work & Career",
    tags: ["remote", "productivity", "workplace"],
    supportCount: 67,
    opposeCount: 23,
    totalVotes: 203,
    timeLeft: "5h 42m",
    participants: 90,
    image: "",
  },
  {
    id: "3",
    title: "Social media does more harm than good",
    description:
      "Examining the impact of social platforms on society and mental health",
    category: "Society",
    tags: ["social-media", "mental-health", "society"],
    supportCount: 89,
    opposeCount: 56,
    totalVotes: 287,
    timeLeft: "1h 8m",
    participants: 145,
    image: "",
  },
  {
    id: "4",
    title: "Electric vehicles will replace gas cars within 10 years",
    description: "Discussing the timeline and feasibility of EV adoption",
    category: "Environment",
    tags: ["electric-vehicles", "environment", "technology"],
    supportCount: 78,
    opposeCount: 45,
    totalVotes: 234,
    timeLeft: "12h 30m",
    participants: 123,
    image: "",
  },
  {
    id: "5",
    title: "Universal Basic Income is necessary for the future",
    description: "Exploring the economic and social implications of UBI",
    category: "Politics",
    tags: ["UBI", "economics", "policy"],
    supportCount: 92,
    opposeCount: 68,
    totalVotes: 312,
    timeLeft: "3d 5h",
    participants: 160,
    image: "",
  },
  {
    id: "6",
    title: "Online education is as effective as traditional classroom learning",
    description:
      "Comparing the effectiveness of digital vs in-person education",
    category: "Education",
    tags: ["online-learning", "education", "technology"],
    supportCount: 54,
    opposeCount: 71,
    totalVotes: 198,
    timeLeft: "18h 22m",
    participants: 125,
    image: "",
  },
];

export default function DebatesPage() {
  const [debates] = useState(allDebates);

  return (
    <>
      <AllDevatesHeroSecton />

      <div className="max-w-7xl mx-auto px-4 my-20">
        {/* Search and Filters */}
        <div className="mb-8">
          <SearchDebates />
        </div>

        {/* Debates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {debates.map((debate) => (
            <DebateCard key={debate.id} debate={debate} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="px-6 py-3 border border-border hover:bg-blue-600 rounded-lg transition-colors duration-200">
            Load More Debates
          </Button>
        </div>
      </div>
    </>
  );
}
