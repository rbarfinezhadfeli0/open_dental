Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Printer Setup

Use Printer Setup to set default print options for the current workstation.

In the [Main Menu](mainmenu.html), click File, **Printers**.

![](images/printersetup.png)

Note: Printer Setup cannot be accessed by Open Dental Cloud users.

All situations that allow a specific default printer are listed.

In the Print Situations list, all features that allow a unique default printer to be set are listed. Double-click a situation to open Edit Printer and make changes.

* **Default**: The printer used for all situations not in the list (e.g., reports). This printer is also used when a printer situation is set to *default*. If *Windows default* is selected as the printer, the printer marked default in the workstation's Windows settings is used.
* **Appointments**: The printer used when printing appointments from the [Appointments Module](appointments.html).
* **Claims**: The printer used for claims.
* **Labels - Sheet**: The printer used for sheets of [Labels](labels.html).
* **Labels - Single**: The printer used for single Labels.
* **Postcards**: The printer used for postcards.
* **Rx's**: The printer used for [Paper Prescriptions](rx.html).
* **Controlled Rx's**: The printer used for prescriptions that are marked as a controlled substance.
* **Multi Rx's**: The printer used for multiple prescriptions on one page. See [Rx Manage](rxmanage.html).
* **Statements**: The printer used for [Statement](statement.html).
* **Treatment Plans and Perio**: The printer used for [Treatment Plans](treatmentplanprint.html) or [Perio Chart](perio.html).
* **Receipts**: The printer used for [XCharge (OpenEdge)](xcharge.html), [PaySimple](paysimple.html), or [PayConnect](payconnectpaymentwindow.html) receipts.

See the Edit Printer section for details on printer options.

**This is too complicated. Show me the simple interface**: Check to show a simple interface with only the *Default* print situation. When saving Printer Setup with this box checked, all workstations are also set to a simple interface and the printer for all hidden situations is set to *default*. A warning is displayed prior to making this change.
![](images/printersetupsimple.png)

Click **Save** to keep any changes to printer setup.

## Edit Printer

Change the default printer for a situation and set other printing details from Edit Printer.

![](images/printerSetupEdit.png)

* **Situation**: Read-only. A description of the scenario in which this printer is used. See the previous section for details on each Print Situation.
* **Printer**: The printer that is used in the selected Print Situation. Click the dropdown to choose a printer. Any printers added to the workstation are listed.
  + If the selected printer is *Windows default* or *default*, this field is blank in the Print Situations list.
  + If the Printer is set to *default*, the selected printer for the *Default* print situation is used. The Printer description in the Print Situations list is blank when set to Default.
  + [ODTouch](odtouchsettings.html) users: A printer other than *Windows default* must be selected to use this workstation's printer settings from ODTouch.
* **Prompt**: Check to open the print dialogue before printing. This allows users to switch to a different printer, print a page range, or make other printing adjustments before printing. Uncheck to immediately print to the selected printer using the printer's default settings.
* **Virtual Printer**: Check the box to indicate the selected printer is virtual (i.e., a file is saved rather than a physical document is printed).
  + By default, files are saved to the [A to Z Folder](atozfolder.html) (e.g., \\Server\OpenDentImages). If *Prompt* is checked, users can choose the save location manually.
  + Files are named automatically using the Date/Time the file was created.
* **File Extension**: Indicate the file type used when using a virtual printer.

## Troubleshooting

Below are common printer issues and troubleshooting methods. Before starting the troubleshooting process:

* Check that adequate paper is in all paper trays and there is sufficient ink.
* Make sure you have selected the correct printer (It is the default in Printer Setup above, or is selected on the Prompt window).

**Problem: Unable to print from Open Dental or Windows.**

Solution: This is likely an issue with the printer drivers or Windows configuration.

1. Make sure the printer drivers are up-to-date and compatible with the Windows version.
2. Restart the printer.
3. If that doesn't work, try restarting the computer.
4. If neither work, this is likely a printer setup issue. Consider re-installing the printer drivers.

**Problem: Can print from Windows, but unable to print from Open Dental.**

Solution:

1. Exit Open Dental, then run Open Dental as Administrator.
2. If that doesn't work, and you have been able to print from Open Dental with the current printer previously, try restarting your computer.
3. If that doesn't work, or your printer has never worked with Open Dental, contact us.

**Problem: Open Dental stops responding when attempting to print.**

Solution:

1. If the printer is a network printer, make sure to have access to the server location.
2. Restart the computer. If the communication between Windows and Open Dental is bad, this should fix it.
3. If still not responding, contact us.