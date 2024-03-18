import React, { useState } from 'react';

interface TooltipProps {
  content: String; // The content of the tooltip
  children: React.ReactElement; // The element that will trigger the tooltip
  position: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip = ({ content, children, position }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="relative flex items-center justify-center">
      {isVisible && (
        <div
          className={`absolute z-10 p-2 text-sm text-gray-300 bg-black bg-opacity-70 rounded-md ${positionClasses[position]}`}
          role='tooltip'
          aria-hidden={!isVisible}
        >
          {content}
        </div>
      )}
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip} aria-haspopup="true">
        {children}
      </div>
    </div>
  );
};

const positionClasses = {
    top: 'bottom-full mb-8',
    right: 'left-full ml-8',
    bottom: 'top-full mt-2',
    left: 'right-full mr-8',
  };

export default Tooltip;