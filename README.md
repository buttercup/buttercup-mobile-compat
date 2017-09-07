# Buttercup Mobile Utilities - Compatibility library
> Compiled library bundle for Buttercup's mobile platform

This library contains a compiled bundle of several key components required for the [mobile application](https://github.com/buttercup/buttercup-mobile):

 * [WebDAV-fs](https://github.com/perry-mitchell/webdav-fs)
 * [Dropbox-fs](https://github.com/sallar/dropbox-fs)
 * [Any-fs](https://github.com/perry-mitchell/any-fs)

These libraries are primarily designed for platforms other than mobile (node/browser), and need to function in a React-Native project. This library is responsible for wrapping and exporting them whilst ensuring their mobile compatibility as the name implies.

## Usage
This library exports 3 factory methods:

```javascript
import {
    createDropboxAdapter,
    createWebDAVAdapter,
    createAnyFSAdapter
} from "@buttercup/mobile-compat";
```

Follow the original documentation on how they're supposed to be used: [createDropboxAdapter](https://github.com/sallar/dropbox-fs#usage) / [createWebDAVAdapter](https://github.com/perry-mitchell/webdav-fs#example) / [createAnyFSAdapter](https://github.com/perry-mitchell/any-fs#webdav-fs)
