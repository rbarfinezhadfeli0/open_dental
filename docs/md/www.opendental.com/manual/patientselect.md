Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Select Patient

Use the Select Patient window to search and select patients in Open Dental.

In the [Main Toolbar](toolbar.html), click **Select Patient**.
![](images/patientselect.png)

Alternatively, use the keyboard shortcut Ctrl + P to open the Select Patient window.

Double-click on the patient to select. The patient record opens in whichever module the user began in. Alternatively, select the patient and click **OK**.

By default, only up to 40 patients list in the Select Patient grid at once. Names are sorted alphabetically by last name. The columns of information are customizable in [Display Fields](displayfields.html).

**Keyboard**: Click to use the built-in Windows keyboard. This button is not available for Open Dental Cloud users.

**Search by**: To filter the list, enter criteria in the Search by area. Users can search by one or many criteria and enter information by typing or using the on-screen keyboard.

* **First Name**: By default this field searches patient first name only. To also search preferred name, enable *Search for preferred name in the first name field in Select Patient window* in [Preferences](preferences.html).
* **SSN**: Any user can search by Social Security Number (SSN). If SSNs are masked, only users with the *Patient Social Security Number View* permission can right-click to view the full number.
* **Billing Type**: Options are defined in [Definitions: Billing Types](definitionsbillingtypes.html).
* **Site**: Options are defined in the [Site List](sites.html).
* **Clinic**: If using Clinics, filter the list to patients who are associated to a specific clinic as well as patients who are unassigned. Patients are associated to clinics when the clinic is their default or if they have any appointments in the clinic. The default selection is the clinic selected in the Main Menu.
* **Guarantors Only**: Check to only list guarantors.
* **Show Inactive Patients**: Check to include patients with a status of *Inactive*. Enable , *Show Inactive Patients by default* in [Preferences](preferences.html) to default this box to checked.
* **Show Archived/Deceased/Hidden Clinics**: Check to include patients that have a status of *Archived* or *Deceased*, or whose default clinic is marked hidden.
* **Show Merged Patients**: Check to include patients who have been merged into another patient. Option only displays if *Show Archived/Deceased/Hidden Clinics* is checked.

**Search**: Click to update search results when *Refresh while typing* is not selected.

Note:

* Only full string matches display, with exact matches listing first. If a user searches for "cott", only results that start with "cott" display (e.g., Cotter). Results that include "cott" mid-string do not (e.g., Scott).
* When searching patients, use the up and down keys on the keyboard to quickly navigate to a patient. Use the Enter key to quickly select the highlighted patient.

**Get All**: Only available when the *Show Get All button in Select Patient window* preference is enabled. List all patients (more than 40) that meet the search criteria and activate the vertical scrollbar.

* When this option is clicked, all patients matching the string of characters entered as search criteria (including mid-string characters) are listed.
* Next Visit and Last Visit fields do not populate when using **Get All**.

**Refresh while typing**: Determines whether the patient list automatically refreshes as users type. When *Allow Refresh while typing in Select Patient window* is disabled, this box is hidden.

* Checked: As users type search criteria, the patient list automatically refreshes with matching results. The setting affects the current workstation only.
* Unchecked: Do not refresh while typing. After entering search criteria, users must click **Search** or use the Enter key to update the results.

**Add New Family**: Users must always search for at least patient last name to see if a patient record exists. If it doesn't, users can add a new patient record using one of the following options:

* **Add Pt**: Add a single patient. See [Edit Patient Information](patientedit.html).
* **Add Many**: Add multiple family members at once. See [Add Family](familyadd.html).

Note: Last Name, First Name, and Birthdate entered on select patient window automatically carry over when adding new patient(s).

**Previous 40** / **Next 40**: By default, only 40 records are displayed at a time. Click to move between the next or previous 40 records. These buttons are disabled after clicking **Get All** as all results are displayed.

## Select Patient Dropdown

Another way to select a patient is by clicking the Select Patient dropdown in the Main Toolbar. The last five patients selected show, as well as all family members associated with the current patient. Click on a name to select.

![](images/patientSelectDropdown.png)

## Other Options

* Click on a different family member in the Family Module or Account Module.
* Click on a patient's appointment.
* If the text *PatNum:#####* is currently copied to the clipboard, clicking Select Patient launches the copied patnum (e.g., if *PatNum:1524* is copied to the clipboard, Patient Number 1524 is selected).