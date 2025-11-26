Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Loggers

See [Troubleshooting](troubleshooting.html).

Logger files are often used when [Troubleshooting Slowness](troubleshootingslowness.html) or other technical issues. Contact Open Dental Support for assistance with Logger files.

## Logger Folders

Logger files are normally found in the file path for the service being logged (e.g., OpenDentalService, OpenDentaleConnector) in a Logger folder. Within the Logger folder there may be additional folders for various processes the service performs. Logger files are located in the dated folders (e.g., 23-11-01)

![](images/loggerFolder.png)

## Logger Files

Logger files are text files that contain information on queries, processes, and errors about a service or a program.

![](images/loggerFile.png)

Depending on how the log level of the application/service all information may not be recorded in the Logger. There are generally two log levels:

* Verbose: Logs nearly all processes and errors of the application/service. This is normally only used when troubleshooting.
* Error: Logs only errors of the application/service. This is the normal log level.

The log level is generally changed in the config file for the application/service.

Below is a list of Logger files and their locations:

| Service/Program Name | Default Logger Path | Config File Name | Verbose Logging |
| --- | --- | --- | --- |
| MySQL Service | N/A - uses the SlowQueryLog Tool | N/A - uses the SlowQueryLog Tool | See [Slow Query Log Tool](slowquerylog.html) |
| OpenDentalAPIService | C:\Program Files (x86)\Open Dental\OpenDentalAPIService\Logger | OpenDentalWebConfig.xml | Contact Open Dental Support |
| OpenDentaleConnector | C:\Program Files (x86)\ Open Dental\OpenDentalEConnector\Logger | OpenDentalWebConfig.xml | Contact Open Dental Support |
| OpenDentalReplicationService | C:\Program Files (x86)\ Open Dental\OpenDentalReplicatonService\Logger | OpenDentalReplicationServiceConfig.xml | Contact Open Dental Support |
| OpenDentalServer (Middle Tier) | C:\Program Files (x86)\Open Dental\Logging | OpenDentalServerConfig.xml | See [Middle Tier Troubleshooting](middletiertroubleshooting.html) |
| OpenDentalService | C:\Program Files (x86)\Open Dental\OpenDentalService\Logger | OpenDentalServiceConfig.xml | Contact Open Dental Support |