Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Linux Server

See [Linux and Mac](clinuxmac.html).

Linux servers are the responsibility of the practice or IT to install. Open Dental Support cannot assist with Linux server installations or Linux server troubleshooting.

## MariaDB

Note: Also see [MariaDB Package Repository Setup and Usage](https://mariadb.com/kb/en/mariadb-package-repository-setup-and-usage/) on the Maria DB website for more information.

1. Install the [MariaDB](mariadb.html) package that best matches system from <https://mariadb.org/download/>.
   * It is recommended to use the MariaDB repository and their accompanying script for version targeting to get the correct version. Using the public repository for distribution may get a version of MariaDB that has not been tested for Open Dental.
   * For a new install, following the steps found on MariaDB Package Repository Setup and Usage and run the following commands (using sudo apt install curl or sudo yum install curl):
     + wget https://downloads.mariadb.com/MariaDB/mariadb\_repo\_setup
     + sudo curl -LsS https://r.mariadb.com/downloads/mariadb\_repo\_setup | sudo bash -s -- --mariadb-server-version="mariadb-10.11.10"
     + chmod +x mariadb\_repo\_setup
   * If upgrading an existing installation, run:

     ./mariadb\_repo\_setup --mariadb-server-version="mariadb-10.11.10"
2. Run the following commands:
   1. sudo apt install mariadb-server mariadb-backup

      or

      sudo yum install mariadb-server mariadb-backup
   2. sudo systemctl status mysql

      Note: The status should be active. If the status is not active, use the command:

      sudo systemctl start mysq
   3. sudo mysql\_upgrade -u root -p -f

3. Set up grant tables on Linux by running the following commands. It is recommended that a password is set for the root user which can be entered between the single quotes that follow 'IDENTIFIED BY'. This is documented at: <https://mariadb.com/kb/en/grant/>.

   GRANT ALL ON \*.\* TO 'root'@'%' IDENTIFIED BY '';
    GRANT ALL ON \*.\* TO 'root'@'localhost' IDENTIFIED BY '';
4. Edit the MariaDB configuration file named **server.cnf** to disable the use of InnoDB tables by default. The **server.cnf** file is usually located at the path **/etc/my.cnf.d/server.cnf**. Add the following text under the [mysqld] section:

   default-storage-engine=MyISAM
    max\_allowed\_packet=40M
    max\_connections=3000
    port=3306
    sql\_mode=''
    explicit\_defaults\_for\_timestamp=1
5. Copy a blank or current Open Dental database to the Linux server.
   * Each Linux installation might have a different MariaDB data location or path. The database path is documented in either **my.cnf** or **server.cnf** and is defined on a line starting with datadir=. The default path can vary and is currently **/var/lib/mysql**
   * Copy the database files to a folder that is created in the data directory. For example, if the path is **/var/lib/mysql** and opendental is the name of the new database, copy to **/var/lib/mysql/opendental/**.
   * Ensure the newly created database folder has permissions for MariaDB to access the files. Either set the owner to the MySQL user or set the folder permissions to allow access to all users. Open a terminal window and type one of the two commands (change the directory path to match the actual database path): **chown -R mysql:mysql /var/lib/mysql/opendental** or **chmod -R 777 /var/lib/mysql/opendental**.

## Set Up File Share (A to Z Folder / OpenDentImages)

This is just like setting up any other fileshare on a Linux machine. This can be set up as desired, but all users need full permissions (read, write and delete).

A good option is to set up Samba, then set up the share. Directions can be found here: Here are some web sites with directions: <http://www.samba.org/samba/docs/man/Samba-HOWTO-Collection/>

Steps we followed:

1. Install Webmin ([www.webmin.com](http://www.webmin.com)). Log on as root or other user with adequate permissions. Click the Servers tab, choose Samba windows filesharing.
2. Create fileshare, then edit securities to set <writeable> and <guest access> to yes.
3. Open an SSH terminal to the Linux machine. Log on as root or other user with adequate permissions.
4. Navigate to immediate parent directory of shared directory.
5. Type chmod -R 777 foldername.
6. This process is done. ls - l will show the permissions for all of the child folders including the share.

Once the share is set up, copy the contents of the [A to Z Folder](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7atozfolder.html) (e.g., OpenDentImages) to this new share, then set [Data Paths](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paths.html) to this location.

## Convert an Existing Linux Open Dental MySQL/MariaDB database to use MyISAM tables instead of InnoDB Tables

In [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html) run the InnoDB tool.

Another option is below. Only consider this option if the office has been using the Linux server already.

1. If needed, check to see if any of the current database tables are not in MyISAM format. Run the following query and replace the database name of opendental with the actual database name:

   SELECT TABLE\_NAME,ENGINE
    FROM INFORMATION\_SCHEMA.TABLES
    WHERE TABLE\_SCHEMA = 'opendental'
    AND ENGINE NOT LIKE 'MyISAM';

    If the query does not return any results, steps 2 - 6 do not need to be completed.

2. Stop the MySQL/MariaDB service.

3. Backup the database.

4. Restart the MySQL/MariaDB service.

5. Generate the alter table script using the following script (make name adjustments as needed). Make sure that the output folder exists and that the mysql user has full permissions on that folder. Also make sure that the output script file (see below) DOES NOT exist before running the command or else the command will fail. For example, if running the command a second time, the script previously generated must be deleted.

   SET @dbname='opendental';
    SET @outengine='MYISAM';
    SELECT CONCAT('ALTER TABLE ',TABLE\_NAME,' ENGINE = ',@outengine,';')
    FROM INFORMATION\_SCHEMA.TABLES
    WHERE TABLE\_SCHEMA = @dbname
    INTO OUTFILE '/tmp/mysql/myisam\_convert\_script.txt';
6. Run the output script myisam\_convert\_script.txt in MySQL/MariaDB as follows. From a terminal window type (make changes for actual temporary script file path as needed):

   mysql -u root -p opendental < /tmp/mysql/myisam\_convert\_script.txt
7. Edit the **server.cnf** file and make sure that the skip-innodb and default-storage-engine=MyISAM options are in the file on their own lines and that the lines are uncommented. Save any changes to the **server.cnf** file and if the file was modified then restart the MySQL/MariaDB service. This step prevents new tables from being generated as innodb tables in the future.

## Troubleshooting

**During an update, receive this error: The database tables are in MyISAM format, but the default database engine format is InnoDB. You must change the default storage engine within the my.ini (or my.cnf) file on the database server must be changed and restart MySQL in order to fix this problem. Exiting.**

To **server.cnf**, add default-storage-engine=MyISAM (Step 3 above under MariaDB)

Case Sensitivity: Linux MySQL/MariaDB is case sensitive by default. Open Dental tries to use only lowercase table names, however may have some mixed case variables. If ther are issues with case sensitivity, users may want to turn case sensitivity off. Simply add this line to the **server.cnf** file on the Linux server: lower\_case\_table\_names=1.

Example of errors due to case sensitivity:

* MySql.Data.MySqlClient.MySqlException (0x80004005): Table 'opendental\_bsm\_lou\_sh.ehrTrigger' doesn't exist.

  (Notice the table name ehrTrigger is mixed case).
* Unhandled exception trying to access the EHR Dashboard.