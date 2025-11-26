Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Clone

Patient Clones are a useful feature for practices that have different types of providers who treat the same patient.

![](images/patientCloneToolbar.png)

The tool can be used to create one or more duplicates of the original patient, with data continually synced between patient and clone. For example, a general dentistry office may also provide orthodontic and endodontic treatment.

* Use the original patient record to track general dentistry work.
* Create a patient clone with a specialty of orthodontics to track orthodontic work.
* Create another patient clone with a specialty of endodontics to track endodontic work.

## Turn on Patient Clones

Enable *Patient Clone* in [Show Features](showfeatures.html) to use the feature and see options.

## Patient Clones in the Family Module

Manage patient clones, create new patient clones, and view patient clone relationships in the [Family Module](family.html).

![](images/patientCloneFamily.png)

The original patient is listed in mixed case (e.g., Smith, Jane). Clones are created in all capital letters (e.g., SMITH, JANE).

The Patient Clones grid shows when one or more patient clones exist. The original patient is displayed in red with clones listed below.

## Clone Super Families

By default, patient clones are added to the original patient's family (listed in the Family Members grid). Another option is to place new patient clones in their own family, and associate the clone to the original via [Super Family](superfamily.html). This is useful when offices want to maintain separate financial accounts for each clone (e.g., send separate statements for orthodontic and general dentistry work).

To add a clone to a Super Family, enable the preference, *New patient clones use super family instead of regular family*. Create the clone. A separate Super Family grid displays in the Family Module with the original patient as the Super Family Head and clones as family members.

## Add Patient Clones

In the Family Module, select the original patient from the Family Members. In the toolbar, click **Add** to the right of Clones. The Clone Add window opens.

![](images/patientCloneAdd.png)

Information in the *Patient to Clone* area is read-only and automatically populated with patient data. Select the clone's primary provider, specialty, and clinic.

* **Primary Provider**: Defaults to the provider selected on the patient's Edit Patient Information window. Click the dropdown or **[...]** to change.
* **Specialty**: The clone's specialty. Only specialties not currently in use by another clone for the same patient are available. Options are determined by [Definitions: Clinic Specialties](definitionsclinicspecialties.html). *Unspecified* can only be selected if a clinic in the database has no specialty associated.
* **Clinic**: Only appears when Clinics are enabled in Show Features. The patient's default clinic. Only [Clinics](clinicsetup.html) associated with the selected specialty are available options.

Click **Clone** to create the clone.

## Break Patient-Clone Relationships

To break the relationship between a single patient clone and the original patient:

1. In the Family Module, select the patient clone.
2. Click **Break**.
3. A confirmation message is shown. Click **Yes** to break the relationship.

To break all relationships between the original patient and every patient clone:

1. In the Family Module, select the original patient.
2. Click **Break**.
3. A confirmation message shows. Click **Yes** to break the relationship.

Once the relationship is broken, clones are no longer listed in the Patient Clones grid, but still lists as family members or Super Family members if the clone has not been moved from the family or Super Family.

## Link Duplicate Patients as Clones

If a duplicate account exists for a patient, and the duplicate account should be a patient clone, use the [Merge Patients](mergepatients.html) tool to merge the duplicate account into a new patient clone.

1. On the original account (the account to be kept), create a patient clone (see previous steps).
2. Go to Tools, Misc Tools, Merge Patients.
3. Select the new clone account as the *Patient to merge into* and select the duplicate account as the *Patient to merge from*, then complete the merge.

## Sync Original Patient and Clone

The following information can be synced between the original patient and clones.

|  |  |  |  |
| --- | --- | --- | --- |
| First Name | Last Name | Preferred Name | Middle Initial |
| Responsible Party | Patient Status | Gender | Race |
| Language | SSN | Position | Address, Address 2, City, State, Zip |
| Address Note | Hm, Wireless, Wk, Phones | Email | Text Message OK |
| Billing Type | Fee Schedule | Credit Type | Medicaid ID |
| Medical Urgent Note | Ins Plan Info |  |  |

Patient forms are not synced, however forms already created on the original patient are copied to the cloned patient. Forms created after the clone has been created are separate between the clone and the original patient.

Insurance coverage amounts are not synced (amounts used and benefits available), so insurance estimates may be inaccurate. To ensure both the original and clone reflect updated amounts, whenever an amount changes for one, add [Adjustments to Insurance Benefits](adjinsbenefits.html) to the other.

Note: This may not be an issue if general dental and orthodontic benefits are different and Ortho Lifetime Max and Percentage have been added as [Benefit Information](benefitinfo.html).

Sync Information:

1. In the Family Module, Family Members grid, select the patient or clone.

   Note: If a sync is completed from the clone, all clone names become ALL CAPS, and the original patient name become mixed case (e.g., John L. Smith).
2. In the toolbar, click **Sync**.
   ![](images/patientCloneSync.png)
3. Click **Yes** to continue.
4. A detailed list of synced changes is shown.
   ![](images/patientCloneSynced.png)
5. Click **OK** to close the window. Click **Print** to print a copy of all changes.

## Technical Details

Bridges to other software: Open Dental always sends the information of the original patient to bridged software, not the clone. If, in the bridged software, information is associated with the clone, users may have issues accessing it. We recommend moving all information to the original patient instead.