
<br/>
<div align="center">

<h3 align="center">Renshuu.js</h3>
<p align="center">
A NPM package that allows interactions with the Renshuu application API.
<br/>
<br/>
<a href="https://renshuu-js.elouannhosta.com"><strong>Explore the docs »</strong></a>
<br/>
<br/>

<a href="https://github.com/elouannh/renshuu-js/issues">Report Bug .</a>
<a href="https://github.com/elouannh/renshuu-js/issues">Request Feature</a>
</p>
</div>

## About The Project

Renshuu.js provides a easy way to interact with the Renshuu API since I saw there is not any project like this yet. I'll maintain this package as often as I can, so please, if you get any suggestion or find bugs, tell me through the issue panel.

This package provides interfaces for :
- Get the profile of the user
### Built With

The package is built with and by the following tools:


- [TypeScript](https://www.typescriptlang.org)
- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com/)
- [Axios](https://www.npmjs.com/package/axios)
## Getting Started

Here's some explanations about how to use this package.
### Prerequisites

The package requires the following versions:

```json
{
    "node": ">=20.12.2",
    "npm": ">=10.2.0",
    "pnpm": ">=9.0.6"
}
```
### Installation

1. Get your Renshuu API key  on the app.
2. Install the package :
```sh
npm install renshuu-js@latest
```
3. Import the package into your project!
## Usage

Basic usage (works with TypeScript and JavaScript):

- Initialize the client
```ts
import * as renshuu from 'renshuu-js';

const client: renshuu.Client = new renshuu.Client({
    renshuuApiKey: "Your API key",
});
```

- Get the profile associated with the API key
```ts
const profile: renshuu.Profile = client.getProfile();
```

_For more examples, please refer to the [Documentation](https://renshuu-js.elouannhosta.com)_
## Roadmap

- [x] Add Changelog
- [ ] Add other routes

See the [open issues](https://github.com/elouannh/renshuu-js/issues) for a full list of proposed features (and known issues).
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
## License

Distributed under the MIT License. See [MIT License](https://opensource.org/licenses/MIT) for more information.
## Contact

Elouann H. - [@okumaneko27](https://twitter.com/okumaneko27) - ehosta@student.42lyon.fr

Project Link: [https://github.com/elouannh/renshuu-js](https://github.com/elouannh/renshuu-js)
