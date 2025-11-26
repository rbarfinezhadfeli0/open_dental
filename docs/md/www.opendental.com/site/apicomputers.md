Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Computers

See [API Specification](apispecification.html)

See [Computers](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7computer.html) for additional information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Computer Database Schema.](SchemaRedirect%EF%B9%96computer.html)

## Computers GET

Version Added: 23.1.30

Gets a list of computers.

**LastHeartBeat** indicates which computers are actively running. See [Database Schema](../OpenDentalDocumentation23-1.xml) for additional information.

**Example Request:**
 GET /computers

**Example Response:**
 [
 {
 "ComputerNum": 1,
 "CompName": "JORDANS",
 "LastHeartBeat": "0001-01-01 00:00:00"
 },
 {
 "ComputerNum": 3,
 "CompName": "ROCHELLES",
 "LastHeartBeat": "0001-01-01 00:00:00"
 },
 {
 "ComputerNum": 5,
 "CompName": "SARAHL",
 "LastHeartBeat": "0001-01-01 00:00:00"
 },
 {
 "ComputerNum": 7,
 "CompName": "JUSTINE",
 "LastHeartBeat": "2023-06-28 14:55:25"
 },
 {
 "ComputerNum": 9,
 "CompName": "JTS",
 "LastHeartBeat": "0001-01-01 00:00:00"
 },
 {
 "ComputerNum": 11,
 "CompName": "DEREKR",
 "LastHeartBeat": "0001-01-01 00:00:00"
 },
 etc...
 ]

200 OK
 400 BadRequest