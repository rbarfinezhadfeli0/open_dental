Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Self-Directed Cloud Hosting

Below are general guidelines for setting up self-directed cloud hosting.

**For Open Dental Cloud, hosted by Open Dental, see [Open Dental Cloud](../site/opendentalcloud.html).**

## Cloud Based Server

Set up a cloud hosted server, then connect to an Open Dental server using [Middle Tier](middletier.html).

This option requires the practice's IT company to setup and maintain the hosted server. There are a few companies who offer virtual servers that can be used to set up the Middle Tier:

* Amazon Web Service (AWS): [aws.amazon.com](http://aws.amazon.com)
* Rackspace (virtual server provider): [www.rackspace.com](https://www.rackspace.com/)

To store images and documents in the cloud, see [Dropbox](dropbox.html).

If deciding to utilize a cloud service, please be aware of the security concerns and restrictions. Setting up a cloud environment requires a good internet connection, a VPN, secure certificates, and a cloud storage server. Ensure IT takes all necessary security concerns into consideration.

## Setup

At Open Dental we have set up a test cloud server environment using Amazon Web Service's Free Tier account, and the EC2 Amazon Elastic Compute Cloud web service (Amazon EC2). Below are the general setup steps we followed.

1. Sign up for a free Tier account. This is free for one year and a good way to test. <https://aws.amazon.com/free/?nc2=h_l2_cc>
2. Choose the virtual server hosting product to try. We selected EC2 Amazon and received a key pair consisting of a public key stored by AWS and a private key stored by us. Together, the key pair allows users to securely connect to the unique cloud server (called an instance).
   * For Windows AMIs, the private key file is required to obtain the password used to log into the instance.
   * For Linux AMIs, the private key file allows users to securely SSH into the instance.
3. Log in to the Amazon Web Service Account.
4. Select EC2 Amazon to open the EC2 Management Console. Make sure the correct region is selected in the upper right corner.
   ![](images/cloudServerEC2.gif)
5. Create an instance (each unique cloud server is one instance). One instance is allowed in the free account. If more than one is created, there may be charges.
   ![](images/cloudserverInstance.gif)
6. Assign a static IP address to the instance to make the cloud server IP address permanent.
   * In the left panel, click Elastic IPs under Network & Security.
   * Click Allocate New Address, then assign the correct instance to the new elastic IP.

     Note: If an elastic IP is assigned to a virtual server, that server must be left on at all times. Otherwise, they will charge for the elastic IP.

     ![](images/cloudServerAllocate.gif)
     ![](images/cloudServerAssociate.gif)
7. In the left panel, click Instances. Make sure the instance has started. Right-click on the instance, click Instance State and verify Start is selected (grayed out).
8. Connect to the instance. Right-click on the instance, then click Connect.
   ![](images/cloudServerConnect.gif)
9. Click Download Remote Desktop File. Windows Remote Desktop Connection can also be used. Login as needed to access the cloud server.
10. Set up the [Middle Tier](middletier.html).