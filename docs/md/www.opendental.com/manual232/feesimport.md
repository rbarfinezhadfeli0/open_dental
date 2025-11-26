Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Fees Import

In [Fee Tools](feescheduletools.html), at the lower left, is an **Import** button.

![](images/feeScheduleImport.png)

![](images/YouTube_PlayButton_15px.png) See our video: [Updating Your UCR (Office) Fees](https://youtu.be/eE8YXP4G3bo).

Fees can be imported into Fee Schedules (e.g. if insurance sends a new Fee Schedule). For the fee to import, the corresponding code must already exist in the [Procedure Codes](procedurecodes.html).

Note: Importing codes and fees does not automatically add codes. See [Add Procedure Code](procedurecodenew.html) for instructions on creating new procedure codes.

Usually, it is easiest to manually enter or edit fees in a Fee Schedule instead of importing it (create the Fee Schedule, nine-key in the fees). Often the Fee Schedules provided to offices have no standard format. Thus, taking a PDF, printed Fee Schedule, or custom formatted fee list and editing it for import can be difficult. Large offices may have IT staff handle Fee Schedules import, but in general, importing fees is a technical process and advanced feature.

**File Format Requirements**: Fees must be saved as a tab delimited file (txt file is preferred). To see an example of the correct file format, export the fees ([Fees Export](feesexport.html)). When opened with Notepad, it looks similar to the screenshot shown below:
![](images/feeSchedFormat.png)

* The first column of the imported file must contain the procedure code; the second column must contain the fee with no monetary symbols or extra characters/spaces.
* The columns must be separated by tab.
* Abbreviations and descriptions are ignored during import.
* Fee sort order does not matter.
* Close the file before importing the fees.

Note: To only make changes to a few fees, create a tab delimited .txt file that only contains those codes and fees, then import it. Only those codes are updated.

To import fees into an existing Fee Schedule:

1. Make a backup copy of the existing fees as a preventative measure. See [Fees Copy](feeschedulecopy.html).
2. Import the fees into the original Fee Schedule.

1. In the Fee Tools window, under the *Select Fees* section, select the Fee Schedule to import into.

* Selecting only a Fee Schedule will export the default (i.e., global) Fee Schedule.
* Select a Provider and/or Clinic to further narrow the export to [Clinic or Provider-Specific Fees](procedurefeeoverrides.html).
* Provider or Clinic can only be selected for [Fee Schedules](feeschedules.html) with *Use Global Fees* unchecked.

2. (Optional) To start with a blank Fee Schedule, click **Clear**. All existing fees are deleted.
3. Click **Import**.
4. A warning message appears. Click **OK** to proceed.

![](images/feeSchedImportWarn.png)

If fees were cleared prior to importing, only the imported fees remain. If fees were not cleared prior to import, any existing fees are overwritten with imported fees and procedure codes that did not contain a fee in the import remain unchanged.

To apply updated fees to treatment planned procedures, see [Fees Update](feesupdate.html).