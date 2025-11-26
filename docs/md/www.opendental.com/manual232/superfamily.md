Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Super Family

In the [Family Module](family.html), super families can be used to group patients that are related in some way.

![](images/superfamily.png)

For example, a super family could consist of all patients in a particular nursing home, a split family due to divorce, or members of an athletic team getting mouthguards. Families can be billed individually or super statements can be created that include the account activity for all super family members.

The guarantor of the first family added to a super family is considered the super head. This family is listed first in the Family Module, Super Family grid in bold red.

* To quickly switch between families or patients, click on a name.
* The sort order of families is determined by the *Super family sorting strategy* preference.
* If a family's guarantor is included in super family billing, an X shows in the Stmt column.
* To add the name of the super head to the Patient Information area, add *Super Head* to Fields Showing in [Display Fields](displayfields.html), PatientInformation.

## Turn on Super Families

To use this feature, enable Super Families in [Show Features](showfeatures.html) and restart Open Dental. The following options will then be available in the Open Dental interface.

* Family Module toolbar, Super Family buttons (Add, Remove, Disband).
* [Edit Patient Information](patientedit.html), Included in Super Family Billing checkbox.
* [Statement Window](statementwindow.html), Send to Super Family checkbox.
* [Billing](billing.html), Group by Super Family checkbox.

Review and set default options in [Preferences](preferences.html):

* *Super family sorting strategy*.
* *Allow syncing patient information to all super family members*.
* *Copy the super guarantor's primary insurance to all new super family members*.
* *New patient clones use super family instead of regular family*.

## Create a Super Family

To create a super family, first add the super head, then add other families.

Create the Super Family:

1. Select the patient (guarantor) who will be the super head.
2. In the Family Module toolbar, click **SuperFamily: Add**.
   * When first clicked, all family members of the super head will list in a new Super Family section (in bold red).

Add family members to the Super Family:

1. Click **Super Family: Add**. The Select Patient window will open.
2. Select the patient.
3. If the *Copy the super guarantor's primary insurance to all new super family members* preference is enabled, a message will show.
   * Click Yes to copy the super head's primary insurance plan to the each patient in the new family. For each copied plan the following will occur:
     + The patient's Medicaid ID will be used as the Subscriber ID. If there is no Medicaid ID entered, a prompt to enter the subscriber ID on the [Insurance Plan](insplan.html) will display.
     + The default Relationship to Subscriber will be set to *Self*.
     + If the patient has no other insurance, the plan will added as the primary insurance (order = 1). If other plans are entered, the plan will be given then next available order number (order = 2, 3, etc).
   * Click No to add the family without copying insurance plans.
4. The patient will be added to the super family.

## Super Family Statements / Invoices

Statements and invoices can be sent to each family guarantor, or create super statements or invoices that are addressed to the super head, include account activity for all patients in the super family, and are grouped by the family guarantor.

Note: To be included in a super statement or invoice, each guarantor of a family must have *Included in Super Family Billing* checked on the Edit Patient Information window.

Create a single super statement:

1. Select any patient in the super family.
2. From the [Account Module](account.html), click the Statement dropdown, **More Options**. See [Statement Window](statementwindow.html).
3. Select **Send to Super Family**.
4. Select other options as needed.
5. Click **Print**, **Email** or **OK** to generate.

Create a super statement using the billing list:

1. In the [Manage Module](manage.html), click **Billing**. See [Billing](billing.html).
2. Check the **Group by Super Family** box.
3. Click **Create List**. Only the super head will have a statement generated.
4. Click **Print**, **Email** or **OK** to generate.

Create a super invoice:

1. Select any patient in the super family.
2. From the Account Module, click the Statement dropdown, **Invoice**. See [Invoice](invoice.html).
3. Select the procedures, payment plan debits, and adjustments.
4. Select **Send to Super Family**.
5. Select other options as needed.
6. Click **Print**, **Email** or **OK** to generate.

All patients included in a super statement or invoice will have a statement entry added in their patient account ledger.

## Remove a Patient/Family

To remove a patient/family from a super family, click on their name, then click **Remove**. The screen will switch to the removed guarantor's record. Any super statements generated for patients in the removed super family will no longer show in their patient account ledger.

## Disband a Super Family

Disbanding a super family removes the relationship between all members of super family. A confirmation message will show to verify the removal. Any super statements generated for disbanded family members will no longer show in their patient account ledger.

## Turn off Super Families

If super families are turned off in Show Features, but patients are left in a super family, there is no way to disband them. Only turn off super families when all super families have been disbanded,