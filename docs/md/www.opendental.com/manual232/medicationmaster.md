Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Medications List

The Medications master list contains all medications (generic and brand name) that can be added to a patient's chart.

In the [Main Menu](mainmenu.html), click Lists, Medications.

![](images/medicationMaster.png)

Alternatively, in the [Medical](medical.html) window, Medications tab, click Add Medication.

## All Medications Tab

This tab lists all medications that have been entered, both generic and brand name.

**Add Generic**: Add a generic medication. Generic medications must be added before associated brand names can be entered.

**Add Brand**: Add a brand name medication. You must first select the associated generic medication.

**Search**: Filter the list of medications by drug name. As you enter characters matching results will show.

**Import**: Import medications. Must be imported from a file exported from an Open Dental database. Only new medications are imported.

**Export**: Export the medications list to a JSON file.

Note:

* Medication Lists exported in Version 21.3.10 or greater cannot be imported into Version 21.3.9 or lower.
* Medication Lists from any version can be imported into Version 21.3.10 or greater.

**All Medications grid**: Medications are sorted alphabetically by default. To change the sort order, click on a column header.

* In Use: Indicates medications that are currently prescribed to a patient or used as an EHR indicator in Preferences.
* RxNorm: Lists [RxNorms](rxnorms.html) associated with the drug. Click **(select)** to select an RxNorm. If RxNorms are not already imported, you will be prompted to import them.

## Edit a Medication

To add a generic medication, click **Add Generic**. To add a brand name, select the generic medication, then click **Add Brand**. To edit an existing medication, double-click it.
![](images/medicationMasterEdit.gif)

**RxNorm**: Click [...] to associate the medication with a normalized RxNorms drug name. For EHR, all medications in your list should be attached to an RxNorm so that the medication, and any allergies to this medication, show on [EHR Summaries of Care](ehrsummaryofcaresend.html).

**Drug Name**: Enter the drug name as it will show in the master list.

**Generic Name**: Enter the associated generic drug name. When entering a brand name drug this field is auto-filled with the generic name.

**Notes**: Only allowed on generic medications. Every medication should have a note, no matter how short. They usually consist of the therapeutic category, and any precautions or interactions to be aware of. All medications attached to the generic medication will show the same note.

Entering medications into the list will take a little extra time at first. It helps to divide the task among the assistants and the dentists. The assistants can look up the medication, ensure that the spelling is correct, and enter the generic and brand names. But they should not enter in any notes. Notes should only be entered by a dentist.

**Dependencies**: Click a dropdown to quickly view associated information about this drug.

* **Patient medication**: A list of all patients who have this medication ([Medications](medicationspatient.html) (active or discontinued)).
* **Patient allergy**: A list of all patients who have this medication as an allergy ([Allergies](allergiespatient.html) (active and inactive)).
* **Brands**: For generic medications, click the down arrow to see which brand name medications are associated with this medication.

**Delete**: Remove the medication from the master list. Medications in use by a patient, in the Allergy List, or as an EHR indicator cannot be deleted.

## Missing Generic/Brand Tab

This tab shows for United States only. The medications in this list are imported from NewCrop eRX, not created in Open Dental, and have likely been created in the NewCrop eRX interface. This list will be empty if NewCrop eRX has not been used.

![](images/medicationMasterMissing.png)

To convert a medication to generic:

1. Select the drug description, then click **Convert to Generic**.
2. In the Edit Medication window, enter the medication details.
3. Click OK to save.

To convert a medication to brand:

1. On the All Medications tab, select a generic drug description.
2. Click the Missing Generic/Brand tab. Select the drug to convert.
3. Click **Convert to Brand**.
4. In the Edit Medication window, enter the medication details.
5. Click OK to save.