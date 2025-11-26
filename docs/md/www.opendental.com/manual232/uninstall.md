Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Uninstalling Open Dental

See [Installation](installation.html).

Uninstalling Open Dental can be useful when removing an old computer from your office.

![](images/uninstall.png)

## Uninstall Open Dental on a Workstation

Only the Open Dental program needs removed from a workstation.

1. In the Control Panel, click *Programs and Features*.
2. Highlight *OpenDental* from the list.
3. Click **Uninstall**.
4. Follow the prompts.

## Uninstall Open Dental on a Server

If removing Open Dental from a server, first consider making [Backups](backups.html) or performing a [Server Migration](servermigration.html).

1. Uninstall any services (see Uninstall a Service below).
2. Uninstall the Open Dental program (see Uninstall Open Dental on a Workstation above).
3. Uninstall the MySQL or MariaDB service (see Uninstall MySQL below).

## Uninstall MySQL

**Uninstall the MySQL service.**

1. In the Control Panel, click *Programs and Features*.
2. Highlight *MySQL* or *MariaDB* from the list.
3. Click **Uninstall**.
4. Follow any prompts.

Occasionally, MySQL does not list in Programs and Features. It can instead be permanently disabled.

1. In Services, highlight the MySQL service.
2. Right-click and select Properties.
3. In the General Tab, change the Startup Type to *Disabled*.

## Uninstall a Service

Additional services, such as the eConnector or OpenDentalService, can be uninstalled from the [Service Manager](servicemanager.html).