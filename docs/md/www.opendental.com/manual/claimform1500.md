Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

HCFA 1500 Claim Form

Below is an explanation of how each field on the printed HCFA 1500 [Claim Form](claimforms.html) (also known as CMS 1500) is populated for medical claims. Claim Form *1500\_02\_2012* has the most updated fields for HCFA 1500 available in Open Dental, and should be used by most practices.

Some fields require [Medical Insurance](medicalins.html) features to be enabled. If a cell is blank, information is not automatically populated from the database.

Note: Requirements for e-claims are different than requirements for paper claims. Printing a claim does not represent what is sent in an e-claim. Likewise, information sent in an e-claim does not necessarily print on a paper claim.

| # | Field name on form | Where entered |
| --- | --- | --- |
| 1 | Medicare/Medicaid/Tricare/ChampVA/Group Health Plan/FECA Blk Lung/Other | [Edit Patient Information](patientedit.html), Medicaid ID. Note:  * If Medicaid ID is entered for patient, Medicaid # is checked on form. * If no Medicaid ID is entered, and Insurance Filing Code does not equal *Medicaid*, *Champus*, or *Veterans*, then *Group Health Plan* is checked on form. |
| 2 | Patient's Name | Edit Patient Information window, Last Name, First Name. |
| 3 | Patient's Birth Date/Sex | Edit Patient Information window, Birthdate, Gender. |
| 4 | Insurer's Name | Edit Patient Information, Last Name, First Name for patient marked as subscriber on the insurance plan. |
| 5 | Patient's Address | Edit Patient Information window, Address, City, ST, Zip, Home Phone. |
| 6 | Patient's Relationship to Insured | [Insurance Plan](insplan.html) window, Relationship to Patient or Edit [Claim](claimedit.html) window, Relationship. |
| 7 | Insurer's Address | Edit Patient Information window for patient marked as subscriber on the insurance plan. |
| 8 | Reserved for NUCC Use |  |
| 9 | Other Insurer's Name | The subscriber of any secondary insurance plan. Secondary coverage can be changed on Edit Claim window, Other Coverage. |
| 9a | Other Insurer's Policy or Group Number | Edit Insurance Plan window, Group Num (secondary plan). |
| 10a, b, c | Is Patient's Condition Related to | [Edit Claim - General Tab](claimtabgeneral.html), Accident area. |
| 10d | Claim Codes (designated by NUCC) |  |
| 11 | Insurer's Policy Group or FECA Number | Edit Insurance Plan window, Group Num (primary plan). |
| 11a | Insurer's Date of Birth | Edit Patient Information window, Birthdate for patient marked as subscriber on the insurance plan. |
| 11b | Other Claim ID | Edit Insurance Plan window. |
| 11c | Insurance Plan Name or Program Name | Edit Insurance Plan window, Carrier. |
| 11d | Is there another Health Benefit Plan |  |
| 12 | Signed, Date. |  |
| 13 | Authorized Signature. |  |
| 14 | Date of Current Illness, Injury, or Pregnancy | [Edit Claim - Medical Tab](claimmedical.html). Field must be added to form manually. |
| 15 | Other Date | Edit Claim window, Medical tab. Field must be added to form manually. |
| 16 | Dates Patient Unable to Work |  |
| 17, a, b | Name of Referring Provider, NPI | Edit Claim window, General tab, *Claim Referral*. |
| 18 | Hospitalization Dates |  |
| 19 | Additional Claim Information |  |
| 20 | Outside Lab | Edit Claim window, Medical tab. Field must be added to form manually. |
| 21 A-L | Diagnosis of Nature of Illness | [Procedure - Medical Tab](proceduremedical.html), ICD codes. The first 12 unique diagnoses codes in the claim are listed. *ICD Ind* shows 9 if using ICD-9 codes or 0 if using ICD-10 codes. |
| 22 | Resubmission Code, Original Reference Num | [Edit Claim - Misc Tab](claimtabmisc.html), Correction Type, *Original Reference Num*. |
| 23 | Prior Authorization Number | Edit Claim window, Misc tab, *Prior Authorization (rare)*. |
| 24 (supplemental) |  | Supplemental information is filled from various fields. *Drug NDC* from Procedure Info, Medical tab. Narrative from *E-Claim Note* box in Procedure Info. System and Teeth, treatment area of procedure. Limited to 61 characters. |
| 24A | Dates of Service | Edit Claim window, Procedure Info window. |
| 24B | Place of Service | [Procedure - Misc Tab](proceduremisc.html), Place of Service. |
| 24C | EMG | Procedure Info window, Medical tab, *Is Emergency*. *P#IsEmergency* must be added to each procedure line on the claim form to show. |
| 24D | Procedures, Services or Supplies | Procedure Info window, *Procedure* field.  For modifiers, enter these in the Procedure Info window, Medical tab, *Mods*. |
| 24E | Diagnosis Pointer | Letters that correspond to the procedure's diagnoses. Each letter is assigned to the ICD code in box 21. |
| 24F | Charges |  |
| 24G | Days or Units | Procedure Info window, Medical tab, *UnitQuantity*. |
| 24H |  |  |
| 24I | ID Qual | Fixed text *ZZ*. |
| 24J | Rendering Provider ID | NPI Number of treating [Provider](providerseditwindow.html) and Provider Speciality determines taxonomy code unless a *Taxonomy Code Override* is entered. |
| 25 | Federal Tax ID Number, SSN, EIN | Edit Provider window of billing dentist. |
| 26 | Patient Account No. |  |
| 27 | Accept Assignment | Edit Insurance Plan window, *Assignment of Benefits*. |
| 28 | Total Charge |  |
| 29 | Amount Paid |  |
| 30 | Rsvd for NUCC use |  |
| 31 | Signature of Physician, Date |  |
| 32 | Service Facility Location Information | Physical treating address of Practice or Clinic associated with claim. |
| 32, a |  | NPI Number of Billing Provider. |
| 33 | Billing Provider Info & Ph | Billing or Pay To address of Practice or Clinic associated with claim. If no Billing or Pay To address, Physical Treating address is used. |
| 33, a |  | NPI Number of Billing Provider. |