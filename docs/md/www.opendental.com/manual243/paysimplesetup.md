Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PaySimple Setup

Set up PaySimple to process credit/debit card transactions or ACH payments.

In [Program Links](programlinks.html), double-click **PaySimple from paysimple.com**.

![](images/paysimpleSetup.png)

Alternatively, in the [Payment](payment.html) window, right-click PaySimple and select Settings.

**Enabled**: Check to enable to PaySimple Program Link. Enter Payment Settings below.

Payment Settings:

* **Payment Type Credit Card**: Set the default [Definitions: Payment Types](definitionspaymenttypes.html) for PaySimple card transactions. To select a different type for [CC Recurring Charges](recurringcharges.html) (credit card transactions), see [Preferences](preferences.html), *Payment type for recurring charges*.
* **Payment Type ACH**: Set the default Payment Type for PaySimple ACH transactions.

Note: If the preference, *Payments prompt for Payment Type*, is enabled, users must manually select a payment type when creating a [Payment](payment.html).

* **Username**: Enter the PaySimple username
* **Key**: Enter the key supplied by PaySimple.
* **Prevent saving new cards**: Determines whether new payment information can be stored. This does not affect payments processed through the [Payment Portal Feature](../site/paymentportal.html)
  + Uncheck: Allow users to process or save new payment information to the patient's account.
  + Check: Prevent users from processing or saving new payment information.
* **Print receipts by default**: Check to automatically print a PaySimple receipt to the default receipt [Printer](printersetup.html) when a transaction is completed.
* **Allow online payments**: Check to enable [Payment Portal](portalpaymentsbypatient.html) to allow patients to make online payments.

## Setup for Clinics

If using [Clinics](clinics.html), PaySimple must be set up for each Clinic individually.

![](images/paysimpleSetupClinics.png)

**Enabled (affects all clinics)** to enable PaySimple for all clinics. Unchecking disables PaySimple for all clinics. If the currently logged on user is restricted by clinic, only the clinic they have access to will show in the Clinic dropdown and they will not be allowed to uncheck the Enabled box.

**Clinic**: Select a Clinic from the dropdown to change Clinic Payment Settings. If the logged-on user is restricted to specific Clinics, only accessible Clinics are listed.

Clinic Payment Settings are the same as *Payment Settings* described above. Determine settings for the selected Clinic.