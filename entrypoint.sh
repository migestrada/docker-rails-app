#!/bin/sh
# ^^^ this script only uses POSIX shell features

# Compile the assets

# Clean a stale pid file
rm -f tmp/pids/server.pid

# Run the main container process, inside the Bundler context
exec bundle exec "$@"