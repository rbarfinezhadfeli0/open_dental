Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Antivirus Best Practices

See [Antivirus](virus.html).

The following are some basic best practices to prevent malware or ransomeware from infecting your computer systems.

**Education**: Educate yourself and your staff on how to recognize phishing attempts and suspect emails. Knowledge is the best protection against malware on office computers.

**Backups**: Regular, verified backups can greatly protect you. No matter what hits the office, you can always clean the computer or reinstall the operating system, then restore backups and get running again, without paying ransomers. [Backups](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7backups.html)

**Show File Extensions**: Turn on the option to *show file extensions* to help identify suspect programs before they are run. Cryptolocker likes to hide misnamed files (e.g., some-file.pdf.exe.) The double extension would masquerade like a pdf file without the show hidden file extensions feature on.

**Filter Emails**: Some email programs can filter emails out if they have an attachment with an exe extension. This can help in removing some phishing attempts but will not help prevent drive-by downloads.

**VPN**: If you have multiple offices, set up a VPN between the two. This will give you several options without having to open the RDP port 3389 or the MySQL port 3306 to the internet. With the VPN on you can use Microsoft RDP to the remote office computer through the VPN or direct connect using the Open Dental program to the remote office database. Either way, malicious attackers cannot port scan your offices and attempt to break in.

**Use a secure remote desktop product**: For the less technical, if you must remote connect from home to a computer in your office, don't rely on Microsoft RDP. While RDP gets the job done, it is easier and more secure to use another remote desktop product like Logmein or Teamviewer.

**Turn off mapped drives**: Turn off the ability to create mapped drives and remove all existing mapped drives. This can prevent ransomware from jumping computers. To protect your OpenDentImages folder use the UNC path.

**Install a reputable antivirus software**: Each device in the office should have a reputable anti-virus installed, especially if small devices like phones and tablets are allowed to connect to the office network. There should be a policy that each device must have an anti-virus installed. There is a sharp increase in attacks on these small mobile devices. See [Antivirus](virus.html).

**Unique usernames and passwords**: Each user should have their own username and password for any software they use, including the operating system, to track events and which accounts may be compromised. This is critical for Administrator accounts.

**Never surf the internet from the server**: Never surf the internet from a computer acting as your server. You are less likely to get a virus or cryptolocker infecting the server if there are no mapped drives in the office and no one ever surfs the internet or answers emails from the server computer.

**Never turn down the UAC**: If you can help it, never turn down the UAC (some older programs may force the reduction). It protects against un-authorized installations by forcing the user to accept the install and locking remote access to the desktop until it is authorized or rejected. This protection is most effective against drive-by downloads.