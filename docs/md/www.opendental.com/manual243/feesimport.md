Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Fees Import

Fees can be imported into fee schedules (e.g., if insurance sends a new fee schedule).

In [Fee Tools](feescheduletools.html), at the lower left, is an **Import** button.

![](images/feeScheduleImport.png)

![](images/YouTube_PlayButton_15px.png) See our video: [Updating Your UCR (Office) Fees](https://youtu.be/eE8YXP4G3bo).

For fees to import, the corresponding code must already exist in the [Procedure Codes](procedurecodes.html) list.

Note: Importing codes and fees does not automatically add codes. See [Add Procedure Code](procedurecodenew.html) for instructions on creating new procedure codes.

Usually, it is easiest to manually enter or edit fees in a fee schedule instead of importing it (create the fee schedule, nine-key in the fees). Often the fee schedules provided to offices have no standard format. Thus, taking a PDF, printed fee schedule, or custom formatted fee list and editing it for import can be difficult. Large offices may have IT staff handle fee schedule importing, but in general, importing fees is a technical process and an advanced feature.

**File Format Requirements**: Fees must be saved as a tab-delimited file (text file is preferred). To see an example of the correct file format, [Export Fees](feesexport.html). When opened with Notepad, it looks similar to the screenshot shown below:
![](images/feeSchedFormat.png)

* The first column of the imported file must contain the procedure code; the second column must contain the fee with no monetary symbols or extra characters/spaces. Decimals are not considered extra characters.
* Columns must be separated by tab.
* Columns containing additional information (e.g., abbreviation or description) are not required and are ignored during import.
* Fee sort order does not matter.
* Close the file before importing the fees.

Note: To only make changes to a few fees, create a tab-delimited text file that only contains those codes and fees, then import it. Only those codes are updated.

To import fees into an existing fee schedule:

1. Make a backup copy of the existing fees as a preventative measure. See [Fees Copy](feeschedulecopy.html) for detailed instructions.
2. Import the fees into the original fee schedule.

1. In the Fee Tools window, under the *Select Fees* section, select the fee schedule to import into.

* Selecting only a fee schedule will export the default (i.e., global) fee schedule.
* Select a Provider and/or Clinic to further narrow the export to [Clinic or Provider-Specific Fees](procedurefeeoverrides.html).
* Provider or Clinic can only be selected for [Fee Schedules](feeschedules.html) with *Use Global Fees* unchecked.

2. (Optional) To start with a blank fee schedule, click **Clear**. All existing fees are deleted.
3. Click **Import**.
4. A warning message appears. Click **OK** to proceed.

![](images/feeSchedImportWarn.png)

If fees were cleared before importing, only the imported fees remain. If fees were not cleared before import, any existing fees are overwritten with imported fees and procedure codes that did not contain a fee in the import remain unchanged.

To apply updated fees to treatment planned procedures, see [Fees Update](feesupdate.html).