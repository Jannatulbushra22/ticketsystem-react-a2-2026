import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-[#F3F4F6] border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto navbar py-4 px-4 md:px-8">

        {/* Left Side text part */}

        <div className="navbar-start">
          <a className="text-xl md:text-2xl font-bold text-[#111827] cursor-pointer">
            CS — Ticket System
          </a>
          <div className="dropdown lg:hidden">
            
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-700">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          
        </div>

        {/* Right Side: Navigation & Button */}
        <div className="navbar-end hidden lg:flex items-center gap-6">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium text-gray-600 text-sm">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">FAQ</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Changelog</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Blog</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Download</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
          </ul>
          <button className="btn bg-[#0047AB] hover:bg-[#003580] text-white border-none rounded px-6 min-h-0 h-10 capitalize">
            + New Ticket
          </button>
        </div>
        
        {/* Mobile View New Ticket Button */}
        <div className="navbar-end lg:hidden">
           <button className="btn btn-sm bg-[#0047AB] text-white border-none rounded capitalize">
            + New Ticket
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;