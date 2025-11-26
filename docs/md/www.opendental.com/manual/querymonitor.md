Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Query Monitor

The Query Monitor window allows you to view query requests made to the MySQL database server as they execute in real-time.

In the [Main Menu](mainmenu.html), click Help, Query Monitor.

![](images/queryMonitor.png)

This window can remain open in the background to allow monitoring during normal use of the program. Activity displayed is only from the instance of Open Dental from which it was launched. It does not allow you to monitor all queries being processed by the MySQL server.

Note:

* The *Query Monitor View* permission is required to access the Query Monitor.
* The Query Monitor is not available when using a Middle Tier connection.

**Query Feed**: Grid shows details on queries sent to the MySQL server.

* **Server**: Computer name of the server that received the monitored query. This may be the name of the database server, report server, or read-only server.
* **Command**: Exact SQL query command sent.
* **DateTimeStart**: Recorded date and time of the query.
* **Elapsed**: Amount of time to process the query command.

**Start**: Click to begin monitoring queries.

**Stop**: Click to suspend monitoring queries.

**Clear**: Click to clear the Query Feed.

**Log**: Click to save a log of queries captured while monitoring. Monitoring must be stopped to use. Log file is saved to the *QueryMonitorLogs* folder in the OpenDentImages folder.

**Query Details**: Highlight an entry above to see complete details on the query submitted.

* **Command**: Full text of the query selected above.
* **Start**: Date and time when the selected query started.
* **Stop**: Date and time when the selected query completed execution.
* **Elapsed**: Amount of time the query took to complete.

**Copy**: Copy contents of the Command window from Query Details.