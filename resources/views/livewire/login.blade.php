<div>
    {{-- Close your eyes. Count to one. That is how long forever feels. --}}
    <form wire:submit.prevent="submit" class="mt-2 mt-sm-5">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label class="control-label">Email*</label>
                    <input type="email" class="form-control" placeholder="Email Address" wire:model="email"/>
                    @error('email') <span class="error">{{ $message }}</span> @enderror
                </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                    <label class="control-label">Password*</label>
                    <input type="password" class="form-control" placeholder="Password" wire:model="password"/>
                    @error('password') <span class="error">{{ $message }}</span> @enderror
                </div>
            </div>
            <div class="col-12">
                <div class="d-block d-sm-flex  align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            Remember Me
                        </label>
                    </div>
                    <a href="javascript:void(0);" class="ml-auto">Forgot Password ?</a>
                </div>
            </div>
            <div class="col-12 mt-3">
                <button type="submit" class="btn btn-primary text-uppercase">Sign In</button>
            </div>
            <div class="col-12  mt-3">
                <p>Don't have an account ?<a href="auth-register.html"> Sign Up</a></p>
            </div>
        </div>
    </form>
</div>
