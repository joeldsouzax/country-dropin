/** @format */

import * as React from 'react';
import { Outlet } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <div className="w-full p-4">
      <main
        role="main"
        className="w-full flex flex-col content-center justify-center"
      >
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
          <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h1>Hello</h1>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Root;
