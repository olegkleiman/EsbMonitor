
const sampleStory = [{
    "trace_Date": "2018-02-27T11:59:42+02:11",
    "message_guid": "d09ab0fa-5a9f-4ff6-afb5-3b6abd8ca9f8",
    "start_Date": "2018-03-03T11:59:42+02:00",
    "end_Date": " 2018-03-03T11:59:43+02:00",
    "phase_Name": "Pre-processing",
    "status": "INFO",
    "service_id": 2,
    "service_name": "Service B",
    "environment": "External",
    "client_ip": "130.157.232.158",
    "client_user": "Gleason.Vito",
    "message" : "Message received",
    "soap_Action": "urn:northwindtraders.com:PO#UpdatePO",
    "payload":"<SOAP-ENV:Envelope xmlns:xsi='http://www.w3.org/1999/XMLSchema/instance' xmlns:SOAP-ENV='http://schemas.xmlsoap.org/soap/envelope' xsi:schemaLocation='http://www.northwindtraders.com/schemas/NPOSchema.xsd'> <SOAP-ENV:Body xsi:type='NorthwindBody'> <UpdatePO> <orderID>0</orderID> <customerNumber>999</customerNumber> <item>89</item> <quantity>3000</quantity> <return>0</return> </UpdatePO> </SOAP-ENV:Body> </SOAP-ENV:Envelope>"
}, {
  "trace_Date": "2018-03-03T11:59:42+02:17",
  "message_guid": "d09ab0fa-5a9f-4ff6-afb5-3b6abd8ca9f8",
  "start_Date": "2018-03-03T11:59:42+02:00",
  "end_Date": " 2018-03-03T11:59:43+02:00",
  "phase_Name": "Pre-processing",
  "status": "INFO",
  "service_id": 2,
  "service_name": "Service B",
  "environment": "External",
  "client_ip": "130.157.232.158",
  "client_user": "Gleason.Vito",
  "message" : "Message analyzed",
  "soap_Action": "urn:northwindtraders.com:PO#UpdatePO",
  "payload":"<SOAP-ENV:Envelope xmlns:xsi='http://www.w3.org/1999/XMLSchema/instance' xmlns:SOAP-ENV='http://schemas.xmlsoap.org/soap/envelope' xsi:schemaLocation='http://www.northwindtraders.com/schemas/NPOSchema.xsd'> <SOAP-ENV:Body xsi:type='NorthwindBody'> <UpdatePO> <orderID>0</orderID> <customerNumber>999</customerNumber> <item>89</item> <quantity>3000</quantity> <return>0</return> </UpdatePO> </SOAP-ENV:Body> </SOAP-ENV:Envelope>"
}, {
  "trace_Date": "2018-03-03T11:59:42+02:20",
  "message_guid": "d09ab0fa-5a9f-4ff6-afb5-3b6abd8ca9f8",
  "start_Date": "2018-03-03T11:59:42+02:00",
  "end_Date": " 2018-03-03T11:59:43+02:00",
  "phase_Name": "Cross-domain transport",
  "status": "ERROR",
  "service_id": 2,
  "service_name": "Service B",
  "environment": "Internal",
  "client_ip": "130.157.232.158",
  "client_user": "Gleason.Vito",
  "message" : "Message is being transmitted",
  "soap_Action": "urn:northwindtraders.com:PO#UpdatePO",
  "payload":"<SOAP-ENV:Envelope xmlns:xsi='http://www.w3.org/1999/XMLSchema/instance' xmlns:SOAP-ENV='http://schemas.xmlsoap.org/soap/envelope' xsi:schemaLocation='http://www.northwindtraders.com/schemas/NPOSchema.xsd'> <SOAP-ENV:Body xsi:type='NorthwindBody'> <UpdatePO> <orderID>0</orderID> <customerNumber>999</customerNumber> <item>89</item> <quantity>3000</quantity> <return>0</return> </UpdatePO> </SOAP-ENV:Body> </SOAP-ENV:Envelope>"
}
]

module.exports = sampleStory;
