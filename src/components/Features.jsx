// Placeholder content for Features.jsx
import React from "react";

const Features = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Handwriting Recognition</h3>
          <p>Convert handwritten input into digital text in real-time.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Accessible Design</h3>
          <p>Built for children and individuals with learning disabilities.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Rewards & Gamification</h3>
          <p>Motivate users with points, badges, and more!</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
