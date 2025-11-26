Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Limited Statement

If a patient needs a statement for specific transactions or procedures, a Limited or Limited (Custom) Statement can be generated.

In the [Account Module](account.html) toolbar, click the [Statement](statementwindow.html) dropdown, **Limited** or **Limited (Custom)**.

![](images/statementLimited.png)

There are two options for creating limited statements: Limited and Limited (Custom).

* Limited: Shows transactions associated with selected procedures, pay plan debits, patient payments, insurance payments, and adjustments.
* Limited (Custom): Opens the Limited Statement Select window to select procedures, pay plan debits, patient payments, insurance payments, and adjustments.

## Limited

In the Account Module, highlight procedures, Pay Plan Debits, patient payments, insurance payments, and adjustments. Then in the Statement dropdown, click **Limited**.

Note: If no account items are selected, completed procedures from the current day along with any attached adjustments or payments will be automatically included.

![](images/limitedOptions.png)

The Statement options window will open. Select options for the limited statement. Most options match the [Statement Window](statementwindow.html).

* **Exclude income transfers**: Specific to limited statements. Check to exclude income transfers from appearing on the statement.

Note: The *Include patient last name* and *Exclude income transfers* options are only available on unsent, limited statements. These options, if checked, are not saved when the Statement options window is closed without sending.

If a limited statement is created from a non-guarantor family member, the family member contact information is used, and the statement is saved to the family member's account. If a limited statement is created from *Entire Family*, the guarantor's contact information is used, and the statement is saved to the gurantor's account.

## Limited (Custom)

In the Statement dropdown, click **Limited (Custom)**.

![](images/statementLimitedSelect.png)

The Limited Statement Select window will open. Select filters, then highlight the transactions to show. Click **OK** to continue to the Statement window.

Filters: Set filters to determine items in the Limited Statement Items grid.

* **From/To**: Enter date range of transactions to display.
* **Transaction Types**: Highlight transaction types to show.
* **Show entries for:** Highlight whose account items appear in the grid. Also determine whose name and address appear on the statement. *SuperFamily* option is only available when the selected patient is a member of a [Super Family](superfamily.html) and *Included in Super Family Billing* is checked in [Edit Patient Information](patientedit.html).
  + When *Patient* is selected, the patient's name appears on the statement. The family guarantor's address is used. The statement is saved to the patient's account
  + When *Family* is selected, the guarantor's name and address appear on the statement. The statement is saved to the family guarantor's account.
  + When *SuperFamily* is selected, the Super Family head's name and address appear on the statement. The statement is saved to the Super Family head, family guarantor, and patient accounts.

**All**: Select all transactions displayed in the grid.

**Today**: Select all displayed transactions with today's date.

**None**: Deselect all currently selected transactions.

Click **OK** to generate limited statement for selected transactions.

Customize the columns that appear in the Limited Statement Items grid from [Display Fields](displayfields.html). The columns that appear in the grid do not reflect the the columns that appear on the *StatementMain* [Sheet Grid](sheetsgrid.html).

The statement does not include aging or payment plan information. The total due, insurance estimate, and balance information is based on the items in the statement only.

Note: Limited (Custom) statements include all transactions attached to selected procedures. This may include some transactions that were not selected or do not appear in the Limited Statement Select window.