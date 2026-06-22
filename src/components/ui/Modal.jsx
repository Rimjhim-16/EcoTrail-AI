"use client";

import { useEffect, useRef } from "react";

/**
 * Modal Component
 *
 * Props:
 * isOpen
 * onClose
 * title
 * children
 */

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus the modal when opened
    modalRef.current?.focus();

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-2xl outline-none"
      >

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-700 hover:text-red-500"
          >
            ✕
          </button>

        </div>

        <div className="text-gray-800">
          {children}
        </div>

      </div>

    </div>
  );
}