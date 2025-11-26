Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

MySQL User Manager

See [Database Management Systems](databasemanagementsystems.html).

The MySQL User Manager is useful when adding or managing MySQL users.

In the Open Dental installation folder, double-click **MySQLManager**.

![](images/mysqlUserManager.png)

The MySQL Manager tool can only be used on the server. It is especially useful for offices using [Middle Tier](middletier.html).

Note:

* This tool cannot be used to add or edit MySQL Reserved System Users.
* The information on this page applies to both MySql and [MariaDB](mariadb.html) users.
* Also see: [MySQL Security](securitymysql.html)

Connection Settings: Enter the connection settings prior to managing the users.

* **Server Name**: This shows as *localhost* since this tool is only usable from the server.
* **Port - If different than the default 3306**: Typically blank. If using a custom port, enter the number here.
* **MySQL User**: Typically *root*. If using a different user, enter the username here.
* **MySQL Password**: Enter the password as set during the MySQL installations. Leave this blank if no password has been created.

Users: Lists all users associated with MySQL.

* **Add**: Add a new MySQL User.
* **Edit**: Click to make changes to the highlighted user. Alternatively, double-click a user to edit.
* **Drop**: Remove an existing MySQL User. The user currently connected cannot be dropped.

When adding or editing a user, the following window appears:

![](images/mysqlusereddit.png)

* **MySQL Username**: If editing, this is the existing username. If adding, create a new username.
* **Password**: Enter the password for the selected user, or create a new password. Use this box to create a new password for the selected user if needed.
* **Retype Password**: Re-enter the password to verify.

Permission Level: Grant the desired level of permissions to the selected user.

* **Full**: Allows full permissions for the user.
* **Low**: Only allows user to read data. This user cannot access the Open Dental program, but can run SELECT queries from the command line.

Note: The [Open Dental Service](opendentalservice.html) and [eConnector](econnector.html) must be reinstalled after using the MySQL User Manager to create or change a password for the user they are set up with. This is normally the 'root' user.