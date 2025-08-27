import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="w-11/12 m-auto  px-4 sm:px-6  grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">ShopLane</h2>
          <p className="text-gray-400">
            ShopLane is your one-stop online store for the latest electronics,
            fashion, and accessories. Quality products, amazing deals, and fast
            shipping!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/cart"
                className="hover:text-green-500 transition-colors"
              >
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 flex-wrap">
            <a
              href="https://github.com/HamzaAsif2002"
              target="_blank"
              className="hover:text-green-500 transition-colors"
            >
              <Github />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-green-500 transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-green-500 transition-colors"
            >
              <Mail />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-green-500 transition-colors"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ShopLane. All rights reserved.
      </div>
    </footer>
  );
};
