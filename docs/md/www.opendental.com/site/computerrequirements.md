Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Computer Requirements

Below are basic requirements and recommendations for computer hardware and software. Also see  [Network and Computer Setup](computernetworksetup.html). Enterprise organizations may be interested in [HardwareRequirements.pdf](../resources/HardwareRequirements.pdf).

**Server:** The server is the computer that runs the [MySQL](mysql.html) server program and stores the files and the database. In a small office, it may be the same computer as the office server, but it does not have to be. We recommend having a dedicated server to protect data. A basic server could be a workstation, but this is more susceptible to issues, for example if you browse the internet, receive emails, etc.

Any mid-range computer sold within the last few years will meet the minimum requirements. Computer speed, memory, video capability and hard drive capacity will affect program performance.

Due to Windows limitations, we recommend keeping the server name less than 15 characters in length.

Older computers: An older computer slower than 1 GHz will probably not be able to run Windows. Also a computer that old will probably be deficient in memory, video, and hard drive. Memory for older computers is significantly more expensive, and it is usually more cost effective to buy a new $800 computer than to put a few hundred dollars into an older computer to upgrade it.

Open Dental (and MySQL) can run on a Windows Virtual Machine/Server. However, if other services also run on the same physical server, these services may use up resources that result in slower MySQL service, and thus slower Open Dental.

**Internet:** For the best access to service and updates, you should be connected to a high speed internet connection. Consider this a requirement.

**Display:** See [Screen Size](screensize.html)
 Minimum resolution for Open Dental is 1280x768 (at that resolution hiding or moving the taskbar may be needed to use some windows). We recommend 27" 1080p LCD monitors. We recommend monitors with speakers built in.

**Memory:** 4 - 8 GB is best. 1 GB memory is absolute minimum.
 Open Dental uses approximately 60 MB of memory. The minimum requirement for Windows 8 64-bit is 2 GB of RAM. For good performance, we recommend at least 4 GB and for optimum performance 8 GB. If you run more programs than you have memory, your system will run very slow because it is transferring memory back and forth to the hard drive.

**Backups**: See [Backups](0_backup.html) for information.

**Uninterruptible Power Supply**: An uninterruptible power supply (i.e., a backup battery) is optional, but recommended.

**Operating Systems:**
All of your machines do not have to have the same operating system. If you are purchasing new equipment, we recommend the newest version of the Windows operating system.

**Any of the following operating systems are supported:**

| Operating system |
| --- |
| Windows 11 |
| Windows Server 2025 |
| Windows Server 2022 |
| Windows Server 2019 |
| Windows Server 2016 |

As an alternative to Windows, the server can run [Linux or MacOS-X](clinuxmac.html).

Home editions of Windows are sometimes unacceptable because of connection and networking limits. The best editions are Pro, Business, or Ultimate. Windows 10 S and Windows 11 S are not supported as Open Dental cannot be installed through the Microsoft Store.

**The following operating systems were formerly supported.** They are no longer supported because Microsoft has stopped supporting them or due to certain limitations of Open Dental.

| Operating system | Date Support Suspended | Notes |
| --- | --- | --- |
| Windows 2000 | July 13, 2010 |  |
| Windows Vista | April 11, 2017 |  |
| Windows XP | April 8, 2014 | Cannot be used for eServices |
| Windows Server 2003 |  | Cannot be used for eServices |
| Windows 7 | January 14th, 2020 | [Microsoft.com End of Support article](https://support.microsoft.com/en-us/help/4057281/windows-7-support-ended-on-january-14-2020) |
| Windows Server 2008 | January 14th, 2020 |  |
| Windows 8 |  | Not compatible with necessary [.Net Framework](dotnet.html) requirements |
| Windows 8.1 | January 10, 2023 | [Microsoft.com End of Support article](https://support.microsoft.com/en-us/windows/windows-8-1-support-will-end-on-january-10-2023-3cfd4cde-f611-496a-8057-923fba401e93#:~:text=You%20can%20install%20new%20apps,purchases%20after%20January%2010%2C%202023.)). MariaDB users may need to install the corresponding [Windows Update](https://support.microsoft.com/en-us/topic/update-for-universal-c-runtime-in-windows-c0514201-7fe6-95a3-b0a5-287930f3560c). |
| Windows Server 2012 R2 | October 10, 2023 | [Microsoft.com End of Support article](https://learn.microsoft.com/en-us/lifecycle/announcements/windows-server-2012-r2-end-of-support). MariaDB users may need to install the corresponding [Windows Update](https://support.microsoft.com/en-us/topic/update-for-universal-c-runtime-in-windows-c0514201-7fe6-95a3-b0a5-287930f3560c). |
| Windows Server 2012 | October 10, 2023 | [Microsoft.com End of Support article](https://learn.microsoft.com/en-us/lifecycle/announcements/windows-server-2012-r2-end-of-support). Not compatible with MariaDB. Users must utilize MySQL 5.5 or MySQL 5.6. |
| Windows 10 | October 14, 2025 |  |

**Maximum number of simultaneous connections for a windows file share:**

|  |  |  |  |
| --- | --- | --- | --- |
| **Operating System** | **Maximum # of connections** | **Client Access License needed?** | **Notes** |
| Windows 11 | 20 |  | All editions |
| Windows 10 | 20 |  | All editions |
| Windows 8 | 20 |  | Windows 8, Windows 8 Pro (not RT) |
| Windows 7 Home Basic |  |  | Not available in the U.S. and most other developed countries. Cannot create, can only join network. Do not use for your Open Dental server. |
| Windows 7 Home Premium | 20 |  |  |
| Windows 7 | 20 |  | All editions (Home, Professional, Ultimate, Enterprise, N, VL) |
| Windows Server 2022 Datacenter | No limit | Yes | See Microsoft for more information. |
| Windows Server 2022 Standard | No limit | Yes | See Microsoft for more information. |
| Windows Small Business Server 2022 Essentials | 25 | No - up to 25 users |  |
| Windows Server 2019 Datacenter | No limit | Yes | See Microsoft for more information. |
| Windows Server 2019 Standard | No limit | Yes | See Microsoft for more information. |
| Windows Small Business Server 2019 Essentials | 25 | No - up to 25 users |  |
| Windows Server 2016 Datacenter | No limit | Yes | See Microsoft for more information. |
| Windows Server 2016 Standard | No limit | Yes | See Microsoft for more information. |
| Windows Server 2016 Essentials | 25 | No - up to 25 users |  |
| Windows Server 2012 R2 Datacenter | No limit | Yes | See Microsoft for more information. |
| Windows Server 2012 R2 Standard | No limit | Yes | See Microsoft for more information. |
| Windows Server 2012 R2 Essentials | 25 | No - up to 25 users |  |
| Windows Server 2012 R2 Foundation | 15 | No - up to 15 users |  |
| Windows Small Business Server 2011 Essentials | 25 | No |  |
| Windows Small Business Server 2008, 2011 | 75 | Yes |  |
| Windows Small Business Server 2008 FE | 15 | Yes |  |
| Windows Server 2003, 2008, EBS | No limit | Yes for workstations |  |
| Linux | No limit |  |  |

**Processor:** The newer and faster, the better. We recommend Intel.

**Video Card:** Most modern graphics processors should work including NVIDIA, AMD Radeon and integrated Intel solutions.

**Hard Drive:** Open Dental takes up far less than 1 GB, so any hard drive will work.

* Typical workstation installation storage needed: 200 - 300MB
* Typical server installation needed: 1 - 2GB + database size + A to Z folder
* SSD or NVMe hard drives are recommended, but not required.

**Browser Support:** When using [eServices](eservices.html), the following browsers are supported:

* Internet Explorer 10 and above
* All Edge versions
* Chrome 40 and above
* Firefox 35 and above
* Opera 25 and above
* Safari 8 and above

Note: Google Chrome is the recommended eServices browser for iOS 10 and above.

If using [Electronic Prescriptions](electronicrx.html), Microsoft Edge is required.

**Software:**

* Required: Microsoft [dot Net (.NET)](dotnet.html).
* To view PDF files: Internet Explorer or Edge, or Adobe Reader version 8.0 or later.

**Notebook Computers:** Any fairly new notebook, laptop, or  [Tablet PC](tablet.html) that runs a full version of Windows (not Windows 8 RT) will work. Must support our minimum screen resolution of 1280x768. Versions 17.1 and greater: see **Display** section above.

Because of the large LCD monitors now available for desktop computers, notebooks may not be the best choice. If you get a desktop computer instead of a notebook, you get a more powerful computer with a larger screen at a lower price. Also, watch out for mini notebooks with screen resolutions less than 1024x768.

Before using a Tablet PC as a [Kiosk](0_kiosk.html) device, see [Tablet PCs](tablet.html).