Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Replication Auto Increment

When using [Replication](replication.html) it is important to avoid data collision. MySQL provides variables to avoid conflicts: auto\_increment\_increment and auto\_increment\_offset. By choosing non-conflicting values for these variables, servers will not have conflicts when inserting new rows into the same table.

* auto\_increment\_increment: Controls the increment between successive AUTO\_INCREMENT values.
* auto\_increment\_offset: Determines the starting point for AUTO\_INCREMENT column values.

For more details:

* MySQL Users: <https://dev.mysql.com/doc/refman/5.6/en/replication-options-source.html>
* MariaDB Users: <https://mariadb.com/kb/en/replication-and-binary-log-system-variables>

## Update the my.ini File

To implement this strategy, add the following lines to the [mysqld] section of the [my.ini](myini.html) file on each replication server during [One-Way Replication](replicationoneway.html) or [Daisy Chain Replication](replicationdaisychain.html) (step 5).

log-bin=mysql-bin
server-id=X
log-slave-updates
replicate-do-db=opendental
relay-log=server-relay-bin
skip-name-resolve
sync-binlog=1
auto\_increment\_increment=Y
auto\_increment\_offset=Z
#If using InnoDB, remove the hashtag for the line below
#innodb-flush-log-at-trx-commit=1
#If using MariaDB, remove the hashtag for the line below
#expire\_logs\_days=30

Change the following values:

* Change server-id as needed. It must be unique for each replication server.
* Change replicate-do-db to the name of the database to replicate.
* Change relay-log to include the name of the server (e.g., relay-log=LocalComputerIPAddressorName-relay-bin)
* Change auto\_increment\_increment to equal the total number of servers (e.g., 3).
* Change auto\_increment\_offset as needed, using a unique value on each server that doesn't exceed the auto\_increment\_increment value (e.g., 1, 2, or 3).
* Change innodb-flush-log-at-trx-commit=1 if all tables are all InnoDB by removing the # and the comment after the value.
* Change expire\_logs\_days to increase or decrease the number of days after which the binary log can be automatically removed. Removals take place when the server starts up, when the binary log is flushed, when the next binary log is created after the previous one reaches the maximum size, or when running PURGE BINARY LOGS.

auto-increment example if you have 3 servers:

* server 1: auto\_increment\_increment = 3, auto\_increment\_offset = 1
* server 2: auto\_increment\_increment = 3, auto\_increment\_offset = 2
* server 3: auto\_increment\_increment = 3, auto\_increment\_offset = 3

Whenever you add or remove a server for daisy chain replication, you must also change the auto\_increment\_increment value on all servers. See [Daisy Chain Replication: Add Server](replicationdaisychainnewserver.html).