Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Dental School Servers

Here are some ideas for [Dental Schools](dentalschools.html) server organization:

**MySQL Server**: Running the MySQL database.

**Application Server 1**: Running our [Middle Tier](middletier.html) for security.

**Application Server 2 (optional)**: Also running the Middle Tier. Serving more workstations. This may not be needed if Application Server 1 is adequate for the number of workstations.

**Remote Desktop Server (optional)**: Using either MS or a competing remoting solution. This would only be for a few remote users, not for the majority of users.

**Report Server (optional)**: Running a [Replication](replication.html) replica database to take some load off the MySQL Server. If a malformed query is run, this report server will go down instead of the MySQL Server. Limit primary keys to a narrow range.

**File Server (maybe optional)**: For storing images, especially radiographs, but also scanned documents. The needed capacity of the file server will vary widely between institutions. If any scanning or digital imaging will be performed, this should be a separate server.