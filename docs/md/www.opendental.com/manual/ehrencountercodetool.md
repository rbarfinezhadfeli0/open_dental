Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Generate Encounter Codes

If you do not set a default encounter code, your [EHR Clinical Quality Measures](ehrcqm.html) (CQM) encounters will be zero. To automatically generate encounters based on completed procedures, use the *Insert Encs* tool.

Note: We recommend setting a default encounter code before you start a reporting period so CQM encounters are created every time you complete a procedure. See [EHR Default Encounter Code](ehrencountercode.html).

1. In the [Main Menu](mainmenu.html), click Setup, Chart, [EHR](ehrsetupwindow.html), then click [Settings](ehrsettings.html) in the upper left corner.
   ![](images/ehrSettings.gif)
2. Click **Insert Encs**.
   ![](images/ehrInsertEncs.gif)
3. Enter a start and end date for the date range.
4. Click **Run**.
   ![](images/ehrEncountersInsterted.gif)

   You will see a note of the number of encounters inserted and your CQM denominators will be changed.