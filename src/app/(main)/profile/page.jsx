import { auth } from "@/auth";

export default async function DebateProfilePage() {
  const session = await auth();
  const debater = {
    name: "Alex Rivera",
    username: "@alexrivera",
    title: "Master Debater",
    rank: "Diamond",
    bio: "Passionate debater specializing in political philosophy, ethics, and technology policy. I believe in the power of reasoned discourse to bridge divides and find truth.",
    location: "Boston, MA",
    joinDate: "January 2022",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=120&width=120&text=AR",
    coverImage: "/placeholder.svg?height=300&width=1200&text=Debate+Arena",
    stats: {
      totalDebates: 156,
      wins: 89,
      losses: 45,
      draws: 22,
      winRate: 57,
      reputation: 2847,
      followers: 892,
      following: 234,
    },
    expertise: [
      "Political Philosophy",
      "Ethics & Morality",
      "Technology Policy",
      "Climate Change",
      "Economic Theory",
      "Social Justice",
    ],
    achievements: [
      { name: "Debate Champion", icon: "👑", color: "text-yellow-500" },
      { name: "Logic Master", icon: "🎯", color: "text-blue-500" },
      { name: "Persuasion Expert", icon: "⚡", color: "text-purple-500" },
      { name: "Rising Star", icon: "📈", color: "text-green-500" },
    ],
    recentDebates: [
      {
        id: 1,
        topic: "Should AI development be regulated by government?",
        position: "Pro",
        opponent: "Sarah Chen",
        result: "Won",
        votes: { for: 67, against: 33 },
        timestamp: "2 days ago",
        duration: "45 min",
      },
      {
        id: 2,
        topic: "Is remote work better for productivity than office work?",
        position: "Con",
        opponent: "Mike Johnson",
        result: "Lost",
        votes: { for: 42, against: 58 },
        timestamp: "1 week ago",
        duration: "38 min",
      },
      {
        id: 3,
        topic: "Should social media platforms be treated as public utilities?",
        position: "Pro",
        opponent: "Emma Davis",
        result: "Draw",
        votes: { for: 50, against: 50 },
        timestamp: "2 weeks ago",
        duration: "52 min",
      },
    ],
  };

  const getRankColor = (rank) => {
    switch (rank.toLowerCase()) {
      case "diamond":
        return "text-cyan-400";
      case "platinum":
        return "text-gray-300";
      case "gold":
        return "text-yellow-400";
      case "silver":
        return "text-gray-400";
      case "bronze":
        return "text-orange-500";
      default:
        return "text-gray-500";
    }
  };

  const getResultColor = (result) => {
    switch (result.toLowerCase()) {
      case "won":
        return "text-green-700 bg-green-100 border-green-200";
      case "lost":
        return "text-red-700 bg-red-100 border-red-200";
      case "draw":
        return "text-yellow-700 bg-yellow-100 border-yellow-200";
      default:
        return "text-gray-700 bg-gray-100 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Photo & Profile Header */}
      <div className="relative">
        <div className="h-64 md:h-80 bg-secondary-bg">
          <img
            src={debater.coverImage || "/placeholder.svg"}
            alt="Cover"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-secondary-bg bg-opacity-30" />

        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={session.user.image || "/placeholder.svg"}
                    alt={session.user.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center hidden">
                    AR
                  </div>
                </div>
                <div
                  className={`absolute -bottom-2 -right-2 ${getRankColor(debater.rank)} text-2xl`}
                >
                  👑
                </div>
              </div>

              <div className="flex-1 text-white">
                <h1 className="text-2xl md:text-4xl font-bold">
                  {session.user.name}
                </h1>
                <p className="text-lg opacity-90">
                  @{session.user.email.split("@")[0]}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30`}
                  >
                    {debater.rank} {debater.title}
                  </span>
                  <span className="text-sm opacity-75">
                    • {debater.stats.reputation} reputation
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                  💬 Challenge to Debate
                </button>
                <button className="px-4 py-2 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                  ✏️ Edit Profile
                </button>
                <button className="px-4 py-2 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  ⚙️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Debater Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Debate Stats Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  🏆 Debate Statistics
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {debater.stats.totalDebates}
                    </div>
                    <div className="text-sm text-gray-600">Total Debates</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {debater.stats.wins}
                    </div>
                    <div className="text-sm text-gray-600">Wins</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">
                      {debater.stats.losses}
                    </div>
                    <div className="text-sm text-gray-600">Losses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">
                      {debater.stats.draws}
                    </div>
                    <div className="text-sm text-gray-600">Draws</div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Win Rate</span>
                    <span className="font-semibold">
                      {debater.stats.winRate}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${debater.stats.winRate}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">
                      {debater.stats.followers}
                    </div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-600">
                      {debater.stats.following}
                    </div>
                    <div className="text-xs text-gray-600">Following</div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold">About</h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-700">{debater.bio}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    📍 {debater.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    📅 Joined {debater.joinDate}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    ✉️{" "}
                    <a
                      href={`mailto:${debater.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {debater.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  🏅 Achievements
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {debater.achievements.map((achievement) => (
                    <div
                      key={achievement.name}
                      className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <span className="text-xs font-medium text-center">
                        {achievement.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Expertise Areas Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Areas of Expertise</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {debater.expertise.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Recent Debates */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  💬 Recent Debates
                </h3>
              </div>
              <div className="p-6 space-y-6">
                {debater.recentDebates.map((debate, index) => (
                  <div key={debate.id}>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">
                            {debate.topic}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              👥 vs {debate.opponent}
                            </div>
                            <div className="flex items-center gap-1">
                              ⏱️ {debate.duration}
                            </div>
                            <span>{debate.timestamp}</span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getResultColor(debate.result)}`}
                        >
                          {debate.result}
                        </span>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">
                            Position:{" "}
                            <span className="text-blue-600">
                              {debate.position}
                            </span>
                          </span>
                          <span className="text-sm text-gray-600">
                            Audience Vote
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 flex-1">
                            <span className="text-green-600">👍</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${debate.votes.for}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium">
                              {debate.votes.for}%
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-1">
                            <span className="text-red-600">👎</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-red-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${debate.votes.against}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium">
                              {debate.votes.against}%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          View Full Debate
                        </button>
                        <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          View Arguments
                        </button>
                      </div>
                    </div>
                    {index < debater.recentDebates.length - 1 && (
                      <div className="border-t border-gray-200 mt-6" />
                    )}
                  </div>
                ))}

                <div className="text-center pt-4">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    View All Debates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
