Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

ODBC

See [Database Management Systems](databasemanagementsystems.html).

ODBC is a standardized data connection format which will allow all your data to be directly available to other programs without having to do an export first. Any program can then access the database including Word, Excel, Access, and OpenOffice.org. You will have to install the ODBC driver on each computer where you want to access the database.

ODBC connections are not an option to use as a data source for our actual client software. See [Multiple Locations](multiplelocations.html) for better options such as Middle Tier or VPN with direct connection.

Download and install the [MySQL](mysql.html) ODBC version 8.0.12 (32-bit) driver from <https://downloads.mysql.com/archives/c-odbc/>

Note: If you have a 64-bit Office, or third party program, you can use the 64-bit driver instead.

1. Open Control Panel, (Performance and Maintenance), Administrative Tools, ODBC Data Sources (32-bit).
2. Click on the second tab, System DSN.

* Open Dental will not be on the list, so you will be adding it to the list which will make it accessible from other programs.
  ![](images/odbcmain.png)

3. Click Add.
   ![](images/odbcpick.png)
4. Find the MySQL ODBC driver on the list, and click Finish.
   ![](images/odbcconfig.png)

The Data Source Name is just any name that you want to use to refer to this data source. Fill in the Host/Server Name, Database Name, User, and Root as described in setting up the freedentalconfig.xml file. The Host/Server name will only be localhost if you have one computer that is not networked. Otherwise, it will be the name of the computer that is the server. The database name will be opendental unless you have changed it. The username will be root with no password unless you have set up passwords in MySQL/MariaDB.