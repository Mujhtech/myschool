<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>Laravel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- app favicon -->
        <link rel="shortcut icon" href="{{ get_favicon() }}">
        <!-- google fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
        <!-- plugin stylesheets -->
        <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors.css') }}" />
        <!-- app style -->
        <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}" />
    </head>
    <body>
        <div id="root"></div>
        <script src="{{ asset('js/app.js') }}"></script>
        <script src="{{ asset('assets/js/vendors.js') }}"></script>
        <!-- custom app -->
        <script src="{{ asset('assets/js/app.js') }}"></script>
    </body>
</html>
