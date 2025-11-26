Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Forms Retrieve

Retrieve web forms submitted by patients.

In the [Main Menu](mainmenu.html), click Tools, [Web Forms](webformsupload.html).

![](images/webForms.png)

![](images/youtubeLogo.png) See our video on Mobile Web Forms: [Web Forms Tutorial](https://youtu.be/vxTM-m3JHBU).

**Setup**: Click to open [Web Form Setup](webformsupload.html).

Show Retrieved Forms: These filters affect which retrieved forms display.

* **Start / End Date**: Show forms submitted within the date range.
* **Today**: Click to only view forms submitted today.
* **Clinic**: Select one or more clinics from the dropdown to only view forms submitted for specific clinics. Select *Headquarters* to view forms not assigned to a clinic.
* **Refresh**: Click to apply changes.

Web Forms Grid:

* All web forms that have already been retrieved, for the date range and clinic, are listed.
* To view a form, double-click the row.
* To view all forms for a patient, right-click the patient row and select *View this patient's forms*.

**Batch Size**: Enter a batch size between 1 and 255. The default is 10. All forms are downloaded at once, however they are downloaded in batches in the background. Using a smaller batch size may help prevent large-volume practices from timing out.

**Retrieve New Forms**: Click to retrieve forms.

* An [Alert](alerts.html) will appear when web forms are ready for retrieval. The alert runs once an hour.
* If *Enable automatic download of web forms* is checked in Web Form Setup, forms that have a patient match will automatically download. Forms that do not have a patient match (e.g., new patients) must still be retrieved using this button.
* When staff retrieves a Web Form, it is matched to a patient and viewable in the patient's [Chart Module](chart.html) and [Patient Forms](patientform.html).* If using clinics, the web forms retrieved are based on the Clinic selected in the dropdown menu.
    + Select All to retrieve all forms, regardless of clinic.
    + Select Headquarters to retrieve forms from patients who do not have a clinic assigned.
    + Select a specific clinic to only retrieve forms for that clinic.

To import data from a patient form or medication history into the database, see [Import Patient Forms and Medical Histories](patientformsimport.html).

## Matching Patients

Open Dental will attempt to automatically attach each retrieved web form to an existing patient.

If a match is not made, a prompt will display to pick a patient.

* **Matches**: More than one patient with the same first name, last name, and birthdate was found for the web form. Double-click the correct patient.
* **Close Matches**: No exact match was found for the web form. Choose a close match from the list, select an existing patient, or create a new patient.
   A close match is the first two letters of the last name, first two letters of the first name, and either an exact match on the DOB field or no birthday listed in the Open Dental program for the patient.

![](images/webFormPickPatient.gif)

The submitted last name, first name, and birthdate show at the top. If using clinics, the clinic the form was generated from displays.

* Double-click a match to attach the form to the patient.
* **Preview**: View the submitted form.
* **Select**: Select a patient that is not listed. All forms related to the patient will then attach to the selected patient.
* **Discard All**: Deletes all unretrieved forms submitted with the exact same first, last, birthdate, and all included phone numbers. Use with caution to avoid losing real patient data. Intended to be used to clear out multiple test forms submitted under a test patient.
* **New**: Create a new patient record using the submitted information.

  Note: When using Clinics, the patient's clinic will be set to the clinic associated to the web form.
* **Skip**: Do not retrieve web form at this time. Skipped forms will be available for download the next time web forms are retrieved. Skips all forms related to the same patient.
* **Cancel**: Cancel retrieval of all web forms.

## Technical Details

Open Dental uses the following logic to match retrieved web forms to patients:

* Initially Open Dental will attempt to match a patient based on last name, first name, birthdate.
* If only one exact match is found, the web form will be automatically retrieved.
* If there is more than one match, email address and phone number will also be considered. If at least one phone number or email address matches any phone number or email address on file, the web form will be retrieved. If neither phone nor email has a match, a prompt will display to pick a patient or skip retrieval.
* If there is no match at all, a prompt will display to pick a patient or skip retrieval.

Web forms that are successfully received are permanently deleted from the Open Dental web server. If a duplicate patient is created, see [Merge Patients](mergepatients.html).

Web forms that have been submitted by the patient, but not retrieved by the office, will automatically deleted after 30 days.

To restore a web form that was deleted from a patient's chart, double-click it. Click **UnDelete** at the bottom of the form.