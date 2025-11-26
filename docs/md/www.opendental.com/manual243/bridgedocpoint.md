Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Docpoint Bridge

See [Program Links](programlinks.html).

Docpoint synchronization application is a tool that transfers appointment data from Open Dental to Docpoint Web Service, and vice versa. This tool works as a cross vendor database replication to carry out, create, update, and cancel operations, in a cycle that is executed every 1 minute.

Open Dental does not maintain the Docpoint application. Any question on use of the program should be directed to Docpoint.

For U.S. operations: [www.docpoint.com](http://www.docpoint.com) and Puerto Rico: [www.docpoint.com/pr](http://www.docpoint.com/pr).

## How it Works

Docpoint creates a local database (SQLite) on the client machine which works as an intermediate layer to keep track of every appointment created from Open Dental and Docpoint. This layer also works as a buffer in case of an internet outage.

**Transferring data from Open Dental to Docpoint**: Does not require any writes on Open Dental database.

Create appointment:

1. Select appointments newly created appointments:

   SELECT AptNum, PatNum, ProvNum, Date(AptDateTime) as date, Time(AptDateTime) as time, Pattern, ProcDescriptFROM appointmentWHERE Date(AptDateTime) >= ? AND AptNum > ? AND AptStatus = 1 ORDER BY AptNum LIMIT ?
2. Docpoint application stores this data in the SQLite database.
3. A Docpoint process reads the appointments created in the SQLite database and sends to Docpoint Web Service through an HTTP API call. The appointments will be created on Docpoint if they pass the validation rules, and are sent over the appointment\_docpoint\_ids for the created appointments.
4. Docpoint stores the appointment\_docpoint\_id into the SQLite database. At this point each appointment will have two identifiers: one for Open Dental and one for Docpoint. These mapping identifiers will be useful for all future steps.

Update appointment:

1. Similar to creating appointments, Docpoint periodically checks for updates made on appointments (e.g. rescheduled appointments) using the same query for selected new appointments with parameter variations.
2. Docpoint stores an update even on SQLite database.
3. Docpoint then sends updated appointments and gets the confirmation from the web service.

Delete appointments:

1. Docpoint selects deleted appointments by using an AptStatus filter.
2. Docpoint stores a delete even on SQLite database.
3. As usual events are send to Docpoint web service and get a confirmation.

**Transferring data from Docpoint to Open Dental**: Requires writes on Open Dental Database.

Creating and updating appointments:

1. Desktop application asks Web service for the latest created appointments through an HTTP API call get\_appointments. This call will return all appointments relevant to the practice (for multiple providers if present).
2. Desktop application then stores the information of each appointment into the SQLite database and inserts an update or create event depending on whether the appointment is present in the SQLite database.
3. An insert query is executed on the Open Dental database if:

   INSERT INTO appointment (PatNum, ProvNum, AptDateTime, Pattern, ProcDescript , Confirmed, TimeLocked, Op, AptStatus, ProvHyg, NextAptNum, UnschedStatus, Assistant,ClinicNum, InsPlan1, InsPlan2, ProcsColored,ColorOverride, DateTimeArrived, DateTimeSeated, DateTimeDismissed)VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)If the patient does not exist in the system then it will create one using this query:INSERT INTO patient (FName, LName, Gender, Birthdate, Address , City, State, Zip, WkPhone, Email, Guarantor, PriProv, SecProv, FeeSched, BillingType, SchoolName, EmployerNum, ClinicNum, Premed, PreferConfirmMethod, PreferContactMethod,PreferRecallMethod, SchedDayOfWeek, PayPlanDue,SiteNum, ResponsParty, CanadianEligibilityCode,AskToArriveEarly, OnlinePassword, SmokeStatus,PreferContactConfidential, SuperFamily, TxtMsgOk)VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)Or it will update the appointment if it already exists through:UPDATE appointment SET AptDateTime=?, Pattern=? WHERE AptNum = ?

Delete appointment:

1. The application asks Docpoint Web Service about the latest deleted appointments through HTTP API call get\_deleted\_appointments.
2. Then the application modifies the SQLite database and adds delete events.
3. Finally it will execute the following query for each deleted appointment:

   UPDATE appointment SET AptStatus=0 WHERE AptNum = ?

The application gives the client an option to make two-way synchronization or just one-way where the application only transfers data from Open Dental to Docpoint without writing anything on the database. If a two-way sync is selected, the application has to write on appointment and patient tables. Also the application comes in with a database backup feature that could be disabled as well. Database backup creates a daily backup folder that contains the Open Dental database.

Example: If Open Dental database resides in: **C:\mysql\data\cpatientdate** then database would look like **C:\mysql\data\cpatientdate\_2013-9-5**

The application handles internet outage gracefully since it stores every event on its local database. It also handles racing condition very well, so when a practice runs the application for the first time, and has 2000 unsynchronized appointments, the application will segment the workload and execute events in manageable bundles.