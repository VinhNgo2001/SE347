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
                        <div>
                            <img src={images.facebook} />
                            <img src={images.youtube} />
                        </div>
                        <h2>HOTLINE</h2>
                        <h1>0362123456</h1>
                    </div>
                    <div className={cx('sytems')}>
                        <h2>HỆ THỐNG RẠP</h2>
                        <div>
                            <a href="#"> Rạp Hồ Chí Minh</a>
                        </div>
                        <div>
                            <a href="#"> Rạp Hà Nội</a>
                        </div>
                        <div>
                            <a href="#"> Rạp Đà Nẵng</a>
                        </div>
                        <div>
                            <a href="#"> Rạp Bình Dương</a>
                        </div>
                    </div>
                    <div className={cx('social')}>
                        <h2>RẠP CHIẾU</h2>
                        <div>
                            <a href="#"> Phim đang chieu</a>
                        </div>
                        <div>
                            <a href="#"> Phim sắp chieu</a>
                        </div>
                        <div>
                            <a href="#"> Suất chiếu đặc biệt</a>
                        </div>
                        <div>
                            <a href="#"> Lịch chiếu</a>
                        </div>
                        <div>
                            <a href="#"> Khuyến mãi</a>
                        </div>
                    </div>
                    <div className={cx('social')}>
                        <h2>THÔNG TIN</h2>
                        <div>
                            <a href="#"> Giới thiệu</a>
                        </div>
                        <div>
                            <a href="#"> tin tức</a>
                        </div>
                        <div>
                            <a href="#"> Hỏi và đáp</a>
                        </div>
                        <div>
                            <a href="#"> Liên hệ</a>
                        </div>
                    </div>
                    <div className={cx('social')}>
                        <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
                        <div>
                            <a href="#"> Quy định chung</a>
                        </div>
                        <div>
                            <a href="#"> Điều khoản giao dịch</a>
                        </div>
                        <div>
                            <a href="#"> Chính sách bảo mật</a>
                        </div>
                        <div>
                            <a href="#"> Thông tin công ty</a>
                        </div>
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
