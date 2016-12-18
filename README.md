## aframe-gridhelper-component

A GridHelper component for [A-Frame](https://aframe.io).

### Properties

| Property         | Description | Default Value |
| ---------------- | ----------- | ------------- |
| size             |             | 5             |
| step             |             | 10            |
| colorCenterLine  |             | red           |
| colorGrid        |             | black         |

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>
  <script src="https://rawgit.com/dbradleyfl/aframe-gridhelper/master/dist/aframe-gridhelper-component.min.js"></script>
</head>

<body>
  <a-scene gridhelper>
    <a-entity geometry="primitive: box" material="color: #C03546"></a-entity>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-gridhelper-component
```

Then register and use.

```js
require('aframe');
require('aframe-gridhelper-component');
```
