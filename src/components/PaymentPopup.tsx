import React, { useState } from 'react';

interface PaymentPopupProps {
  onClose: () => void;
}

const PaymentPopup: React.FC<PaymentPopupProps> = ({ onClose }) => {
  const [promoCode, setPromoCode] = useState('');

  const handleApplyPromo = () => {
    // Add logic to apply promo code here
    console.log('Applying promo code:', promoCode);
    alert(`Applying promo code: ${promoCode}`); // Placeholder
  };

  const handleProceed = () => {
    // Add logic to proceed with payment here
    console.log('Proceeding with payment');
    alert('Proceeding to payment'); // Placeholder
    onClose(); // Close popup after proceeding (or handle success/failure)
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Payment Popup</h2>

        {/* CPAQ Test Fee */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            CPAQ Test Fee
          </label>
          <div className="flex items-center border rounded-full px-4 py-2 bg-gray-100 text-gray-700">
            <span className="mr-2">₹</span>
            <span>250</span>
          </div>
        </div>

        {/* Promo Code */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Promo Code
          </label>
          <div className="flex items-center border rounded-full overflow-hidden">
            <input
              type="text"
              className="flex-1 px-4 py-2 outline-none"
              placeholder="####"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button
              onClick={handleApplyPromo}
              className="bg-gray-800 text-white font-semibold px-6 py-2.5 hover:bg-gray-700 transition"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Instruction Text */}
        <p className="text-xs text-red-500 mb-6">
          *if you have a valid promo code, please enter it. After entering press 'Apply' and then click 'Proceed' to continue
        </p>

        {/* Proceed Button */}
        <button
          onClick={handleProceed}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2"
        >
          Proceed
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 16 16"><path d="M4 8h8M11 5l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
};

export default PaymentPopup;