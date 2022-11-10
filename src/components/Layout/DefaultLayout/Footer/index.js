import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-footer')}>
                    <img src={images.logo} height={50} />
                </div>
                <div className={cx('wrap')}>
                    <div className={cx('social')}>
                        <h2>LIÊN KẾT</h2>
                        <h3>hinh</h3>
                        <h2>HOTLINE</h2>
                        <h1>0362123456</h1>
                    </div>
                    <div className={cx('social')}>
                        <h2>HỆ THỐNG RẠP</h2>
                        <h3>hinh</h3>
                        <h2>HOTLINE</h2>
                        <h1>0362123456</h1>
                    </div>
                    <div className={cx('social')}>
                        <h2>RẠP CHIẾU</h2>
                        <h3>hinh</h3>
                        <h2>HOTLINE</h2>
                        <h1>0362123456</h1>
                    </div>
                    <div className={cx('social')}>
                        <h2>THÔNG TIN</h2>
                        <h3>hinh</h3>
                        <h2>HOTLINE</h2>
                        <h1>0362123456</h1>
                    </div>
                    <div className={cx('social')}>
                        <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
                        <h3>hinh</h3>
                        <h2>HOTLINE</h2>
                        <h1>0362123456</h1>
                    </div>
                </div>
                <div className={cx('ul-footer')}>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={images.logo} height={100}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={images.logo} height={100}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={images.logo} height={100}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={images.logo} height={100}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={images.logo} height={100}></img>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx('payment')}>
                    <h3>Chấp nhận thanh toán</h3>
                    <img src={images.napas} height={40}></img>
                    <img src={images.visa} height={40}></img>
                    <img src={images.mastercard} height={40}></img>
                    <img src={images.momo} height={40}></img>
                </div>
                <div className={cx('coppyright')}>
                    <img src={images.dathongbao} height={57}></img>
                    <p>
                        CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM MỚI.ZZZ
                        <br /> Địa chỉ: Đông Hòa, Dĩ An, Bình Dương
                        <br />
                        GIẤY CNDKDN SỐ:123456789, ĐĂNG KÝ LẦN ĐẦU NGÀY 11/11/2022, ĐĂNG KÝ THAY ĐỔI LẦN THỨ 2 NGÀY
                        12/11/2022, CẤP BỞI SỞ KH&#38;DT TP.HCM
                    </p>
                    <p>2022 &#169; RAPCHIEUPHIM.ZZZ ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
