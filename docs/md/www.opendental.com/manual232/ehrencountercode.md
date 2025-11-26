Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Default Encounter Code

Set a default encounter code before your EHR reporting period to automatically generate a [EHR Encounters](ehrencounters.html) (based on the code) every time a procedure is set complete. Encounters affect the denominator of [EHR Clinical Quality Measures](ehrcqm.html). If you do not select a default code (none) no encounters will be created, and CQM values will be zero.

* We recommend selecting one of nine SNOMED CT codes that are used in every CQM, thus increasing the number of encounters eligible for inclusion in CQM calculations.
* If you choose a code not in the recommended list, patients may not be included in CQM calculations if the code does not qualify.
* If you do not select a code at all, CQM values will be zero, though you can manually create encounters or use the [Encounter Code Tool](ehrencountercodetool.html) to automatically generate encounters for a date range.

1. In the main menu, click Setup, Chart, [EHR](ehrsetupwindow.html), then click Settings in the upper left corner to open the [EHR Settings](ehrsettings.html) window.
2. In the **Default Encounter Code** area, select the code.
   ![](images/ehrDefaultEncounterCode.gif)

   To select a recommended code, click the dropdown and select it.

   * 90052600: Initial evaluation and management of healthy individual (procedure)
   * 185349003: Encounter for *check-up* (procedure)
   * 185463005: Visit out of hours (procedure)
   * 185465003: Weekend visit (procedure)
   * 270427003: Patient-initiated encounter (procedure)
   * 270430005: Provider-initiated encounter (procedure)
   * 308335008: Patient encounter procedure (procedure)
   * 390906007: Follow-up encounter (procedure)
   * 406547006: Urgent follow-up (procedure)

   To select a different code (SNOMED CT, CDT, CPT, or HCPCS), click the corresponding button, then select the code. Codes must downloaded before they can be selected. See [Importing Code Systems](codesystemimport.html). Note that if you choose a code not in the recommended list, patients may not be included in CQM calculations if the code does not qualify.

   If you select *none*, [EHR Encounters](ehrencounters.html) will not be automatically generated. You must do it manually.
3. Click OK to save selections.

Only one encounter per date/patient/provider combination will be generated. So if a patient has procedures completed on one day, one by a dentist and one by a hygienist, an encounter will be generated for each provider. Also see [EHR Default Pregnancy Code](ehrpregnancycode.html).