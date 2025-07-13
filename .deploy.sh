#!/bin/bash

echo "🚀 Deploying Nuxt to server..."

USER="root"
HOST="192.168.0.136"
REMOTE_DIR="/var/www/sergienko-web"

# Удаляем старые файлы и копируем новые
ssh $USER@$HOST "rm -rf $REMOTE_DIR/*"
scp -r dist/* $USER@$HOST:$REMOTE_DIR/

echo "✅ Deploy done!"