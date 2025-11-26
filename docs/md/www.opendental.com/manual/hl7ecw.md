Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

eClinicalWorks HL7

HL7 is the name of the file format Open Dental uses to sync data with [eClinicalWorks](bridgeeclinicalworks.html) (eCW). [HL7 Messages](hl7genericmsg.html) pass information between Open Dental and eCW.

* There are three pre-set [eCW HL7 Message Structure](hl7ecwmsg.html) definitions that exactly match the HL7 message structure for each of the three bridge modes: Full, Standalone, and Tight.
* The Open Dental server can exchange files with eClincialWorks using either two shared HL7 folders or via TCP/IP.
* A service (program without a user interface) called OpenDentalHL7 needs to be installed on the server. It will handle the interaction between the HL7 messages and Open Dental database.

For generic HL7 setup, see [Generic HL7](hl7.html) instead.

## Updating Open Dental Versions

We recommend contacting Open Dental Support for assistance with an update.

## Setup Steps

The setup steps below are usually completed by Open Dental support technicians.

1. Make sure the client Open Dental program is installed on the server the same as it would be on any other workstation.
2. Setup eClinicalWorks (Setup, Program Links, eClinicalWorks).
   1. Enable eCW.
   2. Select the bridging mode.
   3. Set up the HL7 Sync Folders (incoming and outgoing). Offices will most likely set up the folders from the server, so the paths will be relative to the machine the user is on. However, be aware the setup window is viewable from other computers, so from other computers the paths will be invalid.
3. Connect to the Database: The information for connecting to the database is in the FreeDentalConfig.xml file in the application folder. This is the same file that the main Open Dental program uses to connect to the database. The information in the file must be accurate before starting the OpenDentalHL7 service. One way to ensure the accuracy is to start the Open Dental client program:
   1. On the [Choose Database](choosedatabase.html) window, set the database connection information. Only simple direct database connections are supported. Uncheck **Do not show this window on startup** so this window will show the next time a users launches Open Dental from the workstation, then close the window. If Open Dental is run as an administrator (right-click, *Run as Administrator* when launching Open Dental), connection information will auto-save to the FreeDentalConfig.xml file.
   2. Verify that the information saved correctly by re-launching Open Dental. If the information is correct, users can be sure that OpenDentalHL7 will connect to the correct database when the service is started.
4. Create a service to send and receive HL7 messages in the Open Dental [Service Manager](servicemanager.html). If there are multiple databases for multiple customers hosted on one server, then multiple HL7 services, each with a unique name, must be setup. Then, each database must be set up to match with a differently named HL7 service.

   Errors: If the service does not start as expected:

   * Verify that the database and HL7 folders are correct (steps 2 and 3).
   * The service will not start if the version is not exactly the same as the version of the main Open Dental program.
   * If it still won't start, use the Computer Management tool: My Computer, right-click, Manage. Expand System Tools, Event Viewer, Windows Logs. Click on Application. The error and information entries will help determine the reason why the OpenDentalHL7 will not start.

   ![](images/computermanagement.gif)

## Troubleshooting

**Simple Troubleshooting**: If the messages are not being passed to Open Dental and processed as expected, follow the steps below.

1. Stop the OpenDentalHL7 service.
2. Edit the FreeDentalConfig.xml file by adding a line for**<HL7verbose>True</HL7verbose>.** Example: ![](images/hl7CodeBlock.gif)
3. Start the service.
4. Trigger eCW to create an outgoing message in one of two ways:
   * Edit patient information.
   * Create a new appointment.
5. Wait about 10 seconds for the message to be processed.
6. Look in the Windows Log as described above, refreshing as needed. Verify that the information was processed by Open Dental. Both kinds of messages should result in an insert or update to the patient table. If the trigger message was for a new appointment, the message should also result in an insert or update of the appointment table.
7. After troubleshooting, remove the <HL7verbose>True</HL7verbose> line from the xml file. The line may be removed automatically when users click **OK** on the Choose Database window.

**Complex Troubleshooting**: Perform Simple Troubleshooting steps first. If that does not solve the problem, follow the steps below.

Note: These steps do not apply if using TCP/IP. Instead use Windows logs or Message History.

1. Turn off the OpenDentalHL7 service.
2. Locate the incoming and outgoing HL7 folder paths as set on the eClinicalWorks Setup window (or HL7 Def Edit window).
3. In Windows, open the outgoing folder.
4. Trigger eCW to create an outgoing message in one of two ways:
   * Edit patient information.
   * Create a new appointment.
5. Look for the message in the outgoing folder. You may need to wait up to 60 seconds for the message to appear.
   * If it does not appear, then the HL7 service is not set up properly in eCW to create files.
   * If it does appear, make a copy of the message for later analysis.
6. Start OpenDentalHL7.
   * If the original message does not disappear, there is a problem with OpenDentalHL7. Look in the Windows Log for errors with the message processing.
   * If the message still does not seem to have been processed, it will need to be debugged. A copy of the message, and possibly the database itself, should be sent to Open Dental programmers for testing.

**AptNum doesn't exist in PV1 segment when saving a proposed treatment plan**: Open Dental sends an AptNum in the PV1 segment of the outbound DFT messages. This AptNum corresponds to the appointment number eCW sends us in the command line parameters. However, the appointment has to also exist in Open Dental or we won't send it back in the DFT message.

If you are saving a proposed treatment plan, that AptNum may not exist in the PV1 segment due to two situations.

1. You launched OD in a manner other than *View Dental Chart from an existing appointment in eCW* OR
2. The appointment in eCW doesn't exist in OD. This is probably due to an interface down situation that needs to be resolved.

In either case, the DFT message with the saved treatment plan will be rejected by eCW, sent to an error spool or something, and the PDF will not be added to the patient's chart in eCW.

## HL7 Field Documentation

As of version 11.0.31.

**MSH - Message Header**

Every incoming and outgoing message must have a MSH segment, which is usually the first segment. MSH.8 is required to be the message type field and is composed of two components. Component 1 is the message type (ADT, SIU, DFT, etc.) and component 2 is the event type with the designated component separator between them. A typical MSH.8 field would look like this: SIU^S12 or ADT^A04.

**ADT - Demographics Message**

PID.2 (eCW internal patient number) is used to determine patient. If using tight integration, this is stored in the PatNum field in OD. If using standalone integration, this is stored in the ChartNumber field in OD. If a match is not found, then a new patient is created in OD.

PID imports LName, FName, MiddleI, Birthdate, Gender, Race, Address, City, State, Zip, HmPhone, WkPhone, Position(marital), and SSN. If this is a new patient, PriProv is set to practice default.

PID.4 (eCW account number) is saved to the ChartNumber field when using tight integration, but not saved at all when using standalone integration.

PID.22 is parsed for the fee schedule, creating a new one if needed.

GT1 is processed to create a guarantor if needed. The processing is nearly identical as for the PID segment.

**SIU - Scheduling Message**

PID.2 (eCW internal patient number) is used as PatNum to determine patient. If match is not found, a new patient is created with that PatNum.

PID is processed to extract 16 various patient demographic fields.

PID.4 (eCW account number) is saved to the ChartNumber field when in tight integration mode.

PV1 If PV1 segment is missing, AIG is processed instead.

SCH.2 (eCW visit number) is used as AptNum to find or create an appointment. If a found appointment does not match PatNum, error message is shown.

SCH.7 stored in appointment.Note

SCH.11.3 is stored in appointment.AptDateTime

SCH.11.4 (stop time) is used to calculate appointment.Pattern, the length of the appointment.

If AIG segment is present, it is processed for appointment.ProvNum and patient.ProvNum. A provider is created if needed, based on the eCW alphanumeric provider id.

If AIG segment is missing, PV1 is processed instead.

**DFT - Charge Specification**

PID.2 (eCW account Number)

PID.3 (eCW internal patient number)

PID includes an additional 14 patient demographic fields

PV1 includes provider information

PV1.19 (eCW visit number) The AptNum that was originally passed in by eCW.

FT1 A series of segments for all the procedures.

ZX1.5 If this DFT is being used to send a treatment plan, then this is a pdf file, encoded as base64 string. Otherwise, blank.

Also see [HL7 Unit Tests](hl7tests.html).