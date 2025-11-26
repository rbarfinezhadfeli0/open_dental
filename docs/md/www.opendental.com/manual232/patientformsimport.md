Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Import Patient Forms and Medical Histories

When a patient fills out a registration form or a medical history form, the data can be imported into the Open Dental database.

In [Patient Forms](patientform.html), highlight a form, then click **Import**.

![](images/sheetImport.gif)

This works for forms filled out via the [Kiosk Manager](kiosk.html), [Web Forms](../site/webforms.html), or [eClipboard](../site/eclipboard.html). The import process differs slightly depending on the sheet type.

## Import a Patient Form

This window is a review of information on the completed form. Always verify any data with the patient and make sure the correct rows are flagged before you import.

Columns:

* **FieldName**: The name of the field in the database and on the form.
* **Current Value**: Shows a value if information already exists in Open Dental for this field.
* **Entered Value**: What the patient entered on the form. If a value is in red bold text, it cannot be imported.
* **Import Value**: What value, if any, Open Dental has determined should be imported. To change a value, double-click on the cell.
* **Do Import**: If an X appears, this field is marked for import. Single click on a cell to toggle the X on/off. When marked for import, the entire row will be grey.

When **[double click to pick]** displays in red, the information is too complex for Open Dental to automatically translate. Double-click in the cell to specify the information to import. For additional details on complex fields, see Complex Fields below.

When the information has been reviewed, click **Import**. The selected fields will import into Open Dental and a *Done* message will display.

## Import a Medical History

Medical history import values are represented by three states: yes, no and unknown. Empty columns represent unknown, or items which the patient left blank.

![](images/sheetImportMedical.gif)

To change import status, double-click in the Import Value cell.

**Medications**: If a patient enters new medications, you will always have to select a value from the [Medications List](medicationmaster.html). By default, the medication entered by the patient will show in the Search box. Watch for misspellings, as the search will look for an exact match. Select the correct medication and it will appear in the FieldName column under Medications.

**Medical history import logic**:

* If the Current Value = Y and Import Value = N
  + If imported, item status will be set to inactive. It will not be deleted.

    Note: For medication, the end date will be set as the current date. It will not be marked inactive until the following day.
* If Current Value = N and Import Value = Y
  + If imported, the item will be made active.
* New items will never import with an inactive status.

## Complex Fields

**Insurance Policies**: Only primary and secondary insurance policies can be imported, and the form must contain the following insurance fields:

* Relationship
* Subscriber
* SubscriberID
* CarrierName
* CarrierPhone

**Subscriber**: Subscribers must be verified and added manually. Double-click the row to open the Select Subscriber window. If the subscriber does not exist in Open Dental, cancel the import and add them.

**Insurance Carrier Name and Phone**: Insurance carriers must be added manually. Double-click the row to open the Carriers window. New carriers can be added directly from the Carriers window. By default, the search will populate with the name and phone values entered by the patient.

**New Insurance Plan**: If a new insurance plan was flagged for import, the [Insurance Plans](insplanlist.html) window will open, and the search filters will populate with the import values. This lets you verify the plan does not already exist.

* To create a new plan using the import values, click Blank.
* To use a plan that already exists, select it and click OK. The import process will verify that all import values exactly match the existing plan's information. If a value does not exactly match, a message will popup, and you will have the option to use the existing plans value (click Yes), or create a new Blank plan with the import values (click No). Click Cancel to safely exit out of the import process and return to the Import window.

**Insurance Order**: Importing an insurance policy does not increase the order to secondary, tertiary, etc. A primary insurance import will overwrite primary insurance policies, and secondary insurance import will overwrite secondary insurance policies. For example, a patient has BCBS for primary insurance and they want to add a new Met Life policy as secondary. The new Met Life information must be entered into the secondary insurance fields on the form in order to be imported into the secondary insurance fields in Open Dental. If entered in the primary insurance fields, the import will overwrite the primary insurance instead (BCBS).