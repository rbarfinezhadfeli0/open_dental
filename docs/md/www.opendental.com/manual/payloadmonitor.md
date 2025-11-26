Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Payload Monitor

The Payload Monitor is used to log data sent to the Middle Tier server.

In the [Main Menu](mainmenu.html), click Help, Payload Monitor.

![](images/payloadMonitor.PNG)

The Payload Monitor is only available when connected to Open Dental via [Middle Tier](middletier.html). This window can remain open in the background to allow monitoring during normal use of the program.

**Payload Feed**: This grid shows details on data sent to the Middle Tier server.

* **Server**: This is not recorded in the Payload Monitor and is always blank.
* **Command**: Displays data sent.
* **DateTimeStart**: Recorded date and time of the data.
* **Elapsed**: Amount of time to process the data.

**Start**: Click to begin monitoring payloads.

**Stop**: Click to suspend monitoring payloads.

**Log**: Click to save a log of payloads captured while monitoring. Monitoring must be stopped to use. Log file is saved to the *QueryMonitorLogs* folder in the [A to Z Folder](atozfolder.html).

**Query Details**: Highlight an entry above to see complete details on the data submitted.

* **Command**: Full text of the data selected above.
* **Start**: Date and time when the selected payload started.
* **Stop**: Date and time when the selected payload completed execution.
* **Elapsed**: Amount of time the payload took to complete.

**Copy**: Copy contents of the Command window from Query Details.