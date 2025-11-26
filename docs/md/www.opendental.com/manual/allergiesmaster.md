Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Allergy List

Allergy Setup is a master list that contains all allergies that can be added to a patient's Medical - Allergies tab.

In the [Main Menu](mainmenu.html), click Lists, Allergies.

![](images/allergySetup.png)

Alternatively, go to Setup, Chart, [EHR](ehrsetupwindow.html), and click **Allergies**.

Allergies are listed alphabetically.

**Add**: Open Allergy Def Edit to create a new allergy on the list.

**Show Hidden**: Check to display allergies in the list that are marked hidden.

**Merge**: Highlight two duplicate allergies in the list and click to merge into one entry.

* Ensure Allergy Defs are duplicates before using this tool. Once merged, the action cannot be reversed.
* The Allergy Def that is kept is random.
* Allergy entries for patients are updated to match the description of the Allergy Def that remains. Double-click the allergy in the list to edit Allergy Def details as needed.

## Allergy Def Edit

Click **Add** to create a new allergy or double-click an existing allergy to edit. The Allergy Def Edit window is opened.
![](images/allergyDefEdit.png)

Allergies can also be added to the master list while editing a [Medical History Sheet](sheetsmedicalhistory.html).

* **Description**: Enter the allergy name.
* Only used in EHR for [CCDs](ehrccd.html): Most non-EHR offices can ignore these.
  + **Allergy Type**: A value is required in order for the allergy to display on a [Continuity of Care Document (CCD)](ehrccd.html)(e.g. Summary of Care).
  + Allergen (only one): Either the UNII or Medication can be entered, not both.
    - **UNII**: Used for ingredient allergies (e.g., latex, peanuts). Enter a UNII to show this allergy on the CCD. Must be manually entered as a 10 character, uppercase, alphanumeric code. To search for UNII codes see <https://precision.fda.gov/uniisearch>.
    - **Medication**: Click **[...]** to select from the [Medications List](medicationmaster.html). To show on an a CCD, medication allergies must be associated with medications that have an RxNorm. Click **None** to clear the box.
* **Is Hidden**: Check to hide the allergy from the Allergy Edit list when adding [Allergies](allergiespatient.html) to a patient. The allergy is still shown in patient charts it was added to.
* **Delete**: Remove an allergy from Allergy Setup. Allergies in use (i.e., added to a patient's allergies) cannot be deleted. Mark *Is Hidden* instead.

Click **Save** to add a new allergy to the master list or keep changes