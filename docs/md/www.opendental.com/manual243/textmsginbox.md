Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Text Messaging Mailbox

Use the Text Messaging Mailbox to view the history of sent and received text messages.

In the [Main Toolbar](toolbar.html), click the [Text](textmessages.html) dropdown. Select an option.

![](images/textInbox.png)

The option selected in the dropdown determines which messages can be viewed upon opening:

* **Text Messages All**: View all sent and received messages.
* **Text Messages Received**: View received messages only. An orange notification shows in the toolbar when there are unread text messages.
* **Text Messages Sent**: View sent messages only.

From this window, users can also reply to messages, block numbers, and attach unassigned messages to patients.

## Filters

Use the filters to determine which messages display.

![](images/textMailboxFilters.png)

**Date From / To**: Show text messages sent or received within a specific date range.

**Patient**: Filter by patient.

* **Current**: Show texts for the patient currently selected in Open Dental. If patient is part of a family, the guarantor is selected.
* **Find**: Select a different patient.
* **All**: Show texts from all patients.

**Hidden / Received / Sent**: Check to show Hidden, Received, and Sent messages.

**Group Messages By**:

* **Patient**: Show one row per patient.
* **Phone Number**: Groups messages by number and displays all patient that share the number.
* **None**: Show every message per row.

**Clinics**: Filter by one or more clinics.

Click **Refresh** to update the results.

## Text Messages Grid

Text conversations, including those sent from ODMobile or ODTouch are listed. The grid results update based on filters set above.

![](images/textMailboxGrid.png)

Up to 100 messages are displayed at a time. When there are more than 100 messages, use the navigation arrows above the grid to scroll through pages. Bold text indicates a conversation has unread messages. Click any header to sort.

* **DateTime**: Displays the date and time the last text was sent or received.
* **Sent / Received**: Only displays when Group Messages By is set to *None*. Displays whether the message was sent or received.
* **Status**: Information changes depending on Group Messages By Setting.
  + If Group Messages By is set to None: For sent messages, indicates if the message is Delivered, Pending, or Failed. For received messages, indicates if the message is Read or Unread.
  + If Group Messages By is set to Patient or Phone Number: Indicates if the message was Sent or Received (Rcv). For Sent messages, also indicates if the message was Delivered, Pending, or Failed. For Received messages, also indicates if the message is Read or Unread.
  + Messages are automatically marked read when opening a conversation in Open Dental, [ODMobile](opendentalmobilemessages.html), or [ODTouch](odtouchmessages.html).
* **#Phone Matches**: Only displays when Group Messages By is set to *None*. Displays a number if multiple patients share the same number. Right-click and select Change Pat to associate a specific patient.
* **Patient Phone**: Displays the phone number for the patient.
* **Patient**: Displays the patient name.
  + Messages are automatically linked to a patient when phone numbers are an exact match.
  + If multiple family members have matching numbers, it attaches to the guarantor.
  + If multiple patients across two or more families have the same number, or there is no patient with a matching number, the patient is *Unassigned*.
* **Cost**: Only displays when Group Messages By is set to *None*. Displays the cost of the message sent. See [Integrated Texting Q and A](textmsgfaq.html) for how cost is calculated.
* **Clinic**: Displays the clinic associated to the patient.
* **Latest Message**: Only displays when Group Messages By is set to *Patient* or *Phone Number*. Displays the last message sent or received.

Right-click options: These options are only available when Group Messages By is set to *None*.

* **Change Pat**: Change the patient attached to a received message.
* **Mark Read/Unread**: Change the status of a received message.
* **Hide/Unhide**: Hide or show the message in the list. Text messages cannot be deleted.
* **Go to Patient**: Make the selected patient active.
* **Block Number**: Block incoming text messages from specific mobile numbers. The sender sees the text message as delivered, but it does not appear in Open Dental. Blocked messages cannot be recovered.

## View Messages

Click on a row to view the conversation thread on the right.

![](images/textMailboxMessage.png)

Sent and received messages with the patient display. Messages sent to patients include a status in gray of *Delivered*, *Sent*, or *Not Delivered*.

To send a reply, enter the message then click **Send**. The character and message count is updated as a message is typed.

If the monthly texting limit is reached, there is a prompt to increase the limit in the [SMS Warning Amount](textintegratedmonthlylimit.html).

If a message has a failed status, see [Integrated Texting Troubleshooting](textintegratedtroubleshooting.html) to troubleshoot why.