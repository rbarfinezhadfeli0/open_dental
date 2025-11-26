Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

XCharge Setup

Set up XCharge for payment integration.

In the [Payment](payment.html) window, right-click **XCharge**. From the menu displayed, click **Settings**.

![](images/xchargeSetup.png)

Alternatively:

* (During the first credit card transaction) On the payment window, click **XCharge**.
* In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click **X-Charge from x-charge.com**.

Note: [XCharge (OpenEdge)](xcharge.html) was a previous option available through Global Payments Integrated. Existing XCharge installations can still be used, though Global Payments Integrated no longer supports it. Users should contact Global Payments Integrated to switch to EdgeExpress, an updated payment processing option.

To set up different credentials for [Clinics](clinics.html) using different merchant accounts, see [XCharge Setup for Clinics](xchargeclinic.html).

## Setup

First, contact XCharge to install the XCharge client program. Once installed:

Check the **Enabled** box.

Enter the **Program Path** to the XCharge.exe.

Select the *Payment Settings*.

* Enter the username and password created during installation.

  Note: User must have the *Manage High Security Properties* permission to edit or add a password.
* Select the default **Payment Type** for XCharge transactions.
  + Customize options in [Definitions: Payment Types](definitionspaymenttypes.html).
  + To select a different type for [CC Recurring Charges](recurringcharges.html) transactions, set the preference, *Payment type for recurring charges*.
  + If the [Preference](preferences.html), *Payments prompt for Payment Type*, is enabled, users must manually select a payment type.
* **Prompt for signature on CC trans by default**: Check to prompt patients for a signature on the credit card terminal before completing transactions. The terminal must support electronic signatures.
* **Print receipts by default**: Check to automatically print an XCharge receipt to the default receipt [Printer](printersetup.html) when a transaction is completed.
* **Recurring charges force duplicates by default**: By default, transactions for the same amount charged to the same card on the same day are declined. This is to prevent accidentally charging a card twice. Check to allow duplicate charges. Useful if family members have recurring charges set up on the same card for the same day.
* **Prevent saving new cards**: Uncheck to allow users to process new transactions or save new payment information to a patient's account. Check to prevent users from processing new transactions or saving new payment information.
  + To set whether or not new cards are saved to a patient's account after each transaction, see the preference, *Automatically store credit card tokens*.

(optional) Enter *XWeb* settings to enable [Online Payments](portalonlinepayments.html) and/or [Automatic Recurring Charges](recurringcharges.html).

* Enter the XWebID (12 digits).
* Enter the Auth Key (32 digits).
* Enter the Terminal ID (8 digits).
* **Enable X-Web for Payment Portal payments**: Check to allow patients to make payments online using the [Payment Portal](portalpaymentsbypatient.html) (not required if only using Automatic Recurring Charges).

Click **OK** to save settings.

## Installing X-Charge with a Terminal

Below are some points to consider based on a user's experience installing the XCharge server using a terminal.

* Setup may take 1 - 2 hours plus follow-up.
* When calling the XCharge help desk the first time, choose *Install* in the Touch Tone menu (not Tech Support).
* Install XCharge as a Windows Service to prevent accidental shutdown of the XCharge program and/or server.
* If capturing signatures, they will be stored on the workstation in the office that acts as the XCharge server. Make sure there is a backup plan.
* Install the XCharge server on the central server; it does not need to be connected to a terminal. XCharge may want to set it up on a workstation connected to a terminal, but do not do this. This way backups can be organized to save signatures along with other data on the central server.
* On the terminal:
  + Debit cards have to be swiped and patient will key in the 4 digit pin, even if the cards have chips.
  + When a transaction is complete, a receipt will print (customer's copy). This receipt does not have the signature on it.
  + Completed signatures can only be accessed by running the XCharge utility.
* ISC-250 terminal:
  + It can be customized to display the practice logo and a short message.
  + If a patient calls in a payment, the card number must be keyed into the terminal. If a workstation only has the XCharge software (and no terminal), the keyboard can be used.
* Staff training is important. The EMV transaction process can be confusing due to the requirements of EMV technology.