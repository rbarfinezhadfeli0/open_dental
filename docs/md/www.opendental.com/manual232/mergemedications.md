Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Merge Medications

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, Merge Medications.

![](images/medicationMerge.gif)

Merging permanently assigns the *merge into* medication wherever the *merge from* medication is assigned.

To merge Medications:

1. **Medication to merge into**: Click **Change** to select the medication to keep from the [Medications List](medicationmaster.html).
2. **Medication to merge from**: Click **Change** to select the medication that will be removed from the Medications List.
   * Generic medications can be merged into brands if the GenericNum is not associated with any other medication.
3. Click **Merge**. A warning will prompt the user to confirm the merge.
4. Click **Yes** to continue.
![](images/medicationMergeConfirm.gif)5. One of two popups will appear:
   * If the generic numbers, medication names, or RxCUIs differ, users will receive a popup indicating the fields that do not match and total patients assigned the *Medication to merge from*.
   ![](images/medicationMergeNoMatch.gif)* If the information generic numbers, medication names, or RxCUIs do not differ, users will receive the following popup indicating the total patients assigned the *Medication to merge from*.
   ![](images/medicationMergeConfirmAgain.gif)
6. Click **OK** to proceed.
7. Once the merge is complete, a *Done* popup will appear.

Once the merge is complete, all patients who were previously assigned the *Medication to merge from* (Step 2) will be reassigned the *Medication to merge into* (Step 1) (i.e., medication information will be updated). *Medication to merge from* will be removed from the Medications List.