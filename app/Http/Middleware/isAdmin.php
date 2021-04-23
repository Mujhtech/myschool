<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class isAdmin
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
        if (! $request->user()->role_id == 1 || ! $request->user()->role_id == 2) {
            return back()->with('info', 'You dont have access to this file');
        }

        return $next($request);
    }
}
