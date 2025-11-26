Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Generic HL7

See [Generic HL7 Message Structure](hl7genericmsg.html).

HL7 is the name of the file format that Open Dental uses to sync data with other medical software. Generic HL7 is an HL7 interface technology built into Open Dental. These interfaces can be customized to accommodate any software.

* For the eClinicalWorks HL7 interface technology, see [eClinicalWorks HL7](hl7ecw.html) instead.
* For LabCorp HL7, see [LabCorp HL7](hl7labcorp.html).
* Also see [Open Dental HL7 Interface Specifications](http://opendental.com/resources/HL7MessagingInterfaceSpecs.pdf) (PDF).
* Also see [HL7 Unit Tests](hl7tests.html).

Messages are used to pass information between Open Dental and the other medical software. There are two options for this:

* Shared Folders: The Open Dental server can contain two shared folders that are used to pass files back and forth.
* TCP/IP: A TCP/IP connection can be used to pass files back and forth.

## Setup Steps

The*OpenDentalHL7* service needs installed to the server. It handles the interaction between the HL7 messages and Open Dental database.

1. Make sure the Open Dental program is installed on the server.
2. In the Main Menu, click Setup, Advanced Setup, HL7. Enable and setup the HL7 message structure.
3. Connect to the Database.
   * The information for connecting to the database is in the FreeDentalConfig.xml file in the application folder. This is the same file that the main Open Dental program uses to connect to the database. The information in the file must be accurate before starting the OpenDentalHL7 service.
   * Open Open Dental, on the [Choose Database](choosedatabase.html) window, set the database connection information. Only simple direct database connections are supported. Uncheck **Do not show this window on startup** so this window appears the next time a users launches Open Dental from the workstation, then close the window. If Open Dental is run as an administrator, connection information is auto-saved to the FreeDentalConfig.xml file.
   * Verify that the information saved correctly by re-launching Open Dental. If the information is correct, users can be sure that OpenDentalHL7 will connect to the correct database when the service is started.
4. Set up the HL7 Sync Folders (incoming and outgoing). For Generic HL7 this can be entered on the HL7 Def Edit window. Offices will most likely set up the folders from the server, so the paths will be relative to the machine user is on. However, be aware the setup window is viewable from other computers, so from other computers the paths will be invalid.
5. Create a service to send and receive HL7 messages in the Open Dental [Service Manager](servicemanager.html). If there are multiple database for multiple customers hosted on one server, then multiple HL7 services, each with unique names, must be setup. Then, each database must be set up to match with a differently named HL7 service.

## Troubleshooting

**If the service does not start as expected:**

* Verify that the database and HL7 folders are correct (steps 2 and 3 above).
* The service will not start if the version is not exactly the same as the version of the main Open Dental program.
* If it still won't start, check the Event Viewer, Windows Logs. Click on Application. The error and information entries help determine the reason why the OpenDentalHL7 will not start.

![](images/computermanagement.gif)

**If the messages are not being passed to Open Dental and processed as expected, follow the steps below.**

1. Stop the OpenDentalHL7 service.
2. Edit the FreeDentalConfig.xml file by adding a line for **<HL7verbose>True</HL7verbose>.**
   ![](images/hl7CodeBlock.gif)
3. Start the service.
4. In the other medical software, trigger outbound messages.
5. Wait about 10 seconds for the message to be processed.
6. Look in the Windows Event Viewer Application Log as described in Setup step 5, item 3 above, refreshing as needed. Verify that the information was processed by Open Dental. Both kinds of messages should result in an insert or update to the patient table. If the message is for a new appointment, the result should also be an insert or update of the appointment table.
7. After troubleshooting, remove the <HL7verbose>True</HL7verbose> line from the xml file. The line is usually removed automatically when the user clicks **OK** from the Choose Database window.

If that does not solve the problem, follow the steps below.

Note: These steps do not apply if using TCP/IP. Instead use Windows logs or Message History.

1. Turn off the OpenDentalHL7 service.
2. Locate the incoming and outgoing folder paths as set on the HL7 Def Edit window.
3. Open the outgoing folder in Windows.
4. In the other medical software, trigger outbound messages.
5. Look for the message in the outgoing folder. Users may need to wait up to 60 seconds for the message to appear.
   * If it does not appear, the other software is not properly creating files.
   * If it does appear, make a copy of the message for later analysis.
6. Start OpenDentalHL7.
   * If the original message does not disappear, then there is a problem with OpenDentalHL7. Look in the Windows Log for errors with the message processing.
   * If the message still does not seem to have been processed, then it needs to be debugged. A copy of the message, and possibly the database itself, should be sent to Open Dental programmers for testing.