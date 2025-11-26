Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Family Module

The Family [Module](modules.html) is where basic patient and insurance information is entered and organized.

![](images/family.png)

![](images/youtubeLogo.png) See our [Family Module Playlist](https://www.youtube.com/playlist?list=PLyjZ9PCVynCmRWyNcN1QW9Rttvl6cpBOd).

## Family Toolbar

![](images/familyToolbar.png)

Family Members

* **Add**: Add a new patient to the current family and open [Edit Patient Information](patientedit.html). Contact information, Billing Type, and Primary/Secondary Provider are pre-filled from the currently selected family member. Update as needed. Use **Move** to transfer an existing patient to a different family.
* **Delete**: Delete the selected patient. Patients can only be deleted if no information has been entered (e.g., procedures, perio charts, etc.)
* **Set Guarantor**: Make the selected patient the guarantor (see below).
* **Move**: Move the selected patient to a new family or a different existing family.
  + Users are warned that the *Fam Fin Urgent Note* and *Family Financial* notes (see [Account Module](account.html)) will not transfer. Notes can be copied manually as needed.
  + If the family has been sent to [TSI Collections](tsicollections.html), do not move a family member to a new or different existing family.

Clones: Only visible when the [Patient Clone](patientclone.html) feature is enabled in [Show Features](showfeatures.html).

* **Add**: Create a patient clone for the selected patient.
* **Sync**: Sync data between an original and clone patient record.
* **Break**: Break the relationship between a clone and original patient.

Super Family: Only visible when the [Super Families](superfamily.html) feature is enabled in Show Features.

* **Add**: Create a Super Family or add a patient to a Super Family.
* **Remove**: Remove the selected patient from the Super Family.
* **Disband**: Remove the relationship between all members of the Super Family.

**Add Insurance**: Attach an insurance plan or view all insurance plans for the family.

* Click the button to [Add Insurance](insadd.html) information.
* Click the dropdown, then Plans For Family, to view all insurance plans associated with the family, including dropped plans (see Plans for Family below).

**Discount Plan**: Click the button to add [Discount Plans](discountplans.html). Click the dropdown to drop an existing Discount Plan.

## Patient Picture & Family Member List

![](images/familyPatientPic.png)

The [Patient Picture](patientpictures.html) (if available) is displayed in the top-left.

The currently selected patient is highlighted in orange. To select a different family member, click their name. Double-click a family member from the list to open the Edit Patient Information for the patient.

Note: Patients manually set to *Archived* are shown in this list. Patients set to *Archived* due to a merge are not shown unless the merged patient is already selected.

* Guarantor: The family member designated as the guarantor appears first in the list and in bold. This person is responsible for the account. It does not need to be a patient (e.g., parent of a minor). The Guarantor cannot be deleted or moved unless they are the only family member. Moving the guarantor into another family effectively combines two families, which combines account notes and address/phone notes.
* Clones: Patient clones are listed in ALL CAPS.
* Other Family Members: Family members can only be deleted when they have no procedures, claims, payments, procedures attached to claims, or Commlog entries. Once deleted, the patient cannot be accessed from any portion of the program.

## Recall

![](images/familyRecall.png)

Patient [Recall](recall.html) information is displayed to the right of the Family Members grid. This area lists all recalls due and scheduled for the patient.

Displayed columns can be customized in [Display Fields](displayfields.html), *FamilyRecallGrid*. Double-click anywhere in the Recall area to open Recalls for Patient to edit recall details.

## Patient Information

![](images/familyPatInfo.png)

A summary of patient information. Double-click in the area to edit or enter information on the [Edit Patient Information Window](patientedit.html).

Customize which fields are shown here in Display Fields, *PatientInformation*. If *Pat Fields* are set to show, custom [Patient Fields](custompatientfields.html) are displayed.

Double-clicking some cells may open a different area:

* Double-click a Referral cell to open [Referrals for Patient](referrals.html) and view detailed referral information or add/edit referrals. The cell color can be customized in [Definitions: Misc Colors](definitionsmisccolors.html).
* Double-click in the Payor Types cell to open [Payor Types](payortypes.html) and view detailed Payor Type information or add/edit Payor Types.

## Patient Clones

![](images/familyClone.png)

This grid only shows when the selected patient has a [Patient Clone](patientclone.html). It lists the original patient and all associated clones.

## Super Family

![](images/familySuperFam.png)

This grid only shows when the selected patient is part of a [Super Family](superfamily.html). It lists all Super Family members. Customize which fields are shown here in Display Fields, *SuperFamily Grid Columns*

## Insurance Plans

![](images/familyInsArea.png)

The Insurance Plans area displays all insurance plans currently attached to the patient as active coverage. A nearly unlimited amount of plans can be attached (primary, secondary, tertiary, primary medical, secondary medical, etc.) Change the background color of *Subscriber information* in Definitions, Misc Colors. Double-click on any plan to open [Edit Insurance Plan](insplan.html) to view details or make changes.

Double-click on the history grid below the plan details to open [Insurance History](inshistory.html).

To view all plans associated with a family, click the **Add Insurance** dropdown menu, then click **Plans for Family**.

![](images/insPlansForFamily.png)

Double-click a plan to see more details. Dropped insurance plans never get deleted and are always available here for reference.

## Discount Plans

![](images/familyDiscPlan.png)

This area replaces the Insurance Plans area when a [Discount Plan](discountplans.html) has been attached to the patient. Double-click the plan to open [Discount Plan Subscriber Edit](discountplan.html), or change or drop the plan.