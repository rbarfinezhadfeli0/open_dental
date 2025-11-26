Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Amazon RDS

See [Database Management Systems](databasemanagementsystems.html).

The steps below are general guidelines for setting up a Open Dental database in the cloud using Amazon Relational Database Service (RDS).

Note: The database must use MySQL InnoDB tables and must be in an Amazon RDS compatible version of MySQL or MariaDB.

## Create an Amazon RDS MySQL Server Instance

1. Log into your Amazon Web Services account and select the RDS option.
2. On the left, select Instances or click Get Started on the RDS home page.
3. Enter the Instance Specifications:
   * Select [MySQL](mysql.html).
   * DB Engine Version: Select the latest stable version of MySQL 5.5 or MariaDB 10.5.
   * DB Instance Class: Select the instance class that will support the estimated usage.
   * Multi-AZ Deployment: Optional.
   * Storage Type: General Purpose SSD.
   * Allocated Storage: Enter the storage amount.
   * DB Instance Identifier: The identifying name of the DB Instance.
   * Master Username, Password:
4. When settings are complete, click Next Step.
5. Follow the defaults for the VPC (Virtual Private Cloud).
6. Under Database Options, enter a name for the database.
7. Leave the other settings to the default.
8. Select the preferred backup options.
9. Select preferred monitoring or maintenance settings, then click Launch DB Instance.

It may take a few minutes to create the RDS instance.

## Upload the Database

We use SQLYog to connect to the database and upload the database. Any database management software should also work.

1. In SQLYog, connect to the RDS.
2. Launch the RDS instance page.
3. Select Instance Actions, then See Details.
4. Copy the Endpoint information to the SQLYog MySQL host address. Remove any port numbers and enter it in the Port field.
5. Enter the username and password created when setting up the server instance in Amazon RDS.
6. Upload a copy of the database to the RDS server (connect from your local MySQL server and copy the database to Amazon RDS).

## Connect to the Database from Open Dental

1. Launch Open Dental.
2. On the Choose Database window, enter the Endpoint information as the server information (from the Amazon Web Service RDS page).
3. Enter the username and password created when setting up the server instance in Amazon RDS.
4. Select the database.
5. Click OK to connect.

## Troubleshooting

**Error when uploading the database to the RDS instance.**

This is most likely due to a max\_allowed\_packet error. To workaround it, follow these steps.

1. In your Amazon Web Service account, go to the RDS platform page.
2. Click on the parameter group settings.
3. Click Create Parameter Group.
4. Select MySQL5.5 as the parameter group family and apply a meaningful Group Name and Description.
5. Go back to the parameter group page and select the newly created group.
6. Click Edit Parameters and enter a large value for max\_allowed\_packets. 40000000 is recommended.
7. Save the changes.
8. Go to the Instances page.
9. Select the MySQL instance, click Instance Actions, then Modify.
10. Scroll to the bottom. In the DB parameter group, select the new parameter group.
11. Click Continue. Once the instance applies the settings, you will be notified that a reboot is needed to apply the new settings.
12. Select the instance, then in the Instance Actions menu, click Reboot.

    Once rebooted you should be able to upload a database.

**Error stating that the default engine is InnoDB but the tables are MYISAM.**

In [Database Maintenance](databasemaintenance.html), Tools, use the InnoDB tool to change the database from MyISAM to InnoDB tables. Then upload the database to Amazon RDS.

**Error message when opening Open Dental, Unable to set global sql mode. User probably does not have enough permission.**

This is because the sql\_mode variable is set to a value that is not compatible with Open Dental.

1. Use the steps above to create a new parameter group or edit the existing parameter group.
2. Modify the sql\_mode parameter to either a blank string or NO\_AUTO\_CREATE\_USER.