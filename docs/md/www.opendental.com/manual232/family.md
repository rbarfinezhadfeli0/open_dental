Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Family Module

The Family [Module](modules.html) is where basic patient and insurance information is entered and organized.

![](images/family.png)

![](images/youtubeLogo.png) See our [Family Module Playlist](https://www.youtube.com/playlist?list=PLyjZ9PCVynCmRWyNcN1QW9Rttvl6cpBOd).

## Family Toolbar

![](images/familyToolbar.png)

Family Members

* **Add**: Add a new patient to the current family and open the [Edit Patient Information Window](patientedit.html). Contact information, Billing Type, and Primary/Secondary Provider are pre-filled from the currently selected family member. Update as needed. Use **Move** to transfer an existing patient to a different family.
* **Delete**: Delete the selected patient. Patients can only be deleted if no information has been entered (e.g., procedures, perio charts, etc.)
* **Set Guarantor**: Make the selected patient the guarantor (see below).
* **Move**: Move the selected patient to a new family or to a different existing family.
  + Users are warned that Fam Fin Urgent Notes and Family Financial notes will not transfer. Take care to manually copy these over if needed.
  + If the family has been sent to [TSI Collections](tsicollections.html), do not move a family member to a new or different existing family.

Clones: Only visible when [Patient Clones](patientclone.html) is turned on.

* **Add**: Create a patient clone for the selected patient.
* **Synch**: Synch data between an original and clone patient record.
* **Break**: Break the relationship between a clone and original patient.

Super Family: Only visible when [Super Families](superfamily.html) is turned on.

* **Add**: Create a super family or add a patient to a super family.
* **Remove**: Remove the selected patient from the super family.
* **Disband**: Remove the relationship between all members of the super family.

**Add Insurance**: Attach an insurance plan or view all insurance plans for the family.

* Click the main button to add insurance plan information. See [Add Insurance](insadd.html).
* Click the dropdown, then Plans For Family, to view all insurance plans for the family, including dropped plans (see Plans for Family below).

**Discount Plan**: Click the main button to add [Discount Plans](discountplans.html). Click the dropdown to drop a discount plan.

## Patient Picture & Family Member List

![](images/familyPatientPic.png)

If an image exists in the designated patient picture folder of the [Images Module](images.html), the most recent picture is displayed at the top left. See [Patient Pictures](patientpictures.html).

The current patient is highlighted in red. To select a different family member, click on their name. To open a family member's Edit Patient Information window, double-click their name.

Note: Patients manually set to *Archived* show in this list. Patients set to *Archived* due to a merge do not show unless the merged patient is aready selected

* Guarantor: The family member designated as the guarantor appears first in the list and in bold. This person is responsible for the account. It does not need to be a patient (e.g., parent of a minor). The Guarantor cannot be deleted or moved unless they are the only family member. Moving the guarantor into another family effectively combines two families, which combines account notes and address/phone notes.
* Clones: Patient clones are listed in ALL CAPS.
* Other Family Members: Family members can only be deleted when they have no procedures, claims, payments, procedures attached to claims, or commlog entries. Once deleted, the patient cannot be accessed from any portion of the program.

## Recall

![](images/familyRecall.png)

This area lists all recalls due and scheduled for the patient. The columns that show can be customized in [Display Fields](displayfields.html), FamilyRecallGrid. Double-click anywhere in the Recall area to edit recalls for a patient. See [Recall Appointments](recall.html).

## Patient Information

![](images/familyPatInfo.png)

A summary of patient information. Double-click in the area to edit or enter information on the [Edit Patient Information Window](patientedit.html).

* Customize which fields show here in Display Fields, PatientInformation. See [Custom Patient Fields](custompatientfields.html) to add or hide definitions in this list.
* To enter [Referrals](referrals.html), double-click in the Referrals cell. The cell color can be customized in [Definitions: Misc Colors](definitionsmisccolors.html).
* To enter Payor Types, double-click in the Payor Types cell.

## Patient Clones

![](images/familyClone.png)

This grid only shows when the selected patient has a patient clone. It lists the original patient and all associated clones.

## Super Family

![](images/familySuperFam.png)

This grid only shows when the selected patient is part of a super family. It lists all super family members.

## Insurance Plans

![](images/familyInsArea.png)

The Insurance Plans area displays all insurance currently attached to the patient as active coverage. A nearly unlimited amount of plans can be attached (primary, secondary, tertiary, primary medical, secondary medical, etc.). Change the background color of Subscriber information in Definitions, Misc Colors. Double-click onto any plan to edit. Double-click onto the history grid to open [Insurance History](inshistory.html).

To view all plans associated with a family, click the **Add Insurance** dropdown menu, then click **Plans for Family**.

![](images/insPlansForFamily.png)

Double-click a plan to see more details. Dropped insurance plans never get deleted and are always available here for reference.

## Discount Plans

![](images/familyDiscPlan.png)

This grid shows when a [Discount Plan](discountplan.html) has been attached to the patient. Double-click on the plan to edit the Plan Note and Subscriber Information, or change or drop the plan. See [Discount Plans](discountplans.html).