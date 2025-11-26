Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Statement Layout

Statements, invoices, and receipts can be customized to meet the needs of the practice.

In [Sheets](sheets.html), double-click on a custom sheet with the type of Statement.

![](images/sheetsStatement.gif)

Alternatively, in Sheets:

* Click **New** and choose *Statement* as the Sheet Type to create a new Statement sheet from blank.
* Select an existing Custom *Statement* sheet and click **Duplicate** to create a copy of an existing Statement sheet.
* Select the existing Internal *Statement* sheet and click **Copy** to create a copy of the default Statement that can be edited.

To use a custom sheet for [Statements](statement.html), [Limited Statements](limited.html), [Invoices](invoice.html), and [Receipts](receipt.html), see [Sheet Def Defaults](sheetdefaults.html).

Also see: [Sheet Def Properties](sheetproperties.html).

## Editing Statement Sheet

To customize a Statement sheet type, see [Edit Sheet Def](sheetsetup.html).

Some [Sheet Field Types](sheetsaddelements.html) that are only available for sheets with a *Statement* type. A few are described below.

**[Grids](sheetsgrid.html)**: There are five grids that can be added to a Statement sheet.

* StatementAging: Fixed information, cannot be changed.
* StatementEnclosed: Fixed information, cannot be changed.
* StatementMain: Column names, order, and size can be changed in [Display Fields](displayfields.html), StatementMainGrid.
* StatementPayPlanOld: Fixed information, cannot be changed.
  + Displays information on open [Old Payment Plans](paymentplanpatient.html).
* StatementPayPlanGrid: Fixed information, cannot be changed.
  + Displays information on open [Payment Plans](paymentplandynamic.html).
* StatementInvoicePayment: Fixed information, cannot be changed. The grid will populate with payments attached to procedures on the invoice as well as unattached payments that were made on the same day.
  + This grid shows payments attached to procedures and payments made on the same day that are not attached to procedures. Changing a payment overrides the original amount on the invoice.

**Payment Options**: When adding [Static Text Fields](sheetsstatictext.html), there is an additional 'Is Payment Options' checkbox. When checked, this designates the field for inclusion when payment information is included in a statement, invoice, or receipt. The checkbox 'Hide payment options' on the Statement window determines if payment information is included or not.

**Output Text Fields**: See [Sheet Output Text Field](sheetsoutputtext.html).