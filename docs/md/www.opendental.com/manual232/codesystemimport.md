Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Importing Code Systems

In the [EHR Setup Window](ehrsetupwindow.html), click **Code Systems Importer**.

![](images/ehrCodeSystemImport.gif)

Several systems for medical and procedural coding can be imported into Open Dental and then attached to patient information. Coding systems allow a consistent way to organize, index, store, and retrieve clinical data between providers and care sites.

Note: Code systems cannot be downloaded when using [Middle Tier](middletier.html). Instead, connect directly to the database.

**Check for Updates**: Click to view a list of code systems available for import.

Columns:

* Code System: The code system name. A description of each is below.
* Current Version: If you have downloaded a coding system, the version downloaded shows.
* Available Version: The latest version of the coding system available to download.
* Download Status: Indicates the status of download and the number of codes imported.

**Keep old descriptions**: Check to retain previously downloaded code descriptions.

**Download Updates**: Highlight the Code Systems to download, then click to begin the download.

* If there are licensing agreements, they are displayed prior to import. Click **OK** to agree to licensing terms and proceed; click [X] to cancel the import.
* It may take a several minutes for the data to download. As the download progresses, the status is shown in the *Download Status* column. When the import is complete, a message will indicate success.

## Available Coding Systems

Currently the following coding systems can be downloaded and are intended for use by U.S. offices only.

| Name | Description | Codes/Database Size | Where used |
| --- | --- | --- | --- |
| CDCREC | CDC Race and Ethnicity Set. | 966 codes < .1 MB | CQMs, demographics |
| CVX |  | 159 codes < .1 MB | vaccine data export |
| HCPCS | Healthcare Common Procedure Coding System | 5,951 codes .5 MB | procedure codes, CQMs |
| [ICD-10](icdcodes.html) | International Classification of Diseases 10th revision | 95,352 codes 5.54 MB | procedures, syndromic surveillance, clinical summaries, summaries of care, claims, CQMs |
| LOINC | Logical Observation Identifiers Names and Codes | 72,624 codes 15.5 MB | CQMs, medical laboratory orders, radiology orders, clinical summaries, summaries of care, syndromic surveillance, vaccines (validation) |
| RxNorm | A normalized naming system for generic and branded drugs. | 391,275 codes 34.9 MB | medications (every medication should be associated with an RxNorm), prescriptions, CQMs |
| SNOMED CT | Systemized Nomenclature of Medication Clinical Terms | 2,720,609 codes 131 MB | problems (every problem should be attached to a SNOMED CT code), CQMs, procedures (medical tab) |
| SOP | Systems of Payment. | 145 codes < .1 MB | CQMs |
| UCUM | Unified Code for Units of Measure. | 557 < .1 MB | CQMs, medical laboratory orders, syndromic surveillance, vaccines |
|  | TOTAL | 97.7 MB |  |

Note:

* [CPT Codes](cptcodes.html) were used with 2011 EHR. They are no longer used and cannot be imported.
* ICD-9 Codes can still be imported but are no longer used. Use ICD-10 Codes instead.