Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Rx / Prescription

Paper prescriptions can be written and printed in Open Dental.

In the [Chart Module](chart.html) toolbar, click **New Rx**.

![](images/rxSelect.gif)

Alternatively, in the [RX Manage](rxmanage.html) window, click **New Rx**.

Setup:

* [Rx / Prescriptions List](rxsetup.html): Add new medications to the Prescriptions list. Create templates for common prescriptions and set up drug interaction alerts based on allergies, medications, and/or problems.
* [Rx Layout](sheetsrx.html): Customize the print layout when printing one prescription on a page.
* [Rx Multiple Layout](sheetsrxmulti.html): Customize the print layout when printing up to four prescriptions per page.
* [Rx Manage](rxmanage.html): Create and manage prescriptions and/or print multiple prescriptions per page.

## Create a New Prescription

In the Select Prescription window, double-click on a prescription template that is close to your requirements, or click **Blank** to start with an empty prescription. The Blank button is not available if EHR is turned on.

(Optional) If the prescription list is long, filter the list using the Search.

* Drug: Drug name.
* Disp: Dispensed amount.
* Controlled Only: Check this box to only display prescriptions marked as a controlled substance.

Click **Search** or press Enter to refresh the list.

Note: If [Prescription Alerts](rxinteractionchecks.html) are triggered, a pop up will display the alert message. Click **Cancel** to select a different prescription template. Click **OK** to proceed.

![](images/rxEdit.png)

Enter or change prescription information as needed.

* **Date:** Defaults to today.
* **Controlled Substance:** Check this box to display the selected provider's DEA# on the printed prescription.
* **Is Proc Required:** Check this box to require an associated procedure when printing. Select a procedure from the dropdown. See Procedure Required on Prescription section below for setup.
* **Procedure**: Select the procedure requiring the prescription. Use the dropdown menu to select from completed or treatment planned procedures.
* **Days of Supply:** Required by some states. Enter the number of days this prescription will last. Can be a partial day if needed (e.g. 3.5). Also available as an output text field on Rx / Single Prescription Layout sheets.
* **Drug**: Drug name.
* **Sig**: Instructions for the patient on when and how to take the prescription. Only the first 255 characters of the Sig are saved.
* **Disp**: Dispense number.
* **Refills**: Number of refills allowed.
* **Provider**: Provider filling the prescription.
  + If the logged-in user is associated with a provider, that provider is automatically selected.
  + If the logged-in user is not associated with a provider, a provider will only be chosen if only one is in the list. If multiple providers are in the list, click the dropdown or **[...]** to select a different provider.
  + When [Clinics](clinics.html) are enabled the provider list is limited to providers assigned to the to the current Clinic. If no providers are assigned, the Clinic default provider is selected, if set, otherwise the practice default provider is chosen.
  + If *Hide providers without DEA number from making (non electronic) prescriptions* is enabled in [Preferences](preferences.html), listed providers only include those with a DEA number entered in [Edit Provider](providerseditwindow.html).
  + If EHR is enabled, the automatically selected provider is locked when creating the prescription. Users with the *Rx Edit* [Permission](permissions.html) can edit the provider once the Rx is saved.
  + List of available providers does not include providers marked as *Not a Person* in the Edit Provider window.
* **Dosage Code**: Only visible when EHR is turned on.
* **Notes:** This is only for your use and does not appear on printed prescriptions.
* **Patient Instructions**: Provide instructions to the patient on how the medication should be taken.
* **eRx Pharmacy Info**: Informational field that automatically populates with the pharmacy name when electronic prescriptions are received. This helps verify the correct clinic is selected.
* **Pharmacy:** Click Pick to select a pharmacy from the [Pharmacies](pharmacies.html) if the prescription is called in.
* **Send Status:** Choose the status of the selected prescription. Options include Unsent, InElectQueue, SentElect, Printed, Faxed, CalledIn, GaveScript, Pending.
* **Clinic**: Select the clinic associated with the prescription. Displays clinic address information when printed.
  + If the preference *Rx use selected clinic from Clinic menu instead of selected patient's default clinic* is enabled, the clinic defaults to the currently selected clinic in the Main Menu. If Headquarters is selected, defaults to *Unassigned*.
  + If the preference *Rx use selected clinic from Clinic menu instead of selected patient's default clinic* is disabled, the clinic defaults to the patient's assigned clinic.

Click **OK** to save without printing.

Click **Print** to save and print it to the default printer for single prescriptions ([Printer Setup](printersetup.html)). To print multiple prescriptions on one page, see [Rx Manage](rxmanage.html).

Note: If the Send Status is set to anything other than InElectQueue or SentElect, clicking the Print button automatically changes the status to Printed.

The Rx sheet set as the default for the Rx sheet type will be used to print single prescriptions. See [Sheet Def Defaults](sheetdefaults.html).

Saved prescriptions will be added to the patient's Progress Notes in the Chart Module and to the patient's medication list. Prescriptions are not previewed before printing, thus they can not be digitally signed or changed before printing. To edit a prescription, double click it then reprint it.

Below is an example of the print layout for the internal Rx sheet (one prescription printed per page). Note that the Generic Substitution Permitted check box in the internal sheet is always checked. To remove the check mark, customize the sheet.

![](images/rxPrint.gif)

## Patient Instructions

Some offices may want to provide the patient with instructions separate from the prescription.

In the Edit Rx window, enter the instructions in the Patient Instructions field, and Click **Pat Instr**. to print.

![](images/rxPatInstructPrint.gif)

## Procedure Required on Prescription

Some states require an associated procedure show on their printed prescriptions. Each of the following steps must be completed to activate the preference.

1. Enable the preference behavior. This preference is disabled by default.
   1. Click Lists, Prescriptions.
   2. Check *Procedure code required on some prescriptions* to enable the subsequent preferences.
2. Enable the preference for each Clinic.
   1. In the main menu, click Lists, Clinics, then double click to open the [Clinic](cliniceditwindow.html).
   2. *Proc code required on Rx from this clinic* to enable the preference on the clinic level.
3. Enable the preference for each Rx template. This will check the *Is Proc Required* preference automatically in the Edit Rx window each time the drug is prescribed.
   1. In the main menu, click Lists, Prescriptions.
   2. Double-click the prescription to open the Edit Rx Template window.
   3. Check *Is Proc Required* for this drug.
4. Enable the preference for an individual Rx.
   1. In the Chart module, click New Rx.
   2. Check *Is Proc Required* if it is not already enabled at the template level.

To include an ICD-10 diagnosis code, attach it to the procedure. See [Procedure - Medical Tab](proceduremedical.html) and [ICD-10 Codes](icdcodes.html).

See [Automation](automation.html) for options available when creating a prescription.

## Audit Trail

Any time a prescription is created, edited, deleted, or printed, a log is created in the audit trail. Users must have the *RxCreate* security permission to create new prescriptions and the *RxEdit* permission to change or delete prescriptions.

To view an audit trail of changes made to a selected prescription only, double click an existing prescription in the Progress Notes, then click Audit Trail on the Edit Rx window.

![](images/rxAuditTrail.gif)