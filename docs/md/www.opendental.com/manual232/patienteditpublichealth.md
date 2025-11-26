Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Edit Patient Information: Public Health Tab

In the [Edit Patient Information](patientedit.html) click the Public Health tab.

![](images/patientEditPublicHealth.gif)

This tab is only visible when [Public Health](publichealth.html) is turned on.

**Race/Ethnicity**: If EHR is not turned on, click **[...]** to open a selection window.

![](images/patientEditRaceEthnicity.gif)

**Import**: Only appears if CDCREC codes have not been downloaded. Click to open [Import Code Systems](codesystemimport.html) window to download CDCREC codes.

Race and ethnicity options, based on CDCREC codes, list on the right in tree view. Race and ethnicity selections for the patient list on the left.

* Click **+** to expand a folder; click - to collapse a folder.
* To select an option, highlight it, then click the left arrow.
* To remove a selection, highlight it, then click the right arrow.
* Click **OK** to save all selections.

If EHR is turned on, Race and Ethnicity are selected using dropdowns instead of a selection window. Click a dropdown, then highlight the options to select. Press Shift while clicking to select multiple race options.

![](images/patientEditRaceEthnicityEHR.gif)

**County**: As you type a name, matching county names will appear in a dropdown for you to select. Counties must already exist in under Lists, [Counties](counties.html).

**Site (or Grade School)**: Click [...] to select a site from the master list. Sites have a table in the database, linked by a proper SiteNum key. See [Site List](sites.html).

**Grade Level**: Click the dropdown to choose a grade level.

**Treatment Urgency**: Click the dropdown to select a treatment urgency for the patient.

**Responsible Party**: Select the person other than the patient or guarantor, who is the responsible party. This person will have access to the patient's health information in the [Patient Portal Feature](../site/patientportal.html). This is especially useful in nursing homes.

* Click **[...]** to select a family member or other patient.
* Click **X** to remove a selection.

**Sexual Orientation**: Click the dropdown to select the patient's sexual orientation. Options are based on SNOMED CT codes.

**Gender Identity**: Click the dropdown to select the patient's gender identity. Options are based on [SNOMED CT Codes](snomedct.html).