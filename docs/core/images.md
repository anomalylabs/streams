---
title: Images
intro: An API for reading, editing, and outputting images.
---

- Introduction
    - https://laravel.com/docs/filesystem
    - http://image.intervention.io/
- Configuring Images
    - config(streams.images) => list what they do
- Reading Images: http://image.intervention.io/use/basics
    - Sources
        - Relative path of the image in filesystem.
        - Hinted path of the image in filesystem.
        - URL of an image (allow_url_fopen must be enabled).
        //- Binary image data.
        //- Data-URL encoded image data.
        //- Base64 encoded image data.
        //- Intervention\Image\Image instance
        //- SplFileInfo instance (To handle Laravel file uploads via Symfony\Component\HttpFoundation\File\UploadedFile)
- Editing Images: http://image.intervention.io/use/basics
    - Resizing Images
        - resize()
        - widen()
        - heighten()
        - fit()
        - resizeCanvas()
        - crop()
        - trim()
    - Adjusting Images
        - gamma()
        - brightness()
        - contrast()
        - colorize()
        - greyscale()
        - invert()
        - mask()
        - flip()
    - Applying Effects
        - filter()
        - pixelate()
        - rotate()
        - blur()
    - Drawing
        - text()
        - pixel()
        - line()
        - rectangle()
        - circle()
        - ellipse()
    - Retrieving Information
        - width()
        - height()
        - mime()
        - exif()
        - iptc()
- Outputting Images: http://image.intervention.io/use/basics
    - intervention()
    - img($alt = null, array $attributes = [])
    - picture(array $attributes = [])
    - encode($format = null, $quality = null)
    - base64()
    - url(array $parameters = [], $secure = null)
    - path()
    - inline($alt = null, array $attributes = [])
    - css()
    - data()
