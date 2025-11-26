Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Dashboard

The EHR dashboard is a central location for entering patient data for EHR meaningful use reporting. During a patient visit, open the dashboard to quickly enter data for objectives and measures. You can also view reports for a specific provider and reporting period.

Note: Beginning with the EHR reporting period in Calendar Year 2019, participants in the Promoting Interoperability (PI) Programs are required to use 2015 edition certified electronic health record technology (CEHRT). Open Dental has decided not to develop a certified 2015 edition software.

Select a patient. In the [Chart Module](chart.html), click EHR.

![](images/ehrdashboardM2.gif)

There are three different dashboards options, each based on the current setting for stage of meaningful use. See [Setting your Meaningful Use Stage](ehrmustagesetting.html).

**Provider for this patient**: The patient's primary provider. For reporting purposes, it should be a provider with an EHR Annual Provider Key.

**Provider logged on**: The provider/user currently logged on to Open Dental.

**"" for this patient**: An indicator of patient data that needs to be entered. As you enter data that meets MU criteria, the rows may turn green.

* Measure Type: The measure / objective / task.
* Details: Briefly identifies entered or missing information.
* Click to Take Action: Click in the cell to enter data. For measures that do not require calculation, click **Edit Explanation** to type information for your own record keeping.
  ![](images/ehrdashboardExplain.gif)
* Related Actions: Click in the cell to enter data for actions related to the measure.

Note: Do not rely on this grid to track your MU progress; it is merely a guide. This grid does not take into account date ranges or per-patient rules.

## Reports and Percentages

To generate reports that track meaningful use progress and to use for EHR attestation, use the two buttons in the upper right.

**Measure Calc:** Generate a report of measure percentages. The report will include denominators, numerators, and percentages for a specific provider and reporting period. See [Measure Reports](ehrmeasures.html).

**Quality Meas:** Generate a report that details clinical quality measure (CQM) percentages. The report will include denominators, numerators, and percentages for a specific provider and reporting period. See [Reporting CQMs](ehrcqmreport.html).

## Other Buttons

**Hash / Encryption**: Only included for 2011 certification.

**Vaccines**: Click to enter immunizations administered to patients and export the data as an HL7 XVU message. Since vaccines are typically outside the scope of dental practices, providers may qualify for an exclusion.

CQM related:

* **Encounters**: View the encounters used for CQM denominators. These can be automatically generated using default encounter codes or manually added/edited.
* **Interventions**: View interventions that have been documented (these affect the numerator of some CQMs). These are usually documented when entering patient vital signs or smoking status, but can also be manually added/edited.
* **Not Performed**: Document and view reasons an intervention or action was not performed.

**Edit Events**: Edit the date of measure events. The *EHR Measure Event Edit* permission is required.

**Care Plans**: Treatment plan guidance for another provider.

**Clinical Summ**: Open the Clinical Summary window to generate clinical summaries.

**Patient List**: [Generating a Patient List](ehrpatientlistgenerate.html).

**Labs/Rads**: Access, edit or delete CPOE laboratory and radiology orders entered using Open Dental EHR's 2011 edition.