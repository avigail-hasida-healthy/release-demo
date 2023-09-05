#!/bin/bash

# Check if a file does not exist
TAG_EXISTS=$(git tag | grep "testing")

echo "TAG_EXISTS: ${TAG_EXISTS}"
if [ -n "$TAG_EXISTS" ]; then
  echo "Tag ${TAG_NAME} already exists. Exiting the workflow."
  exit 1
else
  echo "Tag ${TAG_NAME} does not exist. Proceeding with the workflow."
fi