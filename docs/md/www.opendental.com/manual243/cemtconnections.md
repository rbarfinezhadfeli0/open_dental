Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

CEMT Connections

In the [Central Enterprise Management Tool ( CEMT )](central.html), click Setup, Connections.

![](images/centralConnectionsSetup.png)

Connect to unlimited databases using CEMT. Also group connections together to make running reports easier.

View Connections:

* **Connection Groups**: Connections can be grouped together. See [CEMT Connection Groups](cemtconnectiongroups.html).
* **Search**: Search for a connection. Connections search as characters are typed.

**Add**: Click to add a new connection. See below for details.

Conn. Order:

* **Up / Down Arrows**: Highlight a connection, then click to reorder it in the list.
* **Alphabetize**: Click to order connections in alphabetical order.

Prefs:

* **Automatically Log On**: Check to automatically log on to the target database when connecting through CEMT.
* **Dynamic Mode (launch mismatched version)**: Use to connect to a database from a different version of Open Dental without updating or downgrading the local client.
  + When checked, if the selected server and database are running a version different than the currently installed version on the workstation, Open Dental automatically creates a temporary install of the server's version of the Open Dental client into a dynamic folder (typically **C:\Program Files (x86)\Open Dental\DynamicMode**) and launches the program from there.
  + If using CEMT with Open Dental Version 24.1.79 and greater or 24.2.36 and greater, the tool cannot open databases using a version lower than 24.1.79 or 24.2.36. Update the database version or open the database outside of the CEMT instead.

## Add or Edit a Connection

Click Add, or double-click an existing connection to edit.

![](images/centralConnectionEdit2.png)

Enter connection details, then click OK.

* **Direct Database Connection**: Enter the Server Name, Database, MySQL User, and MySQL Password. (see [MySQL Security](securitymysql.html)).
* **Middle Tier Connection**: Enter the [Middle Tier](middletier.html) connection details. This is rare and should only be used if not using a direct database connection.
* **Show clinic breakdown on reports**: Check to enable clinic breakdowns on reports generated for this connection through CEMT.
* **Note**: Enter any notes regarding this connection. Note can be used to alphabetize the list.