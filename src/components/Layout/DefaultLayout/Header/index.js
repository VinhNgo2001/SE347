import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import Tippy from '@tippyjs/react';
import styles from './Header.module.scss';

import Button from '~/components/Button';
import images from '~/assets/images';
import { LogOutIcon } from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left-header')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} height={110} />
                    </div>
                </div>
                <div className={cx('right-header')}>
                    <div className={cx('facilities-nav')}>
                        <Search />
                        {currentUser ? (
                            <div className={cx('current-user')}>
                                <FontAwesomeIcon icon={faUser} />
                                <a href="#"> Xin chào,</a>

                                <Button primary to="/#">
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                </Button>
                            </div>
                        ) : (
                            <div className={cx('login')}>
                                <FontAwesomeIcon icon={faUser} />

                                <Button primary to="/dangnhap">
                                    Đăng nhập
                                </Button>
                            </div>
                        )}

                        {/* <Button primary>EN</Button> */}
                    </div>
                    <div className={cx('navigation')}>
                        <div className={cx('home-btn')}>
                            <Button primary>
                                <FontAwesomeIcon icon={faHome} />
                            </Button>
                        </div>
                        <div className={cx('nav')}>
                            <ul>
                                <li>
                                    <Button to="/phim" textH>
                                        PHIM
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/lichchieu" text>
                                        LỊCH CHIẾU
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" text>
                                        RẠP GIÁ
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" text>
                                        GIỚI THIỆU
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" text>
                                        GIỚI THIỆU
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" textF>
                                        HỖ TRỢ
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
