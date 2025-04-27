import React from 'react';

interface BasketDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

const BasketDetails: React.FC<BasketDetailsProps> = ({ isOpen, onClose }) => {
 
  const cartItems = [
    { id: 1, name: 'Product 1', price: 299, quantity: 1 },
    { id: 2, name: 'Product 2', price: 499, quantity: 2 },
    { id: 3, name: 'Product 3', price: 199, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Shopping Cart</h3>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${item.price}</p>
                <p className="text-sm text-gray-500">Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Subtotal:</span>
            <span className="font-bold">${subtotal}</span>
          </div>
          <div className="modal-action">
            <button className="btn btn-primary">Checkout</button>
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default BasketDetails; 