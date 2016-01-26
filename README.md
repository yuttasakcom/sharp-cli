# sharp-cli
> CLI for [sharp](https://www.npmjs.com/package/sharp).

*Issues with the output should be reported on the `sharp` [issue tracker](https://github.com/lovell/sharp/issues).*

## Install
`$ npm install sharp-cli`

## Usage
```
$ sharp --help

  CLI for sharp.

  Usage
    $ sharp [options] [files...]
    $ cat <file> | sharp [options] > <output>

  Examples
    $ sharp --quality 50 -o dest.jpg src.jpg
    $ sharp --width 250 -o dest/ src/*
    $ sharp --grayscale src.jpg > dest.jpg
    $ cat src.jpg | sharp --rotate 90 > dest.jpg

  Options
    --background                 Set the background color for --embed and --flatten operations.
    --blur [number]              Blur the output image, optionally specifying the blur radius.
    --compressionLevel <number>  zlib compression level, between 0 and 9, of the lossless PNG output
                                 format. Defaults to 6.
    --crop <string>              Crop the resized image based on the specified gravity (north, east,
                                 south, west, center).
    --embed                      Resize the image, then embed on a background.
    --extractHeight <number>     Height of the region to be extracted. Use in conjunction with
                                 --extractLeft, --extractTop, and --extractWidth.
    --extractLeft <number>       Left offset of the region to be extracted. Use in conjunction with
                                 --extractHeight, --extractTop, and --extractWidth.
    --extractTop <number>        Top offset of the region to be extracted. Use in conjunction with
                                 --extractHeight, --extractLeft, and --extractWidth.
    --extractWidth <number>      Width of the region to be extracted. Use in conjunction with
                                 --extractHeight, --extractLeft, and --extractTop.
    -f, --format <string>        Output format (jpeg, png, webp, raw). Defaults to input format.
    --flatten                    Merge alpha transparency channel, if any, with --background.
    --flip                       Flip the image about the vertical Y axis.
    --flop                       Flip the image about the horizontal X axis.
    --gamma [number]             Apply a gamma correction, optionally specifying a factor between 1
                                 and 3. Defaults to 2.2.
    --grayscale, --greyscale     Convert to grayscale.
    -h, --height <number>        Scale output to height.
    --help                       Output usage information.
    --ignoreAspectRatio          Stretch the image to the exact width and/or height specified.
    --interpolateWith <string>   Use the specified interpolator (nearest, bilinear, bicubic,
                                 vertexSplitQuadraticBasisSpline (vsqbs), locallyBoundedBicubic (lbb),
                                 nohalo) for image resizing.
    --limitInputPixels <number>  Do not process input images where the number of pixels
                                 (width × height) exceeds the specified amount.
    --max                        Resize the image to be as large as possible while ensuring its
                                 dimensions are less than or equal to the specified width and height.
    --min                        Resize the image to be as small as possible while ensuring its
                                 dimensions are greater than or equal to the specified width and
                                 height.
    --negate                     Produces the negative of the image.
    --normalize, --normalise     Enhance output image contrast.
    -o, --output <string>        The output filename, or directory when performing batch operations.
    --optimizeScans, --optimiseScans
                                 Calculate which spectrum of DCT coefficients uses the fewest bits.
                                 Used for progressive (interlace) JPEG output.
    --overlay <string>           Alpha composite the specified file over the processed image.
    --overshootDeringing         Reduce the effects of ringing in JPEG output.
    --progressive                Use progressive (interlace) scan for JPEG and PNG output.
    -q, --quality <number>       The output quality, between 1 and 100, to use for lossy JPEG, WebP,
                                 and TIFF output formats. Defaults to 80.
    --rotate [number]            Rotate the output image by the specified angle (0, 90, 180, 270), or
                                 auto-orient based on the EXIF Orientation tag.
    --sequentialRead             Switches the libvips access method to VIPS_ACCESS_SEQUENTIAL.
    --sharpen <number>           Sharpen the output image, optionally specifying the sharpen radius.
    --sharpenFlat <number>       Specify the level of sharpeness to apply to "flat" areas. Defaults to
                                 1.0. Use in conjunction with --sharpen.
    --sharpenJagged <number>     Specify the level of sharpeness to apply to "jagged" areas. Defaults
                                 to 2.0. Use in conjunction with --sharpen.
    --threshold <number>         Specify the level above which pixels will be forced to white.
    --tile [number]              Applies square image pyramid tiles over the image, optionally
                                 specifying a tile size between 1 and 8192. Defaults to 256 pixels.
    --tileOverlap <number>       Specifies the tile overlap, between 0 and 8192. Defaults to 0 pixels.
                                 Use in conjunction with --tile.
    --trellisQuantization, --trellesQuantisation
                                 Apply the use of trellis quantization with JPEG output.
    -v, --verbose                Output image processing information.
    -w, --width <number>         Scale output to width.
    --withoutAdaptiveFiltering   Disable adaptive row filtering for the lossless PNG output format.
    --withoutChromaSubsampling   Disable the use of chroma subsampling with JPEG output (4:4:4).
    --withoutEnlargement         Do not enlarge the output image if the input image width or height
                                 are already less than the required dimensions.
    --withoutMetadata            Exclude any metadata (EXIF, XMP, IPTC) from the output image.
```

## Related
In-depth documentation regarding the available options is available on the [Sharp website](http://sharp.dimens.io/).

## Changelog
See the [Changelog](./CHANGELOG.md) for a list of changes.

## License
    The MIT License (MIT)

    Copyright (c) 2016 Mark van Seventer

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.