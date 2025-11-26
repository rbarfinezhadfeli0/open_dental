Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Antivirus

See [Computer Security](securitycomputers.html).

Virus protection is essential for [HIPAA](hipaa.html) compliancy and data protection. Every computer in the office absolutely must run real-time antivirus protection. There are many good antivirus products available, and if your IT person is recommending one, we suggest following their recommendation.

No antivirus software is perfect however, so make quality [Backups](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7backups.html).

Also see [Antivirus Best Practices](virusbestpractices.html).

**Antivirus Software and Firewalls**: Many antivirus programs have their own software [firewall](firewalls.html). We recommend you use the Windows firewall and turn off the antivirus software or internet security. If you still want to use your own firewall, then you MUST [Open Port 3306](port3306.html) which is used to access the MySQL database. This only needs to be done on the server, not on each workstation.

Each firewall has a different way of setting up which ports get blocked, but you should always be able to add ports to an exceptions list. Since Open Dental uses ports, software firewall settings will need to be adjusted.

**Secure vs Insecure Network**: It is not secure to expose the MySQL service to the internet. MySQL is only as vulnerable as your local network security allows. If you must run Open Dental MySQL on an unsecured network (e.g., you are part of a larger campus network) you may be vulnerable to attacks from your own network. This is similar to having a port open to the entire internet. You will need to isolate the MySQL server and connect using our [Middle Tier](middletier.html) service instead of exposing MySQL. After setting up the Middle Tier for your client machine access, block port 3306 using your Windows Firewall and then only allow access to port 3306 from localhost (127.0.0.1).

## Ransomware

Ransomware (e.g., a crypto virus) is a growing concern for many offices.

**What is Ransomware?**

Ransomware encrypts your database so that it cannot be accessed. The data is then held for ransom and can only be un-encrypted if the fee is paid.

**How do I know if I have been the victim of ransomware?**

Offices infected by ransomware will be unable to access their database. The server where the data is stored will have a "Read Me" file explaining the ransom and instructions. The tables of the database will have an odd naming convention because they have been encrypted, or they are missing completely.

**What do I do if I have been infected?**

If you are a victim of ransomware, immediately shut down your server until you can get in touch with IT. They will present you with a few options:

1. Restore your data from the most recent non-infected backup. Ideally this is a backup hosted offsite. Do not restore the data to a server or computer until you are certain the ransomware virus has been completely removed from the system.
2. If you do not have a non-infected backup, the most reasonable option may be to pay the ransom.
3. Start from a blank database.

Note: It is up to each office to decide how to react if data is compromised.

**How can I avoid ransomware?**

We recommend reviewing your [Computer Security](securitycomputers.html) and enabling a password on the MySQL service (see [MySQL Security](securitymysql.html)).

Avoid using your workstation as a server, and avoid mapped drives when possible.

Work with your IT to ensure a secure network and make regular backups. It is recommended that at least one backup method is stored off the network.

For HIPAA guidance on ransomware, see <http://www.natlawreview.com/article/guidance-ransomware-attacks-under-hipaa-and-state-data-breach-notification-laws>.

## Recover Data after a Virus

Virus protection is essential for [HIPAA](hipaa.html) compliance and data protection. No antivirus solution is perfect however. If a computer does become infected, and you have been regularly performing quality [backups](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7backups.html) of your Open Dental data, recovery is possible, hopefully with minimal data loss.

Once a virus has been detected:

1. Decide if data is corrupted. Open Dental can help identify corrupted data. If it is corrupted, you will need to rely on a backup of data (see step 3 below).
2. Remove the virus and clean the computer. This may include virus scanning and reformatting the computer. Consult your IT department.
3. Use a backup of your data and recover accordingly. Open Dental can assist with restoring a backup to the server.
4. Contact Open Dental to discuss last resort options.

Open Dental cannot help you remove a virus, decrypt data, uncorrupt data, or backup data. However, we can assist you with restoring a backup to a uninfected machine.

Also see [Antivirus Best Practices](virusbestpractices.html).

## Antivirus Software

We do not recommend or discourage any specific product. While using antivirus software is mandatory, there are downsides. Below are some comments about antivirus products, based on our experience as well as customers' issues. Many of the issues only existed in one specific version of the antivirus software and have been fixed.

**Avast**: Some users may experience Open Dental slowness when using Avast pro version 10.4.2233. You may need to disable Avast or use another version.

**AVG**: For a few customers, AVG has identified Open Dental as a virus and quarantined it. In this case, you can create an exception. AVG has also been known to stop Open Dental from opening even when AVG's resident shield is disabled. In this case, also create an exception.

**McAfee**: Has blocked Open Dental from working in the past. In this case, it must be uninstalled from the server. Even if you turn it off, it will keep interfering.

**Symantec** (Norton): If using Symantec's Firewall Manager, it has been known to block Open Dental and MySQL, or to identify Open Dental as a virus and quarantine it. In these cases, you can create an exception. These issues are uncommon.

**Total Defense Security**: For some customers, certain versions have caused database corruptions.

**Trend Micro PcCillin**: Sometimes crashed the computer.

**Webroot**: For some customers, Webroot identified Open Dental as a threat and blocked users from accessing it. Upgrade Webroot to version 9.0.15.50 and remove Open Dental from quarantine.

## Troubleshooting

If a computer is malfunctioning, one possibility is to temporarily uninstall the antivirus software, then test to see if the problem is resolved. Always make sure that some form of antivirus software is reinstalled, either the same one, or a different brand.