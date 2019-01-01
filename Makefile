lint:
	npm run lint

test:
	npm run test

publish: lint test
	npm publish --access=public

smoke_test: lint test
	@echo Checking valid page
	@curl localhost:9000/isun?url=https://jamstack.xdp.no
	@echo
	@echo Checking invalid page
	@curl localhost:9000/isun?url=jamstack.xdp.no
	@echo
