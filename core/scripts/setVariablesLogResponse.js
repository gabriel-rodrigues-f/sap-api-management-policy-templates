const responseStatusCode    = context.getVariable("response.status.code")
const responseContent       = context.getVariable("response.content")

var datadogEventStatus      = "success"
var sanitizedResponseContent    = responseContent.split('"').join("'").replace(/(\r\n|\n|\r)/gm, "")

if (responseStatusCode < 200 || responseStatusCode > 299) {
    datadogEventStatus          = "error"
    sanitizedResponseContent    = responseContent
}

context.setVariable("postFlowDataDogEventStatus",datadogEventStatus)
context.setVariable("postFlowBody"              ,sanitizedResponseContent)