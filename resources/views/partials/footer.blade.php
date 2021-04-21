        <footer class="footer">
            <div class="row">
                <div class="col-12 col-sm-6 text-center text-sm-left">
                    <p>&copy; {{ school_name() }}</p>
                </div>
            <div class="col  col-sm-6 ml-sm-auto text-center text-sm-right">
                    <p><a target="_blank" href="{{url('/')}}">School Management System v1.2</a></p>
                </div>
            </div>
        </footer>
        <!-- end footer -->
        </div>
        <!-- end app-wrap -->
        </div>
        <!-- end app -->

        <!-- plugins -->
        <script src="{{ asset('assets/js/vendors.js') }}"></script>

        <!-- custom app -->
        <script src="{{ asset('assets/js/app.js') }}"></script>
        @livewireScripts
    </body>
</html>