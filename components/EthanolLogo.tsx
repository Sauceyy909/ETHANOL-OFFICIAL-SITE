
import React from 'react';

export const EthanolLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bonds */}
    <line x1="30" y1="50" x2="55" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="55" y1="50" x2="75" y2="35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    
    {/* Atoms - Carbon 1 */}
    <circle cx="30" cy="50" r="8" className="fill-blue-500" />
    <text x="26" y="54" fontSize="10" fontWeight="bold" fill="white">C</text>
    
    {/* Hydrogens for C1 */}
    <line x1="30" y1="50" x2="30" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <circle cx="30" cy="28" r="4" fill="currentColor" opacity="0.6" />
    <line x1="30" y1="50" x2="30" y2="70" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <circle cx="30" cy="72" r="4" fill="currentColor" opacity="0.6" />
    <line x1="30" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <circle cx="12" cy="50" r="4" fill="currentColor" opacity="0.6" />

    {/* Atoms - Carbon 2 */}
    <circle cx="55" cy="50" r="8" className="fill-blue-400" />
    <text x="51" y="54" fontSize="10" fontWeight="bold" fill="white">C</text>
    
    {/* Hydrogens for C2 */}
    <line x1="55" y1="50" x2="55" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <circle cx="55" cy="28" r="4" fill="currentColor" opacity="0.6" />
    <line x1="55" y1="50" x2="55" y2="70" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <circle cx="55" cy="72" r="4" fill="currentColor" opacity="0.6" />

    {/* Oxygen */}
    <circle cx="78" cy="33" r="8" className="fill-purple-500" />
    <text x="74" y="37" fontSize="10" fontWeight="bold" fill="white">O</text>
    
    {/* Hydrogen for O */}
    <line x1="78" y1="33" x2="90" y2="25" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <circle cx="92" cy="23" r="4" fill="currentColor" opacity="0.6" />
  </svg>
);
