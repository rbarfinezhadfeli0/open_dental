Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Billing List

Statements generated via the billing list can be printed, sent to an electronic billing processing service, or emailed directly from Open Dental.

In [Billing](billing.html), at the bottom, click **Create List**.

![](images/billingList.png)

In the Billing Options window, set the filters, then click **Create List**. All guarantors that meet the Billing Option criteria are listed.

This window also opens when clicking from the Manage Module, when clicking **Billing** if there are any unsent statements.

## Sort and Filter

Sort and filter the Bills grid using the options at the top.

![](images/billingListFilters.png)

* **Unsent / Sent**: Toggle the list to view sent or unsent statements.
* **Order by**: Sort statements by Billing Type or patient name.
* **Email From**: The email address statements are sent from. If using Clinics and *Practice/Clinic* is selected, the email address of the patient's clinic is used. If there is no clinic email, the practice default is used.
* **Clinic**: Only show guarantors assigned to the selected [Clinic](clinics.html).
* **Start / End Date**: Filter by date range. Click **Refresh** to update statements in the list.
  + For unsent statements, filter the list by the date the statement was generated.
  + For sent statements, filter the list by the date the statement was sent.

**Refresh**: Click to update bills.

* If Start / End Date were entered, the Bills grid is filtered.
* Statements are updated to reflect any account changes (e.g., payments, adjustments, etc.) since Billing List was last refreshed
* Billing List is automatically refreshed approximately every 10 seconds when the window is open to reflect account changes. For Enterprise users, Billing List is refreshed at the *Process signal interval in seconds* set in [Preferences](preferences.html).

## Bills Grid

The Bills grid displays the billing list.

![](images/billingListGrid.png)

Double-click a statement to view the [Statement Window](statementwindow.html).

Right-click on a row and click **Go To** to select the patient's account. Bills show as unsent statements in individual accounts. The Billing List remains open.

Columns:

* **Name**: Guarantor's name.
* **Bill Type**: The Guarantor's Billing Type.
* **Mode**: The method the statement will be sent. Mode options include:
  + **Email**: Send the statement via email.
    - Email is the default mode for a patient when their Billing Type (in [Definitions: Billing Types](definitionsbillingtypes.html)) has E entered for Email bill.
    - If [Secure Email](../site/secureemail.html) is enabled and the Default Send Method is set to Secure in [Secure Email Setup](secureemailsetup.html), email is sent via a secure email message. If Secure Email is not enabled or the Default Send Method is Unsecure, email is sent via unsecure (regular) email. Regular email is not a secure method of sending statements (PHI).
    - The statement is attached to the email as a PDF and the default email message will be used. If a patient's email address is missing, that bill is skipped and a notification appears.
  + **Mail**: The default mode for all non-email Billing Types (when electronic billing is turned off). These statements will be generated as one PDF file and previewed on-screen, sorted by clinic in alphabetical order by patient last name. Printed statements are designed to be printed on standard perforated billing paper and to fit inside a standard window envelope.
  + **Electronic**: The default mode for all non-email Billing Types when electronic billing is turned on. These statements will be sent to the electronic billing processing service. Limited statements, receipts, and invoices cannot be sent electronically.
  + **InPerson**: The mode for unsent statements generated from the Account Module. These statements are generated as a PDF file then previewed on-screen.
* **Last Statement**: Date of the last statement sent.
* **BalTot**: The total family balance.
* **-InsEst**: Displays an insurance amounts pending for the family.
* **=AmtDue**: Displays the amount due for the family, after insurance.
* **PayPlanDue**: Displays the amount due on a payment plan, if any.
* **SF**: When marked with an X, indicates the statement is a super statement.

## Other Options

![](images/billingListOther.png)

* **Edit Selected**: Edit several bills at once. Highlight the bills then click the button. Opens the [Statement Window](statementwindow.html). Any changes affect all selected bills.
  + Some options are disabled for unsent bills.
  + All options, except the Delete button and Sent checkbox, are disabled for sent bills. To make changes (e.g., if bills were not printed), uncheck Sent. Once saved, reselect the bills from the Unsent list and use Edit Selected to make changes.
  + To edit only a single statement, double-click the statement instead.
* **Counts**: Shows the total number of bills currently displayed, amount currently selected, and number of bills most recently sent per *Mode*. Closing the Billing List resets the count per *Mode*.
* **Defaults**: Opens limited view of [Billing Defaults](billingdefaults.html) window in order to modify Electronic Billing credentials (e.g., password/username) without clearing the list of statements.

![](images/billingListOtherMore.png)

* **All**: Select all patients in the list.
* **None**: Deselect all patients in the list.
* **Print List**: Print the list of bills (not individual statements).

## Send Statements

Click **Send** statements to generate and/or send based on their Mode.

* Once bills are successfully sent or generated, a confirmation message is displayed and a statement line item is added to the guarantor's patient account grid.
* If sending electronic billing and the office has opted to generate PDF copies of the statements, statements are generated and saved in each patient's Imaging Module, Statement folder.
* If a payment is posted to the account after the statement is generated, but before it is sent, aging is updated but the Dunning Messages are not. This is typically not an issue if statements are sent immediately.
* To send an additional text message to patients when sending statements from the billing list, see Billing Defaults, *Send text messages for these modes*. The text message can optionally include a clickable URL that launches the Patient Portal Sign in window. See [Online Payments](portalonlinepayments.html).

If exiting the Billing List without sending statements, users are prompted to delete bills:
![](images/billingListClose.png)

* Click **Yes** to delete the unsent statements. Statements can be re-generated for patients at a later time. When selected, a confirmation is displayed with the number of deleted statements.
* Click **No** to save the list. Return to the Billing List at any time to continue.
* Click **Cancel** to return to the Billing List window without closing.

## Billing Progress

If the preference,  *Show progress when sending statements*, is enabled, a progress window is displayed. Offices can also set a *Max number of statements per batch*. This is useful for large offices that send many batches of statements at once.

Do not open other windows while sending statements. Doing so causes sending to pause.

![](images/billingListStatement.png)

* **Overall**: Indicates percentage of progress towards all sending statements.
* **Batch**: Indicates percentage of progress towards printing the batches of statements. If using clinics, a separate batch per clinic is processed.
* **Statement**: Indicates the percentage of progress towards printing individual statements in the batch.
* **Progress Log**: Displays a real-time log while statements are sending.
* **Pause / Resume:** Click Pause to stop progress, finish the current statement to PDF, then send the current batch if applicable. Electronic billing statements will not be sent. Click Resume to keep sending statements.
* **Cancel**: Finish the current batch and close the Billing Statement Progress window. The Bills window locks until the batch is finished. Electronic billing statements will not be sent.

## Unsending Bills

If something went wrong during the printing process, bills can be unsent to be reprinted.

1. Click the **Sent** radio button at the top of the Bills window to show all sent bills.
2. Highlight all printed bills to unsend, then click Edit Selected.
3. Uncheck the **Sent** box. This setting applies to all selected bills.
4. Click **OK** to return to the Billing List. Click the **Unsent** radio button to see all the bills. If the bills are not in the list, ensure the date range is inclusive enough.