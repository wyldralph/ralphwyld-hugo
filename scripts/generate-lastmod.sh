#!/bin/bash

# Get the date of the latest Git commit
LAST_UPDATED=$(git log -1 --format="%cI")

# Make sure the Hugo data folder exists
mkdir -p data

# Save the last updated date in a file Hugo can read
echo "lastmod: \"$LAST_UPDATED\"" > data/lastmod.yaml
