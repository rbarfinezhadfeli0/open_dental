Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Incomplete Procedure Notes Report

Use this report to find procedures with an incomplete note or to find incomplete group notes.

In [Standard Reports](reportsstandard.html), in the *Daily* section, click **Incomplete Procedure Notes**.

![](images/reportIncProcNote.gif)

Optionally, this report can include procedures with no note or unsigned notes.

Definitions:

* Incomplete Procedure Note: A procedure with uncompleted quotations in the Notes text (e.g., Due Date ""). Flagged with a red *Incomplete Note* warning above the note.
* Incomplete Auto Notes: Procedures with Auto Notes that have skipped prompts.
* No Procedure Note: The procedure has no text in the Notes box, and all other procedures with the same date also have no note. If a procedure has uncompleted quotations, any other procedure completed the same day, without a note, will be excluded from the list.
* Unsigned Procedure Note: There is a note on the procedure that has not been signed (valid or invalid signature).

Note: To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report filters to update the Incomplete Procedure Notes grid.

![](images/reportIncProcNoteFilters.png)

**Include procedures with no notes on any procedure for the same day**: Check to list patients with completed procedures, on the same day that do not have a note and uncompleted quotations.

**Include procedures with a note that is unsigned**: Check to include procedures with a note but no note signature (valid or invalid).

* If *Include procedures with no notes on any procedure for the same day* is also checked and no note exists in the procedure note field, the Unsigned column will be blank.

**Show Excluded Codes**: Check to include excluded codes in the report. Users can determine which codes to exclude in [Report Setup: Misc Settings](reportmiscsettings.html), *Excluded Codes for Incomplete Procedure Report.*

**Clinics**: Select specific clinics, or check **All (includes hidden)** to include all patients, including those marked hidden.

* Filters by clinic assigned to procedure.
* If user is restricted to specific clinics, only accessible clinics will list. When selecting **All (includes hidden)**, results will also include hidden clinics the user has access to; results do not include clinics user is restricted from or procedures not assigned to a clinic.

**Providers**: Select the providers to include. Ctrl + click to select multiple providers. Check **All** to include all listed providers.

* When a clinic is selected, only providers limited to the clinic will list. See [Provider Edit](providerseditwindow.html), Clinics Tab.
* Filters by provider assigned to procedure (i.e., treating provider).

**Group By**: List results are ordered by completed procedure date and patient name. Select one of the following to group the list by:

* **Procedure** (default): Lists patients by procedure code.
* **Patient**: Groups by patient name (one row per patient).
* **Date and Patient**: Groups by completed procedure date then patient name (one row per patient, per date).

**From / To**: Use the From and To dates dropdown menu to select the end date. Includes patients matching the filter criteria within the selected date range. Defaults to today's date.

## Incomplete Procedure Notes

Click **Refresh** to update report results based on the currently selected filters. The Incomplete Procedure Notes grid will display results matching the filter criteria. Right-click or double-click a row to open the [Chart Module](chart.html) for the selected patient.

Available columns may change based on the filter criteria. Descriptions of each column are below.

![](images/reportIncProcNoteGrid.png)

* **Date**: Procedure date.
* **Patient Name**: Patient last name and first name.
* **Code**: Procedure code associated to the incomplete note. If *Group By* behavior is set to *Patient* or *Date and Patient*, procedure code is listed only when there is a single procedure (i.e., multiple procedure groups will have no codes listed).
* **Description**: Procedure description. If *Group By* behavior is set to *Patient* or *Date and Patient*, a description of "Multiple Procedures" will show if multiple procedures contain incomplete notes.
* **Tth**: Tooth number associated to an individual procedure.
* **Surf**: Tooth surface associated to an individual procedure.
* **Incomplete**: X indicates the note is tagged as incomplete ("") or there is an incomplete auto note (i.e., unanswered prompts). Column only appears when *Include procedures with no notes on any procedure for the same day* or *Include procedures with a note that is unsigned* are checked.
* **No Note**: X indicates a blank procedure note. Column only appears when *Include procedures with no notes on any procedure for the same day* is checked.
* **Unsigned**: X indicates a note that contains no valid signature. Column only appears when *Include procedures with a note that is unsigned* is checked

Right-click or double-click a row to open the selected patient's chart.

## Print / Export

![](images/incompleteProcNotesButtons.png)

**Print**: Click to immediately print the report results.

**Export** : Click to save the report results as a .txt or .xls file.

**Close**: Click to exit the report.