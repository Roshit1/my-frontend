import React from "react";

function About() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 to-indigo-600 p-6">
      <div className="bg-white shadow-lg rounded-4 p-5 max-w-3xl w-full">
        <h2 className="text-center text-3xl fw-bold text-purple-600 mb-4">
          NOTE.LY - Notes on Cloud
        </h2>

        <p className="text-secondary mb-4 text-center leading-relaxed">
          NOTE.LY is an online platform to save all your notes at one place on the cloud and access them anywhere anytime.
          It is a platform where your notes are totally encrypted and secured so that no one except you can access your notes.
        </p>

        <h5 className="fw-bold text-dark mt-4 mb-3 text-uppercase text-center border-bottom pb-2">
          Why NOTE.LY?
        </h5>

        <ul className="list-unstyled space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-purple-600 fw-bold">🌍</span>
            <span>Access notes from anywhere anytime - NOTE.LY is available 24/7 all over the World!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 fw-bold">🔒</span>
            <span>100% security - Your notes are end-to-end encrypted!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 fw-bold">⚡</span>
            <span>Blazingly fast website - NOTE.LY has over 95 score on PageSpeed Insights!</span>``
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 fw-bold">💻</span>
            <span>Platform friendly - NOTE.LY is independent of the OS of device!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 fw-bold">📱</span>
            <span>Progressive Web App - Works even when you are offline!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 fw-bold">💜</span>
            <span>All time free - We focus on user satisfaction instead of money!</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
