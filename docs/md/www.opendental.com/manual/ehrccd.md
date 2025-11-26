Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Continuity of Care Document (CCD)

A Continuity of Care Document (CCD) is a health record document standard used by United States offices to share patient health information electronically.

In the [Chart Module](chart.html), click **CCD**.

![](images/ccd.png)

* **Show and Print**: Click to view the CCD or print. The Summary of Care window opens See below for details.
* **Export to File**: Click to export the CCD as an XML and XSL file. Both files export to the location selected by the user.
* **Optional Instructions for Patients to show on CCD**: Enter any notes for the patient. These show in the Instructions section on the printed CCD.

Note: If the patient's associated Problems do not have SNOMED CT codes attached, a warning displays. Problems must have SNOMED CT codes attached to display on the CCD.

## Summary of Care

The Continuity of Care Document opens in the Summary of Care window. From here, it can be printed for the patient or exported to send to another provider.

![](images/ccdSummary.png)

* **Show XML**: Display the XML in a separate window.
* **Print**: Print the CCD.

Patients can also view their Summary of Care in the [Patient Portal](portalpatientsees.html). For this to show for patients, the office must have [SNOMED CT Codes](snomedct.html) and CVX codes downloaded (see [Importing Code Systems](codesystemimport.html)), as well as have *ModuleCareSummary* checked in [Patient Portal Settings](portalsettings.html).

To automatically export CCDs to a folder, see [HIE Setup](hiesetup.html).

## Details

The following information shows on a CCD.

* **Patient Information**: Name, Birthday, Ethnicity, Language, Sex and Race are set on the [Edit Patient Information](patientedit.html).
* **Table of Contents**: Click a link to quickly jump to a category.
* **Allergies and Adverse Reactions**: Medication allergies only show if, in the [Allergy List](allergiesmaster.html),
  1. The allergy is associated with a medication that has an [RxNorm](rxnorms.html), and
  2. The Allergy Type is *AdverseReactionsToDrug*, *DrugAllergy*, or *DrugIntolerance*. Otherwise, the allergy is treated as an ingredient allergy (e.g. peanuts, latex), and only shows if it has a UNII code.
* **Encounters**: A list of [EHR Encounters](ehrencounters.html).
* **Functional Status**: A list of patient [Problems](problempatient.html) that have a Problem Type of *Problem* and a Functional Status of *CognitiveResult*, *CognitiveProblem*, *FunctionalResult*, or *Functional Problem*. This is defined on the Edit Problem window (on the Medical window, double click a problem in the patient's list, see [Medical](medical.html)).
* **Immunizations**: A list of all [EHR Vaccine Data](ehrvaccine.html) entered.
* **Instructions**: Clinical Summaries only. Shows information entered as Instructions when a clinical summary is generated.
* **Medications**: A list of all medications in the [Medications](medicationspatient.html) list (inactive and active).
* **Care Plan**: A list of care plans entered on the Care Plan window.
* **Problems**: All problems in the patient's Problem List (inactive and active), that have a Problem Type of *Problem* and a Functional Status of *Problem*.
* **Procedures**: All procedures in the patient account which are not treatment planned and not referred out, including completed and existing procedures. The code and description that shows on the CCD is the Proc Code and Description as entered on the [Procedure Code](procedurecodeedit.html).
  + If the Proc Code is a CDT code, the CDT code and description show. These cannot be edited.
  + If the Proc Code is a SNOMED CT (see [SNOMED CT Codes](snomedct.html)), the SNOMED CT code and official description (not necessarily from the Procedure Code List) show. These codes must be manually added to the Procedure Code List. See [Add Procedure Code](procedurecodenew.html).
  + If the Proc Code is a five digit number (CPT code), then the CPT code and description show. These codes must be manually added to the Procedure Code List.
  + If no code is specified, then the procedure exports without a code as required.

  Any cross coding in the Procedure Code List does not affect the CCD (e.g. medical codes, alternate codes).

  If any procedure has a SNOMED CT Body Site entered on the [Procedure - Medical Tab](proceduremedical.html), an additional Body Site column shows under Procedures on the CCD. If no body site is entered, this column is hidden.
* **Reason for Referral**: This content changes based on which document is being generated/sent. The text cannot be edited.
* **Diagnostic Results**: A list of Lab Results that specify Test Performed LOINC.
* **Social History**: Includes the patient's smoking status and pregnancy information.
* **Vital Signs**: A log of all vital signs entered for this patient.
* **Author**: The patient's primary provider (selected on Patient Edit window) and [Practice](practice.html) contact information.
* **Custodian**: The NPI of the Practice's default provider and the practice address and contact information. For practices with a single provider, this is the same as the author. For [Clinics](clinics.html), this is probably the NPI of the organization instead of a person.
* **Legal Authenticator**: Only shows when the Practice's default provider is a person. Includes the NPI of the default provider and the practice address and contact information.

## EHR

In [EHR Modified Stage 2](../site/ehrmodified2.html), the second measure of the objective [Patient Electronic Access](../site/ehreaccess.html) states that at least one patient must (or authorized representatives) use the [Patient Portal](portalhostedbyod.html) to view, download or transmit to a third party their health information. In 2015, this is a requirement only for providers who would have attested to Stage 2 in 2015.