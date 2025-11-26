Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Merge Patients

The Merge Patients tool can be used to merge duplicate patient accounts into one.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, **Merge Patients**.

![](images/mergePatient.gif)

Patient merges are permanent and cannot be undone.

To merge duplicate patients:

1. **Patient to merge into**: Click **Change** to select the patient account to keep. If an imaging software is bridged to Open Dental, the patient account linked to the images should be selected.
2. **Patient to merge from**: Click **Change** to select the patient accounts that will be merged into the patient selected in Step 1 (*Patient to merge into*).
3. Click **Merge**.
4. One of two popups will appear:

* If patient first name, last name, and birthdate do not match, the user will receive a warning indicating fields do not match.
![](images/mergePatientNoMatch.png)* If patient first name, last name, and birthdate match, the user will receive a prompt to continue.
![](images/mergePatientConfirm.png)
5. Click **Yes** to proceed with the merge or **No** to cancel the merge.

* Patient first name, last name, and birthdate do not need to match in order to proceed with merging patients.

6. A confirmation message will show when the merge is successful.

After the merge is successfully completed:

* The status of the *Patient to merge from* will change to *Archived*. The patient can still be accessed via the [Select Patient](patientselect.html) window by selecting *Show Archived/Deceased/Hidden Clinics* and *Show Merged Patients*. The merged patient will only show in the [Family Module](family.html) or [Account Module](account.html) when the merged patient is selected.
* Duplicate data (e.g., insurance, recall) will need manual cleanup.
* The following will not transfer from the *Patient to merge from* in the merge. Users may wish to verify this information prior to the merge and re-enter it after the merge:
  + [Patient Information](patientedit.html) will be kept from the *Patient to merge into* only.
  + Fam Urgent Fin Note will be kept from the *Patient to merge into* only.
  + Med Urgent note will be kept from the *Patient to merge into* only.
  + Any other data not listed above will be copied from the *Patient to merge from* to *Patient to merge into*.
* If a user attempts to schedule an appointment for the merged from patient, they will be prompted to switch patients.
* History for both the merge *from* and *to* patient can be viewed in the [Audit Trail](audittrail.html).
* If the merge *to* patient is moved into another family, the merge *from* patient is moved as well.
* If the merge *from* patient was in a superfamily, they will be removed from the superfamily.
* As a second step, consider deleting the archived patient in the Family Module.
* If the merge *from* patient was not a guarantor and was linked to [Clones](patientclone.html), the Clones remain in the original family and are linked to the merge *to* patient in the Patient Clones grid of the Family Module.
* If the merge *from* patient was selected at the time of the merge, the selected patient is switched to the merge *to* patient after the merge.