Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Patient Export

This EHR Patient Export tool is useful when users want to export a summary of a patient's health information as an xml file.

In [Standard Reports](reportsstandard.html), click **EHR Pat Export**.

![](images/reportsEHRExport.gif)

The EHR Patient Export button is only availabe if EHR is enabled in [Show Features](showfeatures.html).

## Filters

Input or select filter criteria to update search results.

**First Name**: Type a patient's first name to limit results. Does not need to be the full name (e.g., "Max" will include results for "Maxwell")

**Last Name**: Type a patient's last name. Does not need to be the full name.

**Patnum**: Type a patient's PatNum, see [Edit Patient Information](patientedit.html). Does not need to be a full PatNum (e.g., "187" will include results for "1187", "1872", etc)

**Primary Provider**: Select a provider from the dropdown. Select **All** to include patients with any assigned primary provider, including those marked hidden.

**Clinic**: Select a [Clinic](clinicsetup.html) to only include patients assigned to the selected clinic. Select **All** to include patients assigned to any clinic or unassigned to a clinic.

**Site**: Select a [Site](sites.html) to only inlcude patients assigned to the selected site. Select All to include patients assigned to any site and those assigned to no site. See [Edit Patient Information: Public Health Tab](patienteditpublichealth.html).

## Patient Export List

Click **Search** to update the Patient Export List grid based on the search criteria.

Patient Export List: Lists patients who meet the entered search criteria. Results only include records with a Status of *Patient* (not Inactive, NonPatient, etc) set in Edit Patient Information. Below is a description of each column in the grid:

* **PatNum**: Automatically Patient Number.
* **Patient Name**: Patient last name and first name.
* **Primary Provider**: Patient's assigned Primary Provider in Edit Patient Information
* **Clinic**: Patient's assigned clinic in Edit Patient Information.
* **Site**: Patient's assigned site in Edit Patient Information, Public Health tab.

## Export Selected

Click a row to select a patient. Click and drag, Ctrl+click to select multiple records; click **Select All** to select all patients in the list.

Click **Export Selected** to export records for all selected (highlighted) patients.

* If necessary system information is missing (e.g., code systems, provider NPI, etc), a warning will appear and data will not be exported.
![](images/ehrExportWarning.png)* Users will be prompted to select a folder to export files to. Once export is complete, a popup will appear to advise files were exported.
* Patients may be skipped due to missing information. If there are any errors exporting patients, the exported message will list any patients that were skipped. See the [EHR Dashboard](ehrdashboard1.html) to fill in missing information.
* Exported files are saved in XML format to a folder with the export date (e.g., 2022\_8\_15 is a folder created on August 15, 2022). Each file is named using Last Name, First Name and PatNum (e.g., Smith\_John\_1524).