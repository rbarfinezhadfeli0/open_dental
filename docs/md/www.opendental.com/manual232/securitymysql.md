Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

MySQL Security

This information about [Computer Security](securitycomputers.html) is for advanced IT users. MySQL security setup is the responsibility of a practice or its IT, although we recommend contacting [Open Dental Support](../contact.html) for assistance implementing any changes.

[MySQL](mysql.html) / [MariaDB](mariadb.html) is the database server where all the data tables are stored.

MySQL is only as vulnerable as the local network security allows. It is not secure to expose the MySQL service to the internet (World Wide Web). Do not open the MySQL port (default is port 3306) on routers and do not allow incoming traffic for that port. The port can be opened as [Firewall](firewalls.html) exception rule on servers but NOT on routers. In simple terms, this means do not open the database to the entire internet, even if it thought that the source IP address is verified: it is not sufficient as IP addresses can be spoofed.

MySQL user names and passwords are a secondary level of security. To access an Open Dental database, a MySQL user can require a password be used.

Note:

* Putting passwords on MySQL does not solve all security issues. Always ensure the network and server are protected. See [Computer and Network Setup](../manual/computernetworksetup.html).
* MySQL passwords are also not the same as password features built into Open Dental.

Small offices (users on small closed networks): It is up to the practice to decide whether or not to set MySQL passwords. We recommend that this is done. If someone has access to the data on the server then MySQL passwords do not provide additional protection. Therefore some users may choose to not set MySQL passwords.

Large enterprises should use MySQL users and passwords and create institutional safeguards against losing the password.

## Set Up the User and Password in MySQL During Installation

For new installations, the [Trial Installer](../trial.html) prompts for the creation of a MySQL username and password.

![](images/trialInstallerMysqlPassword.png)

Enter the information as desired. If the password is left blank, users receive a warning and must confirm their choice to proceed without a password.

## Adding MySQL Password Later

If using an older installation, or if a user clicked **Do this later** and would like to start using a MySQL password, see [MySQL User Manager](mysqlusermanager.html). For versions 19.3 and below, follow the steps below:

Note: We highly recommend contacting our [Support Team](../contact.html) for assistance with this process as we have internal tools that make it easier.

1. In the MySQL command line client, or in User Query in Open Dental from any workstation, run this query to get a list of current users, hosts, and passwords.

   SELECT USER, HOST, PASSWORD FROM mysql.user;

    A default installation has 5 users already set up.
   * 'root'@localhost
   * 'root'@localhostIP
   * 'root'@'::1'
   * 'root'@'%'
   * ''@'localhost'
2. For each user/host combination, run a query to change the password (replace 'new\_password' with the desired password). Run each query one at a time.

    Examples:

   SET PASSWORD FOR 'root'@'127.0.0.1' = PASSWORD('new\_password');

   SET PASSWORD FOR 'root'@'::1' = PASSWORD('new\_password');

   SET PASSWORD FOR 'root'@'%' = PASSWORD('new\_password');

   SET PASSWORD FOR ''@'localhost' = PASSWORD('new\_password');

   SET PASSWORD FOR 'root'@'localhost' = PASSWORD('new\_password');

    IMPORTANT: root@% is a completely different than root@localhost. The password must be changed for both to secure the database from root on all computers.

    Consult the [MySQL website](https://www.mysql.com) for details about each user.

    By default, root@localhost has global access for MySQL and all privileges are enabled.
3. Run the query in Step 1 again to confirm the passwords. Each user/host combination should show a hashed version of the password.
4. Restart the server, or run the query FLUSH PRIVILEGES; for the changes to take effect.

Note: If workstations are logged into Open Dental when the password is set, they may receive an error. Close out of Open Dental and reopen the program. Follow the steps below to Change the User and Password from [Choose Database](choosedatabase.html).

## Change the User and Password on the Choose Database Window

After making password changes in MySQL, the Open Dental workstations no longer have access to the database.

1. Close Open Dental on each workstation.
2. Run Open Dental as an admin. The Choose Database window prompts for a MySQL User name and Password.
3. Verify the server and database.
4. Verify the user (e.g., root).
5. Enter the password just created (for default installations typically the root@localhost password).

![](images/mysqlChooseDatabase.gif)

## More Details

The password entered into the MySQL Configuration window on each computer is stored as obfuscated text in the [FreeDentalConfig.xml](freedentalconfig.html).

If the practice plans on hosting multiple customers on the same database server, see [Host Multiple Databases from One Web Server](hostmultipledatabases.html) for isolation information.

Practices may need to work from particular devices or IP address ranges for multi-tenant installations or if there are complex networks where some segments should not have access. Open Dental does not provide advice or direct support on setting up usernames for particular devices or network segments. For multi-tenant installations, consult an IT professional. For complex networks, consult an IT professional, or for even more security use the Middle Tier. Information about setting up usernames for specific devices or network segments is available at <http://dev.mysql.com/doc/refman/5.5/en/account-names.html>. Open Dental works fine as long as the specified MySQL user has the correct (full) permission set.

## Middle Tier Users

There are two MySQL users that may be specified: a regular user and a user with lower privileges.

* Regular user: Must have all permissions for all tables starting with "opendental" (if that is the name of the database). Must be able to do everything from adding tables to making a backup of the database. It is during the backup process that the user must also have access to a database that might be called "opendentalbackup\_07\_14\_2006", and the user must also have permission to create tables, etc in this other database. Either give this user privileges for all databases or use a wildcard character to give privileges for similar databases.
* UserLow: A user with much lower privileges. No SQL statements are allowed to be passed to the middle tier service except report queries. UserLow is always used for these report queries. This allows prevention of injection attacks at the database level. UserLow should have very limited privileges, just SELECT and CREATE TEMPORARY TABLES, and only for the current database. They are still be able to use queries to select any data, but not to alter it.

When users connect from the client computers, they will never see or have access to the users that set up in this file. They will be connecting using an Open Dental username and password. See [Choose Database](choosedatabase.html) for an example.

## Troubleshooting

If workstations have trouble connecting, it may be a Firewall issue. If you can't get past the Choose Database window, then it's a firewall issue. You may need to create an exception to allow Port 3306. See [Open Port 3306](port3306.html). If you've turned off all firewalls on the server and are still stuck at the Choose Database window, see [Troubleshooting](troubleshooting.html).

Users and password: If you change passwords and it no longer works, carefully retrace your steps to make sure the new user has all privileges and access to the Open Dental database. Be aware of the difference between user@% and user@localhost. Double check the privileges and try again.