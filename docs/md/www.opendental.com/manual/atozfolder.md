Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

A to Z Folder

See [Paths](paths.html).

The A to Z folder is where Open Dental stores images and documents. It is typically found on the C drive of the server.

![](images/AtoZ.gif)

Images are often scanned or imported in the [Imaging Module](images.html). The A to Z folder consists of the following:

* 26 letter folders, labeled A through Z.
* Folders for email attachments, email images, EOBs, forms, provider images, reports, sheet images, and wiki images.
* Folders for SetupFiles (copies of all setup.exe versions used to install updates) and UpdateFiles (files copied during updates).
* Printed [Claim Form](claimforms.html) images.
* Saved logs from [Database Maintenance](databasemaintenance.html) and the [Query Monitor](querymonitor.html).

Note: The OpenDentImages folder may be called the OpenDentalData folder in older installations of Open Dental.

The default name of the A to Z folder is OpenDentImages. Below is what the file structure might look like if stored in a local or network folder.

Within each lettered folder are patient folders based on last name.

![](images/AtoZpatient.gif)

Each patient's folder is labeled by last name, first name and a unique number (Patient.PatNum in the database). Once recognized by Open Dental, do not rename or move the files, or Open Dental will not know where to find them. If a patient name changes (e.g., marriage) the folder name will not change; it will always remain the same as when the record was first created.

Images and documents stored in the A to Z folder are viewable in the Imaging Module. If using Open Dental on multiple computers and storing files in a local or network folder, you will need to share the OpenDentlmages folder (see [Share A to Z Folder](atozshare.html)). For shared network folder replication strategies, see [Folder Replication](sharednetworkfolder.html).

## Placing Images and Documents

Images and documents can be placed into a patient's folder rather than importing them through Open Dental.

If an image or document is placed directly into the folder, the file is located in the first Image Category listed for the patient in the Imaging Module.

To place a file into a specific folder, prefix the file name with \_###\_ where ### equals the Image Definition Number. (e.g., *\_190\_PatientPicture.png*)

* To find a list of Image Definition Numbers, run the following query:
  Select DefNum, ItemName from Definition where Category=18 AND IsHidden=False
   ORDER BY ItemOrder

## Troubleshooting

**Error: Could not find the path to the AtoZ folder.**

Solution: Verify the data path to the A to Z folder is correct on the Data Paths window.

**Problem: I upgraded to Windows 10 and can no longer access the shared OpenDentImages folder.**

Solution: See the Troubleshooting section at the bottom of [Share A to Z Folder](atozshare.html).

**Problem: My images are missing and/or I can't find them in the AtoZ folder.**

Solution: Check for duplicated folders in your Open Dental directory. Click C: (or the drive Open Dental was installed on), Program Files (x86), Open Dental. Merge duplicated folders from the directory into the AtoZ folder.