export default function Footer() {
  return (
    <footer className="bg-pink-50 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo + Text */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // replace with your logo path
            alt="ImageZ Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-purple-600">ImageZ</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm mt-4 md:mt-0">
          Copyright 2025 @ AiCodinghub – All Right Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
