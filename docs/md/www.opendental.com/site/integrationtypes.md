Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Open Dental Integration Types

The data in Open Dental is designed to be accessible so that other software can use the data if you allow it. Many third-party organizations claim to have an integration with Open Dental Software, but some types of integrations are dangerous and can corrupt your patient records.

## Safer Integration Types

There are many safe ways to access (read) and analyze data from Open Dental, but generally the only safe way for third parties or larger Dental Support Organizations (DSOs) to write data to the Open Dental data tables is through the Application Programming Interface (API).

Neither customers nor third parties need Open Dental's approval to read data, for example to use for third-party dashboards or reporting tools.

However, writing data directly back to the database (without using the API) is unsafe, often insecure, and does not allow the office to know what program or user made the change. The Open Dental team has spent a great deal of time troubleshooting errors and corruption caused by third parties writing data unsafely.

Illicit altering of Open Dental data also opens the office up to embezzlement and other fraud. For instance, once security is bypassed, the office cannot tell the difference between rows of data altered by third-party software and rows altered by bad actors.

API Integrations, Native Integrations, Program Links, approved Plug-Ins, and direct SQL data reads are safer ways of interacting with your data that are detailed here.

**API Integrations**
 The Open Dental API allows safe communication between a third-party software and the Open Dental database. The Open Dental API is the approved method of writing to the database (such as creating an appointment or entering a payment). It is designed by and tested by Open Dental engineers, and can easily be turned off, temporarily, to see if it is causing an issue.

By utilizing the API, third-party developers ensure their programs continue to safely and securely integrate with Open Dental, even as new versions are released. Customers are responsible for establishing contracts with these third parties that specify what data is being accessed or written, and for what purpose.

Developers can read the [API Specification](apispecification.html) for details on utilizing the API.

**Native Integrations**
 Native Integrations are built directly into Open Dental by Open Dental engineers. There are a small number of native integrations available, such as those used for electronic prescriptions (eRx) and payment processing. These are safe integrations and have been thoroughly tested by Open Dental. Native integrations are documented in the Open Dental manual and continue to work in Open Dental as new versions are released. New developers should use the API.

**Program Links**
[Program Links](programbridges.html), also known as bridges, are other programs launched from within Open Dental. They do not write data back to Open Dental but allow you to launch the third-party software using a button within Open Dental, often with data included. Bridges to imaging software are the most common.

## Possibly Dangerous Integration Types

The following integration types are not usually dangerous but can cause problems.

**Direct External SQL Data Reads**
 Queries to pull data are common and generally safe even when automated but can slow down Open Dental if they are large, indexed poorly, or run too frequently. It is not unusual for third-party automated queries to work fine for a long time and then suddenly cause problems. If you use third-party software that pulls data from Open Dental, you should be able to easily turn it completely off, temporarily. The ability to turn off the integration if needed is essential, because if Open Dental has performance issues, you can then determine that the integration is the cause or rule it out.

Automated read-only queries are more likely to cause problems if not monitored for speed and complexity.

**Plug-ins**
 Plug-ins were a way for programmers to add or change the Open Dental code in particular places to add functionality before the API was available. They have been phased out, except for use by large organizations needing custom programming and a few whitelisted instances that are known to be useful and safe.

Plug-ins were phased out because third parties could cause serious issues by writing data to the Open Dental database tables and Open Dental had no way to make them safe.

They can still easily be turned off, temporarily, to see if they are causing any issue.

## Dangerous Integrations

There are several methods of integrating with Open Dental that are dangerous and unauthorized. These types of integrations are dangerous because the third party writes directly to the Open Dental database, versus writing via the API which uses Open Dental code.

Writing to Open Dental's database with different methods than the actual code results in missing security information, unknown data origin, and unsafely altered data.

These types of integrations are not supported by Open Dental, and support staff may not be able to fix databases that have been altered through dangerous integrations.

All dangerous and unauthorized integrations should be avoided as they can harm your data, including patient data, and are not guaranteed to work as Open Dental releases new versions.