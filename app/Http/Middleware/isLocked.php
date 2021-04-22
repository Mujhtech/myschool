<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class isLocked
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (! $request->user()->locked) {
            return route('auth.login');
        }

        return $next($request);
    }
}
