import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mx-auto p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Muhammad Alisiraj Fachreza. Hak Cipta Dilindungi.</p>
          <div>
            <a href="#" className="mr-4 hover:text-gray-500">
              Tentang Kami
            </a>
            <a href="#" className="hover:text-gray-500">
              Kontak
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
