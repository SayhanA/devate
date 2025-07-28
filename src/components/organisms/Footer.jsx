import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Newsletter Section */}
          <div className="lg:col-span-1 mr-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">
              Devate
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <div className="flex gap-2 mb-3">
              <input
                type="email"
                placeholder="Your email here"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and consent to receive updates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Home Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Blog Posts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Connect With Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  <FaFacebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  <FaXTwitter className="w-4 h-4" />X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  <FaYoutube className="w-4 h-4" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 Devate Arena. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Cookies Settings
            </a>
          </div>
        </div>

        {/* Position Button */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg">
            Position
          </button>
        </div>
      </div>
    </footer>
  );
}
