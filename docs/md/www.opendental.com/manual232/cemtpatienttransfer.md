Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

CEMT Patient Transfer

In the [Central Enterprise Management](central.html) window, highlight the database the patient is currently entered in. Click Transfer, Patients.

![](images/cemtPatientTransfer.gif)

Patients who move between locations can have some basic information exported from one database and imported to another through the Central Enterprise Management Tool (CEMT). Only demographic information is exported to the target database. Account details, treatment history, and insurance information is not included. None of the information for the patient in the old database will be automatically changed.

There are two steps to transferring patients:

1. Export the patient data from the original database.
2. Import the patient data into the new database.

![](images/youtubeLogo.png) See our [QuickTip Video: Transfer Patient Between Databases Using CEMT](https://youtu.be/TuiS4oyOuMc).

## Export from the Original Database

Patients to Export: Lists patients to export to a different database.

* **Add**: Click to select patients to export.
* **Remove**: Remove selected patient from list of patients to transfer.

Databases to export patients to: Lists the database to export patients to.

* **Add**: Click to add a database. Only databases with a status of OK list.
* **Remove**: Remove selected database from list of Databases to export to.

**Export**: Click to export the patients. Depending on the number of patients being exported, this process may take some time. A progress bar displays, and once complete, a summary appears.

Change the patient in the old database to Inactive and make a note about moving them to the other database.

## Import the Patient into the New Database

Exported patients appear as new patient Web Forms in the target database.

Open the new database, then go to Tools, [Web Forms](../site/webforms.html).

Click **Retrieve New Forms** and create new records for each patient. For details on this process, see [Web Forms Retrieve](webformsretrieve.html).

Once all web forms have been retrieved, all are listed in a window like the one below:
![](images/cemtPatientTransferWebforms.png)
 Right-click on each patient in the grid and select **View this patient's forms**.

In the Patient Forms window, select *PatientTransferCEMT* and click **Import**. See [Import Patient Forms and Medical Histories](patientformsimport.html) for additional details on importing information into the database.