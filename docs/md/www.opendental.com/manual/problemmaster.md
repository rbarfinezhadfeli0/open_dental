Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Problem List

The master problem list contains all problems that can be attached to a patient's problem list.

In the [Main Menu](mainmenu.html), click Lists, Problems.

![](images/problemSetup.gif)

Alternatively, in the [Medical](medical.html) area of the Chart Module, Problems tab, click **Add Problem**.

Problems are medical conditions or other factors that affect the health of patients. In order for a problem to be added to a patient's Medical information, it must first be added to the master list. The list contains all problems that have previously been added to patients or that users have added to the list.

**Search**: Filter the list by ICD9, ICD10, or SNOMED CT code, or by description. As the user enters criteria, the list will update with matching results.

**Show Hidden**: Check to show problem which have been marked hidden.

**Add**: Click to add a new problem to the master list. See Add or Edit a Problem below.

**Sort Options**: If accessed via the Main Menu, problems can be reordered or sorted alphabetically. These options do not appear when the Problems list is opened via the Medical area of the Chart Module.

* Use the **Up/Down** arrows to reorder individual problems.
* Click **Alphabetize** to sort the current list of problems alphabetically by description.

**Close**: Click to close the problems list.

## Add or Edit a Problem

Click **Add** to create a new problem.

Double-click an existing problem to edit.

![](images/problemEdit.gif)

**ICD-9 Code**: Click **[...]** to associate the problem with an ICD-9 Code.

**ICD-10 Code**: Click **[...]** to associate the problem with an ICD-10 Code. See [ICD-10 Codes](icdcodes.html)

**SNOMED CT Code**: Click **[...]** to associate the problem with [SNOMED CT Codes](snomedct.html). Required for problem details to appear on [Continuity of Care Document (CCD)](ehrccd.html).

**Description**: Type the identifying name of the condition.

**Hidden**: Check to hide a problem from appearing in the master Problem List when updating patient medical history. Can be used with problems that are attached to patients as these cannot be deleted.

**Delete**: Click to delete a problem from the master Problem List. Can only be used if the problem is not attached to any patients.

Click **OK** to save the problem.

To download code systems to associate to problems, see [Importing Code Systems](codesystemimport.html).

For EHR:

* If a problem of *none* is created, also enter the problem as the *Indicator that patient has no problems* in [Preferences](preferences.html).

Problems can also be added to the master list while editing a [Medical History Sheet](sheetsmedicalhistory.html).