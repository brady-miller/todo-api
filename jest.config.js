module.exports = {
	"testEnvironment": "node",
	"transform": {
		"^.+\\.tsx?$": "ts-jest"
	},
	"testPathIgnorePatterns": [
		"/node_modules/",
		"/.git/",
	],
	"coverageDirectory": "./coverage/",
	"collectCoverage": true
}