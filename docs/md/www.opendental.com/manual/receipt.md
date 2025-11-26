Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Receipt

A receipt shows payments made for the current day or date range.

In the [Account Module](account.html) toolbar, click the Statement dropdown, **Receipt**.

![](images/canadaReceipt.png)

This immediately prints to the default printer and only shows today's payments.

Alternatively, to email or print a receipt for a date range:

1. In the Statement dropdown, click **More Options**
2. On the [Statement Window](statementwindow.html):
   * enter the *Date Range*.
   * Check *Receipt*.
   * Select the *Mode*. Defaults to *InPerson* if no selection is made and the receipt is printed. If emailed, the mode defaults to *Email*.
   * (optional) Add statement note/bold notes.
3. To preview before printing or emailing, click **View**. Click **Print** to send the receipt to the default printer. Click **Email** to email the receipt as a PDF, see [Email Message Edit](emailmessage.html).

![](images/receiptEdit.png)

As seen in the example below, receipts show payment plan information, insurance estimates, and the patient balance for a single patient. Prepayment amounts for treatment planned procedures do not reflect in the credit and balance columns of the receipt as to not affect the patients' overall balance (see [Hidden Splits](hiddensplits.html)). The prepayment details are for informational purposes only. A slightly different version of the receipt is created for Canada, see [Canada Receipts](canadareceipts.html). Once printed, the receipt shows as a line item in the Patient Account grid. Double-click to view, reprint, or resend. A PDF of the receipt is also stored in the [Imaging Module](images.html) under the [Image Category](definitionsimagecat.html) assigned *Statements* usage.

![](images/receipt.png)

To set the default printer receipts print to, see [Printer Setup](printersetup.html).

## Credit Card/ACH Receipts

Receipts generated from the integrated credit card processing companies can also be printed or emailed but do not include patient account information. After processing a [Credit Card Payment](paymentpatientcreditcard.html), click **Print Receipt** or **Email Receipt** on the [Payment](payment.html) window. These receipts can also be set to automatically print after a successful transaction for [XCharge](xchargesetup.html), [EdgeExpress](edgeexpresssetup.html), or [PaySimple](paysimple.html) users. [PayConnect](payconnectpaymentwindow.html) transactions always automatically print a receipt.

To print receipts for successful recurring charge transactions, see [CC Recurring Charges](recurringcharges.html), Printing Receipts.