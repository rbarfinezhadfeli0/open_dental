Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Procedure Code Tools

Use Procedure Code Tools to update to the latest CDT codes and more.

In [Procedure Codes](procedurecodes.html), at the lower left, click **Tools**.

![](images/procedureCodeTools.png)

Procedure Code Tools should be run in the following situations:

* Immediately after updating to the full version from the trial version. The trial version comes with T (temp) codes instead of D codes. Check all boxes to remove the T codes, add missing D and N codes, and reset defaults. See [Update to Full Version](updatefullversion.html).
* To reset default auto codes, recall types, procedure buttons, and/or appt proc quick add procedures.
* To update to the ADA CDT Codes each calendar year.

Note: Use caution when selecting and running tools as to not accidentally reset customized Auto Codes, Procedure Buttons, Appt Proc Quick Adds, or Recall Types. The [Security Admin](permissionssecurityadmin.html) and *Procedure Code Edit* [Permissions](permissions.html) are required to run Procedure Code Tools.

Check the box next to the tools to run. Uncheck a box to deselect a tool.

* **T codes**: Remove all temp codes (T) that were installed with the Trial version.
* **N codes**: Add missing no-fee procedure codes.
* **D codes**: Add missing ADA CDT codes and set descriptions to the defaults. For Canadian offices, adds or updates Canadian codes. Add abbreviations for codes where the abbreviation is currently blank.

  Note: New CDT codes are periodically released by the American Dental Association and generally released in Open Dental version updates at the beginning of the appropriate year. CDT codes are only available for distribution in the U.S.
  + 2024 CDT Codes: Version 23.2.27 or greater. If the 2019 claim form was the default or was set in insurance plans, the default and corresponding insurance plans are automatically updated to 2024.
  + 2023 CDT Codes: Version 22.2.43 or 22.3.14 or greater.
   When updating to a version above, old codes no longer in use by the ADA are automatically moved to the Obsolete category.
  ![](images/YouTube_PlayButton_15px.png)See our video:[QuickTip: How to Update CDT Codes](https://youtu.be/6BkLSTcTyjE)
* **Auto Codes**: Delete all existing [Auto Codes](autocode.html) and reset to default. Procedure buttons will be dissociated from the deleted auto codes.
* **Procedure Buttons**: Delete all existing [Procedure Buttons](procedurebuttons.html) and reset to default.
* **Appt Procs Quick Add**: Delete all existing [Appt Procs Quick Adds](definitionsapptquickadd.html) and reset to default. Reset the list of Quick Add procedures on the [Edit Appointment](aptedit.html) to defaults.
* **Recall Types**: Delete all existing [Recall Types](recalltypes.html) and triggers and reset to default. Any trigger T codes will be replaced with D codes.

**Run Now**: Click to run all selected tools. A message indicates when updates are done.

## Troubleshooting

![](images/dCodes.png)

**I get the message above when attempting to run the D Codes.**

Solution: This message appears when running the D Code tool prior to the 1st of the new year. Claims may be rejected if new procedure codes are sent before they take affect. Click **Yes** to continue importing the new codes, or **No** to cancel.