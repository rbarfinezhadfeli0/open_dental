Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eCW Fee Schedules

When using Open Dental with [eClinicalWorks](bridgeeclinicalworks.html), in order to present accurate treatment plans to the patient, fee schedules must be present in Open Dental. You can export these fee schedules from eCW then import into Open Dental. See [Fee Schedules](feeschedules.html).

Note: Fees in Open Dental are strictly for treatment planning purposes. Fees charged to patients and submitted to insurance will be set by eCW. Changing a fee in Open Dental will not change the fee in eCW.

Step 1: Contact eCW to export your fee schedules.

Step 2: Create fee schedules in Open Dental, then import the .csv files.

1. In the [Procedure Codes](procedurecodes.html), select a fee schedule.
2. Click [Fee Tools](feescheduletools.html).
3. Click Import.

If there are procedure codes in the file that are not present in Open Dental, such as medical codes, those fees will not be imported.

Fee schedules are assigned automatically to patients using HL7 messages coming from eCW. The assignment is done based on fee schedule name, so the names must match exactly, including capitalization and spaces.