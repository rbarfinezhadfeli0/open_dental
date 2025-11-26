Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eCW HL7 Message Structure

In the [Main Menu](mainmenu.html), click Setup, Advanced Setup, **HL7**.

![](images/hl7Defs.gif)

There are three internal [eClinicalWorks HL7](hl7ecw.html) message definitions that exactly match the HL7 message structure for the three eCW bridge modes: Full, Standalone, and Tight. These message definitions are automatically enabled when the eCW bridge is turned on for a specific bridge mode. To set up generic HL7 messages, see [Generic HL7 Message Structure](hl7genericmsg.html).

Usually users will not modify message definitions here, but if users do (enable and modify), the options set here will override HL7 options defined on the eClinicalWorks Setup window. See eCW HL7 under HL7 Field Documentation and [HL7 Unit Tests](hl7tests.html) for more information.

Only Custom definitions can be edited.

* To create a new custom definition, select an internal definition then click **Copy**.
* To copy an existing custom definition, select it then click **Duplicate**.
* To edit a definition, double-click it.

![](images/hl7eCWDefEdit.gif)

For internal definitions, only information in the top portion of the window can be modified. Messages/Segment structure cannot be changed.

* **Enabled**: Enable the definition and activate editable fields.
* **Description**: The identifying name of the definition.
* **Mode Tx**: Select a transfer mode (Mode Tx) of File, TCP/IP, or Sftp.
* **Delimiters**: Select the separator characters.
* **Show Appts Module**: Give access to the Appointments module.
* **Show Account Module**: Give access to the Account module.
* **Send Quad as Tooth Num**: Usually quadrant information shows as surface information in a claim. However, some insurance carriers require that quadrant information show as tooth number and may reject claims if it doesn't. Check this box to send quadrant information as tooth number.
* **Send Long D Codes**: When checked, CDT codes that are longer than five characters will be allowed in outbound DFT messages. This will affect duplicate procedure checks.
* **Warn if Procs not attached to Appt**: Show a message prior to sending procedures via HL7 if they are not attached to an appointment.
* **HL7 Communication Options**: Set up the inbound and outbound folder paths or ports. The options vary based on the ModeTx. See TCP/IP mode below for steps.
* **OpenDental HL7 server and service name**: See [HL7 Service Manager](hl7servicemanager.html) for information about installing and naming the OpenDentalHL7 service.
* **Show Demographics**: Typically patient demographic information is not entered in Open Dental because it may be overwritten every time an inbound HL7 message for the patient is processed. If users want to be able to change and add demographic information in Open Dental, select *Change and Add Pts*. The user will be prompted to enter a password which is hl7.
* **Messages/Segments**: Can only be edited in custom definitions. See Editing Messages/Segments below.

Hint: If using TCP/IP mode, we recommend using version 14.1.8 or greater. The incoming and outgoing ports need not match, but the ports will have to be available for use by the OpenDentalHL7 service.

1. For Mode TX, select *TcpIp*.
2. Enter an Incoming Port.
3. Enter an Outgoing IP: Port (outgoing IP address followed by a colon and a port number). It should match the IP address of the computer Open Dental will send HL7 messages to.

## Editing Messages/Segments

For custom definitions, users can modify the incoming and outgoing message structure (shown in the Messages / Segments grid). To add a new message, click **Add**. To modify an existing message, double-click the message or one of its segments.

![](images/hl7DefMessageEdit.gif)

**Message Type**: For a description of all message types, see [HL7 Inbound and Outbound Message Types](hl7msgs.html)

**Event Type**:

**Incoming/Outgoing**:

**Item Order**: Determines the order the message will show in the Message / Segment grid.

**Segments**: Double-click on a segment to modify, or click **Add** to create a new segment.

![](images/hl7DefSegmentEdit.gif)

**Segment Name**: Can be selected from a list of available segment names supported by Open Dental.

**Item Order**: For outgoing messages, affects the message structure. For incoming messages, only determines the order the segment shows in the Message Edit window.

**Fields**: Double-click a field to modify, or click **Add** to create a new field.

![](images/hl7DefFieldEdit.gif)

**Data Type**: Linked to fields internally defined by Open Dental, so users will only have the option to select a data type for fixed text fields.

**Table ID**: For informational purposes only and is not used by Open Dental or inserted into outgoing messages.

**Item Order**:

**Fixed Text**: Fixed text fields are ignored for incoming messages, and simply inserted in the proper item order for outgoing messages.

**Field Names**: Lists only fields that Open Dental will process for incoming messages, or fill in with data from the database when constructing outgoing messages.

## Message History

To view a log history of HL7 messages, click History on the HL7 Defs window.

![](images/hl7history.gif)

Filtering options:

* **Start/End Date**: View log entries for a specific date range. Click **Refresh** to update the list.
* **Patient**: Click **Find** to open Select Patient and view messages associated with a specific patient. Click **All** to include messages for all patients.
* **HL7Status**: View log entries for messages with a specific status. Click **Refresh** to update the list.