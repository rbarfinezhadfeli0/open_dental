Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Procedure Codes - Fee Schedules Report

Print or export procedure codes and fees using the Procedure Codes - Fee Schedules report.

In [Standard Reports](reportsstandard.html), in the List section, click **Procedure Codes - Fee Schedules**.

![](images/reportProcedureCodes.png)

The Procedure Codes - Fee Schedule report prints procedure fees by fee schedule. If clinic and/or provider-specific fees have been entered, a report of the fees that differ by provider/clinic can also be printed.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

**Fee schedule**: Select a fee schedule to print or export.

**Clinic**: Select a clinic to view only clinic overrides for the selected fee schedule. Select *Default* to view the Global fees (i.e., no clinic overrides).

**Provider**: Select a provider to view only provider overrides for the selected fee schedule. Select *Default* view the Global fees (i.e., no provider overrides).

Note: The Provider and Clinic options reflect the [Provider or Clinic Fee Overrides](procedurefeeoverrides.html) in the [Procedure Codes](procedurecodes.html) List. Choosing both a provider and clinic shows only fee overrides for that provider and clinic combination.

**Show blank fees:** Check to include procedure codes with no fees entered for the selected fee schedule and clinic/provider combination.

Report sorting behavior:

* **Code**: Sort the report by procedure code. Codes in hidden categories are included.
* **Categories**: Group the report by procedure code category. Codes in hidden categories are not included.

## Report Preview

After selecting the report criteria, click **OK** to generate a print preview of the report. The following are examples of the report and explanation of the report columns.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

**Example 1**: Global fee schedule by Category

![](images/reportProcedureCodePrintGlobal.png)

**Example 2**: Clinic fee overrides by Code

![](images/reportProcedureCodePrintClinic.png)

**Example 3:** Clinic and Provider fee overrides by Code

![](images/reportProcedureCodePrintClinicProv.png)

Some columns may change depending on the selected report sorting behavior.

* **Category**: Procedure code category. Only appears when report is sorted by *Categories*. The category name appears once for each category grouping.
* **Code**: Procedure code.
* **Desc**: Procedure code description.
* **Abbr**: Procedure code abbreviation.
* **Fee**: Procedure fee from the selected fee schedule and provider/clinic combination.