import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Footer() {

    const setting = useSelector((state) => state.setting);

    return (
        <footer class="footer">
            <div class="row">
                <div class="col-12 col-sm-6 text-center text-sm-left">
                    <p>&copy; </p>
                </div>
            <div class="col  col-sm-6 ml-sm-auto text-center text-sm-right">
                    <p><Link target="_blank" to="/"> v1.0.1</Link></p>
                </div>
            </div>
        </footer>
    )
}
