Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Code Groups

Set up Code Groups for use with Frequency Limitations, Age Limits or Other Benefits for insurance plans.

In the [Main Menu](mainmenu.html), click Setup, Code Groups.

![](images/codeGroups.png)

Note: Set up individual [Frequency Limitations](insfrequencylimitations.html), Age Limits, and [Other Benefits](otherbenefits.html) from the [Edit Benefits](benefitinfo.html) window for [Insurance Plans](insplan.html).

Code Groups: The grid displays Code Groups that have been created.

* Freq: Indicates if the Code Group displays in the Frequency Limitation Benefits grid for insurance plans.
* Age: Indicates if the Code Group displays in the Age Limits grid for insurance plans.

**Show Hidden**: Check to view Code Groups that have neither *Age* nor *Freq* checked in the grid.

**Add**: Opens Code Group Edit to create a new Code Group.

**Up** / **Down**: Select a Code Group from the grid and click to move in the list.

Click **Save** to exit the window and keep any changes.

## Code Group Edit

Double-click an existing Code Group from the grid to edit or click **Add** to create a new group.

![](images/codeGroupEdit.png)

* **Show In Age Limits**: Check to display this Code Group in the Age Limits grid for insurance plans.
* **Show In Frequencies**: Check to display this Code Group in the Frequency Limitation Benefits grid for insurance plans.

Note: Existing Code Groups are always available in the Code Group dropdown in the [Edit Benefit](editbenefit.html) window.

* **Group Name**: Description for the Code Group.
* **Fixed Group**: Assign a predetermined grouping to use this Code Group with certain fixed fields like [Static Text Fields](statictextfields.html) (e.g., dateLastExam). Fixed Groups affect the following:
  + Bitewing: *dateLastBW* Static Text Field
  + Exam: *dateLastExam*  Static Text Field
  + Pano/FMX: *dateLastPanoFMX* Static Text Field
  + Prophylaxis: *dateLastProphy* Static Text Field
  + SRP: *dateLastSRP* Static Text Field
  + Perio Maintenance:*dateLastPerio* Static Text Field
* **Proc Codes**: Enter procedure codes that apply to the Code Group. Click **Add** to open the [Procedure Codes](procedurecodes.html) list and select procedure codes.

Click **Save** to show changes in the Code Groups grid. Duplicate procedure codes are not saved (e.g., if *D0474,D0474* is entered, only *D0474* is saved).