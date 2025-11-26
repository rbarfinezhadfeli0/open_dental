Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Invoice

In the [Account Module](account.html) toolbar, click the [Statement](statementwindow.html) dropdown, **Invoice**.

![](images/statementDropdown.png)

Invoice will be generated based on selected procedures and adjustments.

Note:

* Selecting Invoice before selecting procedures will create an invoice for all procedures and payments for today (unless [Super Family](superfamily.html) billing is enabled).
* Once attached to an invoice, the same procedures and adjustments cannot be attached to a new invoice.
* Printed and emailed invoices are saved as PDFs in the patient account and [Imaging Module](images.html), Statements image category.
* To reprint, resend, or view, double-click on the invoice number in the patient account.

Setup Options:

* To customize invoices, see [Statement Layout](statementsheets.html).
  + Payments are not included on invoices by default. Add *StatementInvoicePayment* Grid to statement layout to include them.
* [Preferences](preferences.html), *Invoice payments grid shows write-offs*: Select whether insurance write-offs show by default.

![](images/invoiceStatementOptions.gif)

Change invoice options as needed.

* **Date**: Defaults to today's date.
* **Sent**: Automatically checked once the statement, invoice, or receipt is printed or emailed. It can also be changed manually.
* **Hide payment options**: Automatically checked to exclude amount due, date due, amount enclosed, credit card payment section, and aging information. If unchecked, the entire family balance will reflect in the amount due field which may be different than the invoice total.
* **Single patient only**: Informational only and cannot be changed.
* **Send to Super Family**: Informational only and cannot be changed.
* **Invoice**: Always checked and cannot be changed.
* **Invoice number**: Automatically generated and cannot be changed.
* **Note**: By default shows the Invoice Note set in [Billing Defaults](billingdefaults.html).
* **Bold Note**: Shows in bold red above and below the procedure grid.

Click **View** to preview the invoice. If a PDF has been created, View will preview the PDF. If no PDF exists, View will preview the Fill Sheet window. Edit any custom [Sheet Field Types](sheetsaddelements.html) then Print or Email to save the changes.

Click **Print** to send the invoice to the default Printer.

Click **Pat Portal** to send the invoice to the [Patient Portal Feature](../site/patientportal.html).

Click **Email** to email the invoice as a PDF.

Click **OK** to generate the invoice without saving, printing or emailing the PDF.

If the Mode is changed on an existing invoice, a new PDF is created.

## Invoice Search

Set up a Display Field in the Patient Select window to search for patients by invoice number.

## Foreign Users

To use the title *TAX INVOICE*, add the output text field, *statementIsTaxReceipt*, to the sheet.

To show the word *COPY* at the top of statements printed more than once, add the output text field, *statementIsCopy*, to the sheet. To print again without the word *COPY*, uncheck the *Sent* checkbox and the *Invoice Copy* checkbox, then print again.

Sample Invoice:

![](images/invoice.gif)