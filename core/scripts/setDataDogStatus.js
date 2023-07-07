const preFlowStatus     = context.getVariable("preFlowDataDogEventStatus")
const postFlowStatus    = context.getVariable("postFlowDataDogEventStatus")
const targetEndpointResponseStatusCode        = context.getVariable("response.status.code")

var datadogEventStatus = ''
var datadogEventStatusDescription = ''

if (preFlowStatus === "error") {
    datadogEventStatus  = "error"
    datadogEventStatusDescription   = "Error in preFlow"
} else if (postFlowStatus === "error" || targetEndpointResponseStatusCode < 200 || targetEndpointResponseStatusCode > 299) {
    datadogEventStatus  = "error"
    datadogEventStatusDescription   = "Error in postFlow"
} else {
    datadogEventStatus  = "success"
    datadogEventStatusDescription   = "success when running preflow and postflow"
}

context.setVariable("dataDogEventStatus"    ,datadogEventStatus)
context.setVariable("postflowDatadogEventStatusDescription"  ,datadogEventStatusDescription)