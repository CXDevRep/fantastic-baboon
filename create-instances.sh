cf create-service xsuaa application my-xsuaa -c xs-security.json &&
cf create-service destination lite executeDestination -c dest-config.json