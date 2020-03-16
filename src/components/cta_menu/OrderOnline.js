import React from 'react';
import './OrderOnline.css'

function OrderOnline() {
    return (
        <div
            className="order-online-wrapper"
        >
            <h5>
                Order Online
            </h5>
            <p
                className="order-online-para"
            >
                Now you can order your sandwich via fax. Please download the menu and Order Form (Adobe Acrobat format ) below for the location of choice, then fax to the appropriate location on the form.

                Please re-confirm by telephone that your fax has actually been received by us. Also, please advise what time you plan to pick up your order.

                The order forms are different for each location. To assure prompt and accurate service and pricing, please make sure you use the menu matching the location from which you are ordering!
            </p>

            <div
                className="order-forms"
            >
                Location            || Menu - Order Form
<br/>
                South San Francisco || Menu - <a href="http://www.littlelucca.com/LittleLucca-SSF-FAXOrder.pdf" target="_blank">Order Form</a>
<br/>
                Burlingame          || Menu - <a href="http://www.littlelucca.com/LittleLucca-Burlingame-FAXOrder.pdf" target="_blank">Order Form</a>
            </div>
        </div>
    )
}

export default OrderOnline;
