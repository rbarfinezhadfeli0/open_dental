Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Refreshing Data

See [Database Management Systems](databasemanagementsystems.html).

When data is refreshed, it means that the newest data is retrieved from the [MySQL](mysql.html)/[MariaDB](mariadb.html) database so that you can be certain you are looking at current data. The usual way of refreshing data in Open Dental is by clicking on any of the module buttons to the left. Even if you click on the module button for the module you are already in, all the data on the screen will be refreshed to show the most current data.

For the [Appointments Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointments.html), clicking on the module button will refresh the data, but that is sometimes not often enough. If the Appointment screen has been sitting idle for hours with no user interaction, you could easily end up with a very outdated screen. For appointments, everyone in the office generally needs to know about changes the moment they happen. For this reason, an additional automatic refresh has been built in. If a user at any workstation makes a change to an appointment, a signal is automatically stored in the database. Every 5 to 10 seconds, each workstation checks the database for new signals. If one is found for the date showing in the Appointment module, then that workstation automatically refreshes from the server. So, you will regularly see updates to the schedule being made for you even if you don't manually refresh.

**For advanced users, if you are interested**: Much of the routine data is stored locally on the workstations instead of repeatedly sending queries to the server. Examples of this kind of data are definitions, procedure codes, fees, practice data, providers, schedules, insurance categories, and spans. This data is always the same, day after day, so it would really be a waste of network resources to be constantly refreshing this data. Instead, Open Dental gets a copy of each of these tables when it is first started. Then, it uses the same automatic refresh feature as for appointments to handle changes. So, if someone at the front desk is entering in a new fee schedule, once they are done, a signal is sent to the database, and within 10 seconds, all of the other computers in the office will have refreshed the fees table. Even though the MySQL/MariaDB database can handle hundreds of queries per second, this strategy reduces the amount of network traffic and makes Open Dental run faster.

You have control over how frequently each workstation checks for new signals in [Preferences](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7preferences.html). For *Process signal interval*, set the number of seconds between checks to the database. If you have a very large clinic (over 50 computers) you might need to increase the time a little bit. Otherwise, anywhere between 6 and 20 seconds should work well. Leave it blank to disable the automatic refresh. If you set a value for *Process signal interval*, you can also set a value, for *Disable signal interval after this many minutes of user inactivity* that will disable the automatic refresh when the workstation is inactive.

## Multiuser Concurrency Issues

When many users are accessing the same data, we need to consider the possibility of concurrency issues. In other words, what happens when two different computers are using the same exact data at the same time? The first thing to remember is that MySQL/MariaDB is multi threaded and very powerful. So we don't need to worry about multiple users causing any actual database corruption. The database will never malfunction just because multiple users are using it. The real concern is that the database might be left in an inconsistent state and the integrity compromised. For instance, we might be concerned about the possibility of a procedure being attached to an appointment that no longer exists. The database would not malfunction, but it might cause Open Dental to malfunction. The other lesser concern is that if two users try to save changes at the same time, that one user may have their changes overwritten by the other user. This would not cause any future malfunctions, but would be annoying and, depending on what data was overwritten, it could be serious.

## Reading Data

Simply viewing data will never cause a concurrency issue. An unlimited number of users can view data at the same time and it will never cause any problems. Since over 95% of the queries to the database are a read operation instead of a write operation, we only need to consider the small percentage of cases where a write operation is actually taking place.

## Writing Data

There are two kinds of write operations. A user can insert a new row, for instance by adding an appointment or a procedure for a patient. Or a user can modify an existing row, for instance by moving an appointment or editing a procedure. Inserting a new row will not cause any concurrency issues. The only operation we are concerned with is when a row is edited. In MySQL/MariaDB, that is done by using an UPDATE command.

## Strategies to Preserve Integrity

Based on the way the user interface is organized, there are not very many tables that are susceptible to concurrency issues that would cause integrity problems. For instance, no provider or employee may ever be deleted. Instead, they are hidden, eliminating the possibility of any references to a provider that no longer exists. With enough programming, a feature could be added to allow providers to be deleted, but many tables would need to be checked for links, and those tables would need to be locked during the deletion process to prevent other users from creating new references. It is safer for now to simply not allow deleting of Providers, Employees, Definitions, etc.

One way the user interface helps prevent problems is by only allowing one place in the program to change information in a table. For instance, you can only edit an adjustment from the Edit Adjustment window. So even if another user is in the patient's account, the only way they could cause a concurrency issue would be by opening, editing, and saving the exact same adjustment that someone else was also editing and saving. The chances of this happening are minimal, and the only consequence would be that the first user's changes would not have been saved.

Some tables, however, have more places in the user interface where they can be changed. As an example, you can cause an update to a row in the appointment table by dragging an appointment to a new location, setting it complete, breaking it, or changing the confirmation status in addition to the usual way of double clicking on the appointment to open the edit window. Other tables that have multiple places in Open Dental where they can be changed are the patient table and the procedure table. When updating these particular tables, only the changed information gets updated instead of the entire row. So, if someone drags an appointment to a new location, only the AptDateTime and the Op columns are updated, and do not interfere at all with someone else who may be changing the Provider column for that very same appointment. This is a simple way to eliminate almost all concurrency issue in large offices that are heavily using computers.

The procedure note field is one of the most important fields in the database, so it perfectly preserves all historical versions. It's impossible to have a concurrency issue with procedure notes because no rows are ever changed. Subsequent changes to a note are stored as entirely new rows, and all historical versions of a note can be viewed using the audit mode in the Chart Module.