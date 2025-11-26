Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Capitation Utilization Report

For practices using Capitation Insurance Plans, run the Capitation Utilization Report to see all procedures performed for capitation patients in a date range.

In [Standard Reports](reportsstandard.html), in the *Monthly* section, click **Capitation Utilization**.

![](images/reportCapitation.png)

This report is only useful for practices using [Capitation Insurance Plans](plancapitation.html).

Note: To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report criteria before running the report.

**Enter a few letters of the insurance carrier:** Enter a carrier name to filter the report for a specific carrier. At least one letter must be entered to run the report; a full carrier name is not required. Only carriers with names including the matching text are included; the full carrier name is considered (e.g., if "Med" is entered both MedDent Insurance and NC Medicaid are included on the report).

**From Date / To Date:** Enter the report date range. The current month is the default. Applies to procedure completed date.

## Report Preview

Click **OK** to generate a print preview the report. Procedures marked *do not bill insurance* are not included on the report. The following is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportCapitationPrint.png)

* **Carrier**: Insurance carrier. Subsequent blank lines below the carrier name, indicate those rows apply to the same carrier.
* **Subscriber**: Insurance plan subscriber. Subsequent blank lines below the subscriber name, indicate those rows apply to the same subscriber.
* **Subsc SSN**: Insurance plan subscriber social security number. Subsequent blank lines below the subscriber SSN, indicate those rows apply to the same SSN.
* **Patient**: Patient associated to the completed procedure.
* **Pat DOB**: Patient date of birth.
* **Code**: Procedure code.
* **Proc Description**: Procedure description.
* **Tth**: Tooth number associated to the completed procedure.
* **Surf**: Tooth surfaces associated with the completed procedure.
* **Date**: Procedure date.
* **UCR Fee**: Usual and customary rate fee (e.g., office fee). UCR fees are prioritized in the following order, including any [Fee Override for Provider or Clinic](procedurefeeoverrides.html):
  1. Patient fee schedule override. See [Edit Patient Information](patientedit.html).
  2. The treating provider's fee schedule. See [Edit Provider](providerseditwindow.html).
* **Co-Pay**: If a co-pay fee schedule is assigned to the insurance plan, this is the amount from the co-pay fee schedule (i.e., patient responsibility).