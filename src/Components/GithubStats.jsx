import React from 'react';

function GithubStats() {
  return (
    <section className="py-12 bg-gray-900 flex justify-center">
      <div className="p-4 border border-blue-500/20 rounded-xl bg-gray-800">
        <h2 className="text-xl font-bold text-blue-300 mb-4 text-center">Days I Code</h2>
        <img 
          src="https://ghchart.rshah.org/3b82f6/sourav-003" 
          alt="GitHub Chart"
          className="w-full max-w-4xl"
        />
      </div>
    </section>
  );
}
export default GithubStats;