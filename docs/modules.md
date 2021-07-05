[@pashoo2/files-utils](README.md) / Exports

# @pashoo2/files-utils

## Table of contents

### Functions

- [downloadFile](modules.md#downloadfile)
- [downloadFileByUrl](modules.md#downloadfilebyurl)
- [getArrayBufSize](modules.md#getarraybufsize)
- [getBlobSize](modules.md#getblobsize)
- [getBufferSize](modules.md#getbuffersize)
- [getFileObjectSize](modules.md#getfileobjectsize)
- [getFileSize](modules.md#getfilesize)

## Functions

### downloadFile

▸ **downloadFile**(`file`): `void`

Start downloading of a file in a browser

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` |

#### Returns

`void`

#### Defined in

files-utils-download.ts:27

___

### downloadFileByUrl

▸ **downloadFileByUrl**(`url`, `filename?`): `void`

Start download of a file by it's url and an optional filename.

**`export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `filename` | `string` | `''` |

#### Returns

`void`

#### Defined in

files-utils-download.ts:10

___

### getArrayBufSize

▸ **getArrayBufSize**(`o`): `number`

Returns size of a File.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `ArrayBuffer` |

#### Returns

`number`

#### Defined in

files-utils-size.ts:30

___

### getBlobSize

▸ **getBlobSize**(`o`): `number`

Returns size of a Blob.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Blob` |

#### Returns

`number`

#### Defined in

files-utils-size.ts:8

___

### getBufferSize

▸ **getBufferSize**(`o`): `number`

Returns size of a Buffer.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Buffer` |

#### Returns

`number`

#### Defined in

files-utils-size.ts:41

___

### getFileObjectSize

▸ **getFileObjectSize**(`o`): `number`

Returns size of a File.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `File` |

#### Returns

`number`

#### Defined in

files-utils-size.ts:19

___

### getFileSize

▸ **getFileSize**(`o`): `number` \| `undefined`

Returns a size of a data.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `File` \| `Blob` \| `ArrayBuffer` \| `Buffer` |

#### Returns

`number` \| `undefined`

#### Defined in

files-utils-size.ts:52
