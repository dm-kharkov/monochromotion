default: dev

build:
	@echo "Building production bundle..."
	NODE_ENV="production" npm run build

dev:
	@echo "Starting dev web server..."
	@npm run dev

install:
	@echo "Installing npm modules..."
	@npm ci

test:
	@echo "Running tests..."
	@npm test

.PHONY: build dev install test
