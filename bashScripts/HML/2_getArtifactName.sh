PROXY_NAME=$(jq -r '.artifactName' newAPI.json)
echo $PROXY_NAME