const verifyAccessToken         = context.getVariable("oauthV2.VerifyAccessToken.failed")
const verifyAPIKey              = context.getVariable("verifyapikey.VerifyAPIKey.failed")
const ipControl                 = context.getVariable("acl.ipControl.failed")
const mitigateJSONCodeInjection = context.getVariable("jsonthreatprotection.mitigateJSONCodeInjection.failed")
const mitigateXMLCodeInjection  = context.getVariable("xmlattack.mitigateXMLCodeInjection.failed")
const applyRateLimit            = context.getVariable("ratelimit.applyRateLimit.failed")
const requestAPIKey             = context.getVariable("request.header.APIKey")
const path                      = context.getVariable("proxy.pathsuffix")

const method                    = context.getVariable("request.verb")
const requestBody               = context.getVariable('request.content').split('"').join("'").replace(/(\r\n|\n|\r)/gm, "")
const proxyAPIName              = context.getVariable('apiproxy.name').toLowerCase()
const productName               = context.getVariable('verifyapikey.VerifyAPIKey.apiproduct.name').toLowerCase()
const preFlowResponse           = method + " " + path

var statusCode  = 200
var datadogEventStatus    = "success"

switch (true) {
    case verifyAccessToken:
        statusCode = 401
        break
    case verifyAPIKey:
        statusCode = 401
        break
    case ipControl:
        statusCode = 403
        break
    case mitigateJSONCodeInjection:
        statusCode = 500
        break
    case mitigateXMLCodeInjection:
        statusCode = 500
        break
    case applyRateLimit:
        statusCode = 429
        break
}

if (statusCode != 200) {
    datadogEventStatus = "error"
}

context.setVariable("preFlowDataDogEventStatus"    ,datadogEventStatus)
context.setVariable("preFlowStatusCode" ,statusCode)
context.setVariable("preFlowBody"       ,requestBody)
context.setVariable("proxyName"         ,proxyAPIName)
context.setVariable("productName"       ,productName)
context.setVariable("preFlowResponse"   ,preFlowResponse)
context.setVariable("requestAPIKey"     ,requestAPIKey)
