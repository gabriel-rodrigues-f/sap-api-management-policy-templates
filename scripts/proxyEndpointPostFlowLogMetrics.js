const clientStartTimestamp      = context.getVariable("client.received.start.timestamp")
const systemTimeStamp           = context.getVariable("system.timestamp")
const targetEndpointTimeStamp   = context.getVariable("target.sent.start.timestamp")

const apiTimestamp        = systemTimeStamp - clientStartTimestamp
const backendTimeStamp    = systemTimeStamp - targetEndpointTimeStamp
const proxyTimestamp      = apiTimestamp - backendTimeStamp
const postFlowMessage     = `API executed in ${apiTimestamp}ms`

context.setVariable("apiTimestamp"      ,apiTimestamp)
context.setVariable("backendTimeStamp"  ,backendTimeStamp)
context.setVariable("proxyTimestamp"    ,proxyTimestamp)
context.setVariable("postFlowMessage"   ,postFlowMessage)