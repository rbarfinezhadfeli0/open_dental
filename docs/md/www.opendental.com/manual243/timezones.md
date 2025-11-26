Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Time Zones

See [Advanced Topics](advancedtopics.html).

Database dates and times are stored with unspecified time zone information. This date and time model works perfectly for nearly all Open Dental customers because computer networks are typically contained within a single time zone, so no time zone information is necessary. If all of the computers on the network (including the server) are within a single time zone, the information on this page is not applicable unless there are plans to expand the network to multiple time zones in the future.

In general, if there are issues with time zones, first update Open Dental to the latest stable version, then contact [Open Dental Support](../contact.html) for input.

## Middle Tier

[Middle Tier](middletier.html) is not typically an issue with time zones. The [Database Management System](databasemanagementsystems.html) (DBMS) server time may be used when logging some date or time stamps (e.g., Audit Trail); this may differ from the middle tier server.

## Replication

If using [Replication](replication.html) in different time zones, data will be synced but may not show at all locations.

## Remote Access

If using a [Remote Access](remote.html) app to access an Open Dental database, users may notice that the workstation is using the time zone of the database they are remotely accessing, rather than the local time. This will affect features in Open Dental such as the horizontal time line in the [Appointments Module](appointments.html).

If this happens, the solution is to create a group policy to direct the remote server to use the local time zone on the user's workstation for software applications like Open Dental. Note that most times recorded in Open Dental are not affected by group policy, because they use the time zone of the DBMS server and not the workstation time.