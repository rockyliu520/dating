<?php

namespace App\Logic\Image;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManager;
use App\Models\Image;
use Hash;
use Storage;

class ImageRepository
{
    public function upload( $form_data, $user_id, $is_main )
    {

        $validator = Validator::make($form_data, Image::$rules, Image::$messages);

        if ($validator->fails()) {

            return Response::json([
                'error' => true,
                'message' => $validator->messages()->first(),
                'code' => 400
            ], 400);

        }

        $photo = $form_data['file'];

        $originalName = $photo->getClientOriginalName();
        $extension = $photo->getClientOriginalExtension();
        $originalNameWithoutExt = substr($originalName, 0, strlen($originalName) - strlen($extension) - 1);

        $filename = $this->sanitize($originalNameWithoutExt);

        $allowed_filename = $this->createUniqueFilename( $filename, $extension, $user_id);

        $uploadSuccess1 = $this->original( $photo, $allowed_filename, $user_id );

        $uploadSuccess2 = $this->icon( $photo, $allowed_filename, $user_id );

        if( !$uploadSuccess1 || !$uploadSuccess2 ) {

            return Response::json([
                'error' => true,
                'message' => 'Server error while uploading',
                'code' => 500
            ], 500);
        }

        $sessionImage = new Image;
        $sessionImage->image      = $allowed_filename;
        $sessionImage->originalName = $originalName;
        $sessionImage->icon = $allowed_filename;
        $sessionImage->userId = $user_id;
        $sessionImage->isMain = $is_main;
        $sessionImage->save();

        return Response::json([
            'error' => false,
            'code'  => 200
        ], 200);
    }

    public function createUniqueFilename( $filename, $extension, $uid )
    {
        // Storage::disk('local')->makeDirectory('path/to');
        $full_size_dir = Config::get('images.full_size');
        // $full_image_path = $full_size_dir . $filename . '.' . $extension;
        $full_image_path = $full_size_dir . sha1($uid);

        if (!File::exists($full_image_path)) {
            // File::makeDirectory($full_image_path, 0777);
            File::makeDirectory($full_image_path, 0777, true);
            File::makeDirectory($full_image_path.DIRECTORY_SEPARATOR.'icon', 0777, true);
            // File::makeDirectory(storage_path('app/blogpost/' . $postId));
        }

        if ( File::exists( $full_image_path ) )
        {
            // Generate token for image
            $imageToken = substr(sha1(mt_rand()), 0, 5);
            // return $filename . '-' . $imageToken . '.' . $extension;
            // $pathname = $full_image_path.DIRECTORY_SEPARATOR.$filename . '-' . $imageToken . '.' . $extension;
            // return $pathname;
            return $filename . '-' . $imageToken . '.' . $extension;
        }
        
        // $pathname = $full_image_path.DIRECTORY_SEPARATOR.$filename . '.' . $extension;
        // return $pathname;
        return $filename . '.' . $extension;
    }

    /**
     * Optimize Original Image
     */
    public function original( $photo, $filename, $uid )
    {
        $manager = new ImageManager();
        // $image = $manager->make( $photo )->save(Config::get('images.full_size') . $filename );
        $image = $manager->make( $photo )->save(Config::get('images.full_size').DIRECTORY_SEPARATOR.sha1($uid).DIRECTORY_SEPARATOR. $filename );

        return $image;
    }

    /**
     * Create Icon From Original
     */
    public function icon( $photo, $filename, $uid )
    {
        $manager = new ImageManager();
        $image = $manager->make( $photo )->resize(200, null, function ($constraint) {
            $constraint->aspectRatio();
            })
            ->save( Config::get('images.icon_size') .DIRECTORY_SEPARATOR.sha1($uid).DIRECTORY_SEPARATOR.'icon'.DIRECTORY_SEPARATOR. $filename );
            // ->save( Config::get('images.icon_size'). $filename );

        return $image;
    }

    /**
     * Delete Image From Session folder, based on original filename
     */
    public function delete( $originalFilename)
    {

        $full_size_dir = Config::get('images.full_size');
        $icon_size_dir = Config::get('images.icon_size');

        $sessionImage = Image::where('original_name', 'like', $originalFilename)->first();


        if(empty($sessionImage))
        {
            return Response::json([
                'error' => true,
                'code'  => 400
            ], 400);

        }

        $full_path1 = $full_size_dir . $sessionImage->filename;
        $full_path2 = $icon_size_dir . $sessionImage->filename;

        if ( File::exists( $full_path1 ) )
        {
            File::delete( $full_path1 );
        }

        if ( File::exists( $full_path2 ) )
        {
            File::delete( $full_path2 );
        }

        if( !empty($sessionImage))
        {
            $sessionImage->delete();
        }

        return Response::json([
            'error' => false,
            'code'  => 200
        ], 200);
    }

    function sanitize($string, $force_lowercase = true, $anal = false)
    {
        $strip = array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+", "[", "{", "]",
            "}", "\\", "|", ";", ":", "\"", "'", "&#8216;", "&#8217;", "&#8220;", "&#8221;", "&#8211;", "&#8212;",
            "â€”", "â€“", ",", "<", ".", ">", "/", "?");
        $clean = trim(str_replace($strip, "", strip_tags($string)));
        $clean = preg_replace('/\s+/', "-", $clean);
        $clean = ($anal) ? preg_replace("/[^a-zA-Z0-9]/", "", $clean) : $clean ;

        return ($force_lowercase) ?
            (function_exists('mb_strtolower')) ?
                mb_strtolower($clean, 'UTF-8') :
                strtolower($clean) :
            $clean;
    }
}