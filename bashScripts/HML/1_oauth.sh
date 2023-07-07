HML_ACCESS_TOKEN=$(curl -s -X POST "$HML_TOKEN_URL_APIM/oauth/token" \
    -d "client_id=$HML_CLIENT_ID_APIM" \
    -d "client_secret=$HML_CLIENT_SECRET_APIM" \
    -d "grant_type=client_credentials" | jq -r '.access_token')

echo $HML_ACCESS_TOKEN