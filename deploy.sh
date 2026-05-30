#!/bin/bash
set -e

SERVER="root@76.13.127.72"
KEY="$HOME/.ssh/polska_deploy"
REMOTE_PATH="/var/www/polskabaseball"
OUT_DIR="$(dirname "$0")/out"

echo "→ Building..."
cd "$(dirname "$0")"
npm run build

echo "→ Deploying to $SERVER..."
rsync -avz --delete -e "ssh -i $KEY -o StrictHostKeyChecking=no" "$OUT_DIR/" "$SERVER:$REMOTE_PATH/"

echo "→ Reloading nginx..."
ssh -i "$KEY" -o StrictHostKeyChecking=no "$SERVER" "systemctl reload nginx"

echo "✓ Live at https://polskabaseball.com"
