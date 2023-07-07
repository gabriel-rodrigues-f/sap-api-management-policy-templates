HML_ACCESS_TOKEN=$(curl -s -X POST "$PRD_TOKEN_URL_APIM/oauth/token" \
    -d "client_id=$PRD_CLIENT_ID_APIM" \
    -d "client_secret=$PRD_CLIENT_SECRET_APIM" \
    -d "grant_type=client_credentials" | jq -r '.access_token')

echo $PRD_ACCESS_TOKEN