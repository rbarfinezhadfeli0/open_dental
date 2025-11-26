Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Online Payments

View and process payments made through the Payment Portal or CareCredit Lookup or Apply that need to be allocated using the Online Payments tool.

In the [Main Menu](mainmenu.html) click Tools, Online Payments.

![](images/onlinePaymentsTool.png)

Alternatively, in the Main Menu, click Alerts. Select the Pending Payment alert, then click Open.

This option only appears in Tools menu when online or Payment Portal payments are enabled for an integrated payment processor or the [CareCredit](carecreditsetup.html) program link is enabled.

Patient [Payments](payment.html) made through the [Payment Portal](portalpaymentsbypatient.html) or using [CareCredit](../site/carecredit.html) *Lookup* or *Apply* appear in this window

* **From/To**: Select the payment date range.
* **Clinic**: Select the clinic. Only payments for the selected clinic are shown. Users can only view payments for clinics they have access to.
* **Process Status:** Select the payment pending status.
* **Payment Source**: Select the payment processor type.

Click **Refresh** to update results in the Payment Information grid after setting filter options.

Right-click an item and select *Go to Account* to open the Account Module.

## Process Pending Payments

Pending Online Payments can be processed in Open Dental manually or automatically:

* **Automatically**: Enable *Mark online payments as processed* in [Preferences](preferences.html) to immediately check the *Mark as Processed* checkbox on online payments. Online payments are not marked as pending.
* **Manually**: When the logged-in user is subscribed to Online Payments Pending [Alerts](alerts.html), an alert notifies the user online patient payments are pending.

![](images/onlinepaymentpending.gif)

Note:

* When an online payment is made, the default [Allocations Setup](allocationssetup.html) is used to allocate the payment to production immediately, whether processing manually or automatically.
* A pending payment is a payment that has not been marked processed in Open Dental. The charge itself is immediately processed with the credit card provider when the patient makes the payment.
* To mark the alert as read, select *Mark As Read*. This resets the *Alerts ()* count.

To Process a Pending Online Payment:

1. Double-click a pending payment to open the [Payment](payment.html) window.
![](images/portalPaymentProcessWindow.png)2. Review the payment information.
   * Create paysplits if desired. This may already be done depending on [Allocations Setup](allocationssetup.html).
   * Check the *Mark as Processed* box.
3. Click **OK** to process the payment.
4. When all pending payments are processed, click **Close**.