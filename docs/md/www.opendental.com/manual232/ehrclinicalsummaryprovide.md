Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Clinical Summary

On the [EHR Dashboard](ehrdashboard1.html), click **Send clinical summary to Pt**.

![](images/ehrClinicalSummary.gif)

Clinical summaries are after-visit summaries that provide relevant and actionable information and instructions to a patient. This was a measure in stage 1 and stage 2 of EHR, but is no longer a reporting requirement for [EHR Modified Stage 2](../site/ehrmodified2.html).

The Clinical Summaries Sent to Patient grid lists dated log entries of clinical summaries that have been provided to the patient. To preview an xml version of the CCD file, click **Show xml**.

To provide the clinical summary, you have three options:

1. (recommended) Click **To Portal** to automatically send the clinical summary to Patient Portal.
2. Click **Export** to save two clinical summary files (the document and a stylesheet) to a location on your computer.
3. Click **Show xhtml** to preview the clinical summary in a web browser. You can then Print it to paper or as a PDF file to provide to a patient.

![](images/ehrClinicalSummaryExport.gif)

Select and enter the information to include in the clinical summary, then click OK.

* **Visit Date**: Enter a date to limit the information to a specific office visit, or leave blank to include all information for all dates. If a date is entered, procedures, vital signs and encounters with matching dates will show, and care plans for today's date and the future will show.
* **Sections**: Check the boxes next to the information to include. Click All to select all sections; click None to clear all selections. For a detailed explanation of all areas, see [EHR Continuity of Care Document ( CCD )](ehrccd.html). If you uncheck boxes, the heading will show and content will say *none*.
* **Instructions**: Type any instructions.

Select method:

* If **To Portal**: The clinical summary files will be sent to the [Patient Portal Feature](../site/patientportal.html) as a WebMail attachment. A patient email is not required. The provider associated with the clinical summary will be the logged in provider, or, if a provider is not logged in, the patient's primary provider.
* If **Exporting**: Select the location on your computer where the ccd.xml and ccd.xls files will be exported, then click OK. The default location is the first category/folder in the patient's [Imaging Module](images.html). We recommend creating a new Images category in [Definitions](definitions.html) (e.g. EHR Exports) and place it as the first category.
* If **Show xhtml**: The clinical summary will open in a browser window. Click Print.

When a clinical summary is sent to the patient portal, there is no verification that the Patient Portal has been set up or that a patient has been granted access. See [Patient Portal Access](portalaccess.html). The clinical summary is sent to the portal regardless. Once the patient can access the portal, the clinical summary will be available for viewing.