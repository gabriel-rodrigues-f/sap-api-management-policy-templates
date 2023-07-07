response=$(curl -X POST "$PRD_BASE_URL_APIM/Transport.svc/APIProxies?virtualhost=$PRD_VIRTUALHOST_APIM" \
    -H "Content-Type: application/octet-stream" \
    -H "Authorization: Bearer $PRD_ACCESS_TOKEN" \
    -d "{$ARTIFACT_BASE64}")