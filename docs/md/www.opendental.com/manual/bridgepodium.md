Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Podium Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Podium**.

![](images/bridgePodium.png)

Podium allows users to automatically send review invitations to new and recurring patients. Podium uses the appointment schedule to send review invitations by text message to existing patients at selected time increments.

To sign up for Podium and begin using their services, visit [podium.com](../resources/redirects/redirectpodiumod.html). Users must be signed up for Podium to use the bridge in Open Dental. Once set up, click the Podium button in [Standard Reports](reportsstandard.html) to launch your account.

Note: Exceptions thrown by Podium can be found in **"PathToOpenDental"\Logger\Podium**.

**Enabled**: Check to enable the bridge.

**Hide button in Standard Reports**: Check if the bridge is unused. This hides the Podium button from the Standard Reports window.

**Computer Name or IP (required)**: Enter the computer name used to send invitations.

**API Token (required)**: Enter the API Token supplied by Podium.

**Location ID (required)**: Enter the Location ID supplied by Podium.

**Use service to send invitations**: Determine the method used to send invitations.

* Checked: Use the [Open Dental Service](opendentalservice.html) to send invitations. When checked, only the server must remain on.
* Unchecked: Use a specific computer to send invitations. The computer that sends Podium review invitations must remain on and have Open Dental opened at all times.

**Show commlogs in the chart and account**: Determine if Podium commlogs should display.

* Checked: Show Podium commlogs in the Chart Module and Account Module.
* Unchecked: Hide Podium commlogs.

**Clinic**: Select the clinic associated with the invite. When using clinics, the Location ID is based off the clinic associated to the appointment.

**Existing Patient / New Patient Trigger**: Determine which action triggers an invitation.

* **Set complete**: Send an invitation after an appointment is set complete.
* **Time Arrived**: Send an invitation after a patient is marked arrived.
* **Time Dismissed**: Send an invitation after a patient is marked dismissed.

**Trigger Rules**: Enter the amount of time after the selected trigger above the invitation should be sent.

Note: If a patient declines review invitations be sent via text message, set their *Text OK* status in the [Edit Patient Information](patientedit.html) to *No*. Review invitations are still sent via email.