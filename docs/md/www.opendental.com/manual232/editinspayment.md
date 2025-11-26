Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Edit Insurance Payment

Enter insurance payment details when finalizing insurance payments.

In the [Edit Claim](claimedit.html) window, double-click an existing insurance payment.

![](images/claimPayEditInsWindow.png)

Alternatively, this window opens when clicking:

* **Batch** from Edit Claim
* **This Claim Only** from Edit Claim
* **Add** from [Batch Insurance Payment](claimpaymentbatch.html)

to finalize a new insurance payment.

See [Finalize Insurance Payment](claimpayfinalize.html) for detailed steps on finalizing insurance payments.

Enter or change payment information as needed. Some fields are pre-filled. Some information is optional. [Required Fields](requiredfields.html) are marked with an asterisk (\*). When clicking **OK** if any required fields are incomplete, users have the option to proceed or return to the Edit Insurance Payment window to complete required fields.

* **Clinic**: Default to the claim's clinic ([Edit Patient Information](patientedit.html)). Click the dropdown to change. Determines where the money is received (e.g., [Deposits](depositslip.html)).
* **Payment Type**: The assigned [Definitions: Insurance Payment Types](inspaytypes.html). No default type is selected if the *Claim payments prompt for Payment Type* is enabled in [Preferences](preferences.html). Customize options in .
* **Payment Group**: Typically used to group payments when multiple people are entering payments at once. Customize options in [Definitions: Claim Payment Groups](definitionsclaimpaymentgroups.html).
* **Payment Posting Date**: The date of the payment. Defaults to today's date.
* **Check EFT Issue Date**: Optional. The date the EFT payment was issued.
* **Amount**: The total amount of the EOB. If the amount auto populated does not match the amount on the EOB, enter the EOB amount manually. Refer to [Finalize Insurance Payment](claimpayfinalize.html), Troubleshooting for additional information.
* **Check #**: Useful for reporting. For EFT, use this field to enter the EFT number.
* **Bank-Branch**: Useful for reporting.
* **Carrier Name**: Auto populated with the claims insurance carrier.
* **Virtual Credit Cards**: If payment is via a virtual credit card and [XCharge (OpenEdge)](xcharge.html), [Edge Express](edgeexpress.html), [PayConnect](payconnectpaymentwindow.html), or [PaySimple](paysimple.html) is enabled, the corresponding payment buttons are displayed. Click a button to process the payment. When the transaction is complete, the Edit Insurance Payment window is still be open and transaction details are added to the*Note*.

  Note:
  + Clinics only: the payment processor credentials are used for the Clinic selected in this window.
  + PaySimple users: the Carrier Name is sent to PaySimple when processing a credit card transaction.
* **Auto Deposit:** Only visible if the preference*Insurance payments show auto deposit* is enabled.
  + Date: Date used on the deposit.
  + Amount: Amount of deposit. Matches check amount.
  + Batch #: Optional. Used to track deposits.
  + Auto Deposit Account: Select the deposit account. Customize options in [Definitions: Auto Deposit Account](definitionsautodepositaccount.html).

Click **OK** to save and proceed to the [Insurance Payment (EOB)](inspayeob.html) window