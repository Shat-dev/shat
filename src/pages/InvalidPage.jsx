import React from "react";
import { Link } from "react-router-dom";
import '../components/universal.css';
import './InvalidPage.css';

function NotFoundPage() {
  return (
    <div className="homepage-body notfound-body">
      <div className="notfound-content">
        <h1 className="notfound-title">404 - Page Not Found</h1>
        <p className="notfound-text">The page you’re looking for doesn’t exist.</p>
        <Link to="/">
          <button className="enter-button">Go Home</button>
        </Link>
      </div>
    </div>
  );
}
export default NotFoundPage;
