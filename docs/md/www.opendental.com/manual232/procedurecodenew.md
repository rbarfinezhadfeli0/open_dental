Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Add Procedure Code

Offices can create additional procedure codes to add non-standard, custom, or foreign procedure codes

In [Procedure Codes](procedurecodes.html), at the lower left, click **+ New**.

![](images/procCodeNew.gif)

Adding Procedure Codes is a way to create non-CDT codes. For example, create codes for supplies the office dispenses (mouthwash, toothpaste), when running a promotion on a procedure, or add codes used in a foreign country. The *Procedure Code Edit* security permission is required.

## Type

![](images/procCodeNewType.png)

Select the **Type** of the new code. Depending on the selection, some fields on the right will automatically populate. These fields can be edited as needed.

## Procedure Fields

Complete each field listed under *Edit these fields for each new code*. These fields are required.

![](images/procCodeNewFields.png)

**Previously Entered Code**: If entering a series of new codes, the code last added will show under for reference.

**Procedure Code**: The new code. Up to 15 numbers, letters, or symbols are allowed. All codes starting with D will be shortened to 5 characters before being included on a insurance [Claim](claimedit.html).

* Users can create multiple procedure codes starting with the same standard D code to differentiate treatment areas, fees, etc. (e.g., D8080.1, D8080.2). When a claim is created, only the standard, 5-digit code, including its description, is used.

**Description**: If this code starts with D and is billed to insurance, the description will show on the claim.

**Abbreviation**: Procedure abbreviation.This is what appears on an appointment in the [Appointments Module](appointments.html) when *Procs* or *ProcsColored* fields are added to an [Appointment View](appointmentviewsetup.html). Limited to 50 characters.

## Additional Options

Select other procedure code options as needed. For more details, see [Procedure Code Edit](procedurecodeedit.html).

![](images/procCodeNewAddtl.png)

**Do not usually bill to insurance**: When checked, the *Do Not Bill to Ins* box is checked by default for this procedure when treatment planned or completed to exclude procedure from insurance claims.

**Is Hygiene Procedure**: Automatically assign the procedure to the hygiene provider when scheduling an appointment with two providers.

**Is Prosthesis**: Additional prosthesis replacement information must be entered for the procedure before sending a claim.

**Paint Type**: Determines how the procedure will be drawn on the [Graphical Tooth Chart](graphicaltoothchart.html).

**Treatment Area**: Determines the surface and tooth options available when charting the procedure.

**Category**: The category under which this procedure code will be organized.

## Add or Close

**Add, then another**: Click to save the procedure code and keep the New Code window open.

**Add**: Click to save the procedure code and close the window.

**Close**: Click to exit the window without saving the procedure code.

The new procedure code will appear in the Procedure Code List under the selected category.