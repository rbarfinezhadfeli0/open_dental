Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Encounters

Encounters are used to calculate [EHR Clinical Quality Measures](ehrcqm.html). Each time you have an interaction with a patient, an encounter can be created. CQM denominators and numerators take into account eligible encounters. If no encounters are created, your CQM data values will be 0.

To generate encounters, you have three options:

Option 1(Recommended): Generate encounters automatically based on a recommended a default encounter code. Set a default encounter code before your reporting period begins (see [EHR Settings](ehrsettings.html)). When a procedure is set complete, one encounter code will be automatically generated per date/patient/provider combination. There are 9 encounter codes we recommend because they are used in every measure.

Option 2: Generate encounter codes automatically using the Insert Encounter tool. This is usually done if you do not set the default code before the reporting period begins. See [EHR Generate Encounter Codes](ehrencountercodetool.html).

Option 3: Manually create encounters with a qualified code specific to each CQM measure.

## Add an encounter manually

1. On the [EHR Dashboard](ehrdashboard1.html), click **Encounters**.
   ![](images/ehrEncounters.gif)

   All encounters will list, both automatically and manually created.
2. Click Add.
   ![](images/ehrEncounterInfo.gif)
3. Enter the encounter information and click OK.
   * **Date**: The date of the encounter.
   * **Provider**: The provider associated with the encounter.
   * **Code**: Select a qualified code for the CQM measure. Click SNOMED CT, HCPCS, or CPT to select from an imported code system, or CDT to select a CDT code. Once selected, the code system and description will show. See [SNOMED CT Codes](snomedct.html) and [CPT Codes](cptcodes.html).
   * **Note**: Notes about the encounter.