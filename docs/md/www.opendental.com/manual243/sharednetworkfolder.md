Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Folder Replication

File [Replication](replication.html) for shared network folders is important so you can keep folders and files in sync across [Multiple Locations](multiplelocations.html). Below are some file replication tools. See also: [Store Images in Database](imagesstoreindb.html).

## Microsoft Distributed File System (DFS)

[http://technet.microsoft.com/en-us/library/cc753479(v=WS.10).aspx](http://technet.microsoft.com/en-us/library/cc753479%28v%3DWS.10%29.aspx)

This is a good folder replication technology if each replication server has a Windows Server operating system. It enables you to efficiently replicate folders (including those referred to by a DFS namespace path) across multiple servers and sites. You can use DFS Namespaces and DFS Replication to achieve the following goals:

* DFS Namespaces - Provide users with a centralized folder namespace through which to access and store files. You can host the underlying file shares on different servers and in different sites to improve availability and performance.
* DFS Replication - Synchronize folder contents efficiently between servers, across LAN or WAN network connections.

Other useful resources:

* DFS Namespaces and DFS Replication Overview: <http://technet.microsoft.com/en-us/library/jj127250.aspx>
* Deploying DFS Replication: <http://technet.microsoft.com/en-us/library/cc770925.aspx>

## FreeFileSynch

<http://www.freefilesync.org/manual.php?topic=external-applications>

Free Open Source software that helps you synchronize files and folders for Windows, Linux and macOS.