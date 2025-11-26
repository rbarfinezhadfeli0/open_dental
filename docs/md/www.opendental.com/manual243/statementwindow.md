Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Statement Window

Individual statements for patients or families can be created from the Account Module.

In the [Account Module](account.html) toolbar, click the Statement dropdown.

![](images/statementDropdown.png)

**Statement button**: Click to immediately print the default statement to the default printer. Statement shows all transactions within the number of days set in [Billing Defaults](billingdefaults.html) or, the date range entered in the Account Module, Show tab. Set the default Statement sheet in [Sheet Def Defaults](sheetdefaults.html).

**Walkout**: Immediately print a Walkout Statement which does not include payment options. Displays information for the selected patient (procedures, payments, adjustments, etc.) from today's date only.

**Email**: Generate a PDF attached to an [Email Message Edit](emailmessage.html). The subject and body are automatically filled in based on [Billing Defaults](billingdefaults.html), but can be edited before sending.

* Regular email is not a secure method of sending statements (PHI). If using Secure Email, the statement can be sent securely.
* By default, emails are sent using the default address for the patient's assigned Clinic. If Clinics are not enabled (or the patient's assigned clinic does not have a default email), the Default email in Email setup used.
* To change the From address, click the **Email** button to change the From address from the preview.

**Receipt**: Immediately print a [Receipt](receipt.html) with today's payments. Set the default Receipt sheet in [Sheet Def Defaults](sheetdefaults.html).

**Invoice**: Select procedures, then click to generate an [Invoice](invoice.html). Set the default Invoice sheet in [Sheet Def Defaults](sheetdefaults.html).

**Limited**: Select procedures, patient payments, insurance payments, or adjustments, then click to generate a [Limited Statement](limited.html). Set the default Limited sheet in [Sheet Def Defaults](sheetdefaults.html).

**Limited (Custom)**: Displays the [Limited Statement](limited.html) Select window.

**More Options**: Displays the Statement window to allows users to customize a statement prior to printing or sending.

## Statement Window

![](images/statementOptions.png)

Alternatively, this window also opens when a user double-clicks a bill or clicks **Edit Selected** from the [Billing List](billinglist.html). A read-only window also opens when a user double-clicks an existing statement, invoice, or receipt.

Below is a description of all options that might show on the window. Not all options show for all statement types, and not all options can be modified.

* **Date**: Defaults to today's date.
* **Sent**: Automatically checked once the statement, invoice, or receipt is printed or emailed. Check the box to change it manually.
* **Mode**: The method of delivery.
* **Hide payment options**: Remove payment information (amount due, date due, amount enclosed, and credit card payment section, aging).
* **Single patient only**: If checked, only the selected patient's procedures are included. If unchecked, procedures for all family members are included. The *StatementAging* [Sheet Grid](sheetsgrid.html) is reflective of the family balance whether or not this box is checked.
* **Intermingle family members**: If checked, all patients in the family are mixed in one grid. If unchecked, each family member has their own grid. Set the default in Preferences, *Account Module statements default to intermingled mode*.
* **Receipt**: Create a receipt instead of a statement. Receipts only include patient payment information.
* **Send Text Message**: Only shows when sending statements from the Billing List. Send a text message to the patient about this statement. Set the default text message in [Billing Defaults](billingdefaults.html), SMS Statements. When not opened from the Billing List, this box shows as *Sent text* and is read-only.
* **Date Range**: Transactions that fall between the start and end date show on the statement. Type the dates manually or click one of the buttons to insert a date. If both dates are blank, all transactions show.
  + **Show all transactions since zero or negative balance**: If checked, all transactions from the last date the family account balance was zero, or had a credit balance, will print on the statement. The date range entered is ignored.
* **Send to Super Family**: Only an option if the patient is a member of [Super Family](superfamily.html) and the family guarantor has *Included in Super Family Billing* checked on the [Edit Patient Information](patientedit.html). If checked, a super statement that includes account activity for all super family members is generated. Super statements always group by super family guarantor.
* **Include Patient Last Name**: This always defaults to unchecked when opening the window, even if the box was previously checked. Check the box to include the patient last names in *Patient* column of the statement. The last name is shown on the statement preview and included when a copy is saved (i.e., marked sent) or printed.
* **Export as CSV**: Export the statement as a CSV once it is printed or emailed from the Statement window. Users must have the *Export CSV* [Permissions](permissions.html) to use this option.
  + Files are saved to the [Definitions: Image Categories](definitionsimagecat.html) marked for Statements once the user clicks **Save**. If no category is marked for statements, the file is saved to the OpenDentImages folder for the patient.
  + CSV does not include payment plan summaries or aging categories.
  + When creating a limited statement or invoice, the CSV will include procedure, insurance estimate, and account totals for the entire family (or super family).
  + If the statement is not also printed, emailed, or sent to Patient Portal it will remain noted as *Unsent*. Check the *Sent* checkbox to mark the statement as sent.
* **Limited Statement**: Indicates the statement is a limited statement. Only shows for limited statements.
* **Invoice**: Indicates an invoice. Only shows for invoices. An invoice number also displays.
* **Note**: General notes. [Right Click Text Box](rightclicktextboxes.html) the text box for additional options.
* **Bold Note**: Shows in bold red above and below the family grid. When generating individual statements, there is no way to set a default note or dunning messages. [Quick Paste Note Edit](quickpastenoteedit.html) can be set up to be used in this area. Default notes and dunning messages can be set as part of the batch billing process. Right-click the text box for additional options.

Note: By default, statements for a family only displays patients with a status of *Patient* unless *Single patient only* or *Intermingle family members* is checked (unless a balance is due).

## Buttons at Bottom

These buttons display at the bottom of the Statement window.

* **Delete**: Deletes the statement. If current user does not have the *Image Delete* permission, any copies saved in Image Folder are not deleted.
* **Print**: Send the statement to the default printer. The statement is designed to be printed on standard perforated billing paper and to fit inside a standard window envelope. If the statement is marked as sent, this button opens the statement in PDF.
* **Email**: Open the Email window, with a PDF version of the statement, receipt, or invoice attached. The default email message is used.
* **Pat Portal**: Send the statement to the patient's portal. The criteria below must be met. If criteria is met, a message gives users an option to notify the patient via email that the statement is available.
  + Click No to send the statement to the portal without sending a notification email.
  + Click Yes to open the Edit Email Message window with a default message notifying the patient about the statement availability and how to access it.
  + The [Patient Portal](portalhostedbyod.html) must be set up.
  + The patient must have access to the patient portal. See [Patient Portal Access](portalaccess.html).
  + In [Definitions: Image Categories](definitionsimagecat.html), the Statements category must have *Show in Patient Portal* and *Statements* selected.
* **View**: Preview the statement, receipt, or invoice. Clicking view opens the Fill Sheet window for additional options. Edit any custom [Sheet Field Types](sheetsaddelements.html) then print or email the statement to save changes.
  + **Print**: Send the statement to the default printer. When printed, the Fill Sheet window closes and the *Sent* box is checked in the Statement window.
  + **Email**: Opens the Email window, with a PDF version of the statement, receipt, or invoice attached. The statement sheet name is used as the email subject. Insert an email template or create a custom message.

Note: Printed and emailed statements are automatically saved as PDFs in the patient's [Account Module](account.html). PDFs are also saved in [Imaging Module](images.html) to the [Definitions: Image Categories](definitionsimagecat.html) assigned Statement Usage. If no Image Category is assigned, PDFs are saved to the first Image Category in the list. Generated statements can be reprinted or viewed at a later time.