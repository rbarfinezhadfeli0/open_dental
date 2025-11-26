Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Generic HL7 Message Structure

In the [Main Menu](mainmenu.html), click Setup, Advanced Setup, **HL7**.

![](images/hl7Defs.gif)

[Generic HL7](hl7.html) message structure can be customized to meet the bridging requirements of other software.

Note: The HL7 menu item does not appear for Open Dental Cloud users.

There are several internal definitions. Some information can be edited in an internal definition, but messages and segments cannot.

* **eCW Full, Standalone, Tight**: See [eCW HL7 Message Structure](hl7ecwmsg.html).
* **Centricity**: A message definition specifically for Centricity.
* **HL7 version 2.6**: A generic message definition that follows standard HL7 message structure.
* **MedLab HL7 v2.3**: See [LabCorp HL7 Definition](hl7labcorpmsg.html) v2.3.

Custom definitions allow editing of all information, including messages and segments. To create a custom definition users have two options:

* Select the internal HL7 version 2.6 definition, then click **Copy**.
* Select an existing custom definition, then click **Duplicate**.

[Open Dental HL7 Interface Specifications](http://opendental.com/resources/HL7MessagingInterfaceSpecs.pdf) (PDF)

## Edit a Message Definition

Double-click on the message definition.

![](images/hl7DefEditGeneric.gif)

**Enabled**: Enable the definition and activate editable fields.

**Mode Tx**: Select a transfer mode (Mode Tx) of File, TCP/IP, or Sftp.

**Delimiters**: Select the separator characters.

**Show Appts Module**: Give access to the Appointments module.

**Show Account Module**: Give access to the Account module.

**Send Quad as Tooth Num**: Usually quadrant information shows as surface information in a claim. However, some insurance carriers require that quadrant information show as tooth number and may reject claims if it doesn't. Check this box to send quadrant information as tooth number.

**Warn if Procs not attached to Appt**: Show a message prior to sending procedures via HL7 if they are not attached to an appointment.

**HL7 Communication Options**: Set up the inbound and outbound folder paths or ports. The options vary based on the ModeTx. See TCP/IP mode below for steps.

**OpenDental HL7 server and service name**: See [HL7 Service](hl7servicemanager.html) for information about installing and naming the OpenDentalHL7 service.

**Show Demographics**: Typically patient demographic information is not entered in Open Dental because it may be overwritten every time an inbound HL7 message for the patient is processed. If users want to be able to change and add demographic information in Open Dental, select Change and Add Pts. Users will be prompted to enter a password which is hl7.

**Messages/Segments**: Can only be edited in custom definitions. See Editing Messages/Segments below.

Note: If using TCP/IP mode, we recommend using version 14.1.8 or greater. The incoming and outgoing ports need not match, but the ports will have to be available for use by the OpenDentalHL7 service.

1. For Mode TX, select TcpIp.
2. Enter an Incoming Port.
3. Enter an Outgoing IP: Port (outgoing IP address followed by a colon and a port number). It should match the IP address of the computer Open Dental will send HL7 messages to.

## Editing Messages/Segments

For custom definitions, the incoming and outgoing message structure can be modified. To add a new message, click **Add**. To modify an existing message, double-click the message or one of its segments.

![](images/hl7DefMessageEditGeneric.gif)

**Message Type**: For a description of all message types, see [HL7 Message Types](hl7msgs.html).

**Event Type**: Incoming/Outgoing:

**Item Order**: Determines the order the message will show in the Message / Segment grid.

**Segments**: Double-click on a segment to modify, or click **Add** to create a new segment.

![](images/hl7DefSegmentEditGeneric.gif)

**Segment Name**: Can be selected from a list of available segment names supported by Open Dental.

**Item Order**: For outgoing messages, affects the message structure. For incoming messages, only determines the order the segment shows in the Message Edit window.

**Can Repeat:**

**Is Optional**:

**Fields**: Double-click a field to modify or click **Add** to create a new field.

![](images/hl7DefFieldEditGeneric.gif)

**Data Type**: Linked to fields internally defined by Open Dental, so users will only have the option to select a data type for fixed text fields.

**Table ID**: For informational purposes only and is not used by Open Dental or inserted into outgoing messages.

**Item Order**:

**Fixed Text**: Fixed text fields are ignored for incoming messages, and simply inserted in the proper item order for outgoing messages.

**Field Name:** Lists only fields that Open Dental will process for incoming messages or fill in with data from the database when constructing outgoing messages.

## Message History

To view a log history of HL7 messages, click **History** on the HL7 Defs window.

![](images/hl7history.gif)

Filtering options:

* **Start/End Date**: View log entries for a specific date range. Click **Refresh** to update the list.
* **Patient**: Click **Find** to open Select Patient and view messages associated with a specific patient.. Click **All** to include messages for all patients.
* **HL7Status**: View log entries for messages with a specific status. Click **Refresh** to update the list.