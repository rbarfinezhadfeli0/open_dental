Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Settings

In the [Main Menu](mainmenu.html), click Setup, [Chart](chart.html), [EHR](ehrsetupwindow.html), then click **Settings** in the upper left corner.

![](images/ehrSettings.gif)

EHR settings include meaningful use (MU) stage options, drug interaction severity levels, and default encounter and pregnancy diagnosis codes used in CQMs. These settings should be defined prior to entering patient data for MU.

## Global Settings

**Only show high significance Rx alerts**: Determine whether less severe [Rx / Prescription Alert](rxinteractionchecks.html) show when writing paper prescriptions in Open Dental. High significance alerts always show.

* Check the box to only show severe/high significance alerts.
* Uncheck the box to show all alerts, regardless of severity level.

**Automatically send Summary of Care webmails**: Determines if [Secure WebMail Feature](securewebmail.html) about summaries of care are automatically sent to patients when a referral is made to another provider.

* Check the box to automatically send patients a summary of care WebMail when a referral to another provider is made.
* Uncheck the box to not send patients an automatic summary of care WebMail when a referral is made.

Select the stage of meaningful use to apply to provider's whose EHR Meaningful Use setting is *Use Global* ([Provider](providerseditwindow.html)). Stage determines which measures list on the EHR dashboard and in Measure Reports. There are three options:

![](images/ehrSettingsMU.gif)

[Modified Stage 2](../site/ehrmodified2.html) (this should be the setting for all providers entering meaningful use data.)

Stage 1 and Stage 2 can be used for historical information.

## Default Encounter Code

By setting a default encounter code, you ensure that an [Encounter](ehrencounters.html) (based on the code) is automatically generated every time a procedure is set complete. Only one encounter per date/patient/provider combination will be generated. So if a patient has procedures completed on one day, one by a dentist and one by a hygienist, an encounter will be generated for each provider.

You are not limited to the recommended codes and can choose your own SNOMED CT codes, [CDT](procedurecodetools.html) codes, CPT Codes or HCPCS code. However, if you choose a code not in the recommended list, patients may not be included in CQM calculations if the code does not qualify. If you do not select a code at all, encounters must be manually created in order to affect CQM calculations.

Recommended Codes: These 9 SNOMED CT codes are used in every CQM. Click the dropdown to select. A description will show.

* none: Encounters will NOT be automatically generated.
* 90052600: Initial evaluation and management of healthy individual (procedure)
* 185349003: Encounter for check-up (procedure)
* 185463005: Visit out of hours (procedure)
* 185465003: Weekend visit (procedure)
* 270427003: Patient-initiated encounter (procedure)
* 270430005: Provider-initiated encounter (procedure)
* 308335008: Patient encounter procedure (procedure)
* 390906007: Follow-up encounter (procedure)
* 406547006: Urgent follow-up (procedure)

**Insert Encs**: Generate encounters for a code for a date range. For example, you would generate codes if you did not select an encounter code before your reporting period. See [Generating Encounter Codes](ehrencountercodetool.html).

## Default Pregnancy Diagnosis Code

**Pregnancy codes exclude patients from some Clinical Quality Measures (CQMs).** The default pregnancy code is used automatically when you exclude a patient from a vital signs BMI exam due to pregnancy. A diagnosis of pregnancy will also be added to the patient's list of problems with a start date equal to exam date, if an active diagnosis already doesn't exist in the list.

You are not limited to the recommended codes and can choose your own SNOMED CT, ICD-9-CM, or ICD-10-CM code. However, if you choose a code not in the recommended list, or choose no code at all, you must manually enter pregnancy diagnosis with a qualified code to exclude a patient from CQM calculations.

Recommended Codes: These 9 SNOMED CT codes are used in CQMs. Click the dropdown to select. A description will show.

* none: Pregnancy codes will NOT be automatically generated
* 72892002: Normal pregnancy (finding)
* 77386006: Patient currently pregnant (finding)
* 83074005: Unplanned pregnancy (finding)
* 169560008: Pregnant - urine test confirms (finding)
* 169563005: Pregnant - on history (finding)
* 169565003: Pregnant - planned (finding)
* 237238006: Pregnancy with uncertain dates (finding)
* 248985009: Presentation of pregnancy (finding)
* 314204000: Early stage of pregnancy (finding)