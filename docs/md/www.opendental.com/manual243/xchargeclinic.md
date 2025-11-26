Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

XCharge Setup for Clinics

Locations using clinics can store [XCharge (OpenEdge)](xcharge.html) login credentials for each clinic in a single database, then associate the credentials with different merchant accounts in XCharge.

The XCharge accounts that can be used in Open Dental will depend on the Open Dental security settings for the logged-on user. Users restricted to a clinic can only access the associated merchant account. Users not restricted to clinics (Headquarters) can access all merchant accounts.

There are four steps:

1. Create the clinics in Open Dental. Click Lists, [Clinics](clinics.html).
2. Add Clinic Merchant Accounts to X-Charge.
3. Create clinic users in XCharge.
4. Set up clinic-level XCharge credentials in Open Dental.

## Add Clinic Merchant Accounts to X-Charge

Once X-Charge is installed, add merchant accounts for each clinic.

1. In XCharge, go to File, XCharge Server.
2. In the server window, click *Setup...* and enter the administrator's credentials.
3. Click Credit Cards, Connection tab.
   ![](images/xchargeServer.gif)
4. Add Processor Accounts Information for each clinic in Open Dental that will be using XCharge. For clarity, we recommend using the Open Dental clinic descriptions for the Processing Account Names.

**Set a Default Processing Account for the Headquarters Clinic:** If no clinic is selected for a payment (none), the default merchant account for the Headquarters clinic will be used, as long as the user is not restricted to a specific clinic. To set the default merchant account for headquarters, set the Headquarters processing account as the Default *(Make this Account the Default for this Processor)*.

![](images/xchargeProcessor.gif)

## Create Clinic Users in X-Charge

Create clinic users in XCharge for each Open Dental clinic that will process payments with XCharge.

1. Click General Options, Security tab.
   ![](images/xchargeGeneral.gif)
2. For each clinic, create an XCharge user with user name and password and select the Processing Account (merchant account) to use with the clinic.
   * We recommend assigning the Open Dental clinic description as the XCharge Processing Account Name and the XCharge User Name.
   * One clinic user must be the XCharge Administrator. This user can process payments using any merchant account. We recommend assigning the Administrator user to the Headquarters clinic in Open Dental (see below).

Administrator example: In this example, when the administrator credentials are entered in X-Charge, the user can process payment using any merchant account.

![](images/xchargeSecurity.gif)

Clinic example: In this setup, when user Clinic2's credentials are entered into XCharge, the Clinic2 processing account will be used thus ensuring all payments for the clinic use the correct merchant account.

![](images/xchargeClinic2.gif)

## Enter Clinic Level XCharge Credentials in Open Dental

[Clinics](clinics.html) can use different XCharge login credentials for each clinic in a single database.

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html), and double-click **XCharge from xcharge.com**

![](images/xchargeClinic.png)

Check **Enabled (affects all clinics)** to enable XCharge for all clinics. Unchecking disables XCharge for all clinics. Clinic restricted users only have access to their restricted clinic in the Clinic dropdown and not allowed to uncheck the Enabled box.

Enter the **Program Path** to the XCharge.exe.

Set the *Clinic Payment Settings* for the Headquarters first.

* Select Headquarters as the clinic.
* Enter the username and password created during installation.
* Select the default Payment Type for XCharge transactions.
  + Customize options in [Definitions: Payment Types](definitionspaymenttypes.html).
  + To select a different type for [CC Recurring Charges](recurringcharges.html) transactions, see [Preferences](preferences.html), *Payment type for recurring charges*.
  + If *Payments prompt for Payment Type* is enabled in [Preferences](preferences.html), users must manually select a Payment Type.
* **Prompt for signature on CC trans by default**: Check to prompt patients for a signature on the credit card terminal before completing transactions. The terminal must support electronic signatures.
* **Print receipts by default**: Check to automatically print an XCharge receipt to the default receipt [Printer](printersetup.html) when a transaction is completed.
* **Recurring charges force duplicates by default**: By default, transactions for the same amount charged to the same card on the same day are declined. This is to prevent accidentally charging a card twice. Check to allow duplicate charges. Useful if family members have recurring charges set up on the same card for the same day.
* **Prevent saving new cards**: Uncheck to allow users to process new transactions or save new payment information to a patient's account. Check to prevent users from processing new transactions or saving new payment information.
  + To set whether or not new cards are saved to a patient's account after each transaction, see Preferences, Automatically store credit card tokens.

(optional) Enter *XWeb* settings to enable [Online Patient Portal Payments](portalonlinepayments.html) and/or [Automatic Recurring Charges](recurringcharges.html).

* Enter the XWebID (12 digits).
* Enter the Auth Key (32 digits).
* Enter the Terminal ID (8 digits).
* **Enable X-Web for patient portal payments**: Check to allow patients to make a payment online (not required if only using Automatic Recurring Charges).

Repeat steps for each additional clinic in the dropdown. Headquarter settings will be used if clinic-specific changes are not made. For clinics not using XCharge, select the clinic, then clear the username and password. When the clinic is attached to a payment, the XCharge button will not be visible.

Note: Editing the Headquarters username and/or password when it is the same as one or more clinics, changes the other clinics as well. To unlink them, change the username and password for each clinic. Subsequent changes made to Headquarters credentials will no longer affect the clinic.

Click **OK** to save settings.