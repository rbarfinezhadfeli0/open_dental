Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Definitions: Appt Procs Quick Add

Customize the single-click items in the Edit Appointment window with Appt Proc Quick Adds.

In the [Main Menu](mainmenu.html), click Setup, [Definitions](definitions.html), Appt Procs Quick Add.

![](images/definitionsApptProcsQuickAdd.png)

The Appt Proc Quick Add definition determines the options available and procedure associated with the *Single click* list in the [Edit Appointment](aptedit.html) window.

Double-click an existing item to edit or click **Add** to create a new item. The Edit Definition window opens.

![](images/definitionEditApptQuickAdd.png)

* **Name**: Enter the item description. This displays in the Edit Appointment window.
* **ADA Code(s)**: Enter the procedure code or group of codes associated with the item. This field is case-sensitive so enter the code as it appears in the [Procedure Codes](procedurecodes.html) list.
  + To enter more than one code, separate each code with a comma and do not add spaces (e.g., D0140,D0220).
  + To associate a tooth number with the procedure, enter the tooth number after the code (e.g., D0220#7). The[Procedure Code](procedurecodeedit.html) must have its treatment area set to *Tooth*. To enter the same code on multiple teeth, enter the code individually for each tooth (e.g., D0220#7, D0220#8, etc.)
  + Procedures with a treatment area other than *Mouth* or *Tooth* (when the tooth number is specified) should not be added to a Appt Procs Quick Add definition as users are not prompted to enter the treatment area.

Click **Save** to exit the window and keep changes.