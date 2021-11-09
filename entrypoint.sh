#!/bin/sh
# ^^^ this script only uses POSIX shell features

# Compile the assets
bundle install
bundle exec rake assets:precompile

# Clean a stale pid file
rm -f tmp/pids/server.pid
rails db:migrate

# Run the main container process, inside the Bundler context
exec bundle exec "$@"