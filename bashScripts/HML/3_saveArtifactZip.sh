zip=$(curl -s -X GET "$HML_BASE_URL_APIM/Transport.svc/APIProxies?name=$PROXY_NAME" \
    -H "Authorization: Bearer $HML_ACCESS_TOKEN" \
    -H "Content-Type: application/zip" \
    --output arquivo.zip)