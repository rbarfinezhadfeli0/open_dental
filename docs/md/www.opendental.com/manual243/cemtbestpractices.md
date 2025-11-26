Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

CEMT Best Practices

The [CEMT](central.html) is designed to be a central hub for managing separate Open Dental databases.

* There can be only one CEMT database. It can be used by multiple CEMT clients.
* CEMT users are created with unique names in the CEMT database.
* Connections are set up to each Open Dental database.
* Security settings in the CEMT database, including users, are synced to each Open Dental database.
* CEMT users log into the CEMT tool, then launch a connection to an Open Dental database.
* A user's CEMT credentials log the user into the Open Dental database automatically.

## Use the CEMT

1. Create and use one CEMT database for all CEMT users.
2. Create a CEMT user for each person who uses the CEMT and assign them security permissions. These permissions restrict or grant access to certain areas of Open Dental databases (just like other Open Dental users).
3. Create a connection for each Open Dental database the CEMT should manage.
4. Refresh Connection on each connection, then Sync all security settings to all Open Dental databases.
5. Have the user log into the CEMT using their CEMT username and password.
6. The User can double click a connection to launch Open Dental and connect to the Open Dental databases. Logging on to the Open Dental database is automatic with the permissions set in the CEMT.
7. Manage all CEMT users in the CEMT only and sync to all Open Dental database after any change. This avoids any concurrency issues.