Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Printer Setup

Use Printer Setup to set default print options for the current workstation.

In the [Main Menu](mainmenu.html), click File, **Printers**.

![](images/printersetup.gif)

Note: Printer Setup cannot be accessed by Open Dental Cloud users.

All categories that allow a default printer are listed.

To view a simple version of this window, check **This is too complicated. Show me the simple interface** (see below).

For each category, select the default printer.

* **Default**: The printer used for all categories that have *default* as the selection.
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

**Prompt:** Check this box to select a printer before printing. This is useful when a user wants to select a different printer, print a page range, or make printing adjustments. Uncheck this to immediately print to the selected printer using the printers defaults.

**This is too complicated. Show me the simple interface**: Check to show a simple interface. When setting Printer Setup to the Simple Interface, all workstations will also be set to Simple Interface and the printer will be set back to the Windows Default. A warning will display prior to making this change.
![](images/printersetupsimple.gif)

## Troubleshooting

Below are common printer issues and troubleshooting methods. Before starting the troubleshooting process:

* Check that adequate paper is in all paper trays and there is sufficient ink.
* Make sure you have selected the correct printer (It is the default in Printer Setup above, or is selected on the Prompt window).

**Problem: Unable to print from Open Dental or Windows.**

Solution: This is likely an issue with your printer drivers or Windows configuration.

1. Make sure your printer drivers are up-to-date and compatible with your Windows version.
2. Restart the printer.
3. If that doesn't work, try restarting the computer.
4. If neither work, this is likely a printer setup issue. You may need to reinstall the printer drivers.

**Problem: Can print from Windows, but unable to print from Open Dental.**

Solution:

1. Exit Open Dental, then run Open Dental as Administrator.
2. If that doesn't work, and you have been able to print from Open Dental with the current printer previously, try restarting your computer.
3. If that doesn't work, or your printer has never worked with Open Dental, contact us.

**Problem: Open Dental stops responding when attempting to print.**

Solution:

1. If the printer is a network printer, make sure you have access to the server location.
2. Restart the computer. If the communication between Windows and Open Dental is bad, this should fix it.
3. If still not responding, contact us.