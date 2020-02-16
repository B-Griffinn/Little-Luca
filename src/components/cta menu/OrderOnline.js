import React from 'react';

function OrderOnline() {
    return (
        <div>
            <p>
                Now you can order your sandwich via fax. Please download the menu and Order Form (Adobe Acrobat format ) below for the location of choice, then fax to the appropriate location on the form.

                Please re-confirm by telephone that your fax has actually been received by us. Also, please advise what time you plan to pick up your order.

                The order forms are different for each location. To assure prompt and accurate service and pricing, please make sure you use the menu matching the location from which you are ordering!
            </p>

            <div className="order-forms">
                Location            || Menu - Order Form
<br/>
                South San Francisco || Menu - Order Form
<br/>
                Burlingame          || Menu - Order Form
            </div>
        </div>
    )
}

export default OrderOnline;
