# EOS claimer

Node script for EOS BP to claim their rewards automatically.

change your owner info in config.json.

Before you use, you need to create the claimer permission for your bp profile like below:

````bash
cleos set account permission YOUR_PRODUCER_NAME claimer '{"threshold":1,"keys":[{"key":"YOUR_CLAIMER_PUBLIC_KEY","weight":1}]}' "active" -p YOUR_PRODUCER_NAME@active 
cleos set action permission YOUR_PRODUCER_NAME eosio claimrewards claimer
````



