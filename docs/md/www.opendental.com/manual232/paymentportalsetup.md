Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Payment Portal Setup

Copy the URL used to access the Payment Portal.

In [eServices Setup](eservicessetup.html), click **Payment Portal**.

![](images/paymentPortalSetup.png)

**Clinic**: Select the clinic to generate the URL for. When selected, the URL updates.

## Enable Payment Portal Payments

Payment Portal is available for payment processors integrated in Open Dental.

Before using the Payment Portal, enable Online Payments in the [Program Link](programlinks.html) for the credit card processor being used:

* [XCharge Setup](xchargesetup.html): *Enable X-Web for Payment Portal payments*
* [PayConnect Setup](payconnectsetup.html): Payment Portal Payments, *Enabled*
* [EdgeExpress Setup](edgeexpresssetup.html): *Enable payments for Payment Portal and eClipboard*
* [PaySimple Setup](paysimplesetup.html): *Allow online payments*

## Provide Patient Access

Once Online Payments are enabled, patients can be provided access to the [Payment Portal](portalpaymentsbypatient.html).

There are two options to provide patients access to the Payment Portal:

* **Payment Portal URL**: Copy the Payment Portal URL to send to patients to make online payments. To place the link on the office website, contact the office webmaster. Offices using PaySimple must use this option.
* **Patient Portal**: Patients can access the Payment Portal through a link in the [Patient Portal](portalpatientsees.html).
  1. In [eServices Signup](eservicessignup.html), More Settings tab, enable *Make Payments* as a portal feature.
  2. Provide patients [Patient Portal Access](portalaccess.html).
  3. Provide a link to access Patient Portal.
     + On the practice website, provide a link to the Hosted Payment URL or Hosted URL. Generate a URL from the eServices [Patient Portal](portalhostedbyod.html) window.
     + On statements, add the [statementURL] or [statementShortURL] output text field. See [Statement Layout](statementsheets.html). These URLs launch the Patient Portal Sign in window where patients can log in to view an online version of the statement or make a payment.
     + When generating statements from the Billing List, also trigger text messages that include a clickable URL to the Patient Portal Sign in window. Include the [StatementURL] or [StatementShortURL] variable in the text message to insert the clickable link ([Billing Defaults](billingdefaults.html)). Only statements with modes that match selected *Sent text messages to these modes* ([Billing](billing.html)) will receive a text message, as long as the patient is eligible to receive text messages. [Integrated Texting Feature](../site/textintegrated.html) must be enabled.