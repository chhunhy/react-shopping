import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [paymentComplete, setPaymentComplete] = useState(false); // Track payment status
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.getElementById("paypal-button-container").children.length) {
      window.paypal
        .Buttons({
          // Set up the transaction
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total.toFixed(2), // Set the total amount here
                  },
                },
              ],
            });
          },

          // Finalize the transaction after approval
          onApprove: async (data, actions) => {
            try {
              const details = await actions.order.capture();
              const payerName = details.payer.name.given_name;
              console.log("Payment", payerName)

              // Show success message
              toast.success(`Payment successful! Thank you.`);

              console.log("Transaction Details:", details);

              // Update payment state
              setPaymentComplete(true);

              // Optionally redirect after a delay
              setTimeout(() => {
                navigate("/thankyou");
              }, 3000);
            } catch (error) {
              console.error("Payment approval error:", error);
              toast.error("Payment approval failed. Please try again.", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          },

          // Handle errors
          onError: (err) => {
            console.error("PayPal Checkout Error:", err);
            toast.error("An error occurred during the payment process. Please try again.", {
              position: toast.POSITION.TOP_CENTER,
            });
          },

          // Customize PayPal button style
          style: {
            layout: "vertical", // Display PayPal button in vertical mode
            color: "gold", // Button color
            shape: "rect", // Button shape
            label: "paypal", // Label only PayPal
          },

          // Disable other funding sources
          fundingSource: window.paypal.FUNDING.PAYPAL, // Ensure only PayPal button is displayed
        })
        .render("#paypal-button-container");
    }
  }, [total, navigate]);

  return (
    <div className="container py-5">
      {paymentComplete ? (
        <div className="text-center">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase. Redirecting...</p>
        </div>
      ) : (
        <>
          <h2 className="mb-4">Checkout</h2>
          <div className="row">
            {/* Order Summary */}
            <div className="col-lg-8">
              <ul className="list-group mb-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.title} x {item.quantity}
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <h4>Total: ${total.toFixed(2)}</h4>
            </div>

            {/* PayPal Button */}
            <div className="col-lg-4">
              <div id="paypal-button-container"></div>
            </div>
          </div>
          {/* Toast Notification Container */}
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Checkout;
