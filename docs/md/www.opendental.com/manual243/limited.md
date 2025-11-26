Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Limited Statement

If a patient needs a statement for specific transactions or procedures, a Limited or Limited (Custom) Statement can be generated.

In the [Account Module](account.html) toolbar, click the [Statement Window](statementwindow.html) dropdown, **Limited** or **Limited (Custom)**.

![](images/statementLimited.png)

There are two options for creating Limited Statements: Limited and Limited (Custom).

* Limited: A statement is created based on production or income items highlighted in the account grid before clicking the button or the current day's procedures (if applicable). See Limited section below for details.
* Limited (Custom): Opens the Limited Statement Select window to select items before generating a statement. See Limited (Custom) section below for details.

The name and contact information that appears on a statement depend on the selected items:

* When only transactions for the selected patient are used, the patient's name appears on the statement. The family guarantor's address is used. The statement is saved to the patient's account
* When transactions for other family members are selected or the statement is created from *Entire Family*, the guarantor's name and address appear on the statement. The statement is saved to the family guarantor's account.
* When transactions for other members of the Super Family are selected, the Super Family head's name and address appear on the statement. The statement is saved to the Super Family head, family guarantor, and patient accounts.

## Limited

In the Account Module, highlight production or income items in the account grid (i.e., procedures, patient payments, insurance payments, and adjustments). Then in the Statement dropdown, click **Limited**.

Alternatively, if no account items are selected, click **Limited** to create a statement for completed procedures from the current day along with any attached adjustments or payments are automatically included.

The Statement options window opens.

![](images/limitedOptions.png)

Select options for the Limited statement. Most options match the [Statement Window](statementwindow.html).

* **Exclude income transfers**: Only available on Limited Statements not marked *Sent*. Specific to Limited Statements. Check to exclude [Income Transfer](incometransfer.html) from appearing on the statement. When checked, status is saved when Limited Statement is marked Sent.
* **Include patient last name**: Only available on Limited Statements not marked *Sent*. When checked, status is saved when Limited Statement is marked *Sent*.

## Limited (Custom)

In the Statement dropdown, click **Limited (Custom)**.

![](images/statementLimitedSelect.png)

The Limited Statement Select opens. Select filters, then highlight the account items to show use to generate the statement. Click **OK** to continue to the Statement window.

Filters: Set filters to determine items in the Limited Statement Items grid.

* **From/To**: Enter date range of account items to display.
* **Transaction Types**: Highlight transaction types to show.
* **Show entries for:** Highlight whose account items appear in the grid. *SuperFamily* option is only available when the selected patient is a member of a [Super Family](superfamily.html) and *Included in Super Family Billing* is checked in [Edit Patient Information](patientedit.html).

**All**: Select all transactions displayed in the grid.

**Today**: Select all displayed account items with today's date.

**None**: Deselect all currently account items.

Click **OK** to generate a statement for selected transactions.

Customize the columns that appear in the Limited Statement Items grid from [Display Fields](displayfields.html). The columns that appear in the grid do not reflect the the columns that appear on the *StatementMain* [Sheet Grid](sheetsgrid.html).

Limited (Custom) statements do not include aging or payment plan information. The total due, insurance estimate, and balance information is based on the items in the statement only. Statements include all transactions attached to selected procedure. This may include some transactions that were not selected or do not appear in the Limited Statement Select window.