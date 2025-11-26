Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Code Groups

Use Code Groups to set up Insurance Frequency Limitations.

In the [Main Menu](mainmenu.html), click Setup, Code Groups.

![](images/codeGroups.png)

Note: Set up [Frequency Limitations](insfrequencylimitations.html) as benefits in individual [Insurance Plans](insplan.html).

* **Show Hidden**: Check to view Code Groups marked hidden in the grid.
* **Add**: Open Code Group Edit to create a new Code Group.
* **Up** / **Down**: Select a Code Group from the grid and click to move in the list.

## Code Group Edit

Double-click an existing Code Group from the grid to edit or click **Add** to create a new group.

![](images/codeGroupEdit.png)

* **Is Hidden**: Check to hide the Code Group as a selection.
* **Group Name**: Description for the Code Group
* **Fixed Group**: Assign a predetermined grouping to use this Code Group with certain fixed fields like [Static Text Fields](statictextfields.html) (e.g., dateLastExam) or Insurance Benefit fields (e.g., Exam Frequency). Fixed Groups affect the following:
  + Bitewing: *dateLastBW* Static Text Field and BWs field in [Edit Benefits](benefitinfo.html)
  + Exam: *dateLastExam*  Static Text Field and Exams field in Edit Benefits
  + Pano/FMX: *dateLastPanoFMX* Static Text Field and Pano/FMX field in Edit Benefits
  + Prophylaxis: *dateLastProphy* Static Text Field
  + SRP: *dateLastSRP* Static Text Field
  + Perio Maintenance:*dateLastPerio* Static Text Field
* **Proc Codes**: Enter procedure codes that apply to the Code Group. Click **Add** to open the Procedure Codes list and select procedure codes.

Click **Save** to exit the window and keep any changes.