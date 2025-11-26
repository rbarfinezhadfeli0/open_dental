Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API EtransMessageTexts

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [EtransMessageText Database Schema.](SchemaRedirect%EF%B9%96etransmessagetext.html)

## EtransMessageTexts GET (single)

Version Added: 23.2.11

Gets a single EtransTextMessage. For more information, see [Etrans Edit](canadaetransedit.html).

**Parameters**:

**EtransMessageTextNum**: Required in URL.

**Example Request:**
 GET /etransmessagetexts/45

**Example Response:**
 {
 "EtransMessageTextNum": 45,
 "MessageText": "ISA\*00\* \*00\* \*30\*330989922 \*30\*330989922 \*171003\*0802\*U\*00401\*000000000\*0\*P\*:~..."
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)