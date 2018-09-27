curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token="${TOKEN}"" \
  --data '{
  "game": {
    "cell": {
      "index": 4,
      "value": "o"
    },
    "over": true
  }
}'
