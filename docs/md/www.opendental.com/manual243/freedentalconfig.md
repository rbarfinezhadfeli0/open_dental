Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

FreeDentalConfig.xml

See [Choose Database](choosedatabase.html).

The FreeDentalConfig.xml file stores database connection information.

![](images/freedentconfig.gif)

When selecting options on the Choose Database Window, information is stored in this file. If using advanced options such as [Middle Tier](middletier.html) or connection strings, it can also change the tags in the file. The file is located in the Open Dental installation directory. If it is missing or deleted, Open Dental recreates the FreeDentalConfig.xml the next time the program is run.

Note: [Command Line Arguments](commandline.html) options used to launch Open Dental are not saved to the FreeDentalConfig.xml file.

Below is a description of the .xml tags users may see in the file.

| xml tag | Field it corresponds to on Choose Database window | Valid Values | More Info |
| --- | --- | --- | --- |
| <DatabaseConnection> |  |  | Signals Open Dental to connect to directly to the database. Surrounds database connection information. |
| <ComputerName> | Server Name | localhost or server name |  |
| <Database> | DataBase |  |  |
| <User> | User |  | Usually root (when MySQL first installed). Only changes if user changed in [MySQL Security](securitymysql.html). |
| <Password> | Password |  | Blank. |
| <MySQLPassHash> | n/a | n/a | If a password is entered on the Choose Database window, it is obfuscated and stored here. |
| <NoShowOnStartup> | Do not show this window on startup | True or False | Determines whether the Choose Database window shows every time the Open Dental is started. |
| <DatabaseType> | Database Type | MySQL |  |
| <HL7verbose> |  | True or False | Manually inserted when for simple troubleshooting of [Generic HL7](hl7.html) or [eClinicalWorks HL7](hl7ecw.html). |
| <ServerConnection> | Connect to Middle instead |  | Signals Open Dental to connect to the Middle Tier. |
| <URI> | URl | A valid URI address | Only shows if using Middle Tier. |
| <UsingEcw> | Using eClinicalWorks | True or False | Only shows if using Middle Tier. Indicates if using eCW with Middle Tier. |
| <ConnectionString> | Advanced: Use connection string |  |  |
| <AdminCompNames> |  |  | Surrounds admin computer name information. Signals to Open Dental that the named computers can override an update. If using a remote connection, this should be the name of the computer being used to remote connect from, not the computer being remote connected to. |
| <CompName> |  |  | Example <CompName>Admin1</CompName> |
| <AllowAutoLogin> | Log me in automatically | True or False | Example <AllowAutoLogin>True</AllowAutoLogin> |