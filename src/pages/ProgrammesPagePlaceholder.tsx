import React from 'react';
import { useParams } from 'react-router-dom';

const ProgrammesPagePlaceholder = () => {
  const params = useParams();
  const path = Object.values(params).join('/'); // Get the matched path segments

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold mb-4">Programmes Page Placeholder</h1>
        <p className="text-gray-700">This is a placeholder for a programmes page.</p>
        {path && <p className="text-gray-600 mt-2">Attempted path: <code>/programmes/{path}</code></p>}
        <p className="text-gray-600 mt-4">Please create the actual page component and update the route in App.tsx.</p>
      </div>
    </div>
  );
};

export default ProgrammesPagePlaceholder;