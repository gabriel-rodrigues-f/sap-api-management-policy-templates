const postFlowStatus    = context.getVariable("postFlowDataDogEventStatus")
const targetEndpointStatusCode = context.getVariable("response.status.code")

var postFlowResponse    = context.getVariable("postFlowBody")
var datadogEventStatus  = 'success'
var statusCode          = context.targetResponse.status.code
var statusMessage       = context.targetResponse.status.message

if (
    postFlowStatus === "error" ||
    targetEndpointStatusCode < 200 ||
    targetEndpointStatusCode > 299
    ) {
    datadogEventStatus  = "error"
}

context.setVariable("targetEndpointStatusCode"      ,statusCode)
context.setVariable("targetEndpointStatusMessage"   ,statusMessage)
context.setVariable("dataDogEventStatus"        ,datadogEventStatus)
context.setVariable("targetEndpointStatusCode"  ,targetEndpointStatusCode)