Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Birthday Report and Postcards

Run the Birthdays report to get a list of patients with birthdays in a specified date range and generate postcards.

In [Standard Reports](reportsstandard.html), in the Lists section, click **Birthdays**.

![](images/reportBirthday.png)

The Birthdays report is a list of all active patients (i.e., those with status of Patient only) who have birthdays within a specific date range. Users can also print postcards for each patient with a personalized message. There is also a birthday section in [Laser Labels](laserlabels.html) which prints sheets of labels.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Report Customization

**Date Range:** Select the birthday range to include in the report.

* **Left Arrow**: Click to go back one month. The From and To dates are updated to a date one month prior to the currently entered date range (e.g., if the currently entered range is 08/01/2022 to 10/31/2022, the date range is updated to 07/01/2022 to 09/30/2022)
* **Next Month**: Click to enter dates for the next full month from the current date (e.g., if it is currently August 2024, dates are updated to 09/01/2024 to 09/30/2024).
* **Right Arrow**: Click to go forward one month. The From and To dates are updated to one month after the currently entered dates (e.g., if the currently entered range is 08/01/2022 to 10/31/2022, the date range is updated to 9/01/2022 to 11/30/2022).
* **From / To**: The current date range. Manually type a new date or use the buttons above to change the dates.

**Postcards**: Customize and generate postcards for patients with birthdays in the date range.

* **Message:** Personalize the postcard message. Three unique keywords can be used. These are replaced with patient information on the postcard. Postcard messages have a limit of 465 characters. Characters over 465 are not included on the printed postcard. Changes are immediately reflected when generating a preview.
  + *?FName*: Patient's preferred name. If no preferred name, uses first name.
  + *?AgeOrdinal*: Patient's ordinal age, e.g., 44th, 22nd.
  + *?Age*: Patient's age, e.g., 44, 22.
* **Save Msg**: Click to keep the current message once the report is closed.
* To edit the number of postcards that print on each sheet, see [Setup Recall](recallsetup.html).

## Generate Postcards

Click **Preview** to generate postcard a print preview of birthday postcards. Postcards can be printed from the preview window.

![](images/reportBirthdayPostcard.png)

**Print**: Click to print the generated postcards.

**Left Arrow** / **Right Arrow**: Click to view additional pages of the print preview.

**Close**: Click to exit the postcard preview without printing.

## Generate Report Preview

Click **Report** to generate a list of patients with birthdays in the selected date range. Below is an explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportBirthdayPrint.png)

* **LName**: Patient last name.
* **FName**: Patient first name.
* **Preferred**: Patient preferred name.
* **Address**, **Address2**, **City**, **State**, **Zip**: Patient Address information as entered in [Edit Patient Information](patientedit.html).
* **Birthdate**: Patient birthdate as entered in Edit Patient Information
* **Age**: Age of patient is calculated as of the birthdate in the date range.