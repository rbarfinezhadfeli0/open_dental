Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Deposit Slip Layout

The Deposit Slip sheet can be customized to meet the needs of the practice.

In [Sheets](sheets.html), double-click on a custom sheet with the type of DepositSlip.

![](images/sheetDepositSlip.gif)

Alternatively in Sheets:

* Click **New** and choose *DepositSlip* as the Sheet Type to create a new deposit slip from blank.
* Select an existing Custom DepositSlip sheet and click **Duplicate** to create a copy of an existing deposit slip.
* Select the existing Internal DepositSlip sheet and click **Copy** to create a copy of the default deposit slip that can be edited.

Also see: [Sheet Def Properties](sheetproperties.html) and [Sheet Field Types](sheetsaddelements.html).

Only the top-most sheet with the type of *DepositSlip* in the list of custom sheets will be used for printing. If no custom deposit slips exist, the internal deposit slip is used. To generate a deposit slip, see [Deposit Slip](depositslip.html).

Note: The internal (default) deposit slip is designed to print onto preprinted QuickBooks forms. The top third gets torn off and includes preprinted bank account information and room for up to 18 deposit items. The bottom 2/3 is a detailed report to be kept by the dental office that includes deposit date, total, and a list of items. The internal slip cannot be edited. It must be copied.

To customize a DepositSlip sheet type, see [Edit Sheet Def](sheetsetup.html).

The following OutputText fields are supported:

* **cashSumTotal**: The total sum of cash payments. Cash payments must have a payment type of *Cash* associated to calculate. Users must add this output field for cash payments to be included on QuickBook laser forms.
* **CheckNumber01** - **CheckNumber18**: Each deposit item may have a check number attached. Up to 18 check numbers may be associated with deposits.
* **deposit.BankAccountInfo**: The bank account information as entered on the Edit Practice window or, if using Clinics, Edit Clinic window. [Practice Setup](practice.html), [Clinic](cliniceditwindow.html)
* **deposit.DateDeposit**: The date of the deposit as entered on the Edit Deposit Slip window.
* **depositList**: A list of all deposit line items. About 32 line items can fit on an internal deposit slip. However users can customize the slip to include as many line items as fits on one sheet of paper by removing the depositItems and moving the depositList higher on the sheet. For Growth Behavior, choose Down Global so the field auto-grows based on output. Note that the deposit slip will only be one page, regardless of the number of line items.
* **depositTotal**: The total dollar amount included in the deposit.
* **depositItemCount**: The total count of all deposit items on the slip.
* **depositItem01** - **depositItem18**: Each deposit item represents one deposit line item. There are only 18 possible deposit items. To create a deposit slip that allows more than 18 items, use the depositList field instead and remove all depositItems from the sheet.