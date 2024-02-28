import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;

  startDate: string;
  endDate: string;
  technologyStack: string[];
}

const Modal = ({
  isOpen,
  onClose,
  startDate,
  endDate,
  technologyStack,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="bg-[#1A1A2E] p-8 rounded-lg shadow-2xl border border-[#2A0E61] max-w-4xl w-full space-y-6 overflow-y-auto">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">
            <span>Start: {startDate}</span> | <span>End: {endDate}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-white rounded-lg transition ease-in-out duration-150 button-primary"
          >
            Close
          </button>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#CCD6F6] m-6 text-center">
            Technology Stack:
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {technologyStack.map((tech, index) => (
              <div key={index} className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#647DEE] to-[#7F53AC] rounded-full flex items-center justify-center shadow-lg shadow-[#647DEE]/50">
                  <p className="text-sm text-white text-center px-1">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
