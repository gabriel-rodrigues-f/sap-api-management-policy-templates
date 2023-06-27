const preFlowStatus = context.getVariable("preflow.status");
const postFlowStatus = context.getVariable("postflow.status");
const statusCode = context.getVariable("response.status.code");
var ddStatus = '';
var description = '';

if (preFlowStatus === "error") {
    ddStatus = "error";
    description = "Error in preFlow";
} else if (postFlowStatus === "error" || statusCode < 200 || statusCode > 299) {
    ddStatus = "error";
    description = "Error in postFlow";
} else {
    ddStatus = "success";
    description = "success when running preflow and postflow";
}

context.setVariable("postflow.ddstatus", ddStatus);
context.setVariable("postflow.dddescription", description);