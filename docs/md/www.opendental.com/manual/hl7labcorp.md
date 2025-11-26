Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

LabCorp HL7

[HL7](hl7.html) is the name of the file format that Open Dental uses to receive data from Laboratory Corporation of America (LabCorp).

Open Dental uses HL7 messages to receive lab results and embedded PDFs from LabCorp. We connect to a SFTP (Secure File Transfer Protocol) site maintained by LabCorp and retrieve the files (HL7 messaging text). A service (program without a user interface) called OpenDentalHL7 needs to be installed on the server. It will handle the interaction between the HL7 messages and Open Dental database.

## Updating Open Dental Versions

We recommend contacting Open Dental Support for assistance with an update.

## Setup Steps

1. Make sure the client Open Dental program is installed on the server the same as it would be on any other workstation.
2. Enable and set up the [LabCorp HL7 Definition](hl7labcorpmsg.html).
3. Connect to the Database: The information for connecting to the database is in the FreeDentalConfig.xml file in the application folder. This is the same file that the main Open Dental program uses to connect to the database. The information in the file must be accurate before starting the OpenDentalHL7 service. One way to ensure the accuracy is to start the Open Dental client program:
   1. On the [Choose Database](choosedatabase.html) window, set the database connection information. Only simple direct database connections are supported. Uncheck **Do not show this window on startup** so this window will show the next time a users launches Open Dental from the workstation, then close the window. If Open Dental is run as an administrator (right-click, *Run as Administrator* when launching Open Dental), connection information will auto-save to the FreeDentalConfig.xml file.
   2. Verify that the information saved correctly by re-launching Open Dental. If the information is correct, users can be sure that OpenDentalHL7 will connect to the correct database when the service is started.
4. Create a service (OpenDentalHL7 service) to receive HL7 messages in the Open Dental [Service Manager](servicemanager.html). If there are multiple database for multiple customers hosted on one server, then multiple HL7 services, each with unique names, must be setup. Then, each database must be set up to match with a differently named HL7 service. If already using HL7, users may only need to restart the OpenDentalHL7 service.

   Errors: If the service does not start as expected:

   * Verify that LabCorp message definition settings are correct.
   * The service will not start if the version is not exactly the same as the version of the main Open Dental program.
   * If it still won't start, use the Computer Management tool: In the Start Menu navigate to Computer, right-click, Manage. Expand System Tools, Event Viewer, Windows Logs. Click on Application. The error and information entries will help determine the reason why the OpenDentalHL7 will not start.

![](images/computermanagement.gif)

## Troubleshooting

Simple Troubleshooting: If the messages are not being passed to OD and processed as expected, follow the steps below.

1. Stop the OpenDentalHL7 service.
2. Edit the FreeDentalConfig.xml file by adding a line for **<HL7verbose>True</HL7verbose>**. Example:
   ![](images/hl7CodeBlock.gif)
3. Start the service, then monitor the error log.
4. After troubleshooting, remove the <HL7verbose>True</HL7verbose> line from the xml file. The line will usually be removed automatically when a user clicks **OK** from the Choose Database window.