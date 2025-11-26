Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Program Links

The Program Links window lists all the program bridges that can be linked from Open Dental.

In the [Main Menu](mainmenu.html), click Setup, **Program Links**.

![](images/programLinks.png)

From here users can enable or disable a bridge, set up clickable toolbar buttons to access the bridge, and enter other bridge-specific information. For specific setup steps for each bridge, refer to the individual bridge page.

All supported bridges will list.

* Bridges marked X and highlighted green are currently enabled.
* If a program is not listed, it may be able to be set up as a [Custom Bridge](bridgecustom.html).

We recommend having a Business Associate Agreement (BAA) in place with a third-party before enabling a program link.

## Program Link Settings

Double-click a bridge to enter bridge settings on the Program Link window.

![](images/bridgeExample.png)

Each bridge window will auto-populate with default settings.

* **Internal Name**: The internal name of the bridge. Cannot be edited.
* **Description**: The name of the bridge as it shows in the list of program links. Can be edited.
* **Enabled**: Check to enable the bridge. Uncheck to disable the bridge.
* **Hide unused button**: This option only shows for bridges that have preset clickable buttons in Open Dental, if the bridge is disabled. Check the box to hide the button in the software.
* **Path of file to open**: The path to the program's executable (exe) on the computer or network. It can be a local path or a server path. This path will be used by all computers connected to the database, unless a *Local path override* is entered on an individual machine.
* **Local Path Override**: On an individual machine, enter a path to a program's executable (exe) that will override the *Path of file to open*. This is usually left blank.
* **Optional command line arguments**: If a program bridge requires a command line argument, it will be specified in the *Notes* area. Otherwise this is usually left blank.
* **Text on Button**: The text that will appear on the toolbar button.
* **Plug-in dll name**: See [Plug-In Framework](http://www.opendental.com/manual/plugins.html).
* **Additional Properties**: Set additional property values. Property values can be edited only. To change a value, double-click on a row. Enter the Value, then click OK to close.
  ![](images/programLinkProperty.png)
* **Notes**: Bridge specific instructions.
* **Output File**: Build an output file to custom bridges.

## Button Settings

**Hide Button for Clinics**: If using clinics, select which clinics the bridge applies to.
![](images/programLinkClinic.png)

* Use the left and right arrows to move unneeded clinics to the Hidden column.
* Hidden clinics will not show the bridge button. Visible clinics will show the bridge button in the selected toolbars.
* When a clinic is hidden, the message *Program Link button is not visible for some clinics.* will appear in the Program Link window.
* **Order Alphabetical**: Check to order clinics in alphabetical order.

**Add a button to these toolbars**: Select one or more areas to display the bridge button.

* AccountModule: [Account Module](account.html) toolbar (second row).
* ApptModule: [Appointments Module](appointments.html) toolbar (second row).
* ChartModule: [Chart Module](chart.html) toolbar (second row).
* ImagesModule: [Imaging Module](images.html) toolbar (second row).
* FamilyModule: [Family Module](family.html) toolbar (second row).
* TreatmentPlanModule: [Treatment Plan Module](treatmentplan.html) toolbar (second row).
* ClaimsSend: Does nothing.
* Main Toolbar: [Main Toolbar](toolbar.html) in every module.
* ReportsMenu: The Reports dropdown menu.

**Button Image**: Import an image that will show on the button. ![](images/programLinkButton.gif)

* Click **Import** to select an image file from the computer. The image must be 22x22 pixels.
* Click **Clear** to remove an image.

## Remote Desktop Solutions

If there is a server using terminal services that users remotely connect to, consider using the Remote Executer program by MQ Technologies (<http://www.mqtechnologies.com/en/home>). Remote Executer passes the command to launch the software to the local computer, instead of launching the program on the server computer.

* The *Path of file to open* should contain the path to Remote Executer.
* Enter the path of the program to launch in the *Optional command line arguments* field.

Here is an example of using Remote Executer to launch Notepad.

![](images/remoteExecuter.png)

## Troubleshooting

If a bridge to an imaging program is not behaving well, first start Open Dental by running as an admin. The administrator privileges will then be inherited by the bridge program. If this works, set Open Dental to always run as admin:

1. Locate the Open Dental program file (usually C:\Program Files (x86)\Open Dental\OpenDental.exe)
   * Alternatively, to only run Open Dental as admin when launched from a specific shortcut, locate the shortcut instead.
2. Right-click the file and select Properties.
3. Go to the Compatibility tab and check *Run this program as an administrator*.