# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.22.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.21.1...v0.22.0) (2025-04-16)

### Features

- **core:** default route, custom middleware, websocket upgrade ([5522d37](https://github.com/UraniumCorporation/maiar-ai/commit/5522d373f5e5f8cd3cf1f767c91ef2deded8e46f))

## [0.21.1](https://github.com/UraniumCorporation/maiar-ai/compare/v0.21.0...v0.21.1) (2025-04-14)

**Note:** Version bump only for package @maiar-ai/core

# [0.21.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.20.0...v0.21.0) (2025-04-11)

### Features

- expose server getter ([3260cf1](https://github.com/UraniumCorporation/maiar-ai/commit/3260cf1ed8cca4a4502ac582914c12a35fd5d7cf))
- runtime express server manager ([9317264](https://github.com/UraniumCorporation/maiar-ai/commit/9317264eb2ab0586921de52c392aca7d79c936c9))
- text plugin and websocket transport same server and port ([8999ec1](https://github.com/UraniumCorporation/maiar-ai/commit/8999ec1da6b3ac2c66e6409c4b92061fc8e962c1))
- websocket telemetry over shared http server instance ([4bf0f4a](https://github.com/UraniumCorporation/maiar-ai/commit/4bf0f4a84b70d35e2aed5b43ac3521bc7d7f3496))

# [0.20.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.19.0...v0.20.0) (2025-04-05)

### Code Refactoring

- **core:** ♻️ rework model provider to provide lifecycle method and constructor object arg ([99c069b](https://github.com/UraniumCorporation/maiar-ai/commit/99c069b1842257583e7603f0eed134ebe4b69a56))
- **core:** ♻️ rework Plugin abstract class definition APIs ([6d59524](https://github.com/UraniumCorporation/maiar-ai/commit/6d59524014413c039749b78d63ba41b0d4e96151))

### Features

- **core:** ✨ add lifecycle methods that must be implemented by memory provider subclasses ([8baf703](https://github.com/UraniumCorporation/maiar-ai/commit/8baf70347aa4b1c78c458eed7a68fa365bb18cd0))
- **core:** ✨ add logger get accessor to plugin/model/memory provider describing their scope ([50dc3dc](https://github.com/UraniumCorporation/maiar-ai/commit/50dc3dc362b73f839e5c7f90a120ab3b0268eedf))
- **core:** ✨ add logger get accessor to plugin/model/memory/capability provider/registry describing their scope ([9a2310c](https://github.com/UraniumCorporation/maiar-ai/commit/9a2310c25d2db8284848c2bc9ab4a1a15bd85f09))
- **core:** ✨ add logger get accessor to runtime for instance + static ([eea7bcf](https://github.com/UraniumCorporation/maiar-ai/commit/eea7bcff513c8217043143fc1c2deb94f3a2d431))
- **core:** ✨ add options to runtime init to configure winston logger ([eb09a06](https://github.com/UraniumCorporation/maiar-ai/commit/eb09a06d94f26b410f2f9fcaaf4333d46eb717d2))
- **core:** ✨ add winston logger singleton with default console transport ([cd6ba3d](https://github.com/UraniumCorporation/maiar-ai/commit/cd6ba3d7efb5eb2f2d6ba8e9073cf8c92368e085))
- **core:** ✨ create maiar's runtime console log transport with a predefined format ([a2fc553](https://github.com/UraniumCorporation/maiar-ai/commit/a2fc5538985965dc4e8adb633bafe13f41c22f1d))
- **core:** ✨ create WebSocket custom winston transport that creates a websocket server and sends logs to its connected clients ([803ac86](https://github.com/UraniumCorporation/maiar-ai/commit/803ac86818404710d7befc610dfe75a1d9231276))
- **core:** ✨ handle signals to shutdown runtime gracefully ([3df1d23](https://github.com/UraniumCorporation/maiar-ai/commit/3df1d235069a73489fcf6e8d567e8feadc5161aa))

### BREAKING CHANGES

- **core:** - model provider now has shutdown lifecycle method for subclasses to implement

* constructor args have been converted from position arguments to object argument with required fields

- **core:** adds lifecycle methods (init, checkHealth, shutdown) that by must be implemented by memory provider subclasses
- **core:** - add init, shutdown abstract methods

* add \_setRuntime method accessible through the \_setRuntime Symbol (meant to act as a C++ friend class)
* move types into dedicated plugin.types file
* renames ExecutorImplementation to Executor

# [0.19.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.18.1...v0.19.0) (2025-03-31)

### Bug Fixes

- **core:** 🐛♻️ rework required requiredCapabilities field and fixed plugins not getting text-generation intellisense when calling executeCapabilities ([15d55bc](https://github.com/UraniumCorporation/maiar-ai/commit/15d55bcb698f111bf504c75269f5475888f2db20))

### Code Refactoring

- **core:** ♻️🔥 deprecate createRuntime and move its logic into Runtime.init static method ([23a80c7](https://github.com/UraniumCorporation/maiar-ai/commit/23a80c7856956ee8a35edee745b158eab0f86661))
- **core:** ♻️🔥 rename PluginBase to Plugin and re-organize class properties and methods ([c229124](https://github.com/UraniumCorporation/maiar-ai/commit/c2291242ec683263f89bbcf56822d7bdad256038))

### BREAKING CHANGES

- **core:** This affects all official plugins supported by us as well since the naming convention is now suffixed with plugin instead of prefixed so their reference will need to be changed if upgrading
- **core:** Deprecates createRuntime utility function and removes it from the codebase

## [0.18.1](https://github.com/UraniumCorporation/maiar-ai/compare/v0.18.0...v0.18.1) (2025-03-31)

**Note:** Version bump only for package @maiar-ai/core

# [0.18.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.17.0...v0.18.0) (2025-03-28)

### Features

- **core:** add conversationId to AgentContext, fix typos in memory plugin template methods ([e02e7e8](https://github.com/UraniumCorporation/maiar-ai/commit/e02e7e8397d4de6ee79b8c9d6d83910e817e2117))
- **core:** implement memory plugin for sqlite, postgres and filesystem based memory, add memory plugin to runtime plugin registry ([2a422f9](https://github.com/UraniumCorporation/maiar-ai/commit/2a422f95b56c344cf37b0d148979c0d9c0410321))

# [0.17.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.16.1...v0.17.0) (2025-03-27)

### Features

- add logLevel type to MonitorEvent ([7c358bf](https://github.com/UraniumCorporation/maiar-ai/commit/7c358bf1505321bbe4e99277ed4f75a42b5e3045))

## [0.16.1](https://github.com/UraniumCorporation/maiar-ai/compare/v0.16.0...v0.16.1) (2025-03-24)

**Note:** Version bump only for package @maiar-ai/core

# [0.16.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.15.0...v0.16.0) (2025-03-23)

**Note:** Version bump only for package @maiar-ai/core

# [0.15.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.14.0...v0.15.0) (2025-03-23)

**Note:** Version bump only for package @maiar-ai/core

# [0.14.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.13.0...v0.14.0) (2025-03-23)

### Features

- make monitor service a singleton ([da4c575](https://github.com/UraniumCorporation/maiar-ai/commit/da4c575c3280dba55bf39b8494a38f82dfd8c8cb))

# [0.13.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.12.0...v0.13.0) (2025-03-13)

### Bug Fixes

- address PR comments, remove sqlite-vec files, update capability aliases type and implementation ([d92fb59](https://github.com/UraniumCorporation/maiar-ai/commit/d92fb59a17d52395d2a9720df74a4af32d5a3b60))

### Features

- **core:** cleanup unused code and duplicate methods ([9e1cdbf](https://github.com/UraniumCorporation/maiar-ai/commit/9e1cdbf689652e5e2873f060dd88fee8831ba0ba))
- **core:** dynamic type definitions for capabilities ([772c6a1](https://github.com/UraniumCorporation/maiar-ai/commit/772c6a1f51a53b89de43af9d280fa8c4c1bfc858))
- **core:** multimodal model support with capabilities registry ([064aa57](https://github.com/UraniumCorporation/maiar-ai/commit/064aa5740e0cb1a401305ee0aaa888134f1eb022))
- **core:** runtime type checking for capability execute methods ([e1ab2b1](https://github.com/UraniumCorporation/maiar-ai/commit/e1ab2b1f716a706c873e24f0fe593b8110d96993))
- **core:** update log messages and JSDoc comments ([df48c33](https://github.com/UraniumCorporation/maiar-ai/commit/df48c33b609005541eb2fc85230a5b74b96dbd11))

# [0.12.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.11.0...v0.12.0) (2025-03-13)

**Note:** Version bump only for package @maiar-ai/core

# [0.11.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.10.0...v0.11.0) (2025-03-06)

### Features

- cool looking agent client ([bcaca88](https://github.com/UraniumCorporation/maiar-ai/commit/bcaca880f1580b3fbee304bb35123d29c3f3de98))
- **core:** monitoring provider standup ([e15b347](https://github.com/UraniumCorporation/maiar-ai/commit/e15b347146ef9712d055e2515ad0a8af0e6c00e4))

# [0.10.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.9.0...v0.10.0) (2025-02-27)

### Features

- **core:** add dynamic pipeline evaluation and modification with permissions plugin example ([f1143f1](https://github.com/UraniumCorporation/maiar-ai/commit/f1143f1b1e918cceb996681f802604910b3f20b5))

# [0.9.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.8.0...v0.9.0) (2025-02-22)

**Note:** Version bump only for package @maiar-ai/core

# [0.8.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.7.0...v0.8.0) (2025-02-20)

**Note:** Version bump only for package @maiar-ai/core

# [0.7.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.6.1...v0.7.0) (2025-02-19)

**Note:** Version bump only for package @maiar-ai/core

# [0.6.1](https://github.com/UraniumCorporation/maiar-ai/compare/v0.6.0...v0.6.1) (2025-02-18)

**Note:** Version bump only for package @maiar-ai/core

# [0.6.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.5.0...v0.6.0) (2025-02-18)

**Note:** Version bump only for package @maiar-ai/core

# [0.5.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.4.0...v0.5.0) (2025-02-17)

### Bug Fixes

- **core:** :drunk: :recycle: remove repeated code ([fd0fd68](https://github.com/UraniumCorporation/maiar-ai/commit/fd0fd681012074376501dc1c78796d944ababfd9))
- **core:** :recycle: split init() and checkHealth() in runtime ([e893a5e](https://github.com/UraniumCorporation/maiar-ai/commit/e893a5e0f04b843b15ef4e1c25ecb37829ad5186))

### Features

- **core:** add checkHealth extention to model core ([f923b74](https://github.com/UraniumCorporation/maiar-ai/commit/f923b7432578490f4f10bf177bcdcd273677bcf7))
- **core:** add info-level log to model init ([381119f](https://github.com/UraniumCorporation/maiar-ai/commit/381119f7548fa3cddff95ea89620f9d00f15cc7c))

# [0.4.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.3.0...v0.4.0) (2025-02-15)

**Note:** Version bump only for package @maiar-ai/core

# [0.3.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.2.0...v0.3.0) (2025-02-15)

**Note:** Version bump only for package @maiar-ai/core

# [0.2.0](https://github.com/UraniumCorporation/maiar-ai/compare/v0.1.2...v0.2.0) (2025-02-15)

### Features

- stand up x plugin ([a07886a](https://github.com/UraniumCorporation/maiar-ai/commit/a07886a3ccd22bdbbfc0ea02113c6ed52afed81f))

# 0.1.2 (2025-02-12)

# 🎉 Introducing Maiar v0.1.2

The initial release of Maiar, a composable, plugin-based AI agent framework.  
This release includes the core framework and official plugins we will support, which include:

- 🧠 Models
- 🔌 Integrations
- 💾 Memory Providers

# 📦 Packages

- ⚙️ Core
  - 🏗 **@maiar-ai/core** - The core framework for building AI agents.
- 🔌 Official Plugins
  - 🧠 Models
    - 🤖 **@maiar-ai/model-openai** - An OpenAI model provider.
    - 🦙 **@maiar-ai/model-ollama** - An Ollama model provider.
  - 🔗 Integrations
    - 🌐 **@maiar-ai/plugin-express** - A plugin for using Maiar with Express.
    - ✍️ **@maiar-ai/plugin-text** - A plugin for text generation capabilities.
    - 🖥️ **@maiar-ai/plugin-terminal** - A plugin for command-line interface interactions.
    - 🔄 **@maiar-ai/plugin-websocket** - A plugin for WebSocket communication.
    - 📩 **@maiar-ai/plugin-telegram** - A plugin for Telegram bot integration.
    - ⏳ **@maiar-ai/plugin-time** - An example plugin for adding time to the agent context.
    - 🖼️ **@maiar-ai/plugin-image** - A plugin for image processing capabilities.
  - 💾 Memory Providers
    - 📂 **@maiar-ai/memory-filesystem** - A filesystem-based memory provider.
    - 🗄️ **@maiar-ai/memory-sqlite** - A SQLite-based memory provider.
