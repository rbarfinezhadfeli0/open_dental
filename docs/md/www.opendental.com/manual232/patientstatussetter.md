Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Patient Status Setter

The Patient Status Setter tool is used to change the patient status of multiple patients at once.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, Patient Status Setter.

![](images/patientStatusSetterWindow.png)

The tool filters active, inactive, archived, and deleted patients who have not had treatment planned procedures, completed procedures, or appointments since a specified date. The patient status can also be set manually per patient in the [Edit Patient Information](patientedit.html).

**Criteria**: This criteria determines which patients to change the patient status for.

* **Patient with Status**: Use the dropdown to select patients who currently have a status of Patient, Inactive, Archived, or Deleted.
* **Patient Filter**: Filter patients by whether they have not had one of the following since the selected date. When multiple are selected, the patient must meet the criteria of all selected. At least one filter must be selected.

+ **Planned Procedures**: Find patients who have not had a procedure treatment planned since the selected date.
+ **Completed Procedures**: Find patients who have not had procedures completed since the selected date.
+ **Appointments**: Find patients who have not had an appointment since the selected date.

* **Since**: Use the drop down menu to select the date since field, or manually type in the date. This date will default to two years prior to today.
* **Clinic**: Use the Clinic drop down to limit the results to a specific clinic.

Click **Create List** to update results.

Note: Patients with no history for the selected filter (e.g., no appointment history when filtering by *Appointments since*) will always show in the list. These may often be new or prospective patients whom the office does not want to change the status of. Deselect these patients before running the Patient Status Setter Tool to prevent inactivating these patients.

**Patients to Convert**: List of patients for currently selected criteria.

* **Patnum**: Patient account number.
* **PatStatusCur**: Current patient status.
* **First name**: First name of the patient.
* **Last Name**: Last name of the patient.
* **Birthdate**: Birthdate of patient.
* **Clinic**: Clinic the patient is assigned to.

**Select All**: Click to select every patient in the list.

**Deselect All**: Click to deselect all the highlighted patients in the list.

**Change Patient Status To**: Select which patient status to change the selected patient to. Options are Patient, Inactive, or Archived.

**Run**: Click to change the status of the selected patients.

**Close**: Click to close window.

## Changing the Patient Status

1. To change patient statuses, select the criteria, then click **Create List.**
2. Select one or more patients and click **Run**. Click **Yes** to change the status of the selected patients.
   ![](images/StatusChangeWarning.gif)
3. When the tool has finished a confirmation window will open with a list of patients that were updated. Click **Print** to print the list or **OK** to close.
   ![](images/patientStatusSetterComplete.gif)