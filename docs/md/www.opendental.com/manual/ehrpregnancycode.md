Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Default Pregnancy Code

Pregnancy codes exclude patients from some [EHR Clinical Quality Measures](ehrcqm.html) (CQMs). The default pregnancy code is used automatically when you exclude a patient from a [EHR Vital Signs](vitalsignsenter.html) BMI exam due to pregnancy. A diagnosis of pregnancy will also be added to the [Problems](problempatient.html) list with a start date equal to exam date, if an active diagnosis already doesn't exist in the list.

* We recommend selecting one of nine SNOMED CT codes that are used in CQMs as exclusion criteria.
* If you choose a code not in the recommended list, or select *none*, you must manually enter pregnancy diagnoses with a qualified code to exclude a patient from CQM calculations.

1. In the [Main Menu](mainmenu.html), click Setup, Chart, [EHR](ehrsetupwindow.html), then click [Settings](ehrsettings.html) in the upper left corner to open the EHR Settings window.
2. In the **Default Pregnancy Diagnosis Code** area, select the code.
   ![](images/ehrpregcode.gif)

   To select a recommended code, click the dropdown and select it.

   * 72892002: Normal pregnancy (finding)
   * 77386006: Patient currently pregnant (finding)
   * 83074005: Unplanned pregnancy (finding)
   * 169560008: Pregnant - urine test confirms (finding)
   * 169563005: Pregnant - on history (finding)
   * 169565003: Pregnant - planned (finding)
   * 237238006: Pregnancy with uncertain dates (finding)
   * 248985009: Presentation of pregnancy (finding)
   * 314204000: Early stage of pregnancy (finding)

   To select a different code (SNOMEDCT, ICD9CM, or ICDD10CM) click the corresponding button, then select the code. Codes must downloaded before they can be selected. See [Importing Coding Systems](codesystemimport.html). You will need to manually enter pregnancy diagnosis with a qualified code to exclude a patient from CQM calculations.

   If you select *none*, you will need to manually enter pregnancy diagnosis with a qualified code to exclude a patient from CQM calculations.
3. Click OK to save selections.

Also see [EHR Default Encounter Code](ehrencountercode.html).