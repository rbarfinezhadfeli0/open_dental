Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

MariaDB Data-at-Rest Encryption

See [Encryption of Data at Rest and in Transit](encryption.html)

Open Dental does not provide technical support for Encryption. For assistance, consult an IT professional. The information below is provided as a resource for an IT professional to help make encryption decisions. It is not intended for regular users.

Note: Databases must be converted to [InnoDB](mysqlinnodb.html) prior to encryption.

## Change Log On User for MySQL Service

1. In Windows, open Services.
2. Double-click the MySQL Service.
3. Select the Log On tab.
4. Change the option to *This Account*.
5. Enter the user credentials for the user that the MariaDB key file folder is being encrypted for.

## Implementing EFS for the key file

1. (*Optional, but highly recommended*) Back up the database to external encrypted media.
2. Log in as the Windows user that runs the MySQL service.
3. Navigate to the directory containing the MySQL data (default is **C:\mysql\**).
4. Create a new folder named *keys*.
5. Right-click the folder named *keys*.
6. Select Properties, then General tab, and click Advanced.
7. Check the **Encrypt contents to secure data** box.
8. Document that this once done in case it needs to be shown it was completed in the future.

## Creating an encryption key file

Instructions on creating the key file contents can be found at <https://mariadb.com/kb/en/file-key-management-encryption-plugin/#creating-the-key-file>. Once the key file has been created, place it in the *keys* folder and name it *keyfile* while logged in as the same user that runs the MySQL service.

## Implementing MariaDB Data-at-Rest Encryption

1. From the File Explorer, navigate to the directory containing the my.ini (default for MariaDB 10.5 is **C:\Program Files\MariaDB 10.5\my.ini**).
2. Right-click the my.ini file and open with Notepad.
3. Add the following lines to the bottom of the [mysqld] option group:

   plugin\_load\_add = file\_key\_management
    file\_key\_management\_filename = "C:/mysql/keys/keyfile"
    file\_key\_management\_encryption\_algorithm = AES\_CBC
    innodb\_encrypt\_tables=FORCE
    innodb\_encryption\_threads=20
    innodb\_default\_encryption\_key\_id=1
    aria\_encrypt\_tables=ON
    encrypt\_tmp\_disk\_tables=ON
    innodb\_encrypt\_log=ON
    encrypt\_binlog=ON
4. Click File, Save as.
5. Select Desktop as the save destination.
6. In File Explorer cut the my.ini from the Desktop and paste it into the MariaDB folder (default for MariaDB 10.5 is **C:\Program Files\MariaDB 10.5\my.ini**)
7. Click **Replace the file in the destination**. If prompted by UAC click **Continue**.
8. Restart the MySQL service.

## How does MariaDB Data-at-Rest Encryption Work

For more information in how MariaDB Data-at-Rest Encryption works, visit the MariaDB website: <https://mariadb.com/kb/en/data-at-rest-encryption-overview/>