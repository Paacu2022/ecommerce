import React from 'react';
import "../Checkout/checkout.css"

const Checkout = () => {
    return(
        <div className="paymentClass">
      <div className="container_payment">
        <div className="block-heading">
          <h2>Checkout Payment</h2>
          <p>This is an example of a Mercado Pago integration</p>
        </div>
        <div className="form-payment">
          <div className="products">
            <h2 className="title">Summary</h2>
            <div className="item">
              <span className="price" id="summary-price">$</span>
              <p className="item-name">
                Book X <span id="summary-quantity"></span>
              </p>
            </div>
            <div className="total">
              Total
              <span className="price" id="summary-total">$</span>
            </div>
          </div>
          <div className="payment-details">
            <div className="form-group col-sm-12">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export { Checkout }