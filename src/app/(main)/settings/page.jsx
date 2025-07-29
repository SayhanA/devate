"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    // Profile settings
    name: "Alex Rivera",
    username: "alexrivera",
    email: "alex@example.com",
    bio: "Passionate debater specializing in political philosophy, ethics, and technology policy.",
    location: "Boston, MA",
    website: "alexrivera.dev",

    // Privacy settings
    profileVisibility: "public",
    showEmail: false,
    showLocation: true,
    allowChallenges: true,
    showOnlineStatus: true,

    // Notification settings
    emailNotifications: true,
    pushNotifications: true,
    debateInvites: true,
    followNotifications: true,
    commentNotifications: true,
    weeklyDigest: false,

    // Debate preferences
    preferredTopics: [
      "Political Philosophy",
      "Ethics & Morality",
      "Technology Policy",
    ],
    debateLength: "30",
    autoAcceptChallenges: false,
    skillLevel: "advanced",

    // Account settings
    twoFactorAuth: false,
    loginAlerts: true,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving settings:", formData);
    alert("Settings saved successfully!");
  };

  const tabs = [
    { id: "profile", name: "Profile", icon: "👤" },
    { id: "privacy", name: "Privacy", icon: "🔒" },
    { id: "notifications", name: "Notifications", icon: "🔔" },
    { id: "debates", name: "Debate Preferences", icon: "💬" },
    { id: "account", name: "Account & Security", icon: "⚙️" },
  ];

  const topicOptions = [
    "Political Philosophy",
    "Ethics & Morality",
    "Technology Policy",
    "Climate Change",
    "Economic Theory",
    "Social Justice",
    "Healthcare",
    "Education",
    "International Relations",
    "Science",
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-secondary-bg pt-32 px-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Settings</h1>
              <p className="text-gray-200 mt-1">
                Manage your account preferences and debate settings
              </p>
            </div>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Profile Information</h2>
                  <p className="text-gray-600 mt-1">
                    Update your public profile information
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  {/* Profile Picture */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Picture
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-blue-500 text-white text-2xl font-bold flex items-center justify-center">
                        AR
                      </div>
                      <div>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Change Photo
                        </button>
                        <p className="text-xs text-gray-500 mt-1">
                          JPG, PNG or GIF. Max size 2MB.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        @
                      </span>
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) =>
                          handleInputChange("username", e.target.value)
                        }
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                      placeholder="Tell others about yourself..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Brief description for your profile. Maximum 500
                      characters.
                    </p>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="City, Country"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) =>
                        handleInputChange("website", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === "privacy" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Privacy Settings</h2>
                  <p className="text-gray-600 mt-1">
                    Control who can see your information and interact with you
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  {/* Profile Visibility */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Visibility
                    </label>
                    <select
                      value={formData.profileVisibility}
                      onChange={(e) =>
                        handleInputChange("profileVisibility", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="public">
                        Public - Anyone can view your profile
                      </option>
                      <option value="members">
                        Members Only - Only registered users can view
                      </option>
                      <option value="private">
                        Private - Only you can view your profile
                      </option>
                    </select>
                  </div>

                  {/* Privacy Toggles */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Show Email Address
                        </h3>
                        <p className="text-xs text-gray-500">
                          Allow others to see your email on your profile
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange("showEmail", !formData.showEmail)
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.showEmail ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.showEmail
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Show Location
                        </h3>
                        <p className="text-xs text-gray-500">
                          Display your location on your profile
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "showLocation",
                            !formData.showLocation
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.showLocation ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.showLocation
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Allow Debate Challenges
                        </h3>
                        <p className="text-xs text-gray-500">
                          Let other users challenge you to debates
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "allowChallenges",
                            !formData.allowChallenges
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.allowChallenges
                            ? "bg-blue-600"
                            : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.allowChallenges
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Show Online Status
                        </h3>
                        <p className="text-xs text-gray-500">
                          Display when you're online to other users
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "showOnlineStatus",
                            !formData.showOnlineStatus
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.showOnlineStatus
                            ? "bg-blue-600"
                            : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.showOnlineStatus
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">
                    Notification Preferences
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Choose how you want to be notified about activity
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Email Notifications
                        </h3>
                        <p className="text-xs text-gray-500">
                          Receive notifications via email
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "emailNotifications",
                            !formData.emailNotifications
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.emailNotifications
                            ? "bg-blue-600"
                            : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.emailNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Push Notifications
                        </h3>
                        <p className="text-xs text-gray-500">
                          Receive push notifications in your browser
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "pushNotifications",
                            !formData.pushNotifications
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.pushNotifications
                            ? "bg-blue-600"
                            : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.pushNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Debate Invitations
                        </h3>
                        <p className="text-xs text-gray-500">
                          Get notified when someone challenges you to a debate
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "debateInvites",
                            !formData.debateInvites
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.debateInvites ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.debateInvites
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          New Followers
                        </h3>
                        <p className="text-xs text-gray-500">
                          Get notified when someone follows you
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "followNotifications",
                            !formData.followNotifications
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.followNotifications
                            ? "bg-blue-600"
                            : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.followNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Comments & Replies
                        </h3>
                        <p className="text-xs text-gray-500">
                          Get notified about comments on your debates
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "commentNotifications",
                            !formData.commentNotifications
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.commentNotifications
                            ? "bg-blue-600"
                            : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.commentNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Weekly Digest
                        </h3>
                        <p className="text-xs text-gray-500">
                          Receive a weekly summary of platform activity
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "weeklyDigest",
                            !formData.weeklyDigest
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.weeklyDigest ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.weeklyDigest
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Debate Preferences */}
            {activeTab === "debates" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Debate Preferences</h2>
                  <p className="text-gray-600 mt-1">
                    Customize your debate experience and preferences
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  {/* Preferred Topics */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Topics
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {topicOptions.map((topic) => (
                        <label key={topic} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.preferredTopics.includes(topic)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                handleInputChange("preferredTopics", [
                                  ...formData.preferredTopics,
                                  topic,
                                ]);
                              } else {
                                handleInputChange(
                                  "preferredTopics",
                                  formData.preferredTopics.filter(
                                    (t) => t !== topic
                                  )
                                );
                              }
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            {topic}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Debate Length */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Debate Length
                    </label>
                    <select
                      value={formData.debateLength}
                      onChange={(e) =>
                        handleInputChange("debateLength", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="90">1.5 hours</option>
                    </select>
                  </div>

                  {/* Skill Level */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skill Level
                    </label>
                    <select
                      value={formData.skillLevel}
                      onChange={(e) =>
                        handleInputChange("skillLevel", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  {/* Auto Accept Challenges */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">
                        Auto-Accept Challenges
                      </h3>
                      <p className="text-xs text-gray-500">
                        Automatically accept debate challenges from other users
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        handleInputChange(
                          "autoAcceptChallenges",
                          !formData.autoAcceptChallenges
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        formData.autoAcceptChallenges
                          ? "bg-blue-600"
                          : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.autoAcceptChallenges
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Account & Security */}
            {activeTab === "account" && (
              <div className="space-y-6">
                {/* Security Settings */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">
                      Account & Security
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Manage your account security and login preferences
                    </p>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Change Password */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-4">
                        Change Password
                      </h3>
                      <div className="space-y-4">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-xs text-gray-500">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "twoFactorAuth",
                            !formData.twoFactorAuth
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.twoFactorAuth ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.twoFactorAuth
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Login Alerts */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Login Alerts
                        </h3>
                        <p className="text-xs text-gray-500">
                          Get notified of new login attempts
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleInputChange(
                            "loginAlerts",
                            !formData.loginAlerts
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.loginAlerts ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.loginAlerts
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-white rounded-xl shadow-sm border border-red-200">
                  <div className="p-6 border-b border-red-200">
                    <h2 className="text-xl font-semibold text-red-700">
                      Danger Zone
                    </h2>
                    <p className="text-red-600 mt-1">
                      Irreversible and destructive actions
                    </p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Export Account Data
                        </h3>
                        <p className="text-xs text-gray-500">
                          Download all your account data and debate history
                        </p>
                      </div>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Export Data
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700">
                          Delete Account
                        </h3>
                        <p className="text-xs text-gray-500">
                          Permanently delete your account and all associated
                          data
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
