# Steps to reproduce

run `npm run`


run `npx ngrok http 5173 --host-header rewrite` (use the port from run)

Paste the ngrok url into index.html

keep them running.

Then run `npm run build`, `npx cap sync`, and then run the android app