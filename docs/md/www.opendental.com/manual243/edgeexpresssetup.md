Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EdgeExpress Setup

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **EdgeExpress from www.globalpaymentsintegrated.com**.

![](images/bridgeEdgeExpress.png)

EdgeExpress is part of [XCharge (OpenEdge)](xcharge.html). Both are provided by Global Payments Integrated.

* Typically, EdgeExpress cannot be installed simultaneously with XCharge, as only one can be used for regular patient payments.
* If using EdgeExpress for online payments, XCharge can still be installed for regular patient payments.
* [Open Dental Cloud](../site/opendentalcloud.html) users must use EdgeExpress over XCharge.

To enable EdgeExpress:

1. Check the **Enabled** box.
2. If using clinics, select the **Clinic** the Payment Settings apply to.
3. Select the default **Payment Type** for EdgeExpress transactions.
   * If the [Preference](preferences.html), *Payments prompt for Payment Type*, is enabled, users must manually select a payment type.
4. Determine the following:
   * **Prompt for signature on CC trans by default**: Check to prompt patients for a signature on the credit card terminal before completing transactions. The terminal must support electronic signatures.
   * **Print receipts by default**: Check to automatically print an EdgeExpress receipt to the default receipt Printer when a transaction is completed.
   * **Recurring charges force duplicates by default**: By default, transactions for the same amount charged to the same card on the same day are declined. This is to prevent accidentally charging a card twice. Check to allow duplicate charges. Useful if family members have recurring charges set up on the same card for the same day.
   * **Prevent saving new cards**: Uncheck to allow users to process new transactions or save new payment information to a patient's account in Open Dental. Check to prevent users from processing new transactions or saving new payment information in Open Dental. This does not affect payments processed through the [Payment Portal Feature](../site/paymentportal.html).
     + To set whether or not new cards are saved to a patient's account after each transaction, see [Preferences](preferences.html), *Automatically store credit card tokens*.
   * **Enable payments for Payment Portal and eClipboard**: Check to allow patient payments via [Payment Portal](portalpaymentsbypatient.html).
5. Enter the X-Web settings:
   * Enter the **XWebID** (12 digits).
   * Enter the **Auth Key** (32 digits).
   * Enter the **Terminal ID** (8 digits).
6. Click OK to save.

When enabled, a *Global Payments Integrated* button displays in the [Payment](payment.html) window.

![](images/globalPaymentsIntegrated.png)