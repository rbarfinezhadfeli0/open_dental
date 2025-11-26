Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Conversions: Duplicate Patients

See [Use Converted Database](usingodconversion.html).

In some dental software, the guarantor account has to be a separate account from the patient account. In Open Dental, the guarantor does not need to be a separate patient. Instead, a patient is simply marked as a guarantor or not.

During final conversion (see [Conversions](../site/conversions.html)), if the prior software had separate accounts for guarantors and patients, Open Dental attempts to merge them into one patient account. Any patients that share last name, first name, and date of birth, and are in the same family, are automatically merged into one patient. The patient record is kept, not the guarantor record.

If merge requirements aren't met (e.g., missing name, DOB, same family), there may still be duplicate patient records after the conversion.

To clean up duplicate patients, two queries are available (see [Query Favorites](queryfavorites.html)):

* *Conv - Possible Duplicate Patients (1)*: Filters to only include possible duplicates who have not had a procedure set complete after the selected Cut Off Date (i.e., inactive patients). Leave the date filter as *0001-01-01* to include all possible duplicates. Includes the following Patient Information:
  + PatID (i.e., PatNum)
  + First Name, Middle Initial, Last Name and Preferred Name (LName, Fname, MiddleI, Preferred)
  + Birthdate
  + Address Note (AddrNote)
  + Patient Status (PatStatus)
  + Date Created (i.e., the date the patient record/chart was initially created)
  + Recent Procedure Date (Recent Proc, i.e., last date a procedure was set complete)
  + Next Visit Date (Next Visit, i.e., next scheduled appointment date)
* *Conv - Possible Duplicate Patients (2)*: Lists all patients records with the same first and last name. Includes the following Patient Information:
  + PatID (i.e., Patient Number)
  + LegacyPatID
  + First Name, Middle Initial, Last Name and Preferred Name (LName, Fname, MiddleI, Preferred)
  + Birthdate
  + Patient Status (PatStatus)
  + Chart Number
  + Duplicate Count (DupCount, i.e., the total possible duplicate patients for this name)

Run the query from [User Query Favorites](queryfavorites.html). Double-click *Conv - Possible Duplicate Patients (1)* or *Conv - Possible Duplicate Patients (2)*.

![](images/convqueryDupPat.gif)

Use the query results to find which patients are duplicated, then use the [Merge Patients](mergepatients.html) tool to combine them.

Resource: [Post Conversion Checklist (PDF)](../resources/conversions/Post%20Conversion%20Checklist.pdf)