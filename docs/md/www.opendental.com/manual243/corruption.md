Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Corruption

See [Database Management Systems](databasemanagementsystems.html).

Data corruption can happen to anyone and for a variety of reasons. If experiencing a corrupt database, follow these steps:

1. Backup data BEFORE doing any other steps (including database maintenance). Anytime a corrupted table is repaired, there is a chance data can be wiped out. Having a backup may prevent additional data loss.
2. [Contact](../contact.html) Open Dental and let us know the corruption error message. We can try and repair the table(s).
3. If unable to contact Open Dental:
   * For versions 17.4 and higher: On the server run the *DatabaseIntegrityCheck.exe* in **C:\Program Files (x86)\Open Dental\**. Verify the connection details, run the 'Check' and once that is finished run the 'Repair' if crashed or corrupt tables were found by the check.
   * For versions 17.3 and lower: try running the Optimize tool in the [Database Maintenance Tools Tab](databasemaintenancetools.html).
4. If corruption still exists, contact Open Dental.