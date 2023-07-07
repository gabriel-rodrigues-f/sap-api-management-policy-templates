const clientReceivedStartTimestamp  = context.getVariable("client.received.start.timestamp")
const systemTimestamp               = context.getVariable("system.timestamp")
const targetSentStartTimestamp      = context.getVariable("target.sent.start.timestamp")

const eventProcessingDuration     = systemTimestamp - clientReceivedStartTimestamp
const targetEndpointDuration      = systemTimestamp - targetSentStartTimestamp        
const proxyEndpointDuration       = eventProcessingDuration - targetEndpointDuration

context.setVariable("eventProcessingDuration"   ,eventProcessingDuration)
context.setVariable("targetEndpointDuration"    ,targetEndpointDuration)
context.setVariable("proxyEndpointDuration"     ,proxyEndpointDuration)
