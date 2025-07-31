"use client";

import { FaCrown, FaFire, FaUsers } from "react-icons/fa";
import {
  IoChatbubbleEllipsesOutline,
  IoEyeOutline,
  IoFlashOutline,
  IoPeopleOutline,
  IoPlayOutline,
  IoStarOutline,
  IoTimeOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { useEffect, useState } from "react";

export default function DebateArenaVideo() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenes = [
    "hero",
    "features",
    "live-debates",
    "leaderboard",
    "community",
    "cta",
  ];

  useEffect(() => {
    // Auto-start the video when component mounts
    const autoStart = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);

    return () => clearTimeout(autoStart);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentScene((prev) => {
          if (prev >= scenes.length - 1) {
            // Auto-restart the video instead of stopping
            return 0;
          }
          return prev + 1;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, scenes.length]);

  const startVideo = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  const stopVideo = () => {
    setIsPlaying(false);
  };

  const renderScene = () => {
    switch (scenes[currentScene]) {
      case "hero":
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl animate-pulse">
                  <IoChatbubbleEllipsesOutline className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
                  Debate Arena
                </h1>
              </div>
              <p className="text-2xl text-slate-300 animate-slide-up delay-300">
                Where Ideas Clash and Minds Evolve
              </p>
              <p className="text-lg text-slate-400 animate-slide-up delay-500">
                Join the ultimate platform for intellectual discourse
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 animate-slide-up delay-700">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">50K+</div>
                <div className="text-slate-400">Active Debaters</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400">100K+</div>
                <div className="text-slate-400">Debates Held</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">24/7</div>
                <div className="text-slate-400">Live Discussions</div>
              </div>
            </div>
          </div>
        );

      case "features":
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-white mb-12 animate-slide-down">
              Powerful Features
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 text-center animate-slide-left">
                <IoFlashOutline className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Real-time Debates
                </h3>
                <p className="text-slate-300">
                  Engage in live debates with instant responses
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6 text-center animate-slide-right">
                <IoTrophyOutline className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Competitive Rankings
                </h3>
                <p className="text-slate-300">
                  Climb the leaderboards and earn recognition
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 text-center animate-slide-left delay-300">
                <IoPeopleOutline className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Global Community
                </h3>
                <p className="text-slate-300">
                  Connect with debaters worldwide
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 text-center animate-slide-right delay-300">
                <IoStarOutline className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  AI-Powered Insights
                </h3>
                <p className="text-slate-300">
                  Get feedback and improve your skills
                </p>
              </div>
            </div>
          </div>
        );

      case "live-debates":
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-white mb-8 animate-slide-down">
              Live Debates Happening Now
            </h2>
            <div className="space-y-4">
              {[
                {
                  topic: "Should AI replace human teachers?",
                  participants: 234,
                  status: "Hot",
                },
                {
                  topic:
                    "Climate change: Individual vs Corporate responsibility",
                  participants: 189,
                  status: "Trending",
                },
                {
                  topic: "The future of remote work",
                  participants: 156,
                  status: "New",
                },
              ].map((debate, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm border-l-4 border-l-purple-500 rounded-lg p-6 animate-slide-up delay-${index * 200}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm font-medium">
                          {debate.status}
                        </span>
                        <div className="flex items-center text-slate-400 text-sm">
                          <IoEyeOutline className="h-4 w-4 mr-1" />
                          {debate.participants} watching
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {debate.topic}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm">
                        <IoTimeOutline className="h-4 w-4 mr-1" />
                        Started 2 hours ago
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center">
                      <IoPlayOutline className="h-4 w-4 mr-2" />
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "leaderboard":
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-white mb-8 animate-slide-down">
              Top Debaters This Week
            </h2>
            <div className="space-y-4">
              {[
                { name: "Sarah Chen", points: 2847, rank: 1, badge: "🥇" },
                { name: "Marcus Johnson", points: 2634, rank: 2, badge: "🥈" },
                { name: "Elena Rodriguez", points: 2521, rank: 3, badge: "🥉" },
                { name: "David Kim", points: 2398, rank: 4, badge: "🏆" },
                { name: "Aisha Patel", points: 2276, rank: 5, badge: "⭐" },
              ].map((user, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-slide-up delay-${index * 100}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{user.badge}</div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {user.name}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Rank #{user.rank}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-purple-400">
                        {user.points.toLocaleString()}
                      </div>
                      <div className="text-slate-400 text-sm">points</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "community":
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-8 animate-slide-down">
              Join Our Growing Community
            </h2>
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="animate-bounce delay-100">
                <FaUsers className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">50,000+</div>
                <div className="text-slate-400">Active Members</div>
              </div>
              <div className="animate-bounce delay-300">
                <FaFire className="h-16 w-16 text-pink-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">1,000+</div>
                <div className="text-slate-400">Daily Debates</div>
              </div>
              <div className="animate-bounce delay-500">
                <FaCrown className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-slate-400">Expert Moderators</div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-slide-up">
              <p className="text-xl text-slate-300 mb-6">
                "Debate Arena transformed how I think about complex issues. The
                community is incredible!"
              </p>
              <div className="flex items-center justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <IoStarOutline
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-slate-400 mt-2">
                - Alex Thompson, Philosophy Student
              </p>
            </div>
          </div>
        );

      case "cta":
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6 animate-slide-down">
              Ready to Join the Arena?
            </h2>
            <p className="text-xl text-slate-300 mb-8 animate-slide-up delay-300">
              Start your journey in the world's premier debate platform
            </p>
            <div className="space-y-4 animate-slide-up delay-500">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-12 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
                Get Started Free
              </button>
              <p className="text-slate-400">
                No credit card required • Join 50,000+ debaters
              </p>
            </div>
            <div className="mt-12 animate-pulse">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                  <IoChatbubbleEllipsesOutline className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Debate Arena
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-h-[600px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Video Controls */}
      {/* <div className="absolute top-6 right-6 z-50">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={startVideo}
              disabled={isPlaying}
              className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
            >
              <IoPlayOutline className="h-4 w-4 mr-2" />
              {isPlaying ? "Playing..." : "Play Video"}
            </button>
            <button
              onClick={stopVideo}
              disabled={!isPlaying}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Stop
            </button>
          </div>
          <div className="text-white text-sm">
            Scene: {currentScene + 1}/{scenes.length}
          </div>
          <div className="w-32 bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentScene + 1) / scenes.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 max-h-[600px] flex items-center justify-center p-8">
        <div className="h-[600px] w-4/5 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {renderScene()}
          </div>
        </div>
      </div>

      {/* Scene Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {scenes.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentScene
                  ? "bg-purple-500 scale-125"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
