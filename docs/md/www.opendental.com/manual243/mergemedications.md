Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Merge Medications

Use the Merge Medications tool to clean up duplicate medications in the Medications List.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, Merge Medications.

![](images/medicationMerge.png)

Merging permanently assigns the *merge into* medication wherever the *merge from* medication is assigned.

To merge medications:

1. Select the *Medication to merge into*. Click **Change** to select the medication to keep from the [Medications List](medicationmaster.html). Selected medication details are displayed.
2. Select the *Medication to merge from*. Click **Change** to select the medication that will be removed from the Medications List. Selected medication details are displayed.
   * Generic medications can be merged into brands if the GenericNum is not associated with any other medication.
3. Click **Merge**. A warning indicates results are permanent and cannot be undone.
![](images/medicationMergeConfirm.png)4. Click **Yes** to proceed with the merge.
5. One of two warnings appears:
   * If any medication fields (GenericNum, Medication Names, or RxCUIs) differ, the warning indicates which fields do not match, the total patients assigned the *Medication to merge from*, and that the change is irreversible.
   ![](images/medicationMergeNoMatch.png)* If all medication fields match, the warning indicates the total patients assigned the *Medication to merge from* and that the change is irreversible.
   ![](images/medicationMergeConfirmAgain.png)
6. Click **OK** to proceed.
7. Once the merge is complete, a *Done* message appears.

Once the merge is complete, all patients who were previously assigned the *Medication to merge from* (Step 2) are reassigned the *Medication to merge into* (Step 1) (i.e., medication information is updated). The *Medication to merge from* is removed from the Medications List.