Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Import Ins Plan 834

Insurance files in 834 format can be imported as needed.

In the [Manage Module](manage.html), click Import Ins Plans.

![](images/importInsPlan834.png)

The Import Ins Plan 834 feature is only available when [Public Health](publichealth.html) is turned on. It is a very specific function that imports data in 834 format. 834 files are Benefit Enrollment and Maintenance files that contain patient and insurance plan information. Importing a file can update patient information if a matching record already exists and create patient records if they don't.

* Only X12 files in 834 format can be imported.
* One file is imported at a time.
* Import oldest files first to preserve the order of insurance plan changes.

Note: This feature is not available for Open Dental Cloud users.

**Import Path**: Insert the path where the 834 file exists, or click **[...]** to navigate to the file.
**Refresh**: Click to refresh list.

The oldest file highlights in yellow. Click **OK** to open the file and view patients. If Open Dental is able to automatically match a patient to an existing patient record (based on last name, first name, birthdate) the PatNum field includes the patient's Open Dental number.

![](images/importInsPlan834Patients.png)

To manually attach a patient to an existing record, double-click the patient row, then select the patient.

**Automatically create new employers when importing plans for unknown employers**:

* Checked: When a user clicks **OK**, any employers that do not exist in Open Dental are created.
* Unchecked: Unknown employers are ignored.

**Automatically create new patients when importing plans for unknown patients**:

* Checked: When a user clicks **OK**, any patients who don't already match an existing patient in Open Dental have a new record created.
* Unchecked: Only patients with a matching patient record (PatNum) are updated. Unmatched patients are ignored.

**Drop all existing patient plan when importing new plans**:

* Checked: For patients already in the database, their current insurance is dropped and the insurance plan being imported from the 834 is added.
* Unchecked: For patients with existing plans, if the plan being imported differs, it is added as secondary insurance.

Note: Users cannot choose specific records to import.

Click **Save** to begin importing patients and insurance information. A confirmation window opens.

![](images/importInsPlan834Confirm.png)

Click **OK** again to begin. Depending on the size of the file, it may take some time. A progress indicator updates status of the import. Minimizing the screen may reduce import time.

When the import is complete, a window opens listing the changes that were made.

To print the list, click **Print**. Click **OK** to close.

In the [Main Menu](mainmenu.html), click Lists, Insurance Plans and verify the plans imported correctly. See [Insurance Plans](insplanlist.html).

Note:

* As files are processed, they are moved to an Archive folder within the original folder. If a file is partially processed for some reason, the processed portion is moved to the archive folder, while the unprocessed portion remains in the original file.
* Several processes that occur during import of the 834 are tracked in the [Audit Trail](audittrail.html).