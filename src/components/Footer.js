import React from "react";

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <p>© {new Date().getFullYear()} Naveenjith PR. All Rights Reserved.</p>
      <p>
        Contact: <a href="mailto:naveenjith555@gmail.com" className="text-light">naveenjith555@gmail.com</a>
      </p>
    </footer>
  );
};
