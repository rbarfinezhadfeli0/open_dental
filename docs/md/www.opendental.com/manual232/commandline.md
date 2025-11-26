Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Command Line Arguments

See [Advanced Topics](advancedtopics.html).

The following command-line arguments are allowed. Quotes around the information are required if there are any spaces, otherwise optional. Order is unimportant. They are listed alphabetically.

Note: Options set using a command line argument are not saved to [FreeDentalConfig.xml](freedentalconfig.html)

**AptNum:** Corresponds to the visit Id in eCW.

**ChartNumber**: Causes the current patient to change. If a PatNum is passed in, then this is ignored.

**DatabaseName**: For a direct db connection.

**DynamicMode**: Indicates Open Dental should start with [Dynamic Mode](choosedatabase.html) enabled. (Ex.: DynamicMode=True)

**EcwConfigPath**: Path to the eCW Configuration.xml file.

**JSESSIONID** and **JSESSIONIDSSO**: Only used by eCW.

**IsSilentUpdate**: Allows you to forcefully update the database without any prompt. To use, specify True. You will also need to pass in ServerName, DatabaseName, MySqlUser, MySqlPassword, UserName, and PassHash or OdPassword. For a list of codes the program will use to relay any problems, see Exit Codes at the bottom of this page. MySqlPassword cannot be blank, the UserName and OdPassword/PassHash can be set to a non-existent user and password.

To prevent accidental updates of Open Dental when multiple locations potentially run different Open Dental versions, set an Update Server Name (also known as Middle Tier Server Name) in [Miscellaneous Setup](miscsetup.html) this computer will be the one and only computer that has permission to execute updates.

**Module**: This will open the module of your choosing (Appt, Family, Account, TxPlan, TreatPlan, Chart, Images, Manage), case insensitive (Ex.: Module=Account opens the account module.

**MySqlUser**: For a direct db connection. Typically root.

**MySqlPassHash**: For a direct db connection so user doesn't have to manually type the MySQL password on the Choose Database window in plain text. Uses the obfuscated MySql password from the FreeDentalConfig.xml file. The [FreeDentalConfig.xml](freedentalconfig.html) file and the obfuscated password must already exist.

**MySqlPassword**: For a direct db connection. Can be omitted if blank.

**OdPassword**: The Open Dental password for the specified UserName. The Log On window will be skipped. Used in conjunction with the UserName argument.

**PassHash**: This argument only works if the [eCW Bridge](ecwbridgesetup.html) is turned on in tight integration mode; it is not functional for regular customers not using the eCW bridge. If both UserName and PassHash are passed in, then the current user in OD will change. It is the MD5 hash of the user password, base-16 encoded. The PassHash is the hash of the password as it is stored in the eCW database. eCW and OD use slightly different encodings for storing the password hash. eCW hashes the ASCII text and encodes it as base-16. OD hashes the Unicode text and encodes it as base 64 text. In order to allow simple bridging, if the eCW bridge is turned on, then OD will change its behavior to store passwords in a manner identical to eCW. That way, the hashed passwords will always exactly match in both databases. If the eCW bridge is turned off, none of the existing passwords will work. And if a user turns on the eCW bridge, the existing passwords will also stop working. So before turning on the bridge, you must make sure that the admin password in OD is blank. After the bridge is turned on, then you may set a password.

**PatNum**: This is the primary key, the patient internal patient id. It is visible to users, but cannot be changed. Passing in this parameter causes that patient to be loaded. When this parameter is used for eCW, it is both the internal ID for eCW and the external ID for Open Dental.

**PatNum:##** (related, but not command line) You can place "PatNum:##" on the windows clipboard, and then click the [Select Patient](patientselect.html) button. This will cause Open Dental to switch to that patient instead of bringing up a list of patients.

**ServerName**: For a direct db connection. Can be name or ip address.

**Show**: Conditionally displays a patient's popups, patient select window or appointment list (the same list that opens when selecting View Pat Appts in the appointment module). The appointment list will only open if the starting module is the appointment module, and both forms will only open if the user also has a PatNum argument. Allows Popup, Popups, ApptsForPatient, and SearchPatient. SearchPatient will open the Patient Select window and doesn't require any other command line arguments.

**SSN**: Causes the current patient to change. If a PatNum or ChartNumber is passed in, then this is ignored.

**UserId**: Only used with eCW, it's the primary key for the user in eCW.

**UserName**: The Open Dental user that is logging in. Capitalization must match. This is usually used in combination with OdPassword. If the username and password do not match, then the Log On window will be displayed as usual. If the user is in middle tier and the username or password is incorrect, they will be presented with the database selection window. When this argument is used for eCW with tight integration, the PassHash is used instead of the OdPassword. In that case, if the user does not exist, then a user with the specified UserName and PassHash will be created. The new user will have the permissions of the default user group set in the eCW setup window. If the username does exist, but the password does not match, then the user will be presented with the login screen in OD. After the user logs in with their old password, they will need to change their password in OD to their new one.

**WebServiceUri**: The URI to the [Middle Tier](middletier.html).

**WebServiceIsEcw**: If not using eCW, omit this argument. If using eCW, specify True.

## Reuse

The current Open Dental window does not get reused when passing in command line arguments. It will instead result in a new instance of Open Dental being launched. Multiple instances of Open Dental can run simultaneously without any conflict. See PatNum above for a related technique to reuse the same window.

## Examples

**Example 1** (typical eCW parameters)
"C:\Program Files\Open Dental\OpenDental.exe" PatNum=123 UserName=pam PassHash="5ebe2294ecd0e0f08eab7690d2a6ee69" AptNum=72919 EcwConfigPath="C:\Program Files\EclinicalWorks\Configuration.xml" UserId=32

**Example 2** (a shortcut to open a webservice at a remote location, using eCW)
"C:\Program Files\Open Dental\OpenDental.exe" WebServiceUri="http://server3/OpenDentalServer/ServiceMain.asmx" UserName="Admin" WebServiceIsEcw=True

**Example 3** (a shortcut to a direct database connection on the current computer)
"C:\Program Files\Open Dental\OpenDental.exe" ServerName=localhost DatabaseName=opendental MySqlUser=root

**Example 4** (a shortcut to a database connection, including Open Dental username and password)
"C:\Program Files\Open Dental\OpenDental.exe" ServerName=server DatabaseName=opendental MySqlUser=root UserName="DrSmith" OdPassword=secret

## Shortcut Instructions

To setup a Windows shortcut, right-click on the desktop, hover on New, then select Shortcut.

![](images/shortcut.png)

The name of the shortcut can be set in the General tab. For eCW installs, the Target has the following text:

"C:\Open Dental\OpenDental.exe" ServerName=localhost DatabaseName=opendental MySqlUser=root

For other installs, the Start in path may include Program Files, giving the Target the following text:

"C:\Program Files\Open Dental\OpenDental.exe" ServerName=localhost DatabaseName=opendental MySqlUser=root

![](images/shortcut3.gif)

## Exit Codes

If any errors occur with the IsSilentUpdate argument, the program will use an exit code to relay the problem.

0 No Failures (Default)

1 IsSilentUpdate is set

100 Database could not be accessed for cache refresh

101 Database Backup failed

102 Failed to convert InnoDB tables to MyISAM format

103 Default database .ini setting is innoDB\

104 Required command line arguments have not been set for silent updating

105 File versions do not match

106 Connection to specified database has failed

107 Connection to the Middle Tier has failed

108 Crashed Table Exception

110 MySQL version lower than 5.0

111 Global SQL mode could not be set

112 Database must be upgraded using MySQL 4.1 or it will fail

120 Computer trying to access DB during update

130 Database must be upgraded to 2.8 to continue

131 Database must be upgraded to 11.1 to continue

138: Update must be done manually in order to get data loss notification(s)

139 Update must be done manually to fix Insurance Plan Schema

140 Web client cannot convert database

141 Updates are only allowed from a designated web server

142 Update is already in progress from another computer

143 Database has already been updated from another computer

150 Replication server is blocked from performing updates

160 File not found exception

161 ConversionFiles folder could not be found

190 Cannot convert this database version which was only for development purposes

191 Trial versions cannot connect to live databases

200 Convert Database has failed during execution (Unknown Error)

201 Database was corrupted due to an update failure

300 AtoZ folder not found (Warning)

301 UpdateFiles folder cannot be deleted (Warning)

302 Installation files could not be copied

303 Failed inserting update files into database

304 Error compressing UpdateFiles

305 Unable to start UpdateFileCopier process

309 The database version is higher than the client version

310 Client version is higher than Server Version and update is not allowed from Client.

311 Registration Key could not be validated

399 Classic View is not supported with Silent Update (Warning)

999 Unknown Problem