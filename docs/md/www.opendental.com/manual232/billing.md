Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Billing

Batch billing can be run daily, monthly, or per the practice preference.

In the [Manage Module](manage.html), click **Billing**.

![](images/billingOptions.png)

Note: If the [Billing List](billinglist.html) opens instead, a list has already been created and there are unsent bills. Before a new list can be generated, the existing list must be sent or deleted.

The Billing Options window is used to determine which patients should receive a statement, determine when additional notes should be included, and what information is included on the statement. Statements can be sent or printed from [Billing List](billinglist.html) after clicking Create List.

* To generate a single statement, invoice, or receipt, see [Statements](statement.html) instead.
* Additional billing and statement settings are found in [Preferences](preferences.html).
* To automatically generate and send statements electronically or by email, see [Scheduled Processes](scheduledprocesses.html).
* If using [Billing/Finance Charges](financecharges.html) or [Repeating Charges](repeatingcharges.html), run these tools prior to creating the Billing List.
* ![](images/youtubeLogo.png) Also see our [Billing Playlist](https://www.youtube.com/playlist?list=PLyjZ9PCVynCkmu-GjXhgyaR9iR5K35VNC).

## Filters

Set filters to determine which patients are included on the [Billing List](billinglist.html).

![](images/billingFilters.png)

* **Include anyone not billed since**: Include statements for families who have not been billed since this date. It defaults to one month prior.
* **Include any accounts with insurance payments, procedures, or payplan charges since the last bill**: Include statements for families who may have received a bill in the last 30 days, but have since had an insurance payment come in, had procedures completed, or has payment plan charges due or charges that will be due within the number of days set in the preference, *Days in advance to bill payment plan amounts due*.
* **Age of Account**: Only generate statements for families who have account balances in a specific aging category (Any Balance, over 30 days, over 60 days, over 90 days).
* **Exclude bad addresses (no zipcode)**: Do not create statements for guarantors with no zip code.
* **Exclude inactive families**: Do not create statements for families where all members have a status of inactive. The intent is to allow users to track outstanding balances for inactive families without sending a bill for the balance.
* **Exclude if insurance pending**: Do not create statements for families who have one or more family members with an outstanding claim (any status other than *received*).
* **Exclude if insurance pending \_ days or less**: Enter a value (e.g., 10) to determine the number of days a family is excluded from the Billing List after a claim has been created and is still outstanding (any status other than received) for any family member. *Exclude if insurance pending* must also be checked. Enter 0 or leave blank to exclude all families with outstanding claims.
* **Exclude if unsent dental procedures**: Do not create statements for families with one or more family members who have unsent dental procedures dated in the last 6 months. The purpose of this option is to prevent sending a statement before a claim is created (e.g. in larger organizations where billing is done in a separate department).
* **Exclude if balance is less than:** Do not generate statements for families that have a balance less than a set amount. Negative numbers are allowed.
* **Show negative balances (credits)**: Create statements for families with a negative balance (credit). If checked, these patients are included even if a negative balance value has been entered for *Exclude if balance is less than*. If unchecked, patients with negative balances are not forcefully excluded. Rather, the *Exclude if balance is less than value* is considered.
   Examples:
  + To include all families, regardless of balance (positive, negative, 0 balances): Exclude if balance is less than = 0, check Show negative balances.
  + To only include families with balances of 0 or more: Exclude if balance is less than = 0, uncheck Show negative balances.
  + To only include families with a positive or negative balance, but not 0 balances: Exclude if balance is less than = .01, check Show negative balances.
  + To exclude families with balances less than $1: Exclude if balance is less than = 1, uncheck Show negative balances.
* **Ignore Walkout (In Person) statements**: Check to generate statements for families even if they have received a *Walkout (In Person)* statement after the *Include anyone not billed since date*.
* **Exclude Filing Codes**: Select the insurance filing codes to exclude from the Billing List. CTRL+ Click to select multiple filing codes. See: [Insurance Filing Codes](insfilingcodes.html) for more information. Some families with excluded filing codes may still be included in the Billing List if a family member exists with an insurance plan that does not have an excluded filing code.
* **Billing Types**: Select the billing types to include. Click and drag, or press Ctrl while clicking to select multiple types.
* **Clinic**: This clinic selection determines which clinic's default filter options show. It can also be used to filter the Billing List. Users can only select clinics they have access to. To set filter options for a specific clinic, select the clinic before selecting any filter options. Click the drop down to switch clinics or select All to select all clinics. When selecting All and generating the list, a window appears confirming the number of batch statements generated per clinic.
* **Use clinic default billing options**: Only shows when *All* is the selected clinic. Useful when each clinic has different filter defaults, yet the Billing List should be run for all clinics at once. Checking this option generates each clinic's statements using its filter defaults.
* **Save As Default**: Save the selected settings as the default filter options. Also saves changes made to the General Message, Account History Date Range and Dunning Messages. When clicked, a confirmation box appears confirming the settings have been saved.
  + If a clinic is selected, the options are saved for the selected clinic.
  + If All is selected as the clinic, the button is disabled out. Change the clinic to Unassigned instead, and the default is saved for All as well.

## Dunning Messages

Dunning Messages include notes for patients whose statements meet specific criteria.

![](images/billingDunning.png)

For details, see [Dunning Messages](billingdunningmsg.html).

## Other Options

Set options to determine how a statement displays information.

![](images/billingOther.png)

* **Start / End Date**: Set a custom start and end date to determine the date range of activity on statements.
  + **Last 30 Days**: Only display activity from the last 30 days.
  + **Last 45 Days**: Only display activity from the last 45 days.
  + **Last 90 Days**: Only display activity from the last 90 days.
  + **All Dates**: Clears the date range filters. Displays all activity on the account.

    Note: If using Electronic Billing, and *All Dates* is selected, a warning appears asking to confirm. Using All Dates can result in statements that are many pages long.
* **Show all transactions since zero or negative balance**: If checked, all transactions since the last date the account balance was zero or had a credit balance are printed on the statement. The default *Account History Date Range* is ignored.
* **Intermingle Family Members**: When checked, family members are mixed together on the statement and ordered by date. When unchecked, each family member is split into their own section on the statement with a total. Electronic billing is always intermingled.
* **Group by Super Family**: Only an option if [Super Family](superfamily.html) is enabled. Check the box to create super statements instead of statements for each super family guarantor. A super statement is addressed to the head of the Super Family and include account activity for all Super Family members, grouped by guarantor.
* **Send text messages for these modes**: Opt to send an additional text message about a statement when it is sent from the Billing List. Only statements with modes that match selected modes are sent a text message, as long as the patient is eligible to receive text messages. The message can include a clickable URL that launches the Patient Portal where patients can view an online version of statements and/or make a payment. Set the text message and default mode selections in Billing Defaults. Only an option when [Integrated Texting Feature](../site/textintegrated.html) and [Patient Portal](portalhostedbyod.html) is enabled. See [Online Payments](portalonlinepayments.html).
* **General Message**: Shows at the bottom of the statement in addition to dunning messages and appointment information.
* **Defaults**: Set [Billing Defaults](billingdefaults.html).

## Buttons

![](images/billingButtons.png)

* **Undo Billing**: See [Billing List](billinglist.html), Unsending Bills section.
* **Create List**: Generate statements using the current filters and selected settings. Opens the Billing List.