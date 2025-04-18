import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Github,
    Linkedin,
  } from "lucide-react";
  
  function Footer() {
    return (
      <footer className="w-full bg-zinc-900 text-white py-10 px-6 flex justify-between flex-wrap gap-8">
        {/* Left Side */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-2 text-sm">
            <span>Help</span>
            <span>Site</span>
            <span>Index</span>
            <span>ChaDbPro</span>
            <span>Box Office Mojo</span>
            <span>License ChaDB Data</span>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span>Press Room</span>
            <span>Advertising</span>
            <span>Jobs</span>
            <span>Conditions of Use</span>
            <span>Privacy Policy</span>
            <span>Your Ads Privacy Choices</span>
          </div>
        </div>
  
        {/* Right Side */}
        <div className="flex flex-col items-end gap-6 flex-grow sm:flex-grow-0">
          {/* Top Nav */}
          <div className="flex flex-wrap justify-end gap-4 text-sm">
            <span>About</span>
            <span>Pro</span>
            <span>News</span>
            <span>Apps</span>
            <span>Podcast</span>
            <span>Year in Review</span>
            <span>Gifts</span>
            <span>Help</span>
            <span>Terms</span>
            <span>API</span>
            <span>Contact</span>
          </div>
  
          {/* Social Icons */}
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-red-600 cursor-pointer" />
            <Github className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  