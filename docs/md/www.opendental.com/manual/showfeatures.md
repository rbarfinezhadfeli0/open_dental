Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Show Features

Some features can be hidden or displayed based on the preference of the practice.

In the [Main Menu](mainmenu.html), click Setup, Advanced Setup, **Show Features**.

![](images/showFeatures.png)

Settings here will affect all computers using the same database.

Check a feature to turn it on. Uncheck a feature to turn it off. Click **OK** to save settings.

Charge Tools: Determine which tools are enabled that may create charges on patient accounts.

* Only one of the following tools may be enabled:

+ **Billing/Finance Charges**: Enable [Billing/Finance Charges](financecharges.html). Use to charge late fees on balances aged over 30, 60, or 90 days past due.
+ **Late Charges**: Enable [Late Charges](latecharges.html). Use to charge late fees on unpaid balances billed out on statements sent in a specific time frame.

* **Repeating Charges**: Enable [Repeating Charges](repeatingcharges.html).

Enterprise: These settings pertain specifically to enterprise users.

* **Clinics**: Turn on [Clinics](clinics.html) (i.e., when there are multiple locations).
  + A password is required to enable or disable Clinics in order to prevent accidental changes. The password is *abracadabra*.
  + If Clinics is turned off while using eServices, the following prompt will appear. Click Yes to continue. After turning Clinics on or off, restart the eConnector and review the [Signup Portal](eservicessignup.html).
  ![](images/clinicsturnoff.png)
* **Enterprise Setup**: Check to show Enterprise categories in [Preferences](preferences.html).
* **ERA Control ID Filter**: Allows [ERA](claimsERA835.html) window to be filtered by Control ID.

Family Module: These settings pertain specifically to the [Family Module](family.html).

* **Patient Clone**: Turn on [Patient Clones](patientclone.html). Useful for orthodontist offices who want to track production and income separately.
* **Super Families**: Turn on the [Super Family](superfamily.html) feature.

General: These settings affect various areas.

* **Reactivation List**: Enable the [Reactivation List](recalllistreactivation.html). A Reactivation tab will show in the Recall List and a setup window will be available under Setup, Appointments.

Insurance: These settings pertain specifically to insurance plans.

* **Capitation**: Show [Capitation Insurance Plans](plancapitation.html) as an insurance type option on the [Insurance Plan](insplan.html).
* **Medicaid**: Show the following fields:
  + Medicaid ID and State fields on the [Edit Patient Information](patientedit.html). Validation for these fields can also be set in [Required Fields](requiredfields.html).
  + BillingType1 and BillingType2 fields on the [Procedure - Misc Tab](proceduremisc.html). BillingType fields can then be manually set per procedure in order to flag procedures for inclusion in custom reports.
  + Alternate Code checkbox on the Edit Insurance Plan window.
* **Medical Insurance**: Turn on [Medical Insurance](medicalins.html) features.
* **Use Insurance**: Show insurance information in the Family Module and insurance estimates in the Treatment Plan Module.

Special Use Only: These settings are only useful for specific scenarios.

* **Basic Modules Only**: Only show the Appointments, Family, Account, and Chart modules.
* **Clinical (computers in operatories)**: When unchecked, the Chart Module toolbar button changes to Procs, procedures can only be treatment planned or completed for billing, and the Diagnosis/Prognosis panels are hidden. To also remove the Patient Info panel, edit the [Chart Layout](layout.html) sheet.
* **Dental Schools**: Turn on [Dental Schools](dentalschools.html).
* **EHR**: Turn on EHR features ([EHR Modified Stage 2](../site/ehrmodified2.html)).
* **Hospitals**: Show *Print Day for Hospital* option when a user right-clicks on the Progress Notes in the Chart Module. This option will print only completed procedures, a photo of the patient (if available), and a signature line at the bottom for staff to sign. This printout is intended to go in the physical chart.
* **Public Health**: Turn on [Public Health](publichealth.html) features.