Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Random Primary Keys

See [Replication](replication.html).

Random primary keys are unique key ranges used by each server on Replication (both [One-Way Replication](replicationoneway.html) and [Daisy Chain Replication](replicationdaisychain.html)). They are an older method and not recommended. The recommended method is to instead use auto-increment variables to avoid data collision. See [Replication Auto Increment](replicationautoincrement.html).

## Turn on Random Primary Keys

Random Primary Keys cannot be enabled in newer versions of Open Dental. Users who had Random Primary Keys enabled in the past will still have settings display in the [Replication Setup](replicationservers.html) window.

![](images/replicationPrimaryKeysEnable.png)

**Use Random Primary Keys**: Once random primary keys are enabled, they can never be turned off. Ranges can be freely edited. All of primary keys in all tables will be longer.

![](images/replicationRandomPrimaryButtons.png)

**Set Ranges**: Once servers are added, click to automatically create ranges.

**Test**: Click to generate sample keys for testing.

Double-click a server to edit the following:

![](images/replicationPrimaryKeysRange.png)

**Range Start/End**: The allowed range is extremely large. Open Dental uses 64 bit signed int types internally and in the database. The allowed range is from 1 to 9,223,372,036,854,775,807. This key range is so large that this solution can be scaled up without ever running out of keys, no matter how many clinics are connected. We recommend ranges of at least 100,000,000 numbers. If smaller ranges are used, replication may become slow or unresponsive as the number of available primary keys runs out. This range recommendation will result in keys that are a very manageable 9 digits long. Also, JavaScript and other programs have a max int size of 9,007,199,254,740,992 (1000 times smaller), so it makes sense to stay under this value for future flexibility with other software.